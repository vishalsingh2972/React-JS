import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //console.log({listOfRestaurants})
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
        listOfRestaurants && listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant, index) => (
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
