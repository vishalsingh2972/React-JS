//rafce (React arrow function component export)

import React from 'react'

//🚀
// const page = () => { //page variable is a function that returns a div element with the text "Bittu mast sikhlera React uff"
//   return (
//     <div>Bittu mast sikhlera React uff</div>
//   )
//   //return <h1>hello BITTU</h1>
// }
// export default page //exporting to Next, now page variable/function can be used in other parts of the Next.js application

// function page2(){
//      return <h1>hello BITTU</h1>
//  }
//export default page2

//🚀 JSX (JavaScript XML) - JSX is like writing HTML inside JavaScript, this means that you can write HTML elements and attributes in JavaScript, and the browser will render them as if they were written in HTML.
//Eg 1
// const page3 = () => { 
//   const a = 10;
//   return (
//     //<div>a</div>
//     <div>{a}</div> //JSX code snippet in the code
//   )
// }
// export default page3

//Eg 2
const page4 = () => { 
  let groom = "SRK";
  const bride = "Deepika";
  //groom = "Ranveer";
  return (
    <div>{groom} weds {bride}</div> //JSX code snippet in the code
  )
};
export default page4

//🚀 React works on Virtual DOM using process called reconciliation