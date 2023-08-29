import { combineReducers } from "redux";
import postsReducer from "./posts/postReducer";
const rootReducer = combineReducers({
  postReducer: postsReducer,
});
export default rootReducer;
