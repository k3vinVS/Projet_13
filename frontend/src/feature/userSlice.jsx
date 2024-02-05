import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
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
  },
});

export const { setUserStart, setUserData, setUserFailure } = userSlice.actions;
export default userSlice.reducer;
