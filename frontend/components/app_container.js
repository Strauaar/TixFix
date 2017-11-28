import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';

const mapStateToProps = state => ({
  categoryId: state.ui.filter.categoryId
});

export default withRouter(connect(mapStateToProps)(App));
