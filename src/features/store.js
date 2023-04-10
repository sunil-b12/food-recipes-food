import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./foodApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";





export const store = configureStore({
    reducer: {
        [foodApi.reducerPath]: foodApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

setupListeners(store.dispatch)