import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.productId === existItem.productId ? item : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.productId !== action.payload)
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
