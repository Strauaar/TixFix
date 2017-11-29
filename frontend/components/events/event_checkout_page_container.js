import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { fetchEventTicket } from '../../actions/ticket_actions';
import EventCheckoutPage from './event_checkout_page';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchEventTicket: (id) => dispatch(fetchEventTicket(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventCheckoutPage));
