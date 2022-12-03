import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  project: projectReducer,
  filter: filterReducer,
});
