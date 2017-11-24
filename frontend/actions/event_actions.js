import * as EventApiUtil  from '../utils/event_util';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const filterByCategory = (categoryId) => ({
  type: FILTER_BY_CATEGORY,
  categoryId
})

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);
