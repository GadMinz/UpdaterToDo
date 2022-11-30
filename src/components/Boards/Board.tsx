import React from "react";
import s from "./Boards.module.scss";
import TaskItem from "../TaskItem";

interface BoardProps {
  title: string;
}

const Board: React.FC<BoardProps> = ({ title }) => {
  return (
    <div className={s.board}>
      <div className={s.board_title}>{title}</div>
      <TaskItem />
    </div>
  );
};

export default Board;
