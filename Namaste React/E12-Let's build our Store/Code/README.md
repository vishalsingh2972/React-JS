## Episode 12 – Let's Build Our Store

**Detailed Mention of Topics and its Timestamps according to Namaste React Web Series**

```sh
00:01:17 – Redux is not mandatory
00:04:04 – React & Redux are two different libraries
00:07:25 – Exploring Redux website
00:10:18 – Exploring Redux-toolkit website
00:17:15 – Diagram of RTK Architecture
00:22:45 – Slices
00:26:40 – Diagram Explanation – Reducer Function – action dispatch
00:31:19 – Selector
00:32:22 – Subscribing to the store
00:33:48 – Recap of Redux Explanation
00:39:500 to 44:38 – Overview of how & what we code in
00:44:46 – npm install @reduxjs/toolkit
00:45:20 – npm I react-redux
00:46:00 – Create a new file appStore.js in Utils folder
00:50:25 – “Provider” usage
00:53:00 – Import “createSlice” package from Redux toolkit
00:54:00 to 01:02:00 – usage of “Reducers” in the code
01:04:00 to 01:11:00 - Again write the code from scratch & walk through
01:11:00 to 01:20:00 – items in the cart
01:20:25 – Adding items in the cart, writing logic to the add button
01:23:00 - use Dispatch() Hook and Dispatch() function
01:30:00 – Building a cart page
01:31:15 – Interview Question – A hack to know – onClick() function
01:34:25 – Create a Cart.js component
01:43:00 – Create a ‘clear cart’ button
01:50:00 – An Interview Question
01:55:25 – Reducer & Reducers
02:05:00 – Mutate the state, vanilla Redux diff b/w React Redux
02:06:00 to 02:25:00 – Redux – Immer.js – Mutating the state in Redux
02:25:00 – Redux Dev Tools
02:35:00 -Home work – Redux Toolkit website- RTK Query
At the end, Akshay shares his thoughts about Redux.
```

								NOTES

# Redux toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- Dispatch (an action)
- Selector

## Architecture of Redux Toolkit (RTK)

### What is redux store?

- Redux store is nothing but like as a very big JS object and it is kept in a central global place. In React application any component access this store, it can write data ,it can read data from the store and it is like very big JS object.

- In the one big whole object, is it good to keep all the data inside it? - Yes, It is completely fine but so that our redux store dose not become very big very cloumsy we have something known as slices inside redux store. and we can create multiple slices inside our redux store.

### Why do we need slices?

- To keep data seprate, we make logical partition and these logical partition are slices, so assume if you want to add cart data into our redux store, we will create seprate slice for a card data.
- Suppose if we want to keep looged in user info inside our store, so we will create user slice, we create cart slice.

- So what ever we need to create, we will create logical sepration and we will makes small slices inside our redux store.
  
![image](https://github.com/user-attachments/assets/bdf3a0b6-a6eb-4423-9853-277946bc1d8e)

- We can not directley modified to cart data Slice, There is way we can do that, suppose we will click on the add button **I will have to Dispatch and Action**. and this action call a function.

- Action calls a function and this function enternally modified the cart slice. And this function is known as **Reducer function**

### This we learn how to write data?

- **When we hit the add button it dispatch and action which call the reducer function which update the slice of our redux store**

![image](https://github.com/user-attachments/assets/fe56031f-7217-4023-b6bb-4c4146606e33)


### How to read data from cart slice?

- For that we use something known as **selector**, We will use the selector to read the data from a store and this selector
  will modified our react cart component. So this is how read data.

- When we use selector the phenomena is known as **Subscribing to the store**, We say that our heder component cart is subscribing the cart slice store and when I say subscribe the store basically it
  **sync with the store**, If the data inside our store changes my header cart component update automatically. as soon as my store changes that is why we call as subscribing to the store and how do you subscribe using selector.

![image](https://github.com/user-attachments/assets/c37ad5bb-ad9c-4f56-9a2a-a67227acc3d2)
![image](https://github.com/user-attachments/assets/4db76f84-bcc9-48e4-9390-66b8cd04e742)

> In short (Summary)
![image](https://github.com/user-attachments/assets/0f35b171-5638-46c9-a760-5027448b52f2)
