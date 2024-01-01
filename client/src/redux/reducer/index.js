import TodoReducers from "./TodoReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  mynotes: TodoReducers,
});

export default reducers;