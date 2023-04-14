import axios from "axios";
import { useSelector } from "react-redux";
import * as types from "./actionTypes";

export const getproducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get("https://dummyecom.onrender.com/products")
    .then((r) => {
      // console.log(r)
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: e });
    });
};

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, payload: item });
};

export const updateCart = (item) => (dispatch) => {

   dispatch({type : types.UPDATE_CART, payload : item})

}


export const filterData = (item) => (dispatch) => {
  console.log("filter k andar aa gaya ")
   dispatch({type: types.FILTER_DATA, payload : item})
}
