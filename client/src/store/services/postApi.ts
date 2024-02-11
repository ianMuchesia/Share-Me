import { AccessTokenType, UserType } from "@/@types/auth";
import { PostType } from "@/@types/post";
import { baseUrl } from "@/lib/BaseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        const accessToken = JSON.parse(token) as AccessTokenType;

        headers.set("Authorization", `Bearer ${accessToken.access_token}`);
      }
      return headers;
    },
  }),
  reducerPath: "postApis",
  tagTypes: ["post", "users"],
  endpoints: (build) => ({
    createPost: build.mutation({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    getPosts: build.query<PostType[], void>({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getSinglePost: build.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getMyPosts: build.query({
      query: () => ({
        url: "posts/user",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    getUserPosts: build.query({
      query: (id) => ({
        url: `posts/user/${id}`,
        method: "GET",
      }),
      providesTags: ["post"],
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
    updatePost: build.mutation({
      query: (data) => ({
        url: `posts/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["post"],
    }),
    votePost: build.mutation({
      query: (postId) => ({
        url: `votes/${postId}`,
        method: "POST",
      }),
      invalidatesTags: ["post"],
    }),
    unVotePost: build.mutation({
      query: (postId) => ({
        url: `posts/unvote/${postId}`,
        method: "POST",
      }),
      invalidatesTags: ["post"],
    }),
    getAllUsers: build.query<UserType[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useGetSinglePostQuery,
  useGetUserPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useVotePostMutation,
  useUnVotePostMutation,
  useGetAllUsersQuery,
  useGetMyPostsQuery,
} = postApi;
