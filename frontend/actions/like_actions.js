import * as LikeApiUtil from '../utils/like_util';

export const RECEIVE_PERFORMER_LIKE = "RECEIVE_PERFORMER_LIKE";
export const RECEIVE_ALL_PERFORMER_LIKES ="RECEIVE_ALL_PERFORMER_LIKES";
export const REMOVE_PERFORMER_LIKE = "REMOVE_PERFORMER_LIKE";
export const RECEIVE_EVENT_LIKE = "RECEIVE_EVENT_LIKE";
export const RECEIVE_ALL_EVENT_LIKES ="RECEIVE_ALL_EVENT_LIKES";
export const REMOVE_EVENT_LIKE = "REMOVE_EVENT_LIKE";
export const RECEIVE_LIKED_OBJECTS = "RECEIVE_LIKED_OBJECTS";


const receiveAllPerformerLikes = performer_id_list => ({
  type: RECEIVE_ALL_PERFORMER_LIKES,
  list: performer_id_list
});

const receivePerformerLike = liked_performer_id => ({
  type: RECEIVE_PERFORMER_LIKE,
  id: liked_performer_id
});

const removePerformerLike = unliked_performer_id => ({
  type: REMOVE_PERFORMER_LIKE,
  id: unliked_performer_id
});

const receiveLikedObjects = objects => ({
  type: RECEIVE_LIKED_OBJECTS,
  objects
})


export const fetchPerformerLikes = () => dispatch => (
  LikeApiUtil.fetchPerformerLikes().then(performer_id_list => dispatch(receiveAllPerformerLikes(performer_id_list)))
);

export const createPerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.createPerformerLike(user_id, performer_id).then(liked_performer_id_obj => dispatch(receivePerformerLike(liked_performer_id_obj.performer_id)))
);

export const deletePerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.deletePerformerLike(user_id, performer_id).then(unliked_performer_id_obj => dispatch(removePerformerLike(unliked_performer_id_obj.id)))
);

export const fetchLikedPerformers = () => dispatch => (
  LikeApiUtil.fetchLikedPerformers().then(objList => dispatch(receiveLikedObjects(objList)))
);

const receiveAllEventLikes = event_id_list => ({
  type: RECEIVE_ALL_EVENT_LIKES,
  list: event_id_list
});

const receiveEventLike = liked_event_id => ({
  type: RECEIVE_EVENT_LIKE,
  id: liked_event_id
});

const removeEventLike = unliked_event_id => ({
  type: REMOVE_EVENT_LIKE,
  id: unliked_event_id
});

export const fetchEventLikes = () => dispatch => (
  LikeApiUtil.fetchEventLikes().then(event_id_list => dispatch(receiveAllEventLikes(event_id_list)))
);

export const createEventLike = (user_id, event_id) => dispatch => (
  LikeApiUtil.createEventLike(user_id, event_id).then(liked_event_id_obj => dispatch(receiveEventLike(liked_event_id_obj.event_id)))
);

export const deleteEventLike = (user_id, event_id) => dispatch => (
  LikeApiUtil.deleteEventLike(user_id, event_id).then(unliked_event_id_obj => dispatch(removeEventLike(unliked_event_id_obj.id)))
);

export const fetchLikedEvents = () => dispatch => (
  LikeApiUtil.fetchLikedEvents().then(objList => dispatch(receiveLikedObjects(objList)))
);
