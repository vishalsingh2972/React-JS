import { LOGO_URL } from "../utils/constants"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; //React's Single Page Application (SPA) nature concept
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn2, setButton] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
//access the "context" information/data that is available/accessible globally using "useContext" hook
  // const data = useContext(UserContext);
  // console.log(data);  console.log(data.loggedInUser);
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Selector - here we are subscribing to the Redux store (i.e appStore.jsx) using a selector, and we do all this using the useSelector hook
  const cartItems = useSelector((store) => store.CART.items); //`store` here represents appStore, so here useSelector give us access to our 'store' and then we tell it that we specifically need access to the store.CART.items i.e the items present in the cartSlice slice of our redux store, so our selector basically helps us identify what portion of our store I need to "read" and I need to "subscribe" to and whatever we want selectr to do we do it using the help of useSelector hook// and here we are subscribing to our CART slice present in the Redux store appStore.jsx and we are doing this using the useSelector hook, CART here has the reucer data of the cart slice (i.e CART: cartReducer), and  the reducer of the slice is the gateway to accessing and managing the state it controls so we can access the state of the cartSlice i.e the items present in the slice via its reducer i.e CART ~ so here By using the useSelector hook, you're essentially saying: "Give me the current state of the items array present within the cartSlice slice, which is managed by the cartReducer aka the reducer of the cartSlice slice"
  //now the 'cartItems' will get the data of the 'items' present in the 'state' of the cartSlice slice
  console.log(cartItems);

  return(
    <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-pink-300 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 text-xl font-bold">🛒({cartItems.length} items)</li>
          <button className="login-button" onClick={() => {
            btn2 === "Login" ? setButton("Logout") : setButton("Login")
          }}>{btn2}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header