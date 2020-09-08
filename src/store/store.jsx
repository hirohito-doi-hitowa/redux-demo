import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import LikesReducer from "./module/likes";
import CommentsReducer from "./module/comments";
import ImageReducer from "./module/image";

const rootReducer = combineReducers({
  likes: LikesReducer,
  comments: CommentsReducer,
  image: ImageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
