//🚀Breaking the Components
import React from 'react'
import Header from "@/Components/Header" //importing Header.js into page.js

const page = () => {
  const [user, setUser] = useState("Vishal");
  return (
    <>
    <Header/>
    Page
    </>
  )
}

export default page

