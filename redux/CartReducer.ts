import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: {id: number, price: number, title: string, thumbnail: string}[];
}

const initialState: CartState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number, title: string, price: number, thumbnail: string }>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
