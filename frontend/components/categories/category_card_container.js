import { connect } from 'react-redux';
import { filterByCategory, fetchEvents } from '../../actions/event_actions';
import CategoryCard from './category_card';

const mapStateToProps = (state, ownProps) => ({
  selected: state.ui.categoryId === ownProps.id
})

const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
