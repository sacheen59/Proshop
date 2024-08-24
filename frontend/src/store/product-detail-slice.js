import { createSlice } from "@reduxjs/toolkit";

const initialProductDetailState = {
  product: {
    reviews: [],
  },
  loading: true,
  error: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: initialProductDetailState,
  reducers: {
    productDetailRequest(state, action) {
      state.loading = true;
      state.product = {};
    },
    productDetailSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
export default productDetailSlice;
