import React from "react";
import s from "./ProjectTools.module.scss";
import Modal from "../Modal/Modal";
import CreateTask from "../CreateTask";
import { useAppDispatch } from "../../hook";
import { FilterActionTypes } from "../../types/filter";
import debounce from "lodash.debounce";

interface ProjectToolsProps {}

const ProjectTools: React.FC<ProjectToolsProps> = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState("");
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch({ type: FilterActionTypes.SET_SEARCH, payload: str });
    }, 1000),
    []
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <>
      <div className={s.tools}>
        <button onClick={() => setOpen(true)}>Create task</button>
        <input
          type="text"
          placeholder="Поиск..."
          value={value}
          onChange={onChangeInput}
        />
      </div>
      <Modal setOpen={setOpen} isOpen={open}>
        <CreateTask setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ProjectTools;
