import { connect } from 'react-redux';
import EventShowPage from './event_show_page';
import { withRouter } from 'react-router-dom';
import { fetchEvent, fetchVenuePicture } from '../../actions/event_actions';
import { fetchEventTickets } from '../../actions/ticket_actions';
import { createEventLike, deleteEventLike, fetchEventLikes } from '../../actions/like_actions';

const mapStateToProps = state => ({
  eventQ: state.entities.events,
  tickets: Object.values(state.entities.tickets),
  current_user: state.session.currentUser,
  liked_events_ids: state.entities.liked_events_ids,
  venue_image_url: state.entities.venue
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchEventTickets: (id) => dispatch(fetchEventTickets(id)),
  deleteEventLike: (user_id, event_id) => dispatch(deleteEventLike(user_id, event_id)),
  createEventLike: (user_id, event_id) => dispatch(createEventLike(user_id,event_id)),
  fetchEventLikes: () => dispatch(fetchEventLikes()),
  fetchVenuePicture: () => dispatch(fetchVenuePicture())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShowPage));
