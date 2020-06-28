import { combineReducers } from "redux"
import users from "./users"
import questions from "./questions"
import authedUser from "./authentication"
// import questionVisibilityFilter from "./questionVisibilityFilter"
// import message from "./message"

const rootReducer = combineReducers({
  users,
  authedUser,
  questions,
  // questionVisibilityFilter,
  // message,
});
export default rootReducer;