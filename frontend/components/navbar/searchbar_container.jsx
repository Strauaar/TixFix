import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';
import { fetchEvents, clearEvents } from '../../actions/event_actions';

const mapDispatchToProps = dispatch => ({
  fetchEvents: (currentCount, filter) => dispatch(fetchEvents(currentCount,filter)),
  clearEvents: () => dispatch(clearEvents())
});

export default connect(null, mapDispatchToProps)(SearchBar);
