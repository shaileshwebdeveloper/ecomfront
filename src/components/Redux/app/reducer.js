import * as types from "./actionTypes";

const initialState = {
  products: [],
  cartProducts: [],
  isLoading: false,
  isError: false,
  wishlist: []
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
        isError: false,
      };

    case types.GET_PRODUCTS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        products: [],
        isError: true,
      };

    case types.ADD_TO_CART:
      return {
        ...oldState,
        cartProducts: [...oldState.cartProducts, payload],
      };

    case types.FILTER_DATA:
      return {
        ...oldState,
        products: payload,
      };

    case types.UPDATE_CART:
      return {
        ...oldState,
        cartProducts: payload,
      };

    case types.ADD_TO_WISHLIST:
      return{
        ...oldState,
        wishlist : [...oldState.wishlist, payload]
      }

    default:
      return oldState;
  }
};
