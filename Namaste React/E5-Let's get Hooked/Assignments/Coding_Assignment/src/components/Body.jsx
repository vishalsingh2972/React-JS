import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  const [searchText, setSearchText] = useState(""); //useState for search bar feature
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return(
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant"
          value={searchText}
          onChange={handleInputChange}
        ></input>
        <button
        className="filter-btn" 
        onClick={() => {
          console.log({searchText})
          //search logic here ⬇️
          // first filter the data
          const data = filterData(searchText, restaurants);
          // then update the state of restaurants list being displayed on the UI
          setRestaurants(data);
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