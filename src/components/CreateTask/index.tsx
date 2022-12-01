import React from "react";
import s from "./CreateTask.module.scss";

interface CreateTaskProps {}

const CreateTask: React.FC<CreateTaskProps> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.create_title}>Create Task</div>
      <form className={s.create_form}>
        <input type="text" placeholder="Title" required/>
        <textarea id="Description" name="Description" rows={5} placeholder='Description' required>
        </textarea>
        <select name="priority" id="priority" required>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
