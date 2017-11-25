import { connect } from 'react-redux';
import EventsUl from './events_ul';
import { fetchMoreEvents, fetchMoreEventsByCategory } from '../../actions/event_actions';

const mapStateToProps = state => ({
  categoryId: state.ui.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchMoreEvents: (currentCount) => dispatch(fetchMoreEvents(currentCount)),
  fetchMoreEventsByCategory: (currentCount, categoryId) => dispatch(fetchMoreEventsByCategory(currentCount,categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsUl);
