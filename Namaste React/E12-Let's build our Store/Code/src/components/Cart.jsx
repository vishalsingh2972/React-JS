import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {

  // read/get access to cartSlice data by subscribing to the store
  const cartItems = useSelector((store) => store.CART.items);
  console.log(cartItems); //💡 need to check

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <ItemList items={cartItems}/>
    </div>
  )
}

export default Cart;