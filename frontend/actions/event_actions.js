import * as EventApiUtil  from '../utils/event_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_MORE_EVENTS ="RECEIVE_MORE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvents = (events, filter) => ({
  type: RECEIVE_EVENTS,
  events,
  filter
});

const receiveMoreEvents = (events, filter) => ({
  type: RECEIVE_MORE_EVENTS,
  events,
  filter
});

const receiveEvent = eventQ => ({
  type: RECEIVE_EVENT,
  eventQ
})

export const fetchEvent = (id) => dispatch => (
  EventApiUtil.fetchEvent(id).then(eventQ => dispatch(receiveEvent(eventQ)))
);

export const fetchEvents = (filter) => dispatch => (
  EventApiUtil.fetchEvents(filter).then(events => dispatch(receiveEvents(events, filter)))
);

export const fetchMoreEvents = (currentCount, filter) => dispatch => (
  EventApiUtil.fetchMoreEvents(currentCount, filter).then(events => dispatch(receiveMoreEvents(events, filter)))
);

// export const filterByCategory = categoryId => dispatch => (
//   EventApiUtil.fetchEventByCategory(categoryId).then(events => dispatch(receiveEvents(events, categoryId)))
// );


// export const fetchMoreEventsByCategory = (currentCount, categoryId) => dispatch => (
//   EventApiUtil.fetchMoreEventsByCategory(currentCount, categoryId).then(events => dispatch(receiveMoreEvents(events)))
// );
//
// export const filterByDate = (categoryObj) => dispatch => (
//   EventApiUtil.filterByDate(categoryObj).then(events => dispatch(receiveEvents(events)))
// );
