import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart/reduce';
import gamesReducer from './games/reduce'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer
  }
})