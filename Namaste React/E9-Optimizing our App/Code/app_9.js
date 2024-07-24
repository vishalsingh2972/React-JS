//our Food Ordering App - SWIGATO
import React, { lazy } from "react"; //lazy() function comes from "react" library present in node modules
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //https://reactrouter.com/en/main/routers/create-browser-router
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/GroceryApp/Grocery"; //importing Grocery in normal way where Grocery also gets included together with Food App bundle

//Chunking / Code Splitting / Dynamic Bundling / Dynamic imports / Lazy Loading / On demand Loading - these are all different names for the same process and the process is to break down our app in smaller logical chunks
//MakeMyTrip Website - Logical separation of bundles example
//in our app we use Lazy Loading/On demand Loading for loading GroceryApp folder (contains all components related to grocery) only when we click on Grocery, i.e initially when the page loads, it will not include GroceryApp into our bundle JS file that we provide to our browser, only when I navigate to GroceryApp by clikcing on 'Grocery' button on the header, the GroceryApp folder will get loaded into the browser as a separate bundle
//Lazy loading the GroceryApp component is an excellent strategy to improve initial load times for your application, this approach is particularly useful in bigger codebases or websites with multiple distinct sections where we have a lot of components involved Eg. MakeMytrip website(separate bundle for Trains, Hotels, Flights..etc), Swiggy Website(separate bundle for Swiggy Instamart)
//How SPA(loads everything together) and Lazy Loading(loads as per requirement) Work Together

//Lazy Loading GroceryApp (folder containing all grocery related components)
const Grocery = lazy(() => import("./src/components/GroceryApp/Grocery")); //importing Grocery in a 'LAZY' way where Grocery will be sent to the browser as a separate bundle (and not gets included together with the Food App bundle)

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
        path: "/grocery",
        element: <Grocery/>,
      },
      {
        path: "/restaurants/:resId", //":resId" will help us give a unique path to each restaurant, i.e. in this "/restaurants/:resId", ":resId" this part of the path is dynamic
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/> //Root-level error handling
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
