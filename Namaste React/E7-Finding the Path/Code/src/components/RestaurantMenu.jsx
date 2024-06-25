import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

  useEffect(() => {
    fetchMenu();
  }, []); //giving empty dependency array [] here as when we click the restaurant crad we want it to render only once when clicked
  
  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=414109&catalog_qa=undefined&submitAction=ENTER")
  
    const json = await data.json();
    console.log(json);
  }

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  if(restaurantInfo === null) {
    return <Shimmer/>
  }

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Masala Dosa</li>
        <li>Payasam</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu