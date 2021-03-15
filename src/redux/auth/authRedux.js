import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authAction } from 'redux/auth';

const initialUserState = {
  user: { name: null, email: null },
};

const userReducer = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
});
const tokenReducer = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
});
const errorReducer = createReducer(null, {
  [authAction.registerError]: (_, payload) =>
    'registerError: ' + payload.message,
});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
