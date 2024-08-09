import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: { 
    addItem: (state, action) => {
      // console.log(action.payload) 🤔 Need to Check!
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(); //just removing 1 item from top for now, need to check and write exact logic
    },
    clearCart: (state, action) => {
      state.items.length = 0; //will make my items array as empty again (~ like it initially was in 'initialState')
    }
  }
});

// console.log(cartSlice) 🤔 Need to Check!

//exporting actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//exporting reducers
export default cartSlice.reducer;

/* NOTE:

-  reducers: { 
    addItem: () => {...}
  }
 so here basically when we click the '+' button in the app/UI, it dispatches 'action' which here is "addItem" and this action then next triggers/calls the corresponding 'reducer function' i.e here " () => {...} " and this reducer function now has the ability to modify the 'state' of the slice present in the redux store (~ here we are trying to modify the cart Slice present in redux store)

- (state, action) => {...}, so now our reducer function gets access to 'state' i.e the initial/current state of the slice present in the redux store and the 'action' i.e in this case "addItem", so now our reducer function has the ability to modify our 'state' of the slice present in the redux store based on the 'action' it is being provided
*/
