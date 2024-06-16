import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body2 = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  console.log("full body component got rendered again");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            placeholder="Search a restaurant" 
            value={searchText} 
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button 
            onClick={() => {
              if (!searchText) {
                alert("Please enter a restaurant name!");
              }

              const filteredRestaurant = listOfRestaurants.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              filteredRestaurant.length === 0 ? alert("Restaurant not found") : setFilteredRestaurant(filteredRestaurant);
            }}
          >Search</button>
        </div>     
        <button 
          className="filter-btn" 
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4)
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
      {
        filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>        
          ))
        ) : (
          <Shimmer/>
        )
      }
      </div>
    </div>
  )
}

export default Body2
