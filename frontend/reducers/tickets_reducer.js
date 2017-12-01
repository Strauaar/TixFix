import { RECEIVE_TICKETS, RECEIVE_TICKET } from '../actions/ticket_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TICKETS:
      newState = Object.assign({}, action.tickets);
      return newState;
    case RECEIVE_TICKET:
      newState = Object.assign({}, action.ticket);
      return newState;
    default:
      return state;
  }
};

export default ticketsReducer;
