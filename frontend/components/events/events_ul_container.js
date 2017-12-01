import { connect } from 'react-redux';
import EventsUl from './events_ul';
import { fetchMoreEvents, fetchMoreEventsByCategory } from '../../actions/event_actions';

const mapStateToProps = state => ({
  categoryId: state.ui.filter.categoryId,
  filter: state.ui.filter
});

const mapDispatchToProps = dispatch => ({
  fetchMoreEvents: (currentCount, filter) => dispatch(fetchMoreEvents(currentCount, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsUl);
