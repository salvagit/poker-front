import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import players from "./players.reducers";

export default combineReducers({
  form,
  players
});