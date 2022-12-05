import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: () => {},
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
