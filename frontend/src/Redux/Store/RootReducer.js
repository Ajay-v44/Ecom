import { reducer as userReducer } from "../Slice/userSlice";
// import { reducer as productReducer } from "../Slice/ProductSlice";
import { reducer as orderReducer } from "../Slice/orderSlice";
import { reducer as cartReducer } from "../Slice/cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  // product: productReducer , // Update the import statement to use `.reducer`
  order: orderReducer,
  cart: cartReducer,
});