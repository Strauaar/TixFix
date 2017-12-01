import { RECEIVE_LIKED_OBJECTS } from '../actions/like_actions';

const likedReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LIKED_OBJECTS:
      return Object.values(action.objects)
    default:
      return state;
  }
};

export default likedReducer;
