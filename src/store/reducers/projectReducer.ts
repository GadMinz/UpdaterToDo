import {
  ProjectAction,
  ProjectActionTypes,
  ProjectState,
} from "../../types/project";

const initialState: ProjectState = {
  project: {
    id: "",
    title: "",
  },
  tasks: [],
};

export const projectReducer = (
  state = initialState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case ProjectActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
