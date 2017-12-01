import { RECEIVE_PERFORMER_LIKE, RECEIVE_ALL_PERFORMER_LIKES, REMOVE_PERFORMER_LIKE } from '../actions/like_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const likedPerformersReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_PERFORMER_LIKES:
      return action.list;
    case REMOVE_PERFORMER_LIKE:
      newState = Array.from(state);
      let index = newState.indexOf(action.id);
      newState.splice(index,1);
      return newState;
    case RECEIVE_PERFORMER_LIKE:
      newState = Array.from(state);
      newState.push(action.id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default likedPerformersReducer;
