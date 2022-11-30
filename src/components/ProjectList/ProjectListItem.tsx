import React from "react";
import s from "./ProjectList.module.scss";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import { Link } from "react-router-dom";

interface ProjectListItemProps {
  id: string;
  title: string;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ id, title }) => {
  return (
    <div className={s.project}>
      <Link to={"/" + id} className={s.project_title}>
        {title}
      </Link>
      <button className={s.project_delete}>
        <GlobalSvgSelector id="x" />
      </button>
    </div>
  );
};

export default ProjectListItem;
