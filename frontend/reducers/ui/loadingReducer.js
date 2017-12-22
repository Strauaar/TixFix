import { LOADING_TRUE, LOADING_FALSE } from '../../actions/event_actions';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case LOADING_TRUE:
      return true;
    case LOADING_FALSE:
      return false;
    default:
      return false;
  }
};

export default loadingReducer;
