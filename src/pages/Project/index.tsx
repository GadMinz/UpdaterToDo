import React from "react";
import s from "./Project.module.scss";
import Boards from "../../components/Boards";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectActionTypes, TProject, TTask } from "../../types/project";
import { useAppDispatch } from "../../hook";
import ProjectTools from "../../components/ProjectTools";
import { getLocalProjects, getLocalTasks } from "../../localStorage";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useLocation().pathname.slice(1);
  React.useEffect(() => {
    const project = getLocalProjects().find((proj: TProject) => proj.id === id);
    if (!project) {
      navigate("/");
    }
    dispatch({ type: ProjectActionTypes.SET_PROJECT, payload: project });
    const tasks = getLocalTasks().filter(
      (task: TTask) => task.project === project.id
    );
    if (!tasks) {
      return;
    }
    dispatch({ type: ProjectActionTypes.SET_TASKS, payload: tasks });
  }, []);

  return (
    <div className={s.project}>
      <ProjectTools />
      <Boards />
    </div>
  );
};

export default Project;
