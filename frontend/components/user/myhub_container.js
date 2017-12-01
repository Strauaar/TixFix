import { connect } from 'react-redux';
import MyHub from './myhub';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyHub));
