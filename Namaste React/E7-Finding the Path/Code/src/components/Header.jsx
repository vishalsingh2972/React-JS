import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  let btn = "Login 0";
  const [btn2, setButton] = useState("Login");
  console.log("full header component got rendered again");

  // 3 cases of useEffect
  //1) no dependency array [] => hence useEffect is called on every component render
  //2) if dependency array is empty = [] => useEffect is called on initial render(just once)
  //3) if we put somthing inside the dependency array = [btn2] => then useEffect will omly be called when the dependency changes i.e. here useEffect is called everytime btn2 is updated
  useEffect(() => {
    // console.log("useEffect called 1")
  }); //no dependency array [], hence useEffect hook will get triggered each time my Header component is rendered on the UI

  useEffect(() => {
    // console.log("useEffect called 2")
  }, []); //empty dependency array [], hence useEffect hook will get triggered just once only when my Header component is rendered for the first time

  useEffect(() => {
    console.log("useEffect called 3")
  }, [btn2]);

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li><a href="/about">About Us</a></li>
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