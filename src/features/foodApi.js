import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const apiKey = "1";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/'
  }),
  endpoints: (builder) => ({

    getRandomMeals: builder.query({
      query: (q) => ({
        url: 'random.php'
      })
    }),

    getMealsByCategory: builder.query({
      query: (query) => ({
        url: 'categories.php'
      })
    }),
    getMealsDetailsId: builder.query({
      query: (query) => ({
        url: `lookup.php/`,
        params: {
          i: `${query}`
        }
      })
    }),

    getSearchMeals: builder.query({
      query: (query) => ({
        url: 'search.php/',
        params: {
          s: query
        }
      })
    }),
    getFilterByCatagories: builder.query({
      query: (query) => ({
        url: 'filter.php/',
        params: {
          c: `${query}`
        }

      })
    })


  })

})

export const { useGetMealsDetailsIdQuery, useGetRandomMealsQuery, useGetFilterByCatagoriesQuery, useGetMealsByCategoryQuery, useGetSearchMealsQuery } = foodApi