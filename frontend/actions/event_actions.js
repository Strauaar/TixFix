import * as EventApiUtil  from '../utils/event_util';
import { eventsByCategory } from '../reducers/event_selectors';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);

export const filterByCategory = categoryId => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(eventsByCategory(events, categoryId))))
);
