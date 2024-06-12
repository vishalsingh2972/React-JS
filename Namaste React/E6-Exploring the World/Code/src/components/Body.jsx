import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    console.log("useEffect called 3")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    //console.log(data);
    
    const json = await data.json();
    console.log(json);

    // setListOfRestaurants(json.cards.card); //need to check this once
  }

  console.log("Body rendered 1");
  return(
    <div className="body">
      {  console.log("Body rendered 2") }
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => {
          //Filter logic here ⬇️
          const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating >= 4)
          setListOfRestaurants(filteredList);
        }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/>        
          ))
        }
      </div>
    </div>
  )
}

export default Body
