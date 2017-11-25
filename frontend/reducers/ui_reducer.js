import { RECEIVE_EVENTS } from '../actions/event_actions';

const initialState = {
  categoryId: null
};

const uiReducer = (state = initialState, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState = Object.assign({}, { categoryId: action.categoryId });
      return newState;
    default:
    return state;
  }
};

export default uiReducer;
