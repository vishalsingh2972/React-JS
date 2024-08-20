import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => { //1
      // console.log('Adding item:', action.payload);

      //(EXTRA) In older versions of Redux (often referred to as "Vanilla Redux"), it was a strict rule to never mutate the state directly. Instead, you had to create a new copy of the state, modify the copy, and then return the new state.
      // const newState = [...state];
      // newState.items.push(action.payload); //newState is the new copy of state
      // return newState; //returning newState was mandatory in older version

      //Redux Toolkit (newer Redux) //under the hood redux toolkit is still doing the same thing that the older versions of Redux were doing but here everything BTS is quietly handled by the Immer js library ~ Immer js library allows us to work with immutable(state cannot be modified directly) state in a more convenient way, the state cannot be modified directly but we can modify it via immer where immer silently does the state change and everything else in the background
      //mutating the 'state' ~ we may feel we are directly modifying the 'state' here but we are not doing it directly we are doing it indirectly via Immer 😉
      state.items.push(action.payload);//here we may feel that we are modifying the current state but behind the scenes immer is actually creatng a newer version of the state and we are here modifying that newer version
    },
    removeItem: (state, action) => {
      state.items.pop(); //just removing 1 item from top for now, need to check and write exact logic
    },
    clearCart: (state, action) => {
      //state = []; //❌ will not work
      state.items.length = 0; //✔️ will make my items array as empty again (~ [] like it initially was in 'initialState') //indirectly state.items.length = 0; will actually implement state = []; via Immer 
      // return { items: [] }; //✔️ this also works, instead of doing state.items.length = 0 you can also just do 'return {items: []}', as here it will replace the originalState wit the value inside return i.e here it will replace the origianlState with empty array [] //as RTK says either mutate the existing state(like state.items.length = 0 ~ not directly but indirectly via Immer) or return a new state(return {items: []})

      //Note:When we do state = [], we are directly modifying the state, which is not allowed and therefore won't work. On the other hand, when we do state.items.length = 0, we are not directly modifying the state. Instead, we are specifying that the array should be empty, and Immer takes this instruction and implements the change, making the array empty. In this case, we are effectively making the array empty via Immer, which is why it works. Basically Directly modifying the state with state = [] won't work, but setting state.items.length = 0 tells Immer to make the array empty, which works because Immer implements the change.
    }

    /*
    // originalState = {items:["pizza"]}
    clearCart: (state) => {
      // RTK - either Mutate the existing state or return a new state
      //state.items.length = 0; // originalState = []

      return { items: [] };// this new object will be replaced inside originalState = { items: [] }
    }
    */

  }
});

//createSlice{...} will return a single object consisting of all the data and thsi single object is stored/mapped to cartSlice now ~ basically when you use createSlice({...}), it returns a single object that contains all the necessary data and functionality related to that slice of your Redux state. This single object is stored in a variable, like here variavle 'cartSlice'
// console.log(cartSlice);

//exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting reducers
export default cartSlice.reducer;
// console.log(cartSlice.reducer);



/* NOTE:

-  reducers: { 
    addItem: () => {...}
  }
 so here basically when we click the '+' button in the app/UI, it dispatches 'action' which here is "addItem" and this action then next triggers/calls the corresponding 'reducer function' i.e here " () => {...} " and this reducer function now has the ability to modify the 'state' of the slice present in the redux store (~ here we are trying to modify the cart Slice present in redux store)

- //1 => (state, action) => {...}, so now our reducer function gets access to 'state' i.e the initial/current state of the slice present in the redux store and the 'action' i.e in this case "addItem", so now our reducer function has the ability to modify our 'state' of the slice present in the redux store based on the 'action' it is being provided


- why 'export default cartSlice.reducer' and not 'export default cartSlice.reducers'?
so createSlice takes all the data and puts everything inside the big cartSlice object, something like this as end result ⬇️

cartSlice = {
  name: 'cart',
  initialState: { items: [] },
  actions: { addItem, removeItem, clearCart },
  reducer: combinedReducerFunction // <--- this is where your reducers are stored
}

as you can see the reducers object you defined inside createSlice are changed from reducers: { .... } into a single reducer function and are now stored in the big cartSlice object
hence we now export them as export default cartSlice.reducer' and not 'export default cartSlice.reducers'
*/
