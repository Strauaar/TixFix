import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SubCategoryList from './subcategory_list';
import { fetchSubCategoryList, fetchSubCategoryEvents } from '../../actions/category_actions';

const mapStateToProps = state => ({
  categoryId: state.ui.filter.categoryId,
  subcategory_list: state.ui.subcategory_list
});

const mapDispatchToProps = dispatch => ({
  fetchSubCategoryList: (id) => dispatch(fetchSubCategoryList(id)),
  fetchSubCategoryEvents: (id) => dispatch(fetchSubCategoryEvents(id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SubCategoryList));
