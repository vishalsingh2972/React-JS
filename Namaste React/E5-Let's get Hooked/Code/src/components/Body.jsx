import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  let listOfRestaurants = [
    {
    "info": {
      "id": "595197",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.2,
      "avgRatingString": "4.2",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595196",
      "name": "Dominos",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 3.8,
      "avgRatingString": "3.8",
      "sla": {
        "deliveryTime": 59,
      }
    }
    },
    {
    "info": {
      "id": "595198",
      "name": "Subway",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas","Samosa","Burger"
      ],
      "avgRating": 4.1,
      "avgRatingString": "4.1",
      "sla": {
        "deliveryTime": 59,
      }
    }
    }
];

  return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => {
          //Filter logic here ⬇️
          listOfRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating > 4)
          console.log(listOfRestaurants);
        }}
        >
          Top Rated Restaurants
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
