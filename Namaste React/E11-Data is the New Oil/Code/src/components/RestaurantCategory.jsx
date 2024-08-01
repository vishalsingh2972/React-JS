//Accordion component

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //  console.log(props);
  //  console.log(props.data.itemCards);
  //console.log(props.showItems);
  console.log(props.setShowIndex);

  const handleClick = () => {
    //when RestaurantCategory is a uncontrolled component 👑
    // setShowItems(!showItems);  //if showItems is true make it false and if showItems is false make it true //dropdown toggle feature

    //when RestaurantCategory is a controlled component 🧎‍♂️
    props.setShowIndex();
  }

  //dropdown - show and hide items on click state variable
  //when RestaurantCategory is a uncontrolled component 👑
  // const [showItems, setShowItems] = useState(false); //default initially kept items hidden i.e dropdown closed

  return (
    // Accordion Header and Accordion Body
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{props.data.title} ({props.data.itemCards.length})</span>
          <span>⮛</span>
        </div>

        {props.showItems && <ItemList items={props.data.itemCards} />} {/*Accordion Body*/}
      </div>
    </div>
  )
}

export default RestaurantCategory