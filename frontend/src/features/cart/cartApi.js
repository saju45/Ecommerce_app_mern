import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartData: builder.query({
      query: () => ({
        url: `/cart/getCartData`,
        method: "GET",
      }),
      providesTags: ["carts"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart/add-to-cart",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),
    updateCartQuantity: builder.mutation({
      query: (data) => {
        return {
          url: `/cart/updateCart`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["carts"],
    }),

    deleteFromCart: builder.mutation({
      query: (productid) => ({
        url: `/cart/removeCartData`,
        method: "PUT",
        withCredentials: true,
        headers: {
          productid,
        },
      }),
      invalidatesTags: ["carts"],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart/clearCart",
        method: "PUT",
        withCredentials: true,
      }),
      invalidatesTags: ["carts"],
    }),
  }),
});

export const {
  useGetCartDataQuery,
  useAddToCartMutation,
  useUpdateCartQuantityMutation,
  useDeleteFromCartMutation,
  useClearCartMutation,
} = cartApi;
