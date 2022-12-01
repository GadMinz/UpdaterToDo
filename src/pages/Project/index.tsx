import React from "react";
import s from "./Project.module.scss";
import Boards from "../../components/Boards";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectActionTypes, TProject } from "../../types/project";
import { useAppDispatch } from "../../hook";
import ProjectTools from "../../components/ProjectTools";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useLocation().pathname.slice(1);
  React.useEffect(() => {
    const project = JSON.parse(localStorage.getItem("projects") || "null").find(
      (proj: TProject) => proj.id === id
    );
    if (!project) {
      navigate("/");
    }
    dispatch({ type: ProjectActionTypes.SET_PROJECT, payload: project });
  }, []);

  return (
    <div className={s.project}>
      <ProjectTools />
      <Boards />
    </div>
  );
};

export default Project;
