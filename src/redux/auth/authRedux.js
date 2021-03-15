import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authAction } from 'redux/auth';

const initialUserState = {
  user: { name: null, email: null },
};

const userReducer = createReducer(initialUserState, {});
const tokenReducer = createReducer(null, {});
const errorReducer = createReducer(null, {});

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});
