import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  loadingUserInfo: false,
  loadingUserRegistration: false,
  loadingUserNames: false,
  error: null,
  errorLogingIn: null,
  errorRegistration: null,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) ?? null,
  user: null,
  userNames: [],
  serverMsg: null,
  serverStatus: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setLoadingUserInfo: (state) => {
      state.loadingUserInfo = true;
    },
    setLoadingUserRegistration: (state) => {
      state.loadingUserRegistration = true;
    },
    setLoadingUsernames: (state) => {
      state.loadingUserNames = true;
    },
    userEmailLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.error = null;
      state.loading = false;
    },
    setUserNames: (state, { payload }) => {
      state.userNames = payload;
      state.error = null;
      state.loadingUserNames = false;
    },
    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.errorLogingIn = null;
      state.errorRegistration = null;
      state.loadingUserInfo = false;
      state.loadingUserRegistration = false;
    },
    userLogout: (state) => {
      state.loadingUserInfo = false;
      state.error = null;
      state.userInfo = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setErrorLogingIn: (state, { payload }) => {
      state.errorLogingIn = payload;
      state.loadingUserInfo = false;
    },
    setErrorRegistration: (state, { payload }) => {
      state.errorRegistration = payload;
      state.loadingUserRegistration = false;
    },
    verificationEmail: (state) => {
      state.userInfo && (state.userInfo.active = true);
      state.loading = false;
      state.error = null;
    },
    setServerResponseMsg: (state, { payload }) => {
      state.serverMsg = payload;
      state.loading = false;
    },
    setServerResponseStatus: (state, { payload }) => {
      state.serverStatus = payload;
      state.loading = false;
    },
    stateReset: (state) => {
      state.loading = false;
      state.serverMsg = null;
      state.error = null;
    },
  },
});

export const {
  setErrorLogingIn,
  setErrorRegistration,
  setError,
  setLoading,
  setLoadingUsernames,
  setUserNames,
  setLoadingUserInfo,
  setLoadingUserRegistration,
  setServerResponseStatus,
  setServerResponseMsg,
  userLogin,
  userLogout,
  verificationEmail,
  stateReset,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user;
