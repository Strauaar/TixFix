import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import CategoryCard from './category_card';

const mapStateToProps = (state, ownProps) => ({
  selected: state.ui.filter.categoryId === ownProps.id,
  filter: state.ui.filter
})

const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryCard));
