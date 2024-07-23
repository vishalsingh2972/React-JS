import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

  const [restaurantInfo, setRestaurantInfo] = useState(null); //local state variable for this hook (useRestaurantMenu hook)

  //fetch the data
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurantInfo(json.data)
  }

  return restaurantInfo; //return the updated 'restaurantInfo' state value
}

export default useRestaurantMenu;