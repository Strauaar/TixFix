import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
         loginUser,
         logoutUser,
         createUser} from '../actions/session_actions';

const initial_state = {currentUser: null};

const sessionsReducer = (state = initial_state , action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = {currentUser: null};
      newState.currentUser = action.user
      return newState;
    case LOGOUT_CURRENT_USER:
      return {currentUser: null};
    default:
      return state;
  }
};

export default sessionsReducer;
