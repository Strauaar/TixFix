import { RECEIVE_LIKE, RECEIVE_ALL_PERFORMER_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const likedPerformersReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_PERFORMER_LIKES:
      return action.list;
    case REMOVE_LIKE:
      newState = Array.from(state);
      let index = newState.indexOf(action.id);
      newState.splice(index,1);
      return newState;
    case RECEIVE_LIKE:
      newState = Array.from(state);
      newState.push(action.id);
      return newState;
    default:
      return state;
  }
};

export default likedPerformersReducer;
