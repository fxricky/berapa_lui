import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transaction';
import userReducer from './user';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
