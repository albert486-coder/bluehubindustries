import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loadingProducts: false,
  loadingCategoryProducts: false,
  errorLoadingProducts: null,
  errorLoadingCategoryProducts: null,
  products: [],
  categoryProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoadingProducts: (state) => {
      state.loadingProducts = true;
      state.serverStatus = null;
    },
    setLoadingCategoryProducts: (state) => {
      state.loadingCategoryProducts = true;
      state.serverStatus = null;
    },
    setErrorLoadingProducts: (state, { payload }) => {
      state.loadingProducts = false;
      state.error = payload;
    },
    setErrorLoadingCategoryProducts: (state, { payload }) => {
      state.loadingCategoryProducts = false;
      state.error = payload;
    },
    setProducts: (state, { payload }) => {
      state.loadingProducts = false;
      state.error = null;
      state.products = payload;
    },
    setCategoryProducts: (state, { payload }) => {
      state.loadingCategoryProducts = false;
      state.error = null;
      state.categoryProducts = payload;
    },
  },
});

export const {
  setCategoryProducts,
  setErrorLoadingCategoryProducts,
  setErrorLoadingProducts,
  setLoadingCategoryProducts,
  setLoadingProducts,
  setProducts,
} = productsSlice.actions;

export default productsSlice.reducer;

export const productSelector = (state) => state.products;
