import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Reducer/ChatReducer";
import ChangeFontsizeReducer from "./Reducer/ChangeFontsizeReducer";
import CRUDProductReducer from "./Reducer/CRUDProductReducer";
import ProductReducer from "./Reducer/ProductReducer";

export const store = configureStore({
  reducer: {
    //casc state ung dung
    chatReducer: ChatReducer,
    changeFontsizeReducer: ChangeFontsizeReducer,
    crudProductReducer: CRUDProductReducer,
    productReducer: ProductReducer,
  },
});
