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

export const projectReducer = (state = initialState, action: ProjectAction) => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};
