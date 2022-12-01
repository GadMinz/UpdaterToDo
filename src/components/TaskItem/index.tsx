import React from "react";
import s from "./TaskItem.module.scss";
import {TTask} from "../../types/project";

interface TaskItemProps {
  task: TTask
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  return <div className={s.item}>{task.title}</div>;
};

export default TaskItem;
