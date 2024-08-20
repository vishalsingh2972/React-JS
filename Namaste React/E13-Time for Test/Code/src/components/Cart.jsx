import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/Slices/cartSlice";
const Cart = () => {

  // read/get access to cartSlice data by subscribing to the store
  const cartItems = useSelector((store) => store.CART.items); //more efficient 🔋
  // console.log(cartItems); //💡 need to check

  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items; //will work same as 'const cartItems = useSelector((store) => store.CART.items);' but is less efficient 🧛‍♀️

  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch the action
    dispatch(clearCart());
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    // Check if defaultPrice exists, otherwise use price (fallback)
    const price = item.card.info.hasOwnProperty('defaultPrice') ?
      item.card.info.defaultPrice : item.card.info.price;
    return acc + price;
  }, 0);
  // console.log("Total Price:", totalPrice/100);

  return (
    <div className="text-center m-4 p-4">
      <div className="flex w-6/12 m-auto justify-between">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="bg-red-600 text-white px-2 rounded-lg"
        // onClick={handleClearCart()} // ❌ cart will immediately clear as soon as cart.jsx renders without even clicking the button
        onClick={() => handleClearCart()} //handleClearCart() called only when button is clicked ✅ //or even onClick={handleClearCart} works fine
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && <h2 className="mt-12 font-bold text-5xl">Bhai kuch to add kar! 🥺</h2>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems}/>
      </div>
      {cartItems.length > 0 && <h1 className="w-6/12 m-auto text-right text-2xl font-bold pt-5">Total Bill: ₹{(totalPrice / 100).toFixed(2)}</h1>}
    </div>
  )
}

export default Cart;