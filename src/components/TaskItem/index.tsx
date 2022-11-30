import React from "react";
import s from "./TaskItem.module.scss";

interface TaskItemProps {}

const TaskItem: React.FC<TaskItemProps> = () => {
  return <div className={s.item}>Lorem ipsum dolor.</div>;
};

export default TaskItem;
