import React from "react";
import s from "./ProjectList.module.scss";
import { v4 as uuidv4 } from "uuid";
import { TProject } from ".";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface ProjectCreateProps {
  addProject: (item: TProject) => void;
}

const ProjectCreate: React.FC<ProjectCreateProps> = ({ addProject }) => {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState<boolean>(false);
  const createRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.path.includes(createRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length === 0 || !value.trim()) {
      alert("Enter project name");
      return;
    }
    const item = { id: uuidv4(), title: value };
    addProject(item);
    setValue("");
    setOpen(false);
  };

  return (
    <div ref={createRef} className={s.project_create}>
      {open ? (
        <form onSubmit={onSubmit}>
          <input type="text" autoFocus value={value} onChange={onChangeValue} />
          <button>
            <GlobalSvgSelector id="check" />
          </button>
        </form>
      ) : (
        <button className={s.button} onClick={() => setOpen(true)}>
          Добавить проект
        </button>
      )}
    </div>
  );
};

export default ProjectCreate;
