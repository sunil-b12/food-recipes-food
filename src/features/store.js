import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./foodApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userReducer from './userSlice'




export const store = configureStore({
    reducer: {
        data: userReducer,
        [foodApi.reducerPath]: foodApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

setupListeners(store.dispatch)