import React from "react";
import s from "./EditTask.module.scss";
import moment from "moment";

import { ProjectActionTypes, TTask } from "../../types/project";
import TextArea from "./TextArea";
import { useAppDispatch } from "../../hook";

interface EditTaskProps {
  task: TTask;
}

const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();
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

  const onUpdateTitle = (value: string) => {
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, title: value },
    });
  };
  const onUpdateDesc = (value: string) => {
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, description: value },
    });
  };
  return (
    <div className={s.edit}>
      <TextArea rows={2} initialValue={title} onSave={onUpdateTitle}>
        <div className={s.edit_title}>{title}</div>
      </TextArea>
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
        <li>Created: {moment(created).format("DD.MM.YYYY HH:mm")}</li>
        {started && (
          <li>
            {done ? "Was been in" : "In"} development since:{" "}
            {moment(started).format("DD.MM.YYYY HH:mm")} (
            {done
              ? moment.duration(moment(done).diff(started)).humanize()
              : moment(started).fromNow(true)}
            )
          </li>
        )}
        {done && <li>Done: {moment(done).format("DD.MM.YYYY HH:mm")}</li>}
      </ul>
      <div className={s.edit_desc}>
        <div className={s.edit_subtitle}>Description</div>
        <TextArea rows={6} initialValue={description} onSave={onUpdateDesc}>
          <p>{description}</p>
        </TextArea>
      </div>
      <div className={s.edit_files}>
        <div className={s.edit_files_title}>
          <div className={s.edit_subtitle}>Attachments</div>
          <button className={s.edit_button}>Add file</button>
        </div>
        {attachments.length > 0 && <div>File</div>}
      </div>
      <div className={s.edit_subtasks}>
        <div className={s.edit_subtitle}>Subtasks</div>
        <div className={s.edit_subtasks_list}></div>
        <TextArea
          rows={2}
          initialValue=""
          onSave={(value) => console.log(value)}
        >
          <button className={s.edit_button}>Add subtask</button>
        </TextArea>
      </div>
      <div className={s.edit_comments}>
        <div className={s.edit_comments_create}>
          <textarea rows={3} placeholder="Enter comment..."></textarea>
          <button className={s.edit_button}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
