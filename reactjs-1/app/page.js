//🚀Breaking the Components

"use client" 
import React, { useState } from 'react'
import Header from "@/Components/Header" //importing Header.js into page.js

const page = () => {
  const [user, setUser] = useState("Vishal");
  const [editor, setEditor] = useState("Sahil");
  return (
    <>
    <Header UsEr={user} editor={editor}/>
    {user}
    </>
  )
}
export default page

