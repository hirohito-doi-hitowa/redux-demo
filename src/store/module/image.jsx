// action type
const FETCH_IMAGE = "FETCH_IMAGE";

// action creator
export const fetchImage = (payload) => {
  return { type: FETCH_IMAGE, payload };
};

// thunk action
export const fetchImageAsync = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const characterId = state.image.id + 1;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    const data = await response.json();

    dispatch(fetchImage({ id: characterId, imageUrl: data.image }));
  };
};

// reducer
const initialState = {
  id: 1,
  imageUrl: `https://rickandmortyapi.com/api/character/avatar/1.jpeg`,
};
const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE:
      const { id, imageUrl } = action.payload;
      return { ...state, id, imageUrl };
    default:
      return state;
  }
};

export default imageReducer;
