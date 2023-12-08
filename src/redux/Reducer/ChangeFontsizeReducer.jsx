import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fSize: 15,
};

const ChangeFontsizeReducer = createSlice({
  name: "ChangeFontsizeReducer",
  initialState,
  reducers: {
    changeFontsizeAction: (state, action) => {
      const { payload } = action;
      state.fSize += payload;
    },
  },
});

export const { changeFontsizeAction } = ChangeFontsizeReducer.actions;

export default ChangeFontsizeReducer.reducer;
