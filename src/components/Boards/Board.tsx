import React from "react";
import s from "./Boards.module.scss";
import TaskItem from "../TaskItem";
import { ProjectActionTypes, TTask } from "../../types/project";
import { Droppable } from "react-beautiful-dnd";
import { useAppDispatch } from "../../hook";

interface BoardProps {
  id: "queue" | "development" | "done";
  title: string;
  tasks: TTask[];
}

const Board: React.FC<BoardProps> = ({ id, title, tasks }) => {
  const dispatch = useAppDispatch();
  const deleteTask = (taskId:string, taskTitle: string) => {
    if (window.confirm(`Delete task ${taskTitle}?`)) {
      dispatch({ type: ProjectActionTypes.DELETE_TASK, payload: taskId });
    }
  };
  return (
    <div className={s.board}>
      <div className={s.board_content}>
        <div className={s.board_title}>{title}</div>
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, i) => (
                <TaskItem
                  key={task.id}
                  index={i}
                  task={task}
                  deleteTask={deleteTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Board;
