import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { loginUser, logoutUser } from './utils/session_util';
import { fetchEvents } from './utils/event_util';
import * as SessionApiUtil from './utils/session_util';
import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
         loginUser,
         logoutUser,
         createUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  // window.loginUser = SessionApiUtil.loginUser;
  // window.logoutUser = SessionApiUtil.logoutUser;
  const store = configureStore();
  window.store = store;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.createUser = createUser;
  window.fetchEvents = fetchEvents;
  // window.apicreateUser = SessionApiUtil.createUser;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
