import { RECEIVE_TICKETS } from '../actions/ticket_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TICKETS:
      newState = Object.assign({}, action.tickets);
      return newState;
    default:
      return state;
  }
};

export default ticketsReducer;
