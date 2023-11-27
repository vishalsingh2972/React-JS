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
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <Link href="/About">About</Link>
      <Link href="/Courses">Courses</Link>
      <Link href="/Product">Product</Link>
    </div>
  )
}

export default page

