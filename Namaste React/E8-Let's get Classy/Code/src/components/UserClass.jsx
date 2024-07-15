//Class based component similar to/same as functional component User.jsx
//whenever we say we are loading a CBC on our webpage that means I am creating an instance of that class

import React from "react"; //'React.Component' is a class inside React, hence importing React

// Class based component: similar to functional based components, class based components are also simply a normal javascript class
//(reminder: functional based components are simple normal javascript functions that return some jsx)

class UserClass extends React.Component{ //'extends React.Component' will help React know/identify that this is a class based component and so React starts tracking it
                                         // 'React.Component' is a class given to us by React and here 'UserClass' class is inheriting some properties from 'React.Component' class

  //constructor to recieve the props data in Class based component
  //we will create the state variable for our CBC inside the constructor
  constructor(props){
    super(props);

    // console.log(props);
    // console.log(props.phone);

    //creating state variable in CBC using this.state
    //so this.state = { count: 0} in CBC is equivalent to const [count] = useState(0); in functional components
    this.state = {
      count: 0
    }
  }

  //this render method will return some piece of jsx and that jsx eventually gets rendered on the screen
  //so in short similar to functional based components, Class based component is a class which has a render method which returns some piece of jsx
  // render(){
  //   return <div className="user-card">
  //     <h2>Name: Vishal_Class</h2>
  //     <h3>Location: Hyderabad_Class</h3>
  //     <h4>Contact: @vishalsingh2972_Class</h4>
  //     <h3>Phone: {this.props.phone}</h3>
  //     <h3>Gender: {this.props.gender}</h3>
  //   </div>
  // }

  //better or cleaner way to write render() ---> destructuring this.props
  render(){

    const {phone, gender} = this.props;

    return <div className="user-card">
      <h2>Name: Vishal_Class</h2>
      <h3>Location: Hyderabad_Class</h3>
      <h4>Contact: @vishalsingh2972_Class</h4>
      <h3>Phone: {phone}</h3>
      <h3>Gender: {gender}</h3>
    </div>
  }
}

export default UserClass
