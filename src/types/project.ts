export type TProject = {
  id: string;
  title: string;
};
export type TSubtask = {
  id: string;
  title: string;
  checked: boolean;
};
export type TFile = {
  uuid: string;
  name: string;
  url: string;
  size: number;
};
export type  TComment = {
    id: string;
    content: string;
    parent: string;
}
export type TTask = {
  id: string;
  project: string;
  title: string;
  description: string;
  status: "queue" | "development" | "done";
  priority: string;
  attachments: TFile[];
  comments: TComment[];
  subtasks: TSubtask[];
  created: number;
  started: number | null;
  done: number | null;
};

export type ProjectState = {
  project: TProject;
  tasks: TTask[];
};

export enum ProjectActionTypes {
  SET_PROJECT = "SET_PROJECT",
  SET_TASKS = "SET_TASKS",
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
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

interface DeleteTaskAction {
  type: ProjectActionTypes.DELETE_TASK;
  payload: string;
}

interface UpdateTaskAction {
  type: ProjectActionTypes.UPDATE_TASK;
  payload: TTask;
}

export type ProjectAction =
  | SetProjectAction
  | SetTasksAction
  | AddTaskAction
  | UpdateTaskAction
  | DeleteTaskAction;
