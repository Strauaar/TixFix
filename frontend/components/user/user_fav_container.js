import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchLikedPerformers } from '../../actions/like_actions';
import UserFav from './user_fav';

const mapStateToProps = state => ({
  liked: state.entities.liked_object_list
});

const mapDispatchToProps = dispatch => ({
  fetchLikedPerformers: () => dispatch(fetchLikedPerformers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserFav));
