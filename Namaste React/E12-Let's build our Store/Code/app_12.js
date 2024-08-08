//our Food Ordering App - SWIGATO
import React, { lazy, Suspense, useContext, useEffect, useState } from "react"; //lazy() function comes from "react" library present in node modules
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //https://reactrouter.com/en/main/routers/create-browser-router
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Loading from "./src/components/Loading";
import UserContext from "./src/utils/context/UserContext";

// import Grocery from "./src/components/GroceryApp/Grocery"; //importing Grocery in normal way where Grocery also gets included together with Food App bundle

//Lazy Loading GroceryApp (folder containing all grocery related components)
const Grocery2 = lazy(() => import("./src/components/GroceryApp/Grocery")); //importing Grocery in a 'LAZY' way where Grocery will be sent to the browser as a separate bundle (and not gets included together with the Food App bundle)

const About = lazy(() => import("./src/components/About")); //Lazy Loading About component/page
const AppLayout = () => {

  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser); //set initial value as loggedInUser as given in UserContext.jsx

  useEffect(() => {
    //Make API call do authentication if username password verify go below

    //afer autentication is successfully passed
    setTimeout(() => {
      const data = {
        name: "Vishal Singh"
      }
      setUserName(data.name);
    }, 4000);
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{loggedInUser: 'Elon Musk'}}>*/}   {/* wrapping only header case: changes made in UserContext.Provider will only get reflected in Header, can also give different value here than the above UserContext.Provider */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

//creating routing configuration inside our appRouter, here "configuration" means some information that will define and tell my createBrowserRouter what will happen on a specific route/path
const appRouter = createBrowserRouter([
  {
    // path: "/", (need to check this - once try without putting this) <AppLayout /> component will be rendered automatically for the root path (/) without explicitly specifying the path in the route configuration.
    element: <AppLayout />, //basically if my path is "/" then load my entire Homepage or AppLayout
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<Loading/>}><About /></Suspense>,
        // errorElement: <Error/> //redundant errorElement - can be removed - Root-level error handling will manage this
      },
      {
        path: "/contact",
        element: <Contact />,
        // errorElement: <Error/> //redundant errorElement - can be removed - Root-level error handling will manage this
      },
      {
        path: "/grocery",
        // element: <Grocery/> //normal loading when GroceryApp in same bundle
        element: <Suspense fallback={<Loading/>}><Grocery2 /></Suspense>, //lazy loading when GroceryApp is sent in a separate bundle
      },
      {
        path: "/restaurants/:resId", //":resId" will help us give a unique path to each restaurant, i.e. in this "/restaurants/:resId", ":resId" this part of the path is dynamic
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error /> //Root-level error handling
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);