import RestaurantCard, { withVegLabel, withNonVegLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_API, RESTAURANTS_API2 } from "../utils/constants";
import UserContext from "../utils/context/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // Whenever state variables get updated (here 'listOfRestaurants' and 'searchText' are state variables), react triggers a reconciliation cycle i.e. react re-renders the component again
  // console.log("full body component got rendered again ✨", listOfRestaurants);

  const RestaurantCard_PureVeg = withVegLabel(RestaurantCard); //RestaurantCard_PureVeg is the enhanced RestaurantCard component with the PureVeg label in it //(EXTRA) //Functional Components Created by HOCs //not the usual FCs as per definition 'normal JS function that returns some JSX' ye alag hain par they are FCs only i.e RestaurantCard_PureVeg is also a FC only
  const RestaurantCard_NonVeg = withNonVegLabel(RestaurantCard); //RestaurantCard_NonVeg is the enhanced RestaurantCard component with NonVeg label in it //(EXTRA) //Functional Components Created by HOCs //not the usual FCs as per definition 'normal JS function that returns some JSX' ye alag hain par they are FCs only i.e RestaurantCard_NonVeg is a also a FC only

  useEffect(() => {
    // console.log("useEffect called 3")
    fetchData();
  }, []); //empty dependency array [], hence useEffect hook will get triggered (i.e. "console.log("useEffect called 3")" and "fetchData();" will happen) just only once when my Body component is rendered for the first time

  const fetchData = async () => {
    const data = await fetch(
      //RESTAURANTS_API
      RESTAURANTS_API2
    );

    const json = await data.json();
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //our custom hook #2 - useOnlineStatus() hook
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus)

  if (onlineStatus === false) {
    return <h1>Sorry, you are not connected to the network 😥</h1>
  }

  const  { setUserName, loggedInUser } = useContext(UserContext);

  // ⬇️ Conditional Rendering ⬇️
  // console.log("Body rendered 1");
  return (listOfRestaurants?.length === 0 ? (<Shimmer />) : (
    <div className="body">
      {/* {  console.log("Body rendered 2") } */}
      <div className="filter">
        <div className="flex items-center mr-20">
          <input
            type="text"
            className="rounded-full px-4 py-1 border border-solid border-black"
            placeholder="Search a restaurant"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(event.target.value)
            }}
          />
          <button className="px-4 py-1 bg-orange-400 m-4 rounded-full"
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

          {/* <button 
          className="filter-btn rounded-full px-4 py-1 bg-yellow-400" 
          onClick={() => {
            //Filter logic here ⬇️
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5)
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button> */}

          <div className="ml-28">
            <label>UserName : </label>
            <input 
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant?.map((restaurant, index) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
              {/* {console.log(index, restaurant)} */}

              {/* Implementing HOCs : If the restaurant has Veg:true, add a 'PureVeg' label to the restaurant card else add 'NonVeg' label */}
              {restaurant.info?.veg ? (<RestaurantCard_PureVeg resData={restaurant} />) : (<RestaurantCard_NonVeg resData={restaurant} />)}

              {/* (TRIAL) Only Veg label */}
              {/* Implementing HOCs : If the restaurant has Veg:true, add a 'PureVeg' label to the restaurant card else no label */}
              {/* {restaurant.info?.veg ? (<RestaurantCard_PureVeg resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)} */}
            </Link>
          ))
        }
      </div>
    </div>
  ))
}

export default Body
