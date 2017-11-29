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


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.store = store;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.createUser = createUser;
  window.fetchEvents = fetchEvents;
  window.fetchEventByCategory = fetchEventByCategory;

  window.fetchMoreEvents = fetchMoreEvents;
  window.fetchSubCategoryList = fetchSubCategoryList;
  window.fetchSubCategoryEvents = fetchSubCategoryEvents;
  window.fetchPerformerLikes = fetchPerformerLikes;
  window.createPerformerLike = createPerformerLike;
  window.fetchEventTickets = TicketApiUtil.fetchEventTickets;
  window.fetchSellingTickets = TicketApiUtil.fetchSellingTickets;
  window.fetchBuyingTickets = TicketApiUtil.fetchBuyingTickets;

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
