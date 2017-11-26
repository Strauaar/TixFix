import { connect } from 'react-redux';
import EventShowPage from './event_show_page';
import { withRouter } from 'react-router-dom';
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShowPage));
