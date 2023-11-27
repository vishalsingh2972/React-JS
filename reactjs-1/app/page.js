//🚀Breaking the Components

"use client" 
import React, { useState } from 'react'
import Header from "@/Components/Header" //importing Header.js into page.js

const page = () => {
  const [user, setUser] = useState("Vishal");
  return (
    <>
    <Header/>
    {user}
    </>
  )
}

export default page

