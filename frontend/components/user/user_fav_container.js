import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchLikedPerformers, fetchLikedEvents } from '../../actions/like_actions';
import UserFav from './user_fav';

const mapStateToProps = state => ({
  liked: Object.values(state.entities.liked_object_list),
  currentUser: state.session.currentUser,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchLikedPerformers: () => dispatch(fetchLikedPerformers()),
  fetchLikedEvents: () => dispatch(fetchLikedEvents())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserFav));
