//rafce (React arrow function component export)

"use client" //for page8 and page9
import React, { useState } from 'react'

//🚀
// const page = () => { //page variable is a function that returns a div element with the text "Bittu mast sikhlera React uff"
//   return (
//     <div>Bittu mast sikhlera React uff</div>
//   )
//   //return <h1>hello BITTU</h1>
// };
// export default page //exporting to Next, now page variable/function can be used in other parts of the Next.js application

// function page2(){
//      return <h1>hello BITTU</h1>
//  };
//export default page2

//🚀 JSX (JavaScript XML) - JSX is like writing HTML inside JavaScript, this means that you can write HTML elements and attributes in JavaScript, and the browser will render them as if they were written in HTML.
//Eg 1
// const page3 = () => { 
//   const a = 10;
//   return (
//     //<div>a</div>
//     <div>{a}</div> //JSX code snippet in the code
//   )
// };
// export default page3

//Eg 2
// const page4 = () => { 
//   let groom = "SRK";
//   const bride = "Deepika";
//   //groom = "Ranveer";
//   return (
//     <div>{groom} weds {bride}</div> //JSX code snippet in the code
//   )
// };
// export default page4

//🚀 React works on Virtual DOM using process called reconciliation
// const page5 = () => { 
//   return (
//    <div>
//      <div>
//       bittu
//      </div>
//      <h1>monu</h1>
//    </div>
//   )
// };
// export default page5

// const page6 = () => { 
//   let marks = 76;
//   return (
//     //Fragments <> </> or empty tags used as wrapper or wrapping in React
//    <> 
//      <h1 className='font-bold text-2xl text-blue-600'>My total marks were {marks}</h1>
//      <button onClick={() => {
//       marks = 33;
//      }} className='bg-gray-400 px-5 py-4 rounded mt-5 ml-3 text-white font-bold'>Update</button>
//    </>
//   )
// };
// export default page6

// const page7 = () => { 
//   let marks = 76;
//   const changeMarks = () => {
//     console.log(marks);
//     marks = 'fail ho gaya';
//     console.log(marks);
//   };
//   return (
//    <> 
//      <h1 className='font-bold text-2xl text-blue-600'>My total marks were {marks}</h1>
//      <button onClick={changeMarks()} className='bg-gray-400 px-5 py-4 rounded mt-5 ml-3 text-white font-bold'>Update</button>
//    </>
//   )
// };
// export default page7

// const page8 = () => { 
//   let marks = 76;
//   const changeMarks = () => {
//     console.log(marks);
//     marks = 'fail ho gaya';
//     console.log(marks);
//   };
//   return (
//    <> 
//      <h1 className='font-bold text-2xl text-blue-600'>My total marks were {marks}</h1>
//      <button onClick={() => {
//       changeMarks();
//      }} className='bg-gray-400 px-5 py-4 rounded mt-5 ml-3 text-white font-bold'>Update</button>
//    </>
//   )
// };
// export default page8

//🚀 useState Hook
const page9 = () => {
  let [marks, setMarks] = useState(80); //way of creating variables in React is by using useStateSnippet/ "useState" hook //abhi ke liye think useState = React ke variables
  return (
    <>
    <h1>My marks were {marks}</h1>
    <button onClick={() => {
        //setMarks(-22);
        setMarks(33);
        //setMarks('bittu');
    }}>Update</button>
    </>
  )
}
export default page9