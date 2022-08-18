import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import user from "../redux/user";
import comment from "../redux/comment";

const logger = createLogger();

const store = configureStore({
  reducer: { user, comment },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
