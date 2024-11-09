import axios from "axios";
import {
  setCategoryProducts,
  setErrorLoadingCategoryProducts,
  setErrorLoadingProducts,
  setLoadingCategoryProducts,
  setLoadingProducts,
  setProducts,
} from "../slices/product";
import { ipAddress } from "../../constants";
import { toast } from "react-toastify";

export const getProducts = () => async (dispatch) => {
  dispatch(setLoadingProducts());
  try {
    const { data } = await axios.get(`${ipAddress}/api/v1/products`);
    if (data.status === "SUCCESS") {
      dispatch(setProducts(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLoadingProducts(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const getCategoryProducts = (productCategory) => async (dispatch) => {
  dispatch(setLoadingCategoryProducts());
  try {
    const { data } = await axios.get(
      `${ipAddress}/api/v1/products/category/${productCategory}`
    );
    if (data.status === "SUCCESS") {
      dispatch(setCategoryProducts(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLoadingCategoryProducts(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};
