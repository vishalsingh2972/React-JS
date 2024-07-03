import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //console.log({listOfRestaurants})
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // Whenever state variables get updated (here 'listOfRestaurants' and 'searchText' are state variables), react triggers a reconciliation cycle i.e. react re-renders the component again
  console.log("full body component got rendered again");

  useEffect(() => {
    // console.log("useEffect called 3")
    fetchData();
  }, []); //empty dependency array [], hence useEffect hook will get triggered (i.e. "console.log("useEffect called 3")" and "fetchData();" will happen) just only once when my Body component is rendered for the first time

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // ⬇️ Conditional Rendering ⬇️
  // console.log("Body rendered 1");
  return( listOfRestaurants.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      {/* {  console.log("Body rendered 2") } */}
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            placeholder="Search a restaurant" 
            value={searchText} 
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(event.target.value)
            }}
          />
          <button 
            onClick={() => {
              // Filter the restaurant cards and update the UI accordingly
              // console.log(searchText);

              if (!searchText) {
                // Display popup if searchText is empty
                alert("Please enter a restaurant name!");
              }

              const filteredRestaurant = listOfRestaurants.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              filteredRestaurant.length === 0 ? alert("Restaurant not found") : setFilteredRestaurant(filteredRestaurant);
              // filteredRestaurant.length === 0 ? (setFilteredRestaurant([]), alert("Restaurant not found")) : setFilteredRestaurant(filteredRestaurant);
            }}
          >Search</button>
        </div>

      </div>
      <div className="res-container">
        {
          filteredRestaurant.map((restaurant, index) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
            </Link>        
          ))
        }
      </div>
    </div>
  ))
}

export default Body
