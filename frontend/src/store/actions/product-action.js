import axios from "axios";
import { productActions } from "../product-slice";
import { productDetailActions } from "../product-detail-slice";

//function to fetch product
export const fetchProductData = () => async (dispatch) => {
  try {
    dispatch(productActions.productRequest());
    const { data } = await axios.get("/api/products/");
    dispatch(productActions.productSuccess(data));
  } catch (error) {
    dispatch(
      productActions.productFailure(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};

//function to fetch product Detail

export const fetchProductDetailData = (id) => async (dispatch) => {
  try {
    dispatch(productDetailActions.productDetailRequest());
    //api call
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(productDetailActions.productDetailSuccess(data));
  } catch (error) {
    dispatch(
      productDetailActions.productDetailFailure(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};
