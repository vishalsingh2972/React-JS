import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

//initially RestaurantMenu was doing 2 jobs - fetching data and displaying data, now we want RestaurantMenu to just display the data and we are now giving the fetching logic/work to out custom hook useRestaurantMenu()
const RestaurantMenu = () => {

  // const [restaurantInfo, setRestaurantInfo] = useState(null); //so this will become redundant now as we are fetching data in the useRestaurantMenu hook now so we will use this same state variable in useRestaurantMenu.jsx hook now
 
  const {resId} = useParams(); //or simply const resId = useParams().resId;

  //our custom hook #1 - useRestaurantMenu()
  const restaurantInfo = useRestaurantMenu(resId);
  console.log(restaurantInfo); //initially restaurantInfo value will be null

  if (restaurantInfo === null) return <Shimmer/>;

  const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards, title } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
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
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu