import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsRedux } from 'redux/contactsRedux';
import { authRedux } from 'redux/auth';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

/* auth:
{ user,
  token,
  error },
  contacts: 
{ item,
  filter,
  loading,
  error }*/

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authRedux),
    contacts: contactsRedux,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: true,
});

const persiststore = persistStore(store);

// const store = configureStore({
//   reducer: { contacts: persistReducer(persistConfig, contactsRedux) },
//   middleware: getDefaultMiddleware =>
// getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }).concat(logger),
//   devTools: true,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persiststore };
// export default { store };
