import { RECEIVE_CATEGORY_LIST } from '../../actions/category_actions';
import { merge } from 'lodash';

const categoryListReducer = (state = [], action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CATEGORY_LIST:
      return action.list;
    default:
    return state;
  }
};

export default categoryListReducer;
