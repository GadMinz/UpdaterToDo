import { TProject, TTask } from "./types/project";

export const getLocalTasks = () => {
  return JSON.parse(localStorage.getItem("tasks") || "null");
};

export const getLocalProjects = () => {
  return JSON.parse(localStorage.getItem("projects") || "null");
};

export const updateLocalProjects = (projects: TProject[]) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const updateLocalTasks = (projectId: string, tasks: TTask[]) => {
  const oldTasks = (getLocalTasks() || []).filter(
    (task: TTask) => task.project !== projectId
  );
  const newTasks = [...oldTasks, ...tasks];
  localStorage.setItem("tasks", JSON.stringify(newTasks));
};
