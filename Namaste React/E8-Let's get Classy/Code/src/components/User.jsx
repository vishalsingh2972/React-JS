const User = (props) => {
  return <div className="user-card">
    <h2>Name: Vishal</h2>
    <h3>Location: Hyderabad</h3>
    <h4>Contact: @vishalsingh2972</h4>
    <h3>Phone: {props.phone}</h3>
  </div>
}

export default User
