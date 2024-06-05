import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [searchText, setSearchText] = useState("bittu"); //useState for search bar feature
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return(
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant"
          value={searchText}
        ></input>
        <button
        className="filter-btn" 
        onClick={() => {
          console.log({searchText})
          //search logic here ⬇️
          const restaurantName = listOfRestaurants.filter((res)=> res.info.avgRating >= 4)
          setListOfRestaurants(restaurantName);
        }}
        >
          Search
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