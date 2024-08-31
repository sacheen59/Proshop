import { userActions } from "../user-slice";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userActions.userLoginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = axios.post(
      "api/users/login/",
      {
        username: email,
        password: password,
      },
      config
    );

    dispatch(userActions.userLoginSuccess(data));

    // setting data to the localStorage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userActions.userLoginFailed(
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
      )
    );
  }
};
