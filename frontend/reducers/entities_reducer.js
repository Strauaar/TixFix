import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import likedPerformersReducer from './liked_performers_reducer';

export default combineReducers({
  events: eventsReducer,
  liked_performers_ids: likedPerformersReducer
});
