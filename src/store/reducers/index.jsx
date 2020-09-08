import { combineReducers } from "redux";
import LikesReducer from "./likesReducer";
import CommentsReducer from "./commentsReducer";
import ImageReducer from "./imageReducer";

const rootReducer = combineReducers({
  likes: LikesReducer,
  comments: CommentsReducer,
  image: ImageReducer,
});

export default rootReducer;
