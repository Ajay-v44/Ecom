import { createSlice } from "@reduxjs/toolkit";
import cartAPI from "../../mocks/Cart";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    }
})