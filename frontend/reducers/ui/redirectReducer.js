import { ADD_REDIRECT, CLEAR_REDIRECT } from '../../actions/misc_const';

const redirectReducer = (state = null, action) => {
  switch(action.type) {
    case ADD_REDIRECT:
      return action.url;
    case CLEAR_REDIRECT:
      return null;
    default:
      return state;
  };
};

export default redirectReducer;
