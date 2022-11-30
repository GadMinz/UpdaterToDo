import React from "react";
import s from "./ProjectList.module.scss";
import ProjectListItem from "./ProjectListItem";
import ProjectCreate from "./ProjectCreate";

interface ProjectListProps {}

export type TProject = {
  id: string;
  title: string;
};

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
  return (
    <div className={s.wrapper}>
      {projects.map((project) => (
        <ProjectListItem key={project.id} {...project} />
      ))}
      <ProjectCreate addProject={addProject} />
    </div>
  );
};

export default ProjectList;
