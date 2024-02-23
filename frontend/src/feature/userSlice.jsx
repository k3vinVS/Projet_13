import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  rememberMe: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserStart: (state) => {
      state.loading = true;
    },
    setUserData: (state, { payload }) => {
      state.currentUser = payload;
      state.loading = false;
      state.error = null;
    },
    setUserFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setUserDelete: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.rememberMe = false;
    },
    setUserStorage: (state) => {
      state.rememberMe = true;
    },
  },
});

export const {
  setUserStart,
  setUserData,
  setUserFailure,
  setUserUpdate,
  setUserDelete,
  setUserStorage,
  setUserReset,
} = userSlice.actions;
export default userSlice.reducer;
