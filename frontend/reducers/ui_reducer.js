import { RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_CATEGORY_LIST } from '../actions/category_actions';
import { merge } from 'lodash';

const initialState = {
  categoryId: null
};

const uiReducer = (state = initialState, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState = Object.assign({}, { categoryId: action.categoryId });
      return newState;
    case RECEIVE_CATEGORY_LIST:
      newState = merge({}, state, { subcategory_list: action.list })
      return newState;
    default:
    return state;
  }
};

export default uiReducer;
