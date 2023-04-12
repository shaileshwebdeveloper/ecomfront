import axios from "axios"
import { useSelector } from "react-redux"
import * as types from "./actionTypes"




export const getproducts = (params) => dispatch =>  {
    dispatch({type:  types.GET_PRODUCTS_REQUEST})
     return axios.get('https://dummyecom.onrender.com/products', params).then(r => {
        // console.log(r)
         dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: r.data})
     }).catch(e => {
         dispatch({type: types.GET_PRODUCTS_FAILURE, payload:  e})
     })
  
  }


export const addToCart = (item) => dispatch => {

     dispatch({type : types.ADD_TO_CART, payload : item})

}