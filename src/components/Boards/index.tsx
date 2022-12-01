import React from "react";
import s from "./Boards.module.scss";
import Board from "./Board";

interface BoardsProps {

}

const boards = ["Queue", "Development", "Done"];

const Boards: React.FC<BoardsProps> = ({}) => {
  return (
    <div className={s.boards}>
      {boards.map((board, i) => (
        <Board key={i} title={board}/>
      ))}
    </div>
  );
};

export default Boards;
