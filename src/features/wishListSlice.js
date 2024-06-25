import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishList: [],
    totalItems: 0
}

export const wishListSlice = createSlice({
    name: "wish list",
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log("Add Item Reducer")
        },
        deleteItem: (state, action) => {
            console.log("Delete Item Reducer")
        }
    }
})

export const { addItem, deleteItem } = wishListSlice.actions;

export default wishListSlice.reducer;