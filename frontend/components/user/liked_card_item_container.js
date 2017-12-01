import { connect } from 'react-redux';
import LikedCardItem from './liked_card_item';
import { deletePerformerLike } from '../../actions/like_actions';

const mapDispatchToProps = dispatch => ({
  deletePerformerLike: (user_id, performer_id) => dispatch(deletePerformerLike(user_id,performer_id))
});

export default connect(null,mapDispatchToProps)(LikedCardItem);
