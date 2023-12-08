import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userComment: {
    name: "",
    content: "",
  },

  arrComment: [
    { name: "abc", content: "hello cybersoft" },
    { name: "xyz", content: "hello cybersoft bc57" },
  ],
};

const ChatReducer = createSlice({
  name: "ChatReducer",
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
      const { id, value } = action.payload;
      state.userComment[id] = value;
    },
    addUserCommentAction: (state, action) => {
      const { payload } = action;
      state.arrComment.push(payload);
    },
  },
});

export const { updateUserCommentAction, addUserCommentAction } =
  ChatReducer.actions;

export default ChatReducer.reducer;
