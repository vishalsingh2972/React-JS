//our Food Ordering App - SWIGATO
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

//creating routing configuration inside our appRouter, here "configuration" means some information that will define and tell my createBrowserRouter what will happen on a specific route/path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/> //basically if my path is "/" then load my entire Homepage or AppLayout
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contacts",

  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);