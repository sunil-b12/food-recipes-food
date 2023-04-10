import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiKey = "1";

export const foodApi = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/api/json/v1/1/'
    }),
    endpoints:(builder) =>({

        getRandomMeal: builder.query({
            query:(recipes) => `${recipes}`,
            params:{
                key: 1
            }
        }),

        
        getFoodCatagory: builder.query({
            query:(recipes) => `${recipes}`,
        })
    })

})

export const {useGetFoodCatagoryQuery, useGetRandomMealQuery} = foodApi