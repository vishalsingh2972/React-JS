import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";

const appStore = configureStore({ //configureStore is used to create a Redux store, configureStore will give us our Redux Store (the big JS object)
  reducer: {  //redux store reducer // The `reducer` key is an object that combines all slice reducers ~ so this 'reducer' is indeed like the "root reducer" for our whole Redux store, so 'reducer' here is basically responsible to modify the 'appStore'
    CART: cartReducer,  //cart slice reducer // This reducer manages the `cart` slice of the state ~ here 'cartReducer' is basically the same reducer that you exported from cartSlice.jsx as cartSlice.reducer
  }
});

export default appStore;