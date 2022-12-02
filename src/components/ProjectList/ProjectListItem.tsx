import React from "react";
import s from "./ProjectList.module.scss";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

interface ProjectListItemProps {
  id: string;
  title: string;
  deleteProject: (id: string) => void;
  index: number;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  id,
  title,
  deleteProject,
  index,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={s.project}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Link to={"/" + id} className={s.project_title}>
            {title}
          </Link>
          <button
            onClick={() => deleteProject(id)}
            className={s.project_delete}
          >
            <GlobalSvgSelector id="x" />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ProjectListItem;
