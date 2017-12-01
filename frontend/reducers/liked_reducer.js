import { RECEIVE_LIKED_OBJECTS, REMOVE_PERFORMER_LIKE, REMOVE_EVENT_LIKE } from '../actions/like_actions';

const likedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LIKED_OBJECTS:
      return action.objects;
    case REMOVE_PERFORMER_LIKE:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
      return state;
    case REMOVE_EVENT_LIKE:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
      return state;
    default:
      return state;
  }
};

export default likedReducer;
