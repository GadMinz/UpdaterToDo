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
};

export type ProjectState = {
  project: TProject;
  tasks: [];
};

export enum ProjectActionTypes {
  SET_PROJECT = "SET_PROJECT",
  SET_TASKS = "SET_TASKS",
}

interface SetProjectAction {
  type: ProjectActionTypes.SET_PROJECT;
  payload: TProject;
}

interface SetTasksAction {
  type: ProjectActionTypes.SET_TASKS;
  payload: TTask[];
}

export type ProjectAction = SetProjectAction | SetTasksAction;
