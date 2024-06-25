import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from './features/wishListSlice'

export const store = configureStore({
    reducer: {
        wishList: wishListReducer,
    }
})