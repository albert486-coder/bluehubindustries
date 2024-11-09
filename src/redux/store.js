import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import category from "./slices/category";
import banner from "./slices/banner";
import product from "./slices/product";

const reducer = combineReducers({
  user,
  category,
  banner,
  product,
});

export default configureStore({ reducer });
