import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

import categoryReducer from "../features/categories/categorySlice";
import filterReducer from "../features/filter/filterSlice";
import authRoute from "./auth";
import prodReducer from "./prodRoute";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    prod: prodReducer,
    auth: authRoute,
    category: categoryReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
