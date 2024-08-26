import { createSlice } from "@reduxjs/toolkit";
import { TProducts } from "../../helpers";

type TCart = {
  cart: TProducts[];
};

const initialState: TCart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("action", action);
      console.log("state", state.cart);

      const item: TProducts = action.payload;
      const stockOut = state.cart.find((i) => i._id === item._id);
      const existingItem: TProducts | any = state.cart.find(
        (i) => i._id === item._id
      );
      if (stockOut?.quantity === item.quantity) {
        console.log("stockOut :", stockOut);
        return;
      }
      // console.log("existingItem :",existingItem);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    // removeFromCart: (state, action) => {
    //   const id = action.payload;
    //   const existingItem: TProducts | any = state.cart.find(
    //     (i) => i._id === _id
    //   );
    //   if (existingItem.quantity === 1) {
    //     state.cart = state.cart.filter((i) => i.id !== id);
    //   } else {
    //     existingItem.quantity -= 1;
    //   }
    // },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
