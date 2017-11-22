import * as SessionApiUtil from '../utils/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const loginUser = (user) => dispatch => (
  SessionApiUtil.loginUser(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logoutUser = () => dispatch => (
  SessionApiUtil.logoutUser().then( () => dispatch(logoutCurrentUser()))
);

export const createUser = (user) => dispatch => (
  SessionApiUtil.createUser(user).then(user => dispatch(receiveCurrentUser(user)))
)
