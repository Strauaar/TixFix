import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SubCategoryPage from './subcategory_page';
import { fetchSubCategoryEvents } from '../../actions/category_actions';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchSubCategoryEvents: (id) => dispatch(fetchSubCategoryEvents(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubCategoryPage));
