import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  const [searchText, setSearchText] = useState(""); //useState for search bar text
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //useState for updating restautants being displayed on the UI

  const filterData = (searchText, listOfRestaurants) => {
    if (!searchText) {
      // Display popup if searchText is empty
      alert("Please enter a restaurant name!");
      return listOfRestaurants;
    }
  
    const filteredRestaurants = listOfRestaurants.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  
    //EXTRA FEATURE
    // if (filteredRestaurants.length === 0) {
    //   // Display popup if searchText is not found
    //   alert("Search text not found!");
    //   return filteredRestaurants;
    // }
  
    return filteredRestaurants;
  };

  const handleInputChange = (event) => {
    //console.log(event);
    //console.log(event.target);
    //console.log(event.target.value);
    setSearchText(event.target.value);
    //console.log(searchText);
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
          //console.log({searchText})
          //search logic here ⬇️
          // first filter the data
          const data = filterData(searchText, listOfRestaurants);
          // then update the state of restaurants list being displayed on the UI
          setListOfRestaurants(data);
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