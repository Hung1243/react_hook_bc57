import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Reducer/ChatReducer";
import ChangeFontsizeReducer from "./Reducer/ChangeFontsizeReducer";
import CRUDProductReducer from "./Reducer/CRUDProductReducer";

export const store = configureStore({
  reducer: {
    //casc state ung dung
    chatReducer: ChatReducer,
    changeFontsizeReducer: ChangeFontsizeReducer,
    crudProductReducer: CRUDProductReducer,
  },
});
