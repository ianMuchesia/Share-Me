import { baseUrl } from "@/lib/BaseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const postApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:`${baseUrl}`,
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem('token')
            if(token){
                headers.set('Authorization',`Bearer ${token}`)
            }
            return headers
        }
    }),
    reducerPath:"postApis",
    tagTypes:['post'],
    endpoints:(build)=>({
        createPost:build.mutation({
            query:(data)=>({
                url:'post',
                method:'POST',
                body:data
            }),
            invalidatesTags:['post']
        }),
        getPosts:build.query({
            query:()=>({
                url:'post',
                method:'GET'
            }),
            providesTags:['post']
        }),
        getSinglePost:build.query({
            query:(id)=>({
                url:`post/${id}`,
                method:'GET'
            }),
            providesTags:['post']
        }),
        getUserPosts:build.query({
            query:(id)=>({
                url:`post/user/${id}`,
                method:'GET'
            }),
            providesTags:['post']
        }),
        deletePost:build.mutation({
            query:(id)=>({
                url:`post/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['post']
        }),
        updatePost:build.mutation({
            query:(data)=>({
                url:`post/${data.id}`,
                method:'PUT',
                body:data
            }),
            invalidatesTags:['post']
        }),
        votePost:build.mutation({
            query:(data)=>({
                url:`post/vote/${data.id}`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['post']
        }),
        unVotePost:build.mutation({
            query:(data)=>({
                url:`post/unvote/${data.id}`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['post']
        }),

    })

})

export const {useCreatePostMutation,useGetPostsQuery,useGetSinglePostQuery,useGetUserPostsQuery,useDeletePostMutation,useUpdatePostMutation,useVotePostMutation,useUnVotePostMutation} = postApi