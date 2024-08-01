import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  //console.log(props);
  //console.log(props.items);

  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <div key={props.items.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{props.items.card.info.name}</span>
                <span> - ₹
                  {props.items.card.info.price ?
                    props.items.card.info.price / 100
                    :
                    props.items.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{props.items.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 bg-black text-white shadow-lg mx-16 my-0 rounded-lg">Add +</button>
              </div>
              <img src={CDN_URL + props.items.card.info.imageId} />
            </div>
          </div>
        )
        )}
      </ul>
    </div>
  )
}

export default ItemList