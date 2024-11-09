import axios from "axios";
import {
  setErrorLoadingProductCategories,
  setLoadingProductCategories,
  setProductCategories,
} from "../slices/category";
import { ipAddress } from "../../constants";
import { toast } from "react-toastify";

export const getProductCategories = () => async (dispatch) => {
  dispatch(setLoadingProductCategories());
  try {
    const { data } = await axios.get(`${ipAddress}/api/v1/product-categories`);
    if (data.status === "SUCCESS") {
      dispatch(setProductCategories(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLoadingProductCategories(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};
