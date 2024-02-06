import { PostType } from "@/@types/post";
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
        getPosts:build.query<PostType[],void>({
            query:()=>({
                url:'posts',
                method:'GET'
            }),
            providesTags:['post']
        }),
        getSinglePost:build.query({
            query:(id)=>({
                url:`posts/${id}`,
                method:'GET'
            }),
            providesTags:['post']
        }),
        getUserPosts:build.query({
            query:(id)=>({
                url:`posts/user/${id}`,
                method:'GET'
            }),
            providesTags:['post']
        }),
        deletePost:build.mutation({
            query:(id)=>({
                url:`posts/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['post']
        }),
        updatePost:build.mutation({
            query:(data)=>({
                url:`posts/${data.id}`,
                method:'PUT',
                body:data
            }),
            invalidatesTags:['post']
        }),
        votePost:build.mutation({
            query:(data)=>({
                url:`posts/vote/${data.id}`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['post']
        }),
        unVotePost:build.mutation({
            query:(data)=>({
                url:`posts/unvote/${data.id}`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['post']
        }),

    })

})

export const {useCreatePostMutation,useGetPostsQuery,useGetSinglePostQuery,useGetUserPostsQuery,useDeletePostMutation,useUpdatePostMutation,useVotePostMutation,useUnVotePostMutation} = postApi