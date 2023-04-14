import axios from "axios";
import * as types from "./actionTypes";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("https://dummyecom.onrender.com/signin", payload)
    .then((r) => {
      console.log(r);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: r.data.token });
      if (r.data.token !== undefined) {
        localStorage.setItem("token", r.data.token);
        //   window.location.href = "/"
      } else {
        alert("Please add valid email && password");
      }
    })
    .catch((e) => {
      dispatch({ type: types.USER_LOGIN_FAILURE });
      console.log(e);
    });
};

export const logout = () => (dispatch) => {
  console.log("dispatch logout");

  dispatch({ type: types.USER_LOGOUT_SUCESS });
  localStorage.clear("token");
  // navigate("/");
};

export const googleLogin = (value) => (dispatch) => {
  dispatch({ type: types.USER_GOOGLE_LOGIN, payload: value });
};
