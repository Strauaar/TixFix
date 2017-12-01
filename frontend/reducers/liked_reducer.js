import { RECEIVE_LIKED_OBJECTS, REMOVE_LIKE } from '../actions/like_actions';

const likedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LIKED_OBJECTS:
      return action.objects;
    case REMOVE_LIKE:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
      return state;
    default:
      return state;
  }
};

export default likedReducer;
