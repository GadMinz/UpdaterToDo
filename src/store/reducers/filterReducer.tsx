import {
  FilterAction,
  FilterActionTypes,
  FilterState,
} from "../../types/filter";

const initialState: FilterState = {
  searchValue: "",
};

export const filterReducer = (
  state = initialState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_SEARCH:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
