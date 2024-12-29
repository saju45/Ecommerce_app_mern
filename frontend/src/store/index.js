import { configureStore } from "@reduxjs/toolkit";

import authRoute from "./auth";
import prodReducer from "./prodRoute";

export const store = configureStore({
  reducer: {
    prod: prodReducer,
    auth: authRoute,
  },
});
