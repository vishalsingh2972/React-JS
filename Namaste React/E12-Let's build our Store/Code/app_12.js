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
import { Provider } from "react-redux"; //for connecting our React app with the Redux Store
import appStore from "./src/utils/redux/Redux Store/appStore"; //our Redux Store
import Cart from "./src/components/Cart";

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
    <Provider store={appStore}>  {/* wrapping whole app inside <Provider> and passing the Redux store that we want to connect to the app in the form of props, ~  When you wrap your whole app inside the <Provider> component from react-redux and pass the Redux store as a prop, you are essentially making the Redux store available to your entire React application. This allows any component within your app to connect to the Redux store and access or modify the state. And similar to our UserContext.Provider we can also provide <Provider> separately to selected components as well giving us flexibility of which components have access to our Redux Store, since here we have wrapped whole app considering all components inside <Provider> so in this case here all components have access to our Redux Store */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser: 'Elon Musk'}}>*/}   {/* wrapping only header case: changes made in UserContext.Provider will only get reflected in Header, can also give different value here than the above UserContext.Provider */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error /> //Root-level error handling
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
