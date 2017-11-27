import { connect } from 'react-redux';
import EventShowPage from './event_show_page';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
  eventQ: state.entities.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShowPage));
