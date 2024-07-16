import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";

//Class based 'About' component
//here trying one class based component (UserClass) inside another class based component (About) , in this case order of execution ----> 1)Parent Constructor - 2)Parent Render method - 3)Child Constructor - 4)Child Render method, hence this is how lifecycle of CBC works
// class About extends React.Component{ //can also be written like this ⬇️
class About extends Component{ //destructuring on the go, using destructuring to import the Component class from react

  constructor(props){
    super(props);

    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log('Parent componentDidMount method called')
  }

  render() {
    console.log("Parent Render method")
    return (
      <div>
        {/* {console.log("Parent Render method2")} */}
        <h1>About Class Component</h1>
        <h2>This is your about section</h2>

        {/* Creating 2 instances of the same class named 'UserClass' */}
        <UserClass phone={"77777777 (CBC)"} gender={"Male"}/>
        <UserClass phone={"88888888 (CBC 2)"} gender={"Male"}/>
      </div>
    )
  }
}

//functional About' component
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is your about section</h2>
//       {/* <User phone={"123456789 (FBC)"}/> */}
//       <UserClass phone={"77777777 (CBC)"} gender={"Male"}/>
//     </div>
//   )
// }

export default About
