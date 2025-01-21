import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: "/users/getUserInfo",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    getAllUser: builder.query({
      query: ({ page, keyword }) => {
        return {
          url: `/users/getAllUser?page=${page}&keyword=${keyword}`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
    updateProfileImage: builder.mutation({
      query: (data) => {
        return {
          url: `/users/updateProfilePic`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["profile"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/users/deleteUser/${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateProfileImageMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = userApi;
