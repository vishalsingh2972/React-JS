// //🚀Breaking the Components

// "use client" 
// import React, { useState } from 'react'
// import Header from "@/Components/Header" //importing Header.js into page.js

// const page = () => {
//   const [user, setUser] = useState("Vishal");
//   const [editor, setEditor] = useState("Sahil");
//   return (
//     <>
//     <Header UsEr={user} editor={editor}/>
//     {user}
//     </>
//   )
// }
// export default page

//🚀Routing
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <a href='/About'>About</a>
      <a href='/Courses'>Courses</a>
      <a href='/Product'>Product</a>
    </div>
  )
}

export default page

