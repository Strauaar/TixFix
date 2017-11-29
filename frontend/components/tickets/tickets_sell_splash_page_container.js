import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TicketPage from './tickets_sell_splash_page';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TicketPage));
