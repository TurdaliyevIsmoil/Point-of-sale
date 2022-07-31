import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/ui.slice";
import productReducer from "./slices/product.slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productReducer,
  },
});
