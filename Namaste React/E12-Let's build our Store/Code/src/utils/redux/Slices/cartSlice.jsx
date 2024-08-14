import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: ['jalebi', 'panipuri', 'samosa']
  },
  reducers: { 
    addItem: (state, action) => { //1
      // console.log('Adding item:', action.payload);

      //mutating the 'state' ~ directly modifying the 'state' here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(); //just removing 1 item from top for now, need to check and write exact logic
    },
    clearCart: (state, action) => {
      state.items.length = 0; //will make my items array as empty again (~ [] like it initially was in 'initialState')
    }
  }
});

//createSlice{...} will return a single object consisting of all the data and thsi single object is stored/mapped to cartSlice now ~ basically when you use createSlice({...}), it returns a single object that contains all the necessary data and functionality related to that slice of your Redux state. This single object is stored in a variable, like here variavle 'cartSlice'
// console.log(cartSlice);

//exporting actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

//exporting reducers
export default cartSlice.reducer;
// console.log(cartSlice.reducer);



/* NOTE:

-  reducers: { 
    addItem: () => {...}
  }
 so here basically when we click the '+' button in the app/UI, it dispatches 'action' which here is "addItem" and this action then next triggers/calls the corresponding 'reducer function' i.e here " () => {...} " and this reducer function now has the ability to modify the 'state' of the slice present in the redux store (~ here we are trying to modify the cart Slice present in redux store)

- //1 => (state, action) => {...}, so now our reducer function gets access to 'state' i.e the initial/current state of the slice present in the redux store and the 'action' i.e in this case "addItem", so now our reducer function has the ability to modify our 'state' of the slice present in the redux store based on the 'action' it is being provided
*/
