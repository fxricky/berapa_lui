import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transaction';
import userReducer from './user';

export const store = configureStore({
  reducer: { transaction: transactionReducer, user: userReducer },
});
