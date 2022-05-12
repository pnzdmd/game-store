import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart/reduce';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})