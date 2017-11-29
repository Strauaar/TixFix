import * as LikeApiUtil from '../utils/like_util';

export const RECEIVE_LIKE = "RECEIVE _LIKE";
export const RECEIVE_ALL_PERFORMER_LIKES ="RECEIVE_ALL_PERFORMER_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";


const receiveAllPerformerLikes = performer_id_list => ({
  type: RECEIVE_ALL_PERFORMER_LIKES,
  list: performer_id_list
});

const receiveLike = liked_performer_id => ({
  type: RECEIVE_LIKE,
  id: liked_performer_id
});

const removeLike = unliked_performer_id => ({
  type: REMOVE_LIKE,
  id: unliked_performer_id
});


export const fetchPerformerLikes = (user_id) => dispatch => (
  LikeApiUtil.fetchPerformerLikes(user_id).then(performer_id_list => dispatch(receiveAllPerformerLikes(performer_id_list)))
);

export const createPerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.createPerformerLike(user_id, performer_id).then(liked_performer_id => dispatch(receiveLike(liked_performer_id)))
);

export const deletePerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.deletePerformerLike(user_id, performer_id).then(unliked_performer_id => dispatch(removeLike(unliked_performer_id)))
);
