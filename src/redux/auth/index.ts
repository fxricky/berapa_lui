import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { addOrUpdateUser } from '../../dataAccess/users';
import { firebaseAuthInstance } from '../../firebase';

export const login = createAsyncThunk<any, any>(
  'auth/login',
  async (userInfo) => {
    const { displayName, email, photoURL } = userInfo;
    console.log(userInfo);
    await addOrUpdateUser({
      id: userInfo.uid,
      data: {
        displayName,
        email,
        photoURL,
      },
    });

    return userInfo;
  }
);

export const logout = createAsyncThunk<any, any>(
  'auth/logout',
  async (undefined, { rejectWithValue }) => {
    try {
      await signOut(firebaseAuthInstance);

      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    account: null,
  },
  reducers: {
    logout: (state) => {
      state.account = null;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(login.fulfilled, (state, action) => {
        state.account = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.account = null;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
