import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productName: string;
  qty: number;
  price: number;
}

export type CartState = {
  cart: CartItem[],
  totalSum: number
}

const initialState: CartState = {
  cart: [],
  totalSum: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plusProductQty: (state, action: PayloadAction<string>) => {
      const currProduct = state.cart.findIndex(
        (item) => item.productName == action.payload
      );
      if (currProduct!==-1) {
       state.cart[currProduct].qty += 1;
        state.totalSum += state.cart[currProduct].price
      }
    },

    minusProductQty: (state, action: PayloadAction<string>) => {
      const currProduct = state.cart.findIndex(
        (item) => item.productName == action.payload
      );
      if (currProduct!==-1 && state.cart[currProduct].qty>0) {
        state.cart[currProduct].qty -= 1;
        state.totalSum -= state.cart[currProduct].price
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      const currProduct = state.cart.findIndex((item) => item.productName == action.payload);
      if (currProduct!==-1) {
        state.totalSum -= state.cart[currProduct].price * state.cart[currProduct].qty;
      }
      state.cart.filter((item) => item.productName === action.payload);
    },
    
    addProducts: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = [...action.payload];
      state.totalSum = [...action.payload].reduce((prev, curr) => {return prev + curr.price*curr.qty }, 0)
    },
  },
});

export const { addProducts, deleteProduct, plusProductQty, minusProductQty } =
  cartSlice.actions;

export default cartSlice.reducer;
