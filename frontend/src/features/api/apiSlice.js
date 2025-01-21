import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
    credentials: "include",
  }),
  tagTypes: ["products", "blogs", "carts", "profile", "category", "orders"],
  endpoints: () => ({}),
});
