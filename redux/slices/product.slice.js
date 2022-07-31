import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  totalPrice: 0,
  taxPrice: 0,
  price: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { type, payload }) => {
      console.log(payload);
      state.products = payload;
    },

    addProducts: (state, { type, payload }) => {
      state.products.unshift(payload);
    },

    clearCart: (state) => {
      state.cart = [];
      state.price = 0;
      state.totalPrice = 0;
      state.taxPrice = 0;
    },

    addToCart: (state, { type, payload }) => {
      const item = state.products.find((i) => i.id === payload);
      const existedItem = state.cart.findIndex((i) => i.id === payload);
      if (existedItem >= 0) {
        state.cart[existedItem].amount++;
      } else {
        state.cart.unshift({ ...item, amount: 1 });
      }
      state.price += +item.price;
      state.taxPrice = (state.price / 100) * 10;
      state.totalPrice = state.price + state.taxPrice;
    },

    removeCartItem: (state, { type, payload }) => {
      const item = state.products.find((i) => i.id === payload);
      const existedItem = state.cart.findIndex((i) => i.id === payload);
      if (existedItem >= 0 && state.cart[existedItem].amount > 1) {
        state.cart[existedItem].amount--;
      } else if (existedItem >= 0 && state.cart[existedItem].amount === 1) {
        state.cart.splice(existedItem, 1);
      }
      state.price -= +item.price;
      state.taxPrice = (state.price / 100) * 10;
      state.totalPrice = state.price + state.taxPrice;  
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProducts,
  addProducts,
  addToCart,
  removeCartItem,
  clearCart,
} = productsSlice.actions;

export default productsSlice.reducer;
