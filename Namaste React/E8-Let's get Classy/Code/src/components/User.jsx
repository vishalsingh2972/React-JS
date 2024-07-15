import { useState } from "react"

const User = (props) => {

  const [count] = useState(0);

  return <div className="user-card">
    <h1>Count = {count}</h1>
    <h2>Name: Vishal</h2>
    <h3>Location: Hyderabad</h3>
    <h4>Contact: @vishalsingh2972</h4>
    <h3>Phone: {props.phone}</h3>
  </div>
}

export default User
