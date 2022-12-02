import React from "react";
import s from "./EditTask.module.scss";
import { TTask } from "../../types/project";

interface EditTaskProps {
  task: TTask;
}

const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const {
    title,
    id,
    started,
    subtasks,
    done,
    comments,
    created,
    attachments,
    description,
    status,
    priority,
  } = task;
  return (
    <div className={s.edit}>
      <div className={s.edit_title}>{title}</div>
      <ul className={s.edit_info}>
        <li>№{id}</li>
        <li
          className={
            priority === "low"
              ? s.low
              : priority === "medium"
              ? s.medium
              : s.high
          }
        >
          Priority: {priority}
        </li>
        <li>Status: {status}</li>
        <li>Created: {created}</li>
        {started && (
          <li>
            {done ? "Was" : "in"} develop: {started}
          </li>
        )}
        {done && <li>Done: {done}</li>}
      </ul>
      <div className={s.edit_desc}>
        <div className={s.edit_subtitle}>Description</div>
        <p>{description}</p>
      </div>
      <div className={s.edit_files}>
        <div className={s.edit_files_title}>
          <div className={s.edit_subtitle}>Attachments</div>
          <button className={s.edit_button}>Add file</button>
        </div>
        {attachments.length > 0 && <div>File</div>}
      </div>
      <div className={s.edit_subtasks}>
        <div className={s.edit_subtasks_title}>
          <div className={s.edit_subtitle}>Subtasks</div>
          <button className={s.edit_button}>Add subtask</button>
        </div>
        <div className={s.edit_subtasks_list}></div>
      </div>
      <div className={s.edit_comments}>
        <div className={s.edit_comments_create}>
          <textarea
            name="comment"
            id="comment"
            rows={3}
            placeholder="Enter comment..."
          ></textarea>
          <button className={s.edit_button}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
