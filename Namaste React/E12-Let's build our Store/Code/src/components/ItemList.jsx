import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/Slices/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  console.log(props); //💡 need to check

  const dispatch = useDispatch(); //just like we used useSelector for reading and getting access to data in our slice present in redux store, for dispatching an action present in the our slice present in redux store we make use of useDispatch //useDispatch is a hook provided by React-Redux that gives you access to the dispatch function, The dispatch function is used to send actions to the Redux store, which will then be handled by the appropriate reducer.

  const handleAddItem = (item) => {
    //dispatch the action
    dispatch(addItem(item));
  }

  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2 flex justify-between">
                <span className="text-lg font-bold text-gray-600">{item.card.info.name}</span>
                <span className="font-bold">
                  ₹{item.card.info.price ?
                    item.card.info.price / 100
                    :
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button 
                className="p-2 bg-black text-white shadow-lg hover:bg-white hover:text-black mx-10 my-20 rounded-full cursor-pointer"
                //dispatch the action on click using handleAddItem function
                onClick={() => handleAddItem(item)} //handleAddItem(item) called only when button is clicked ✅
                // onClick={handleAddItem(item)} //handleAddItem(item) called immediately when the component renders ❌
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="rounded-lg" />
            </div>
          </div>
        )
        )}
      </ul>
    </div>
  )
}

export default ItemList