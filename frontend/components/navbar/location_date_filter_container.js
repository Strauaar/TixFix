import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LocationDateFilter from './location_date_filter';
import { filterByDate } from '../../actions/event_actions';

const mapStateToProps = state => ({
  categoryId: state.ui.categoryId
})
const mapDispatchToProps = dispatch => ({
  filterByDate: (dateObj) => dispatch(filterByDate(dateObj))
});

export default withRouter(connect(null, mapDispatchToProps)(LocationDateFilter));
