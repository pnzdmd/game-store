import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    // добавление в корзину
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    // удаление из корзины
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
