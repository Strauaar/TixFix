import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';
import { fetchSearchEvents, clearEvents } from '../../actions/event_actions';
const mapStateToProps = state => ({
  filter: state.ui.filter
});

const mapDispatchToProps = dispatch => ({
  fetchSearchEvents: (filter) => dispatch(fetchSearchEvents(filter)),
  clearEvents: () => dispatch(clearEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
