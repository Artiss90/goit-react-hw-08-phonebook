import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authAction } from 'redux/auth';

const initialUserState = {
  name: null,
  email: null,
};

const userReducer = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.logoutSuccess]: (_, __) => initialUserState,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
});
const tokenReducer = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: (_, __) => null,
});

//*абстрагируем вывод ошибки
const setError = (_, { payload }) => {
  return payload.message;
};

const errorReducer = createReducer(null, {
  [authAction.registerError]: setError,
  [authAction.loginError]: setError,
  [authAction.logoutError]: setError,
  [authAction.getCurrentUserError]: setError,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
