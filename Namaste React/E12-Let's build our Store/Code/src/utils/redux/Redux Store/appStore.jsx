import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";

const appStore = configureStore({ //configureStore is used to create a Redux store, configureStore will give us our Redux Store (the big JS object)
  reducer: {
    cart: cartReducer
  }
}); 

export default appStore;