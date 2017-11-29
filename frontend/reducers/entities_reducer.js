import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import likedPerformersReducer from './likedPerformersReducer';

export default combineReducers({
  events: eventsReducer,
  liked_performers_ids: likedPerformersReducer
});
