import * as LikeApiUtil from '../utils/like_util';

export const RECEIVE_LIKE = "RECEIVE _LIKE";
export const RECEIVE_ALL_PERFORMER_LIKES ="RECEIVE_ALL_PERFORMER_LIKES";
export const REMOVE_PERFORMER_LIKE = "REMOVE_PERFORMER_LIKE";
export const RECEIVE_LIKED_OBJECTS = "RECEIVE_LIKED_OBJECTS";


const receiveAllPerformerLikes = performer_id_list => ({
  type: RECEIVE_ALL_PERFORMER_LIKES,
  list: performer_id_list
});

const receiveLike = liked_performer_id => ({
  type: RECEIVE_LIKE,
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
  LikeApiUtil.createPerformerLike(user_id, performer_id).then(liked_performer_id_obj => dispatch(receiveLike(liked_performer_id_obj.performer_id)))
);

export const deletePerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.deletePerformerLike(user_id, performer_id).then(unliked_performer_id_obj => dispatch(removePerformerLike(unliked_performer_id_obj.id)))
);

export const fetchLikedPerformers = () => dispatch => (
  LikeApiUtil.fetchLikedPerformers().then(objList => dispatch(receiveLikedObjects(objList)))
);
