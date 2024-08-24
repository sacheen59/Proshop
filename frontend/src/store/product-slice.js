import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  products: [],
  loading: true,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {
    productRequest(state, action) {
      state.loading = true;
      state.products = [];
    },
    productSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    productFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
