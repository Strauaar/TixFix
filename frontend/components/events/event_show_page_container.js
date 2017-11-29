import { connect } from 'react-redux';
import EventShowPage from './event_show_page';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { fetchEventTickets } from '../../actions/ticket_actions';

const mapStateToProps = state => ({
  eventQ: state.entities.events,
  tickets: Object.values(state.entities.tickets)
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  fetchEventTickets: (id) => dispatch(fetchEventTickets(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShowPage));
