import React from "react";
import s from "./TaskItem.module.scss";
import { TTask } from "../../types/project";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  index: number;
  task: TTask;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={`${s.item} ${
            task.priority === "high"
              ? s.high
              : task.priority === "medium" && s.medium
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
