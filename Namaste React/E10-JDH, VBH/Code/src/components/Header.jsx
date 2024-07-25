import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //React's Single Page Application (SPA) nature concept
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn2, setButton] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
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
          <li className="px-4">Cart</li>
          <button className="login-button" onClick={() => {
            btn2 === "Login" ? setButton("Logout") : setButton("Login")
          }}>{btn2}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header