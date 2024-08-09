import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({/* created Slices will be added here inside Redux Store */}); //configureStore is used to create a Redux store, configureStore will give us our Redux Store (the big JS object)

export default appStore;