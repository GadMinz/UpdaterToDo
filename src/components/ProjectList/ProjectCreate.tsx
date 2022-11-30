import React from "react";
import s from "./ProjectList.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ProjectT } from ".";

interface ProjectCreateProps {
  addProject: (item: ProjectT) => void;
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2">
                <path
                  fill="#000000"
                  d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"
                />
              </g>
            </svg>
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
