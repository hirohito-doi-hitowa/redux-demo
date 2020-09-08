// action type
const POST_COMMENT = "POST_COMMENT";

// action creator
export const postComment = (payload) => {
  return { type: POST_COMMENT, payload };
};

// reducer
const initialState = ["Wow", "awesome"];
const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default likesReducer;
