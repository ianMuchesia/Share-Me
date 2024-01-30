import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:"http",

    }),
    reducerPath:"apis",
    tagTypes:[],
    endpoints:(build)=>({

    })

})

export const {} = api