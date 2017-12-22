import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import  logger  from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const check_state = () => {
  let state = {}
  if(window.currentUser) {
    state = {
              session:
                  {
                    currentUser: window.currentUser
                  }
            };
    delete window.currentUser
  }
  return state
}

const configureStore = () => {
  let preloadedState = check_state();
  return createStore(rootReducer,preloadedState, applyMiddleware(thunk, logger))
};

export default configureStore;
