import axios from "axios";
import {
  setErrorLogingIn,
  setErrorRegistration,
  setLoading,
  setError,
  setLoadingUserInfo,
  setLoadingUserRegistration,
  setServerResponseStatus,
  setServerResponseMsg,
  userLogin,
  userLogout,
  verificationEmail,
  stateReset,
} from "../slices/user";
import { ipAddress } from "../../constants";
import { toast } from "react-toastify";

export const loginUser = (values) => async (dispatch) => {
  dispatch(setLoadingUserInfo(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${ipAddress}/api/v1/users/login`,
      values,
      config
    );
    if (data.status === "SUCCESS") {
      toast.success(data.message);
      dispatch(userLogin(data.data));
      localStorage.setItem("userInfo", JSON.stringify(data.data));
    }
  } catch (error) {
    dispatch(
      setErrorLogingIn(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  toast.success("Logout Successfull!");
  dispatch(userLogout());
};

export const registerUser = (values) => async (dispatch) => {
  dispatch(setLoadingUserRegistration(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${ipAddress}/api/v1/users/register`,
      values,
      config
    );

    if (data.status === "SUCCESS") {
      toast.success(data.message);
      dispatch(userLogin(data.data));
      localStorage.setItem("userInfo", JSON.stringify(data.data));
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
    dispatch(
      setErrorRegistration(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const verifyEmail = (token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    await axios.get(`${ipAddress}/api/v1/users/verify-email`, config);

    dispatch(verificationEmail());
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      userInfo.active = true;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const sendResetEmail = (email) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    const { data, status } = await axios.post(
      `${ipAddress}/api/v1/users/password-reset-request`,
      { email },
      config
    );

    dispatch(setServerResponseMsg(data));
    dispatch(setServerResponseStatus(status));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const resetPassword = (password, token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const { data, status } = await axios.post(
      `${ipAddress}/api/v1/users/password-reset`,
      { password },
      config
    );
    console.log(data, status);
    dispatch(setServerResponseMsg(data, status));
    dispatch(setServerResponseStatus(status));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An expected error has occured. Please try again later."
      )
    );
  }
};

export const resetState = () => async (dispatch) => {
  dispatch(stateReset());
};

export const googleLogin =
  (googleId, email, name, googleImage) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `${ipAddress}/api/v1/users/google-login`,
        { googleId, email, name, googleImage },
        config
      );
      dispatch(userLogin(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An expected error has occured. Please try again later."
        )
      );
    }
  };
