import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsRedux } from 'redux/contactsRedux';

const store = configureStore({
  reducer: { contacts: contactsRedux },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: true,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'listContacts',
//   storage,
//   whitelist: ['items'],
// };
// const store = configureStore({
//   reducer: { contacts: persistReducer(persistConfig, contactsRedux) },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: true,
// });

// const persiststore = persistStore(store);

// export default { store, persiststore };
