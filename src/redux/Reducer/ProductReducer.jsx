import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[2,3,5]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      size: "[36,37,38,39,40,41,42]",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      deleted: false,
      categories:
        '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
      relatedProducts: "[1,4,6]",
      feature: false,
      image:
        "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    },
  ],
};

const ProductReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrayProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductThunkAction.fulfilled, (state, action) => {
      state.arrProduct = action.payload;
    });
  },
});

export const { setArrayProductAction } = ProductReducer.actions;

export default ProductReducer.reducer;
//---------action thunk (action bất đồng bộ)---------------

export const getAllProductApiAction = () => {
  return async (dispatch) => {
    const res = await http.get("/Product");
    const action = setArrayProductAction(res.data.content);
    dispatch(action);
  };
};

export const getAllProductThunkAction = createAsyncThunk(
  "productReducer/getAllProductThunkAction",
  async () => {
    const res = await http.get("/Product");
    //return kết quả
    return res.data.content;
  }
);
