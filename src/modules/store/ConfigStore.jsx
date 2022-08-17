import { configureStore } from "@reduxjs/toolkit";
import user from "../redux/user";
import comment from "../redux/comment";

const store = configureStore({
  reducer: { user, comment },
});

export default store;
