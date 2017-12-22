import * as EventApiUtil  from '../utils/event_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_MORE_EVENTS ="RECEIVE_MORE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const CLEAR_EVENTS = "CLEAR_EVENTS";
export const LOADING_TRUE = "LOADING_TRUE";
export const LOADING_FALSE = "LOADING_FALSE";

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
});

export const clearEvents = () => ({
  type: CLEAR_EVENTS
})

export const fetchEvent = (id) => dispatch => (
  EventApiUtil.fetchEvent(id).then(eventQ => dispatch(receiveEvent(eventQ)))
);

export const fetchEvents = (filter) => dispatch => {
  EventApiUtil.fetchEvents(filter)
  .then((events) => {
      setTimeout(() => dispatch({type: LOADING_FALSE}), ((Math.random() + 1) * 400));
      return events;
  })
  .then(events => dispatch(receiveEvents(events, filter)))

  dispatch({type: LOADING_TRUE})
};

export const fetchMoreEvents = (currentCount, filter) => dispatch => (
  EventApiUtil.fetchMoreEvents(currentCount, filter).then(events => dispatch(receiveMoreEvents(events, filter)))
);

export const upcomingEvents = () => dispatch => (
  EventApiUtil.fetchUpcomingEvents().then(events => dispatch(receiveEvents(events)))
);

export const fetchSearchEvents = (filter) => dispatch => (
  EventApiUtil.fetchSearchEvents(filter).then(events => dispatch(receiveEvents(events)))
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
