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
  }),
});

export const { useGetUserInfoQuery, useUpdateProfileImageMutation } = userApi;
