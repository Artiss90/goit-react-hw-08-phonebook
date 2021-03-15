import axios from 'axios';
import { authAction } from 'redux/auth';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    console.log(axios.defaults.headers.common);
    console.log(axios.defaults.headers.common.Authorization);
    return (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
  },
  unset() {
    console.log(axios.defaults.headers.common.Authorization);
    return (axios.defaults.headers.common.Authorization = '');
  },
};
/*'Artiss1990',
'artiss90@gmail.com'
/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => dispatch => {
  dispatch(authAction.registerRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      return dispatch(authAction.registerSuccess(response.data));
    })
    .catch(error => dispatch(authAction.registerError(error)));
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const login = credentials => dispatch => {
  dispatch(authAction.loginRequest());
  axios
    .post('/users/login', credentials)
    .then(response => {
      token.set(response.data.token);
      return dispatch(authAction.loginSuccess(response.data));
    })
    .catch(error => dispatch(authAction.loginError(error)));
};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logout = () => dispatch => {
  dispatch(authAction.logoutRequest());
  axios
    .post('/users/logout')
    .then(_ => {
      token.unset();
      return dispatch(authAction.logoutSuccess());
    })
    .catch(error => dispatch(authAction.logoutError(error)));
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register, login, logout, fetchCurrentUser };
