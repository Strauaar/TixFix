import * as LikeApiUtil from '../utils/like_util';

export const RECEIVE_LIKE = "RECEIVE _LIKE";
export const RECEIVE_ALL_LIKES ="RECEIVE_ALL_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";


const receiveAllLikes = performer_id_list => ({
  type: RECEIVE_ALL_LIKES,
  list: performer_id_list
});

const receiveLike = like_id => ({
  type: RECEIVE_LIKE,
  id: like_id
});

const removeLike = like_id => ({
  type: REMOVE_LIKE,
  id: like_id
});


export const fetchPerformerLikes = (user_id) => dispatch => (
  LikeApiUtil.fetchPerformerLikes(user_id).then(performer_id_list => dispatch(receiveAllLikes(performer_id_list)))
);

export const createPerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.createPerformerLike(user_id, performer_id).then(like_id => dispatch(receiveLike(like_id)))
);

export const deletePerformerLike = (user_id, performer_id) => dispatch => (
  LikeApiUtil.deletePerformerLike(user_id, performer_id).then(like_id => dispatch(removeLike(like_id)))
);
