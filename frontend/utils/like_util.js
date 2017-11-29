export const createPerformerLike = (user_id, performer_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/performer_likes',
    data: {
            performer_id,
            user_id
          }
  })
);

export const fetchPerformerLikes = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/performer_likes',
    data: { user_id }
  })
);

export const deletePerformerLike = (user_id, performer_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/performer_likes`,
    data: {
            performer_id,
            user_id
          }
  })
);
