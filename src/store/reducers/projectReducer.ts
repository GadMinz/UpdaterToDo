import { ProjectState } from "../../types/project";

const FETCH_TASKS = "FETCH_TASKS";

interface ProjectAction {
  type: string;
  payload?: any;
}

const initialState: ProjectState = {
  project: {
    id: "",
    title: "",
  },
  tasks: [],
};

export const projectReducer = (state = initialState, action: ProjectAction) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        tasks: [],
      };
    default:
      return state;
  }
};
