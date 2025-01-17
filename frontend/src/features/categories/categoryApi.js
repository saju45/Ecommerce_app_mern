import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `/categories/getAllCategories`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/categories/getCategory/${id}`,
        method: "GET",
      }),
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/categories/addCategory",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/categories/updateCategories/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["category"],
    }),

    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/categories/deleteCategory/${categoryId}`,
        method: "DELETE",
        withCredentials: true,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
