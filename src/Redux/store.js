import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isLoggedIn: false,
  token: null,
  language: "ar",
};
const authSlice = createSlice({
  name: "auth",
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
    changeLanguage(state, action) {
      state.language = action.payload;
    },
  },
});
export const { loginSuccess, logout, changeLanguage } = authSlice.actions;
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
export default store;
