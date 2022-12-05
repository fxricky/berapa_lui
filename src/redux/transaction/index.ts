import { createSlice } from '@reduxjs/toolkit';
import { Transaction } from '../../type';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      console.log(state, action.payload);
      state.transactions.push(action.payload);
    },
    editTransaction: (state, action) => {
      const trnIndex = state.transactions.findIndex(action.payload.id);
      state.transactions[trnIndex] = action.payload;
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
    },
  },
});

export const { addTransaction, editTransaction, deleteTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
