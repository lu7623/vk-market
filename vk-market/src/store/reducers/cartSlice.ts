import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  productName: string;
  qty: number;
}

export type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plusProductQty: (state, action: PayloadAction<string>) => {
      const currProduct = state.find(
        (item) => item.productName == action.payload
      );
      if (currProduct) currProduct.qty += 1;
    },

    minusProductQty: (state, action: PayloadAction<string>) => {
      const currProduct = state.find(
        (item) => item.productName == action.payload
      );
      if (currProduct) currProduct.qty -= 1;
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.filter((item) => item.productName == action.payload);
    },
    
    addProduct: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct, deleteProduct, plusProductQty, minusProductQty } =
  cartSlice.actions;

export default cartSlice.reducer;
