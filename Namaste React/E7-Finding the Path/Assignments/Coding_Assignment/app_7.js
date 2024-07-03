//our Food Ordering App - SWIGATO
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //https://reactrouter.com/en/main/routers/create-browser-router
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import Footer from "./src/components/Footer";

const AppLayout = () => {
  return(
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

//creating routing configuration inside our appRouter, here "configuration" means some information that will define and tell my createBrowserRouter what will happen on a specific route/path
const appRouter = createBrowserRouter([
  {
    // path: "/", (need to check this - once try without putting this) <AppLayout /> component will be rendered automatically for the root path (/) without explicitly specifying the path in the route configuration.
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
      },
      {
        path: "/restaurants/:resId", //":resId" will help us give a unique path to each restaurant, i.e. in this "/restaurants/:resId", ":resId" this part of the path is dynamic
        element: <RestaurantMenu/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
    errorElement: <Error/> //Root-level error handling
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
