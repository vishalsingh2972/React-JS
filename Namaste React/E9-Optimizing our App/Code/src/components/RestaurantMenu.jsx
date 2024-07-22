import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [restaurantInfo, setRestaurantInfo] = useState(null);
 
  const {resId} = useParams(); //or simply const resId = useParams().resId;
  console.log(resId);

  const custom_hook = useRestaurantMenu();

  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    
    const data = await fetch(MENU_API + resId);
   
    const json = await data.json();
    // console.log(json);
    // console.log(json.data);
    setRestaurantInfo(json.data)
  }

  const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards, title } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
  console.log(itemCards);

  return (restaurantInfo === null) ? <Shimmer/> : (
    <div className="menu">
      <h1>{name}</h1>
      <h2 style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2> 
      <h2 className='cost'>{costForTwoMessage}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h2>Menu</h2>
      {/*<h3>{title} ({itemCards.length})</h3>*/} {/*not working for all*/}
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
          // console.log(item.card.info.name)
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu