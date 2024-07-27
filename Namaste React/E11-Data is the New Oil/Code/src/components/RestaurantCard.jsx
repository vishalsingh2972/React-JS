import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const{ resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info; //here 1️⃣'const { cloudinaryImageId } = resData?.data;' is same as 2️⃣'const cloudinaryImageId = resData.info.cloudinaryImageId' but with optional chaining ?., basically 1️⃣ is 2️⃣ with optional chaining ?. //similarly for these as well ---> name, cuisines, avgRatingString, costForTwo
  //?. optional chaining stops if value is null and avoids further errors

  return(
    <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-200 hover:bg-gray-400">
      <img
        className="rounded-3xl"
        alt="res_food_image"
        src={CDN_URL+cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  )
}

//Higher Order Component: which will take the above RestaurantCard component as input and add a 'OpenNow' label if it has isOpen:true and then return a enhanced RestaurantCard component with 'OpenNow' label
//RestaurantCard with OpenNowLabel
export const withOpenNowLabel = (RestaurantCard) => {
  return (props) => { //return back a component //component being returned start from (props) => {....

    //component is again some piece of jsx that returns something
    return(
      <div>
        <label>OpenNow</label>
        <RestaurantCard {...props}/>
      </div>
    )
  } //component being returned end
}

export default RestaurantCard