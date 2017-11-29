import * as TicketApiUtil from '../utils/ticket_util';
export const RECEIVE_TICKETS = "RECEIVE_TICKETS";
export const RECEIVE_TICKET = "RECEIVE_TICKET";

export const receiveTickets = (tickets) => ({
  type: RECEIVE_TICKETS,
  tickets
});

export const receiveTicket = (ticket) => ({
  type: RECEIVE_TICKET,
  ticket
})


export const fetchSellingTickets = (user_id) => dispatch => (
  TicketApiUtil.fetchSellingTickets(user_id).then(ticket_list => dispatch(receiveTickets(ticket_list)))
);

export const fetchBuyingTickets = (user_id) => dispatch => (
  TicketApiUtil.fetchBuyingTickets(user_id).then(ticket_list => dispatch(receiveTickets(ticket_list)))
);

export const fetchEventTickets = event_id => dispatch => (
  TicketApiUtil.fetchEventTickets(event_id).then(ticket_list => dispatch(receiveTickets(ticket_list)))
);

export const fetchEventTicket = event_id => dispatch => (
  TicketApiUtil.fetchEventTicket(event_id).then(ticket => dispatch(receiveTicket(ticket)))
)
