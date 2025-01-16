import { apiSlice } from "../api/apiSlice";
import { login as userLogin, logout as userLogout } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/users/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: response.data.token,
              user: response.data.user,
            })
          );

          dispatch(
            userLogin({
              user: response.data.user,
            })
          );
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: response.data.token,
              user: response.data.user,
            })
          );

          dispatch(
            userLogin({
              user: response.data.user,
            })
          );
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      },
    }),
    adminLoginFn: builder.mutation({
      query: (data) => ({
        url: "/admin/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: response.data.token,
              user: response.data.user,
            })
          );

          dispatch(
            userLogin({
              user: response.data.user,
            })
          );
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          localStorage.removeItem("auth");
          dispatch(userLogout);
          // Navigate to login page
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/users/changePassword",
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          localStorage.removeItem("auth");
          dispatch(userLogout);
          // Navigate to login page
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAdminLoginFnMutation,
  useLogoutMutation,
  useChangePasswordMutation,
} = authApi;
