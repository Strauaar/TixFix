export const fetchEventTickets = (event_id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${event_id}/tickets`
  })
);

export const fetchSellingTickets = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/tickets_selling`
  })
);

export const fetchBuyingTickets = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user_id}/tickets_buying`
  })
);

export const fetchEventTicket = (ticket_id) => (
  $.ajax({
    method: 'GET',
    url: `api/tickets/${ticket_id}`
  })
);
