import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

//initially RestaurantMenu was doing 2 jobs - fetching data and displaying data, now we want RestaurantMenu to just display the data and we are now giving the fetching logic/work to out custom hook useRestaurantMenu()
const RestaurantMenu = () => {

  // const [restaurantInfo, setRestaurantInfo] = useState(null); //so this will become redundant now as we are fetching data in the useRestaurantMenu hook now so we will use this same state variable in useRestaurantMenu.jsx hook now

  const { resId } = useParams(); //or simply const resId = useParams().resId;

  //our custom hook #1 - useRestaurantMenu() hook
  const restaurantInfo = useRestaurantMenu(resId);
  // console.log(restaurantInfo); //initially restaurantInfo value will be null

  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards, title } = restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  // console.log(restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //filtering out categories array containing - recommened, ved, non veg etc.
  const categories = restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((element) => element?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <div className="flex justify-center my-2">
        <h2 className="px-2">{avgRatingString} ({totalRatingsString})</h2>
        <h2 className="px-2">•</h2>
        <h2 className='cost'>{costForTwoMessage}</h2>
      </div>
      <p className="font-bold text-lg text-gray-800">{cuisines.join(', ')}</p>
      <h2 className="font-bold text-gray-700">Menu</h2>

      {/* categories accordions */}
      {categories?.map((category, index) => (
        <RestaurantCategory 
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={(index === showIndex ? true : false)} 
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu