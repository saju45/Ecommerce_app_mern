import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (searchTerm) => {
        console.log("searchTerm : ", searchTerm);
        return {
          url: `/products/fetchAllProduct?search=${searchTerm}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getNewArrivals: builder.query({
      query: () => ({
        url: "/products/fetchNewArrivals",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    getProductByCategory: builder.query({
      query: (category) => ({
        url: `/products/fetchProductByCategory/${category}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/products/addProduct",
        method: "POST",
        body: formData,
        withCredentials: true,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log("id : ", id);
        return {
          url: `/products/updateProduct/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        withCredentials: true,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetNewArrivalsQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
