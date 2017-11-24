import { RECEIVE_EVENTS } from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState =  Object.assign({}, action.events);
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
