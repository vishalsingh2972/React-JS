//UserContext will store/keep the information of a logged in user and makes this information accessible throughout the whole code globally so that after logging in user can navigate to different components of the app without being logged out
//context is particularly nice when you need data or functions that will be necessary throughout a bunch of different parts of our application, context is much better way than using props as context helps us avoid "prop drilling" therbey avoiding unneccesary errors that might occur

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default_Vishal"
})

export default UserContext

//to create a context ---> use "createContext"
//now to access this context anywhere in our app. ---> use "useContext" hook