import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //React's Single Page Application (SPA) nature concept
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn2, setButton] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-button" onClick={() => {
            btn2 === "Login" ? setButton("Logout") : setButton("Login")
          }}>{btn2}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header