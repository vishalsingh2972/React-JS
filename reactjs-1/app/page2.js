import axios from 'axios'
import React from 'react'

const page2 = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    //console.log("Images LELO");
    try{
      const response = await axios.get("https://picsum.photos/v2/list")
      //console.log(response);
      const data = response.data;
      //console.log(data);
      setImages(data);
      //console.log(Images);
    } catch (error){
      console.error("Error in fetching Images");
    }
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-yellow-600 text-white font-bold'></button>
      <div className='p-10'>
        {Images.map((elem, i) => {
          return <h1 key={i}>{elem.author}</h1>
        })}
      </div>

    </div>
  )
}

export default page2