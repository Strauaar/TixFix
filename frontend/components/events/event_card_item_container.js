import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventCardItem from './event_card_item';
import { createPerformerLike, deletePerformerLike } from '../../actions/like_actions';

const mapStateToProps = state => ({
  liked_performers_ids: state.entities.liked_performers_ids,
  current_user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPerformerLike: (user_id, performer_id) => dispatch(createPerformerLike(user_id, performer_id)),
  deletePerformerLike: (user_id, performer_id) => dispatch(deletePerformerLike(user_id, performer_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventCardItem))
