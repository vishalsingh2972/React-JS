import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //React's Single Page Application (SPA) nature concept
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  let btn = "Login 0";
  const [btn2, setButton] = useState("Login");
  // console.log("full header component got rendered again");
  useEffect(() => {
    // console.log("useEffect called 1")
  }); //no dependency array [], hence useEffect hook will get triggered each time my Header component is rendered on the UI

  useEffect(() => {
    // console.log("useEffect called 2")
  }, []); //empty dependency array [], hence useEffect hook will get triggered just once only when my Header component is rendered for the first time

  useEffect(() => {
    // console.log("useEffect called 3")
  }, [btn2]);

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>


          <button className="login-button" onClick={() => {
            if (btn2 === "Login"){
              navigate("/login"); // Redirect to login page ("/login")
            }
          }}>{btn2}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header