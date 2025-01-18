import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: ({ page, limit }) => ({
        url: `/blog/fetchAllBlogs?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog//fetchSingleBlog/${id}`,
        method: "GET",
      }),
    }),
    getFavouriteBlogs: builder.query({
      query: () => ({
        url: `/blog/getAllFavourtie`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    addBlog: builder.mutation({
      query: (formData) => ({
        url: "/blog/addBlog",
        method: "POST",
        body: formData,
        withCredentials: true,
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/blog//updateBlog/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["blogs"],
    }),
    addToFavourite: builder.mutation({
      query: (blogid) => ({
        url: `/blog/addToFavourite/${blogid}`,
        method: "PUT",
        withCredentials: true,
      }),
    }),
    removedFromFavourite: builder.mutation({
      query: (blogid) => ({
        url: `/blog/removeFromFavourite/${blogid}`,
        method: "PUT",
        withCredentials: true,
      }),
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/deleteBlog/${id}`,
        method: "DELETE",
        withCredentials: true,
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useGetFavouriteBlogsQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useAddToFavouriteMutation,
  useRemovedFromFavouriteMutation,
  useDeleteBlogMutation,
} = blogApi;
