import { reducer as userReducer } from "../Slice/userSlice";
import { reducer as productReducer } from "../Slice/productSlice"; // Correct import statement
import { reducer as orderReducer } from "../Slice/orderSlice";
import { reducer as cartReducer } from "../Slice/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
});
