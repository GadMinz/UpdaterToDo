const FETCH_TASKS = "FETCH_TASKS";

interface TaskAction {
  type: string;
  payload?: any;
}

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action: TaskAction) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return {
        tasks: []
      };
    default:
      return state;
  }
};
