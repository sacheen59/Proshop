import { createSlice } from "@reduxjs/toolkit";

const initialUserSlice = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: true,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserSlice,
  reducers: {
    userLoginRequest(state, action) {
      state.loading = true;
    },
    userLoginSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout(state, action) {
      state = {};
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
