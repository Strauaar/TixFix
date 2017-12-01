import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LocationDateFilter from './location_date_filter';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
  return {
    categoryId: state.ui.filter.categoryId,
    filter: state.ui.filter
  }
}
const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationDateFilter));
