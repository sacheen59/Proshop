import axios from "axios";
import { cartActions } from "../cart-slice";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  const cartItem = {
    productId: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  };
  dispatch(cartActions.addItemToCart(cartItem));

  //   to save data in local storage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(cartActions.removeItemFromCart(id));

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
