import React from "react";
import s from "./Subtask.module.scss";
import { TSubtask } from "../../types/project";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface SubtaskProps {
  subtask: TSubtask;
  handleSubtask: (item: TSubtask, checked: boolean) => void;
  deleteSubtask: (taskId: string) => void;
}

const Subtask: React.FC<SubtaskProps> = ({
  subtask,
  handleSubtask,
  deleteSubtask,
}) => {
  const onChange = () => {
    handleSubtask(subtask, !subtask.checked);
  };
  return (
    <div className={s.subtask}>
      <input type="checkbox" checked={subtask.checked} onChange={onChange} />
      <div
        className={`${s.subtask_title} ${
          subtask.checked ? s.subtask_complete : ""
        }`}
      >
        {subtask.title}
      </div>
      <button onClick={() => deleteSubtask(subtask.id)}>
        <GlobalSvgSelector id="x"></GlobalSvgSelector>
      </button>
    </div>
  );
};

export default Subtask;
