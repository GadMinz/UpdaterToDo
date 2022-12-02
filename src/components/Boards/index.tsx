import React from "react";
import s from "./Boards.module.scss";
import Board from "./Board";
import { useAppDispatch, useAppSelector } from "../../hook";
import { ProjectActionTypes, TTask } from "../../types/project";
import { updateLocalTasks } from "../../localStorage";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

interface BoardsProps {}

type TBoard = {
  id: "queue" | "development" | "done";
  title: string;
};
const boards: TBoard[] = [
  { id: "queue", title: "Queue" },
  { id: "development", title: "Development" },
  { id: "done", title: "Done" },
];

const Boards: React.FC<BoardsProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { project, tasks } = useAppSelector((state) => state.project);

  React.useEffect(() => {
    updateLocalTasks(project.id, tasks);
  }, [tasks]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const task = tasks.find((task) => task.id === draggableId);
    if (!task) return;
    if (
      destination.droppableId !== "queue" &&
      destination.droppableId !== "development" &&
      destination.droppableId !== "done"
    ) {
      return;
    }
    if (destination.droppableId === "queue") {
      task.started = null;
      task.done = null;
    }
    if (destination.droppableId === "development") {
      task.started = new Date().valueOf();
    }
    if (destination.droppableId === "done") {
      task.done = new Date().valueOf();
    }
    task.status = destination.droppableId;
    dispatch({ type: ProjectActionTypes.UPDATE_TASK, payload: task });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.boards}>
        {boards.map((board, i) => (
          <Board
            key={i}
            {...board}
            tasks={tasks.filter((task: TTask) => task.status === board.id)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Boards;
