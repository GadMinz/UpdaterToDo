import React from "react";
import s from "./ProjectTools.module.scss";
import Modal from "../Modal/Modal";
import CreateTask from "../CreateTask";

interface ProjectToolsProps {}

const ProjectTools: React.FC<ProjectToolsProps> = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <div className={s.tools}>
        <button onClick={() => setOpen(true)}>Create task</button>
          <input type="text" placeholder='Поиск...'/>
      </div>
      <Modal setOpen={setOpen} isOpen={open}>
        <CreateTask setOpen={setOpen}/>
      </Modal>
    </>
  );
};

export default ProjectTools;
