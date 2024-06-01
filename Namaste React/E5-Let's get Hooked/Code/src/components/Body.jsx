import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  //Super Powerful React variable - also known as State Variable, and for creating this State Variable we make use of React hooks, to be precise here we use useState hook
  //in simple words just like a functional component is simply a javascript function that returns a JSX and a react element is simply a javascript object similarly a React hook is also a javascript function which is given to us by React (its a prebuilt), the only difference being this javascript function comes with certain extra superpowers, this javascript function has some logic written BTS inside React, this javascript function is a utility function readily available to us by React
  //in simple words React hook is a utility function provided to us by React
  const [listOfRestaurants] = useState(); //Local State Variable -  scope inside the component it is targeting

  //Normal vanilla JS variable (let or const)
  let listOfRestaurants0 = [
    {
    "info": {
      "id": "595197",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595196",
      "name": "Dominos",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 3.8,
      "avgRatingString": "3.8",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595198",
      "name": "Subway",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.1,
      "avgRatingString": "4.1",
      "sla": {
        "deliveryTime": 59,
      }
    }
    }
  ];

  return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => {
          //Filter logic here ⬇️
          listOfRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating > 4)
          console.log(listOfRestaurants);
        }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>        
          ))
        }
      </div>
    </div>
  )
}

export default Body
