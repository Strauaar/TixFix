import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';

export default combineReducers({
  events: eventsReducer
})
