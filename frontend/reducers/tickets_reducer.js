import { RECEIVE_TICKETS } from '../actions/ticket_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state):
  switch(action.type) {
    case RECEIVE_TICKETS:
      return action.tickets;
    default:
      return state;
  }
};

export default ticketsReducer;
