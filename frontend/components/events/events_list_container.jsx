import { connect } from 'react-redux';
import { fetchEvents, fetchSearchEvents } from '../../actions/event_actions';
import EventsList from './events_list';
import { withRouter } from 'react-router-dom';
import { clearFilter } from '../../actions/ui_actions';
import { fetchPerformerLikes, fetchEventLikes } from '../../actions/like_actions';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  categoryId: state.ui.filter.categoryId,
  filter: state.ui.filter
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (filter) => dispatch(fetchEvents(filter)),
  fetchSearchEvents: (filter) => dispatch(fetchSearchEvents(filter)),
  clearFilter: () => dispatch(clearFilter()),
  fetchPerformerLikes: () => dispatch(fetchPerformerLikes()),
  fetchEventLikes: () => dispatch(fetchEventLikes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsList));
