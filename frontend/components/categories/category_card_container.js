import { connect } from 'react-redux';
import { filterByCategory, fetchEvents } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import CategoryCard from './category_card';

const mapStateToProps = (state, ownProps) => ({
  selected: state.ui.categoryId === ownProps.id
})

const mapDispatchToProps = dispatch => ({
  filterByCategory: (id) => dispatch(filterByCategory(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryCard));
