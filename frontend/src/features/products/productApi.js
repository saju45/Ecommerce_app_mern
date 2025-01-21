import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        searchTerm,
        category,
        minPrice,
        maxPrice,
        page,
        brand,
        region,
      }) => {
        const params = [];

        if (searchTerm) params.push(`search=${searchTerm}`);
        if (category) params.push(`category=${category}`);
        if (brand) params.push(`brand=${brand}`);
        if (minPrice) params.push(`minPrice=${minPrice}`);
        if (maxPrice) params.push(`maxPrice=${maxPrice}`);
        if (region) params.push(`region=${region}`);
        if (page) params.push(`page=${page}`);
        params.push(`limit=10`);
        const queryString = params.join("&");

        return {
          url: `/products/fetchAllProduct?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getBrandsByCategory: builder.query({
      query: (category) => ({
        url: `/products/fetchBrands?category=${category}`,
        method: "GET",
      }),
    }),
    getProducts: builder.query({
      query: () => {
        return {
          url: `/products/allProducts`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getShippingRegions: builder.query({
      query: () => ({
        url: "/products/getShiping",
        method: "GET",
      }),
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
  useGetBrandsByCategoryQuery,
  useGetProductsQuery,
  useGetShippingRegionsQuery,
  useGetNewArrivalsQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
