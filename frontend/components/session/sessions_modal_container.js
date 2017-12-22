import { connect } from 'react-redux';
import { createUser, loginUser } from '../../actions/session_actions';
import { receiveErrors } from '../../actions/error_actions';
import { clearRedirect } from '../../actions/ui_actions';
import SessionsModal from './sessions_modal';

const mapStateToProps = state => ({
  errors: state.errors,
  redirect_url: state.ui.redirect_url
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  createUser: (user) => dispatch(createUser(user)),
  clearErrors: () => dispatch(receiveErrors([])),
  clearRedirect: () => dispatch(clearRedirect())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionsModal);
