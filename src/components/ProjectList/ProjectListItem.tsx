import React from "react";
import s from "./ProjectList.module.scss";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface ProjectListItemProps {
  id: string;
  title: string;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ id, title }) => {
  return (
    <div className={s.project}>
      <div className={s.project_title}>{title}</div>
      <button className={s.project_delete}>
        <GlobalSvgSelector id="x" />
      </button>
    </div>
  );
};

export default ProjectListItem;
