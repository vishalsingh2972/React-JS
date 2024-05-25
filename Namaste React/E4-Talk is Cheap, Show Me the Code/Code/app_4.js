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
        <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/free-logo-1889525-1597585.png?f=webp"/>
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
//   backgroundColor: "#f0f0f0"
// }

// const RestaurantCard = () => {
//   return(
//     <div className="res-card" style={styleCard}>
//       <h3>Pista House</h3>
//     </div>
//   )
// }

//Direct Attack using style={{backgroundColor: "#f0f0f0"}}
const RestaurantCard = (props) => {
  // const RestaurantCard = ({resName, cuisine}) => { //Another way where we are directly "destructuring on the fly" 
  console.log(props); //JS object
  // const{resName, cuisine} = props; //short for const resName = props.resName; and const cuisine = props.cuisine;
   const{ resData } = props;
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        className="res_logo"
        alt="res_food_image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxg1pthsrrxpd83in6r3"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines}</h4>
      <h4>⭐ {resData.data.avgRating}</h4>
      <h4>₹ {(resData.data.costForTwo) / 100}</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  )
}

const resObj = {
  type: "restaurant",
  data:{
    name: "KFC",
    cuisines: ["Animal","Bakra","Chicken"],
    avgRating: "4",
    costForTwo: "40000",
    deliveryTime: "25"
  }
}

//destructuring directly as "{resName, cuisine}" instead of using word "props"
// const RestaurantCard = ({resName, cuisine}) => {
//   return(
//     <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//       <img
//         className="res_logo"
//         alt="res_food_image"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxg1pthsrrxpd83in6r3"
//       />
//       <h3>{resName}</h3>
//       <h4>{cuisine}</h4>
//       <h4>⭐ 4.5</h4>
//       <h4>20-25 min</h4>
//     </div>
//   )
// }

//Props - Properties - same as we have arguments for functions, for components we pass data via props or by using props //Hence, passing a prop to a component is just like passing an argument to a function
//as seen below - resName="PizzaHut" cuisine="Pizza" these are the props being passed to the component <RestaurantCard/>, so here react will wrap everything (i.e resName="PizzaHut" cuisine="Pizza") inside an object and send it as argument "props" as seen above in const RestaurantCard = (props)...
//hence whenever we want to dynamically pass in some data to a component, we pass it as a prop
const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}/>
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