import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import categoryReducer from "../features/categories/categorySlice";
import authRoute from "./auth";
import prodReducer from "./prodRoute";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    prod: prodReducer,
    auth: authRoute,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
