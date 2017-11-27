import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventsList from './events_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  categoryId: state.ui.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsList));
