import * as EventApiUtil  from '../utils/event_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_MORE_EVENTS ="RECEIVE_MORE_EVENTS";

const receiveEvents = (events, categoryId) => ({
  type: RECEIVE_EVENTS,
  events,
  categoryId
});

const receiveMoreEvents = events => ({
  type: RECEIVE_MORE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);

export const filterByCategory = categoryId => dispatch => (
  EventApiUtil.fetchEventByCategory(categoryId).then(events => dispatch(receiveEvents(events, categoryId)))
);

export const fetchMoreEvents = currentCount => dispatch => (
  EventApiUtil.fetchMoreEvents(currentCount).then(events => dispatch(receiveMoreEvents(events)))
);

export const fetchMoreEventsByCategory = (currentCount, categoryId) => dispatch => (
  EventApiUtil.fetchMoreEventsByCategory(currentCount, categoryId).then(events => dispatch(receiveMoreEvents(events)))
);;
