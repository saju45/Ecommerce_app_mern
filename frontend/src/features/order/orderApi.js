import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders/getAllOrders`,
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    getRecentOrders: builder.query({
      query: () => ({
        url: `/orders/getRecentOrders`,
        method: "GET",
        withCredentials: true,
      }),
      providesTags: ["orders"],
    }),

    addOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/addOrder",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/orders/updateOrderStatus/${id}`,
          method: "PUT",
          body: data,
          withCredentials: true,
        };
      },
      invalidatesTags: ["orders"],
    }),

    deleteOrder: builder.mutation({
      query: (orderid) => ({
        url: `/cart/deleteOrder/${orderid}`,
        method: "DELETE",
        withCredentials: true,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetRecentOrdersQuery,
  useAddOrderMutation,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi;
