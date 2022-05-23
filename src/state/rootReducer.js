import { combineReducers } from "redux";
import eventsReducer from "./eventsSlice";

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
