// action type
const UPDATE_COUNT = "UPDATE_COUNT";

// action creator
export const updateCount = () => {
  return { type: UPDATE_COUNT };
};

// reducer
const likesReducer = (state = { value: 12 }, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

export default likesReducer;
