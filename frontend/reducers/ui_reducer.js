
const initialState = {
  category: null
};

const uiReducer = (state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    default:
    return state;
  }
};

export default uiReducer;
