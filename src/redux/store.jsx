import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import homeReducer from "../redux/slices/homeApi"
import categoryReducer from "./slices/categoryApi"
import shopReducer from "../redux/slices/shopApi"



export const store = configureStore({
    reducer: {
        home: homeReducer,
        category: categoryReducer,
        shop: shopReducer,
    }
})

setupListeners(store.dispatch);