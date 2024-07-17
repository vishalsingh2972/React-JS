import { useEffect, useState } from "react"

const User = (props) => {

  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  //BTS React still clubs all the state variables into/inside a single object only ~ similar to how React does it in class based components (store inside the 'big' single object this.state)

  useEffect(() => {
    //Make API calls

    //trying componentWillUnmount usage - setInterval example in useEffect
    setInterval(() => {
      console.log("useless text")
    },1000);

    //way to return a cleanup function from within useEffect ~ one of the ways where we are Unmounting Components in React using Hooks
    //return a function from useEffect ~ this is used here to unmount similar to usage of 'clearInterval(this.timer)' in 'componentWillUnmount(){...}' in UserClass.jsx
    return() => {

    }
  }, []);

  return <div className="user-card">
    <h1>Count = {count}</h1>
    <h1>Count2 = {count2}</h1>
    <h2>Name: Vishal</h2>
    <h3>Location: Hyderabad</h3>
    <h4>Contact: @vishalsingh2972</h4>
    <h3>Phone: {props.phone}</h3>
  </div>
}

export default User
