import axios from 'axios';
import { authAction } from 'redux/auth';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {};
/*'Artiss',
'qqqqqq@gmail.com',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmMzhkMDIzOTM5NjAwMTc0YTAzOWEiLCJpYXQiOjE2MTU4MDQ2MjR9.Tgu2Y1M1ZjEoTxugG4FuAyoDUHQeS8PaL6-kn2-ZH78' */

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = credentials => dispatch => {
  dispatch(authAction.RegisterRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => dispatch(authAction.RegisterSuccess(response.data)))
    .catch(error => dispatch(authAction.RegisterError(error)));
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const login = {};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logout = {};

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
export default { token, register, login, logout, fetchCurrentUser };
