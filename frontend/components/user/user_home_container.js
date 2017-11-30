import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { upcomingEvents } from '../../actions/event_actions';
import UserHome from './user_home';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  upcomingEvents: () => dispatch(upcomingEvents())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserHome));
