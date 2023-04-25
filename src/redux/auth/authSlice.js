import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logout,
  fecthCurrentUser,
} from '../../redux/auth/authOperation';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fecthCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fecthCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fecthCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authReduser = authSlice.reducer;
