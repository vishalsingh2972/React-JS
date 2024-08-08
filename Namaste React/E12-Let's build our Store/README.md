## E12 - Topics covered in this session:

- Redux Toolkit (RTK)
- React-Redux
- Redux Flow diagram
- Action
- Reducer
- Dispatcher
- Slice
- Selector
- Cart Functionality
- 

>  Check out the ______________ of our Food Delivery app completed in this episode here :


								NOTES

## Architecture of Redux Toolkit(RDK)

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
