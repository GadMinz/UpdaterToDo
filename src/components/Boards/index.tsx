import React from "react";
import s from "./Boards.module.scss";
import Board from "./Board";
import { useAppSelector } from "../../hook";
import { TTask } from "../../types/project";
import { updateLocalTasks } from "../../localStorage";

interface BoardsProps {}

const boards = [
  { id: "queue", title: "Queue" },
  { id: "development", title: "Development" },
  { id: "done", title: "Done" },
];

const Boards: React.FC<BoardsProps> = ({}) => {
  const { project, tasks } = useAppSelector((state) => state.project);
  React.useEffect(() => {
    updateLocalTasks(project.id, tasks);
  }, [tasks]);
  return (
    <div className={s.boards}>
      {boards.map((board, i) => (
        <Board
          key={i}
          title={board.title}
          tasks={tasks.filter((task: TTask) => task.status === board.id)}
        />
      ))}
    </div>
  );
};

export default Boards;
