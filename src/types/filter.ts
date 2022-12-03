export type FilterState = {
  searchValue: string;
};

export enum FilterActionTypes {
  SET_SEARCH = "SET_SEARCH",
}

interface UpdateTaskAction {
  type: FilterActionTypes.SET_SEARCH;
  payload: string;
}

export type FilterAction = UpdateTaskAction;
