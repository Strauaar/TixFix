import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import EventsList from './events_list';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  categoryId: state.ui.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)
