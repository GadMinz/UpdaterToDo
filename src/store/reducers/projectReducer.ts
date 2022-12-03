import {
  ProjectAction,
  ProjectActionTypes,
  ProjectState,
  TTask,
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
    case ProjectActionTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ProjectActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ProjectActionTypes.DELETE_TASK:
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: newTasks,
      };
    case ProjectActionTypes.UPDATE_TASK:
      let data = action.payload;
      const updateTasks: TTask[] = state.tasks.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      });
      return {
        ...state,
        tasks: updateTasks,
      };

    default:
      return state;
  }
};
