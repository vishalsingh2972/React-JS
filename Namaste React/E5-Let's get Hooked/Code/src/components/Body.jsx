import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn" 
        onMouseOver={() => {
          console.log("Button Clicked");
        }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          resList.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>        
          ))
        }
      </div>
    </div>
  )
}

export default Body
