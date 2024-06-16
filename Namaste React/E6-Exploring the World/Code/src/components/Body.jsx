import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //console.log({listOfRestaurants})
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // Whenever state variables get updated (here 'listOfRestaurants' and 'searchText' are state variables), react triggers a reconciliation cycle i.e. react re-renders the component again
  console.log("full body component got rendered again");


  useEffect(() => {
    // console.log("useEffect called 3")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    //console.log(data);
    
    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // ⬇️ Conditional Rendering ⬇️
  // if(listOfRestaurants.length === 0){
  //   return <h1>Loading......please be patient 1 ❤️</h1>
  // }

  // console.log("Body rendered 1");
  return(
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

              filteredRestaurant.length === 0 ? alert("Restaurant not found") : setfilteredRestaurant(filteredRestaurant);
            }}
          >Search</button>
        </div>     
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
        filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>        
          ))
          // ⬇️ Conditional Rendering ⬇️
        ) : (
          // <h1>Loading......please be patient ❤️</h1>
          <Shimmer/>
        )
      }
      </div>
    </div>
  )
}

export default Body
