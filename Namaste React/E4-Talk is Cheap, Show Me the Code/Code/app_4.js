//our Food Ordering App - SWIGATO
import React from "react";
import ReactDOM from "react-dom/client";

/* App basic blueprint

1) Header
  - Logo
  - Nav Items (Home, About us,.... this card)

2) Body
  - Search bar
  - Restaurant card container
    -- Restaurant card 

3) Footer
  - Copyright disclaimer
  - Links
  - Address
  - Contact info

*/

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://images.app.goo.gl/nipkGUM5q7bK99DQ7"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
