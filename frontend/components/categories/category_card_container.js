import { connect } from 'react-redux';
import { filterByCategory, fetchEvents } from '../../actions/event_actions';
import CategoryCard from './category_card';

const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id)),
  fetchEvents: () => dispatch(fetchEvents(2))
});

export default connect(null, mapDispatchToProps)(CategoryCard);
