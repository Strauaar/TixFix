import { RECEIVE_EVENTS } from '../../actions/event_actions';
import { merge } from 'lodash';

const initialState = {
  categoryId: null,
  date: null,
  location: null
}

const filterReducer = (state = initialState, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState = merge({}, state, action.filter);
      return newState;
    default:
    return state;
  }
};

export default filterReducer;
