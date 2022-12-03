import React from "react";
import s from "./EditTask.module.scss";
import moment from "moment";
import {
  ProjectActionTypes,
  TComment,
  TFile,
  TSubtask,
  TTask,
} from "../../types/project";
import TextArea from "./TextArea";
import { useAppDispatch } from "../../hook";
import Subtask from "../Subtask";
import { FileInfo, Widget } from "@uploadcare/react-widget";
import File from "./File";
import Comment from "../Comment/Comment";

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
  const createSubtask = (value: string) => {
    const newSubtask: TSubtask = {
      id: new Date().valueOf().toString(),
      title: value,
      checked: false,
    };
    const newSubtasks = [...task.subtasks, newSubtask];
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, subtasks: newSubtasks },
    });
  };
  const handleSubtask = (item: TSubtask, checked: boolean) => {
    let newSubtasks = [...task.subtasks];
    newSubtasks[subtasks.indexOf(item)].checked = checked;
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, subtasks: newSubtasks },
    });
  };
  const deleteSubtask = (taskId: string) => {
    let newSubtasks = subtasks.filter((subtask) => subtask.id !== taskId);
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, subtasks: newSubtasks },
    });
  };
  const createFile = (fileInfo: FileInfo) => {
    let file: TFile = {
      name: fileInfo.name ? fileInfo.name : "",
      size: fileInfo.size ? fileInfo.size : 0,
      url: fileInfo.originalUrl ? fileInfo.originalUrl : "",
      uuid: fileInfo.uuid ? fileInfo.uuid : new Date().valueOf().toString(),
    };
    let newFiles = [...attachments, file];
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, attachments: newFiles },
    });
  };

  const createComment = (value: string, parent?: string) => {
    const comment: TComment = {
      id: new Date().valueOf().toString(),
      parent: parent ? parent : "",
      content: value,
    };
    dispatch({
      type: ProjectActionTypes.UPDATE_TASK,
      payload: { ...task, comments: [...comments, comment] },
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
          <Widget publicKey="7e7bf550cd49cd38bda8" onChange={createFile} />
        </div>
        {attachments.map((file) => (
          <File key={file.uuid} file={file} />
        ))}
      </div>
      <div className={s.edit_subtasks}>
        <div className={s.edit_subtitle}>Subtasks</div>
        <div className={s.edit_subtasks_list}>
          {subtasks.map((subtask) => (
            <Subtask
              key={subtask.id}
              subtask={subtask}
              handleSubtask={handleSubtask}
              deleteSubtask={deleteSubtask}
            />
          ))}
        </div>
        <TextArea rows={2} initialValue="" onSave={createSubtask}>
          <button className={s.edit_button}>Add subtask</button>
        </TextArea>
      </div>
      <div className={s.edit_comments}>
        <div className={s.edit_comments_create}>
          <TextArea rows={3} initialValue={""} onSave={createComment}>
            <p>Enter comment...</p>
          </TextArea>
        </div>
        <div className={s.edit_subtitle}>Comments</div>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default EditTask;
