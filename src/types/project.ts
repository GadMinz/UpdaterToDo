export type TProject = {
  id: string;
  title: string;
};

export type TTask = {
  id: string;
  project: string;
  title: string;
  description: string;
  status: "queue" | "development" | "done";
  priority: string;
  created: number;
};

export type ProjectState = {
  project: TProject;
  tasks: TTask[];
};

export enum ProjectActionTypes {
  SET_PROJECT = "SET_PROJECT",
  SET_TASKS = "SET_TASKS",
  ADD_TASK = "ADD_TASK",
}

interface SetProjectAction {
  type: ProjectActionTypes.SET_PROJECT;
  payload: TProject;
}

interface SetTasksAction {
  type: ProjectActionTypes.SET_TASKS;
  payload: TTask[];
}

interface AddTaskAction {
  type: ProjectActionTypes.ADD_TASK;
  payload: TTask;
}

export type ProjectAction = SetProjectAction | SetTasksAction | AddTaskAction;
