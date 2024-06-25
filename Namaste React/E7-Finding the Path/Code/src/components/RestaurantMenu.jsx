import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [restaurantInfo, setRestaurantInfo] = useState(null);
 
  const {resId} = useParams(); //or simply const resId = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []); //giving empty dependency array [] here as when we click the restaurant crad we want it to render only once when clicked
  
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + {resId})
  
    const json = await data.json();
    // console.log(json);
    // console.log(json.data);
    setRestaurantInfo(json.data)
  }

  // const name = restaurantInfo?.cards[2]?.card?.card?.info.name;
  // const cuisines = restaurantInfo?.cards[2]?.card?.card?.info.cuisines;
  // const costForTwoMessage = restaurantInfo?.cards[2]?.card?.card?.info.costForTwoMessage;

  // const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info; //❌ not working need to check //const name = restaurantInfo?.cards[2]?.card?.card?.info.name
  const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  // const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; //❌ not working need to check
  const itemCards = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
  console.log(itemCards);

  return (restaurantInfo === null) ? <Shimmer/> : (
    <div className="menu">
      <h1>{name}</h1>
      <h2 style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2> 
      <h2 className='cost'>{costForTwoMessage}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h2>Menu</h2>
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