import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventsList from './events_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  categoryId: state.ui.filter.categoryId,
  filter: state.ui.filter
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsList));
