import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loadingBannerImages: false,
  loadingUploadingBannerImage: false,
  loadingDeletingBannerImage: false,
  errorLoadingBannerImages: null,
  errorUploadingBannerImage: null,
  errorDeletingBannerImage: null,
  desktopBannerImages: [],
  mobileBannerImages: [],
};

export const bannerSlice = createSlice({
  name: "bannerImages",
  initialState,
  reducers: {
    setLoadingBannerImages: (state) => {
      state.loadingBannerImages = true;
    },
    setLoadingUploadingBannerImage: (state) => {
      state.loadingUploadingBannerImage = true;
    },
    setLoadingDeletingBannerImage: (state) => {
      state.loadingDeletingBannerImage = true;
    },
    setErrorLoadingBannerImages: (state, { payload }) => {
      state.loadingBannerImages = false;
      state.errorLoadingBannerImages = payload;
    },
    setErrorUploadingBannerImage: (state, { payload }) => {
      state.loadingUploadingBannerImage = false;
      state.errorUploadingBannerImage = payload;
    },
    setErrorDeletingBannerImage: (state, { payload }) => {
      state.loadingDeletingBannerImage = false;
      state.errorDeletingBannerImage = payload;
    },
    setDesktopBannerImages: (state, { payload }) => {
      state.loadingBannerImages = false;
      state.loadingUploadingBannerImage = false;
      state.loadingDeletingBannerImage = false;
      state.errorLoadingBannerImages = null;
      state.desktopBannerImages = payload;
    },
    setMobileBannerImages: (state, { payload }) => {
      state.loadingBannerImages = false;
      state.loadingUploadingBannerImage = false;
      state.loadingDeletingBannerImage = false;
      state.errorLoadingBannerImages = null;
      state.mobileBannerImages = payload;
    },
  },
});

export const {
  setLoadingBannerImages,
  setLoadingUploadingBannerImage,
  setLoadingDeletingBannerImage,
  setErrorDeletingBannerImage,
  setErrorLoadingBannerImages,
  setErrorUploadingBannerImage,
  setDesktopBannerImages,
  setMobileBannerImages,
} = bannerSlice.actions;

export default bannerSlice.reducer;

export const bannerSelector = (state) => state.bannerImages;
