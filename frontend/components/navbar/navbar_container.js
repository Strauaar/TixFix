import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser;
})

export default connect(mapStateToProps)(NavBar);
