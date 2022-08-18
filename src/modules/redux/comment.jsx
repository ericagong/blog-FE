import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchWatcher: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    createComment: (state, action) => {
      state.fetchWatcher = !state.fetchWatcher;
    },
    deleteComment: (state, action) => {
      state.fetchWatcher = !state.fetchWatcher;
    },
    editComment: (state, action) => {
      state.fetchWatcher = !state.fetchWatcher;
    },
  },
});

export const { createComment, deleteComment, editComment } =
  commentSlice.actions;
export default commentSlice.reducer;
