import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialAuthState = {
  isLoggedIn: false,
  token: null,
};

// Create slice
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

// Export actions
export const { loginSuccess, logout } = authSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;