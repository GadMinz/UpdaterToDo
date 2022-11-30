import React from "react";
import s from "./ProjectList.module.scss";
import ProjectListItem from "./ProjectListItem";
import ProjectCreate from "./ProjectCreate";
import {TProject} from "../../types/project";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const [projects, setProjects] = React.useState<TProject[]>(
    JSON.parse(localStorage.getItem("projects") || "null") || []
  );
  React.useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (item: TProject) => {
    setProjects((prevState) => [...prevState, item]);
  };
  const deleteProject = (id: string) => {
    if (window.confirm("Delete project?")) {
      setProjects((prevState) => prevState.filter((item) => item.id !== id));
    }
  };
  return (
    <div className={s.wrapper}>
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          deleteProject={deleteProject}
          {...project}
        />
      ))}
      <ProjectCreate addProject={addProject} />
    </div>
  );
};

export default ProjectList;
