import RestaurantCard, { withOpenNowLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // Whenever state variables get updated (here 'listOfRestaurants' and 'searchText' are state variables), react triggers a reconciliation cycle i.e. react re-renders the component again
  console.log("full body component got rendered again ✨", listOfRestaurants);

  const RestaurantCardOpenNow = withOpenNowLabel(RestaurantCard);

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

  //our custom hook #2 - useOnlineStatus() hook
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)

  if(onlineStatus === false){
    return <h1>Sorry, you are not connected to the network 😥</h1>
  }

  // ⬇️ Conditional Rendering ⬇️
  // console.log("Body rendered 1");
  return( listOfRestaurants?.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      {/* {  console.log("Body rendered 2") } */}
      <div className="filter">
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="border border-solid border-black" 
            placeholder="Search a restaurant" 
            value={searchText} 
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(event.target.value)
            }}
          />
          <button className="px-4 py-2 bg-orange-400 m-4 rounded-full"
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

        {/* <button 
          className="filter-btn" 
          onClick={() => {
            //Filter logic here ⬇️
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5)
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button> */}

      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant?.map((restaurant, index) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
              
              {/* Implementing HOCs : If the restaurant has isOpen:true, add a 'OpenNow' label to the restaurant card */}
              {restaurant.info?.isOpen ? (<RestaurantCardOpenNow resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)}
              
              {/* (OTHER WAY TRIED)
              {
                restaurant.info?.isOpen ? (
                  <>
                    <label>Open Now2</label>
                    <RestaurantCard resData={restaurant} />
                  </>
                ) : (
                  <RestaurantCard resData={restaurant} />
                )
              } */}
            </Link>        
          ))
        }
      </div>
    </div>
  ))
}

export default Body