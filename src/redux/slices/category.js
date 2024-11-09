import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loadingProductCategories: false,
  loadingUploadingProductCategory: false,
  loadingDeletingProductCategory: false,
  errorLoadingProductCategories: null,
  errorUploadingProductCategory: null,
  errorDeletingProductCategory: null,
  productCategories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setLoadingProductCategories: (state) => {
      state.loadingProductCategories = true;
    },
    setLoadingUploadingProductCategory: (state) => {
      state.loadingUploadingProductCategory = true;
    },
    setLoadingDeletingProductCategory: (state) => {
      state.loadingDeletingProductCategory = true;
    },
    setErrorLoadingProductCategories: (state, { payload }) => {
      state.loadingProductCategories = false;
      state.errorLoadingProductCategories = payload;
    },
    setErrorUploadingProductCategory: (state, { payload }) => {
      state.loadingUploadingProductCategory = false;
      state.errorUploadingProductCategory = payload;
    },
    setErrorDeletingProductCategory: (state, { payload }) => {
      state.loadingDeletingProductCategory = false;
      state.errorDeletingProductCategory = payload;
    },
    setProductCategories: (state, { payload }) => {
      state.loadingProductCategories = false;
      state.loadingUploadingProductCategory = false;
      state.loadingDeletingProductCategory = false;
      state.error = null;
      state.productCategories = payload;
    },
  },
});

export const {
  setLoadingProductCategories,
  setLoadingUploadingProductCategory,
  setLoadingDeletingProductCategory,
  setErrorDeletingProductCategory,
  setErrorLoadingProductCategories,
  setErrorUploadingProductCategory,
  setProductCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const categorySelector = (state) => state.categories;
