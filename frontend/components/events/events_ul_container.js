import { connect } from 'react-redux';
import EventsUl from './events_ul';
import { fetchMoreEvents } from '../../actions/event_actions';

const mapDispatchToProps = dispatch => ({
  fetchMoreEvents: (currentCount) => dispatch(fetchMoreEvents(currentCount))
});

export default connect(null, mapDispatchToProps)(EventsUl);
