import React from "react";
import s from "./Boards.module.scss";
import TaskItem from "../TaskItem";
import { TTask } from "../../types/project";

interface BoardProps {
  title: string;
  tasks: TTask[];
}

const Board: React.FC<BoardProps> = ({ title, tasks }) => {
  return (
    <div className={s.board}>
      <div className={s.board_title}>{title}</div>
        {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
    </div>
  );
};

export default Board;
