import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authAction } from 'redux/auth';

const initialUserState = {
  user: { name: null, email: null },
};

const userReducer = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.logoutSuccess]: (_, __) => initialUserState,
});
const tokenReducer = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: (_, __) => null,
});
const errorReducer = createReducer(null, {
  [authAction.registerError]: (_, { payload }) =>
    'registerError: ' + payload.message,
  [authAction.loginError]: (_, { payload }) => 'loginError: ' + payload.message,
  [authAction.logoutError]: (_, { payload }) =>
    'loginError: ' + payload.message,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
