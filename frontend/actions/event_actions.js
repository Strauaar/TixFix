import * as EventApiUtil  from '../utils/event_util';
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(events => dispatch(receiveEvents(events)))
);
