import { RECEIVE_EVENT_LIKE, RECEIVE_ALL_EVENT_LIKES, REMOVE_EVENT_LIKE } from '../actions/like_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const likedEventsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ALL_EVENT_LIKES:
      return action.list;
    case REMOVE_EVENT_LIKE:
      newState = Array.from(state);
      let index = newState.indexOf(action.id);
      newState.splice(index,1);
      return newState;
    case RECEIVE_EVENT_LIKE:
      newState = Array.from(state);
      newState.push(action.id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default likedEventsReducer;
