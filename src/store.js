import { configureStore } from "@reduxjs/toolkit";
import wishListReducer, { loadWishListState } from './features/wishListSlice'
import watchListReducer, { loadWatchListState } from './features/watchListSlice'


const localStorageMiddleware = store => next => action => {
    // updating state after every action finishes
    const result = next(action);
    localStorage.setItem('wishListState', JSON.stringify(store.getState().wishList));

    localStorage.setItem('watchListState', JSON.stringify(store.getState().watchList));

    return result;

}

export const store = configureStore({
    reducer: {
        // name of our state 
        wishList: wishListReducer,
        watchList: watchListReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), localStorageMiddleware],
    preloadedState: {
        wishList: loadWishListState(),
        watchList: loadWatchListState()
    }
})