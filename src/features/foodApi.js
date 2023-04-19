import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiKey = "1";

export const foodApi = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.themealdb.com/api/json/v1/1/'
    }),
    endpoints:(builder) =>({

        getMeal: builder.query({
            query:(recipes) => `${recipes}`,
        }),
        getSeaFood: builder.query({
            query: (recipes)=>({
                url: `${recipes}`,
                params: {
                  c: 'Seafood'
                },
            })
          }), 
          getDessert: builder.query({
            query: (recipes)=>({
                url: `${recipes}`,
                params: {
                  c: 'dessert'
                },
            })
          }),
          getCollectionFood: builder.query({
            query: (recipes) =>({
                url:`${recipes}`,
                params:{
                    i: 'chicken_breast'
                }

            })
          })
    })

})

export const {useGetMealQuery, useGetSeaFoodQuery, useGetDessertQuery, useGetCollectionFoodQuery} = foodApi