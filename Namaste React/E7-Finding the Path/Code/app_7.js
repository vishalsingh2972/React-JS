//our Food Ordering App - SWIGATO
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //https://reactrouter.com/en/main/routers/create-browser-router
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>

      <Outlet/>
    </div>
  )
}

//creating routing configuration inside our appRouter, here "configuration" means some information that will define and tell my createBrowserRouter what will happen on a specific route/path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>, //basically if my path is "/" then load my entire Homepage or AppLayout
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
        // errorElement: <Error/> //redundant errorElement - can be removed - Root-level error handling will manage this
      },
      {
        path: "/contact",
        element: <Contact/>,
        // errorElement: <Error/> //redundant errorElement - can be removed - Root-level error handling will manage this
      }
    ],
    errorElement: <Error/> //Root-level error handling
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);