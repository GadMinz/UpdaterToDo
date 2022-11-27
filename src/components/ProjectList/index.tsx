import React from "react";
import s from "./ProjectList.module.scss";
import ProjectListItem from "./ProjectListItem";

interface ProjectListProps {}

const projects = [`McDonald's`, 'Pepsi', 'CocaCola']
const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <div className={s.wrapper}>
        {projects.map((title, i) => <ProjectListItem key={i+title} title={title}/>)}
    </div>
  );
};

export default ProjectList;
