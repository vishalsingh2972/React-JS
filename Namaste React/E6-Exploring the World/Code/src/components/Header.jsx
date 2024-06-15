import { LOGO_URL } from "../utils/constants"
import { useState } from "react";

const Header = () => {

  let btn = "Login 0";
  const [btn2, setButton] = useState("Login");
  console.log("full header component got rendered again");

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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