import axios from "axios";
import {
  setDesktopBannerImages,
  setErrorLoadingBannerImages,
  setLoadingBannerImages,
  setMobileBannerImages,
} from "../slices/banner";
import { ipAddress } from "../../constants";
import { toast } from "react-toastify";

export const getDesktopBannerImages = () => async (dispatch) => {
  dispatch(setLoadingBannerImages());
  try {
    const { data } = await axios.get(
      `${ipAddress}/api/v1/banner-images/desktop`
    );
    if (data.status === "SUCCESS") {
      dispatch(setDesktopBannerImages(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLoadingBannerImages(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};
export const getMobileBannerImages = () => async (dispatch) => {
  dispatch(setLoadingBannerImages());
  try {
    const { data } = await axios.get(
      `${ipAddress}/api/v1/banner-images/mobile`
    );
    if (data.status === "SUCCESS") {
      dispatch(setMobileBannerImages(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLoadingBannerImages(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};
