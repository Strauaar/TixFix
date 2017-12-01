export const createEventLike = (user_id, event_id) => (
  $.ajax({
    method: 'POST',
    url: '/api/event_likes',
    data: {
            event_id,
            user_id
          }
  })
);

export const fetchEventLikes = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/event_likes',
    data: { user_id }
  })
);

export const deleteEventLike = (user_id, event_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/event_likes/1`,
    data: {
            event_id,
            user_id
          }
  })
);

export const fetchLikedEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/user/liked_events'
  })
);



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
    url: `/api/performer_likes/1`,
    data: {
            performer_id,
            user_id
          }
  })
);

export const fetchLikedPerformers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/user/liked_performers'
  })
);
