import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import likedPerformersReducer from './liked_performers_reducer';
import ticketsReducer from './tickets_reducer';
import likedReducer from './liked_reducer';
import likedEventsReducer from './liked_events_reducer';
import venueReducer from './venueReducer';

export default combineReducers({
  events: eventsReducer,
  liked_performers_ids: likedPerformersReducer,
  liked_events_ids: likedEventsReducer,
  tickets: ticketsReducer,
  liked_object_list: likedReducer,
  venue: venueReducer
});
