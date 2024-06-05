import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  // const RestaurantCard = ({resName, cuisine}) => { //Another way where we are directly "destructuring on the fly" 
  //console.log(props); //JS object
  // const{resName, cuisine} = props; //short for const resName = props.resName; and const cuisine = props.cuisine;
  const{ resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info; //here 1️⃣'const { cloudinaryImageId } = resData?.info;' is same as 2️⃣'const cloudinaryImageId = resData.info.cloudinaryImageId' but with optional chaining ?., basically 1️⃣ is 2️⃣ with optional chaining ?. //similarly for these as well ---> name, cuisines, avgRatingString, costForTwo
  //?. optional chaining stops if value is null and avoids further errors

  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        className="res_logo"
        alt="res_food_image"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  )
}
export default RestaurantCard
