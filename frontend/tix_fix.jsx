import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {  fetchMoreEvents } from './actions/event_actions';
import { fetchPerformerLikes, createPerformerLike, deletePerformerLike } from './actions/like_actions';
import { fetchEventByCategory, fetchEvents } from './utils/event_util';
import * as SessionApiUtil from './utils/session_util';
import * as TicketApiUtil from './utils/ticket_util';
import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
         loginUser,
         logoutUser,
         createUser } from './actions/session_actions';
import * as CategoryUtil from './utils/category_util';
import { fetchSubCategoryList, fetchSubCategoryEvents } from './actions/category_actions';
import { receiveTickets, fetchSellingTickets } from './actions/ticket_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
