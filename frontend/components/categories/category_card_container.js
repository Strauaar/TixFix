import { connect } from 'react-redux';
import { filterByCategory, fetchEvents } from '../../actions/event_actions';
import CategoryCard from './category_card';

const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id)),
});

export default connect(null, mapDispatchToProps)(CategoryCard);