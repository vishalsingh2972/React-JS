import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return(
    <div className="bodyi">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant, index) => ( //written index just for reference to the below point
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/> //good convention: whenever doing a .map always put a key in the functional component below //good practise wrt React render cycle //important for optimization and efficiency
                                                                            //never use key={index}, not recommended - bad practice as per React documentation ~ for more info https://react.dev/learn/rendering-lists, https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/, https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
          //unique id as key (BEST option) >>> index as key (can be used but not recommended) >>> not using key (NOT acceptable)                                                                  
          ))  

          // resList.map((restaurant) => {
          //   return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  
          // })  
        }
      </div>
    </div>
  )
}

export default Body