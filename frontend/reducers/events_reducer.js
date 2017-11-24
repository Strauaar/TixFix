import { RECEIVE_EVENTS, FILTER_BY_CATEGORY } from '../actions/event_actions';
import { eventByCategory } from './event_selectors';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState =  Object.assign({}, action.events);
      return newState;
    case FILTER_BY_CATEGORY:
      newState = Object.assign({}, state);
      return eventByCategory(newState, action.categoryId);
    default:
      return state;
  }
};

export default eventsReducer;
