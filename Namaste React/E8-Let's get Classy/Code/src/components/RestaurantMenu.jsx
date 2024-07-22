import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

  const [restaurantInfo, setRestaurantInfo] = useState(null);
 
  const {resId} = useParams(); //or simply const resId = useParams().resId;
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []); //giving empty dependency array [] here as when we click the restaurant crad we want it to render only once when clicked
  
  const fetchMenu = async () => {
    
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" + resId);
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}`);
    const data = await fetch(MENU_API + resId);
    // const data = await fetch(`${MENU_API}${resId}`); // this also works ✔️

    const json = await data.json();
    // console.log(json);
    // console.log(json.data);
    setRestaurantInfo(json.data)
  }

  // const name = restaurantInfo?.cards[2]?.card?.card?.info.name;
  // const cuisines = restaurantInfo?.cards[2]?.card?.card?.info.cuisines;
  // const costForTwoMessage = restaurantInfo?.cards[2]?.card?.card?.info.costForTwoMessage;

  // const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info; //const name = restaurantInfo?.cards[2]?.card?.card?.info.name  //but this is ❌ not working so we provide an extra '|| {}'
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
