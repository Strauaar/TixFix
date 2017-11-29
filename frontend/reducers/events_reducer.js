import { RECEIVE_EVENTS,
         FILTER_BY_CATEGORY,
         RECEIVE_MORE_EVENTS,
         RECEIVE_EVENT,
         CLEAR_EVENTS } from '../actions/event_actions';
import { merge } from 'lodash';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState =  Object.assign({}, action.events);
      return newState;
    case RECEIVE_EVENT:
      newState =  Object.assign({}, action.eventQ);
      return newState;
    case RECEIVE_MORE_EVENTS:
      newState = merge({}, state, action.events);
      return newState;
    case CLEAR_EVENTS:
      return {};
    default:
      return state;
  }
};

export default eventsReducer;
