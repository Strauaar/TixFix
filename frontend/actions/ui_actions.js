import { ADD_REDIRECT, CLEAR_REDIRECT } from './misc_const';

export const CLEAR_FILTER = "CLEAR_FILTER";

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const addRedirect = (url) => ({
  type: ADD_REDIRECT,
  url
});

export const clearRedirect = () => ({
  type: CLEAR_REDIRECT
});
