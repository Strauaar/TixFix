import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TicketPage from './tickets_sell_splash_page';
import { fetchEvents, clearEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter)),
  clearEvents: () => dispatch(clearEvents())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketPage));
