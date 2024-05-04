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
      ---Img
      ---Name of Restaurant, Star Rating, cuisines, delivery time

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

// const styleCard = {
//   backgroundColor: "yellow"
// }

// const RestaurantCard = () => {
//   return(
//     <div className="res-card" style={styleCard}>
//       <h3>Pista House</h3>
//     </div>
//   )
// }

//Direct Attack
const RestaurantCard = () => {
  return(
    <div className="res-card" style={{backgroundColor: "yellow"}}>
      <img
        alt="res_food_image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1bc9ddf53de574cdc35ab2f717df234"
      />
      <h3>Pista House</h3>
      <h4>Indian, Chinese, Italian</h4>
      <h4>⭐ 4.5</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
