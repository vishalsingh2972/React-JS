import { useContext } from "react";
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/context/UserContext";

const RestaurantCard = (props) => {
  // console.log(props);
  // const{ resData } = props;
  console.log(resData); //used for 'mocks' in testing
  // console.log(resData.info);
  const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info; //here 1️⃣'const { cloudinaryImageId } = resData?.info;' is same as 2️⃣'const cloudinaryImageId = resData.info.cloudinaryImageId' but with optional chaining ?., basically 1️⃣ is 2️⃣ with optional chaining ?. //similarly for these as well ---> name, cuisines, avgRatingString, costForTwo
  //?. optional chaining stops if value is null and avoids further errors

  //(EXTRA) trying usecontext hook
  const data = useContext(UserContext);
  const { loggedInUser } = useContext(UserContext); 

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
      {/* <h4 className="font-bold text-red-600">{data.loggedInUser}</h4> */}
      {/* <h4 className="font-bold text-blue-700">{loggedInUser}</h4> */}
    </div>
  )
}

//Higher Order Component: which will take the above RestaurantCard component as input and add a 'OpenNow' label if it has isOpen:true and then return a enhanced RestaurantCard component with 'OpenNow' label
//RestaurantCard with OpenNowLabel
//HOC #1 PureVeg Label
//input - RestaurantCard component ===> output - RestaurantCard_PureVeg component(i.e essentially the enhanced RestaurantCard component with 'PureVeg' label)
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    return(
      <div>
        <label className="absolute bg-green-800 text-white m-2 p-2 rounded-lg">PureVeg💚</label>
        <RestaurantCard {...props}/> {/* '...' spread operator in props */}
      </div>
    )
  }
}

//HOC #2 NonVeg Label
//input - RestaurantCard component ===> output - RestaurantCard_NonVeg component(i.e essentially the enhanced RestaurantCard component with 'NonVeg' label)
export const withNonVegLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-red-500 text-white m-2 p-2 rounded-lg">NonVeg😈</label>
        <RestaurantCard {...props}/> {/* '...' spread operator in props, so HOCs will pass in all the props as it is to RestaurantCard as it recieved it in 'return (props) => {return(.....' because HOcs are "pure functions" */}
                                     
{/* (EXTRA)The spread operator {...props} is crucial in ensuring that all the original props are passed through the HOC to the wrapped RestaurantCard component. This maintains the core functionality of the original component while adding the desired enhancements provided by the HOC.
Key points to remember:
- HOCs are pure functions that don't modify the original component.
- The spread operator preserves the original props.
- This approach promotes code reusability and component composition. */}
      </div>
    )
  }
}

export default RestaurantCard

//Higher-Order Components (HOCs) are indeed "pure functions" that add extra functionality or modify behavior without changing/modifying the original component itself. They essentially wrap the original component with additional logic or UI enhancements.
//See here as well HOC 'withVegLabel' or HOC 'withNonVegLabel' are not causing any change inside the <RestaurantCard/> component, they are just adding additional features/UI on top of the <RestaurantCard/> component like 'PureVeg' and 'NonVeg' labels (for HOC 'withVegLabel' and HOC 'withNonVegLabel' respectively) in this case
