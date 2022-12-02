import React from "react";
import s from "./TaskItem.module.scss";
import { TTask } from "../../types/project";
import { Draggable } from "react-beautiful-dnd";
import Modal from "../Modal/Modal";
import EditTask from "../EditTask";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface TaskItemProps {
  index: number;
  task: TTask;
  deleteTask: (taskId: string, taskTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, deleteTask }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <>
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
            <div className={s.item_title} onClick={() => setOpen(true)}>
              {task.title}
            </div>
            <button
              className={s.item_delete}
              onClick={() => deleteTask(task.id, task.title)}
            >
              <GlobalSvgSelector id="x" />
            </button>
          </div>
        )}
      </Draggable>
      {isOpen && (
        <Modal setOpen={setOpen} isOpen={isOpen}>
          <EditTask task={task} />
        </Modal>
      )}
    </>
  );
};

export default TaskItem;
