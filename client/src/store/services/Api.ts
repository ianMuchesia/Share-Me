import { AccessTokenType, RegisterType } from "@/@types/auth";
import { baseUrl } from "@/lib/BaseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:`${baseUrl}`,

    }),
    reducerPath:"apis",
    tagTypes:['auth'],
    endpoints:(build)=>({
        login:build.mutation({
            query:(data)=>({
                url:'auth/login',
                method:'POST',
                body:data
            }),
            invalidatesTags:['auth']
        }),
        register:build.mutation<AccessTokenType, RegisterType>({
            query:(data)=>({
                url:'auth/register',
                method:'POST',
                body:data
            }),
            invalidatesTags:['auth']
        }),
        logout:build.query({
            query:()=>({
                url:'auth/logout',
                method:'GET'
            }),
            providesTags:['auth']
        }),
        me:build.query({
            query:()=>({
                url:'auth/me',
                method:'GET'
            }),
            providesTags:['auth']
        })

    })

})

export const {useRegisterMutation,useLoginMutation,useLogoutQuery,useMeQuery} = api