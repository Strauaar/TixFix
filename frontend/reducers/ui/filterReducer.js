import { RECEIVE_EVENTS } from '../../actions/event_actions';
import { CLEAR_FILTER } from '../../actions/ui_actions';
import { merge } from 'lodash';

const initialState = {
  categoryId: null,
  date: null,
  location: null,
  name: null
}

const filterReducer = (state = initialState, action ) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_EVENTS:
      newState = merge({}, state, action.filter);
      return newState;
    case CLEAR_FILTER:
      return {
                categoryId: null,
                date: null,
                location: null,
                name: null
              }
    default:
    return state;
  }
};

export default filterReducer;
