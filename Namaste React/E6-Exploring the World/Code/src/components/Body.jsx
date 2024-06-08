import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
  useEffect(() => {
    console.log("useEffect called in the Callback Function")
  }, []);
  
  return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => {
          //Filter logic here ⬇️
          const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4)
          setListOfRestaurants(filteredList);
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