import { connect } from 'react-redux';
import { filterByCategory, fetchEvents } from '../../actions/event_actions';
import CategoryCard from './category_card';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(null, mapDispatchToProps)(CategoryCard);
