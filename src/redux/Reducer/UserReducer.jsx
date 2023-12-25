import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";
import { TOKEN, USER_LOGIN, http } from "../../util/config";

//xử lý load giá trị ban đầu cho state từ storage(localstorage)
let userLoginDefault = {
  email: "",
  accessToken: "",
};
if (localStorage.getItem(USER_LOGIN)) {
  userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userProfile: {},
  userLogin: userLoginDefault,
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { loginAction, getProfileAction } = UserReducer.actions;

export default UserReducer.reducer;

//action thunk-----------------------------------

export const loginApiAction = (userLogin) => {
  return async (dispatch) => {
    try {
      //call api
      const res = await http.post("/Users/signin", userLogin);
      //sau khi lấy được token thì lưu vào local storage
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(res.data.content));
      //gửi dữ liệu sau khi thành công vào reducer
      const action = loginAction(res.data.content);
      dispatch(action);
    } catch (err) {
      if (err.response?.status == 404) {
        alert("tài khoản mật khẩu không đúng");
        window.location.href = "/login";
      }
    }
  };
};

export const getProfileApiAction = () => {
  return async (dispatch) => {
    const res = await http.post("/Users/getProfile");
    //sau khi có được dữ liệu thì dispatch lên reducer
    const action = getProfileAction(res.data.content);
    dispatch(action);
  };
};
