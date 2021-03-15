import { createAction } from '@reduxjs/toolkit';

const RegisterRequest = createAction('auth/RegisterRequest');
const RegisterSuccess = createAction('auth/RegisterSuccess');
const RegisterError = createAction('auth/RegisterError');

const LoginRequest = createAction('auth/LoginRequest');
const LoginSuccess = createAction('auth/LoginSuccess');
const LoginError = createAction('auth/LoginError');

const LogoutRequest = createAction('auth/LogoutRequest');
const LogoutSuccess = createAction('auth/LogoutSuccess');
const LogoutError = createAction('auth/LogoutError');

const GetCurrentUserRequest = createAction('auth/GetCurrentUserRequest');
const GetCurrentUserSuccess = createAction('auth/GetCurrentUserSuccess');
const GetCurrentUserError = createAction('auth/GetCurrentUserError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  RegisterRequest,
  RegisterSuccess,
  RegisterError,
  LoginRequest,
  LoginSuccess,
  LoginError,
  LogoutRequest,
  LogoutSuccess,
  LogoutError,
  GetCurrentUserRequest,
  GetCurrentUserSuccess,
  GetCurrentUserError,
};
