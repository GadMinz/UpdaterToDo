import React from "react";
import s from "./Boards.module.scss";
import TaskItem from "../TaskItem";
import { TTask } from "../../types/project";
import { Droppable } from "react-beautiful-dnd";

interface BoardProps {
  id: "queue" | "development" | "done";
  title: string;
  tasks: TTask[];
}

const Board: React.FC<BoardProps> = ({ id, title, tasks }) => {
  return (
    <div className={s.board}>
      <div className={s.board_content}>
        <div className={s.board_title}>{title}</div>
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, i) => (
                <TaskItem key={task.id} index={i} task={task} />
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
