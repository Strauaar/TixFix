import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { fetchEventTicket } from '../../actions/ticket_actions';
import { addRedirect, clearRedirect } from '../../actions/ui_actions';
import EventCheckoutPage from './event_checkout_page';

const mapStateToProps = state => ({
  ticket: state.entities.tickets,
  eventQ: state.entities.events,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchEventTicket: (id) => dispatch(fetchEventTicket(id)),
  addRedirect: (url) => dispatch(addRedirect(url)),
  clearRedirect: () => dispatch(clearRedirect())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventCheckoutPage));
