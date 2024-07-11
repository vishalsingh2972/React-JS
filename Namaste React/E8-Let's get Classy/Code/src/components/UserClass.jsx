//Class based component similar to/same as functional component User.jsx

import React from "react"; //'React.Component' is a class inside React, hence importing React

// Class based component: similar to functional based components, class based components are also simply a normal javascript class
//(reminder: functional based components are simple normal javascript functions that return some jsx)

class UserClass extends React.Component{ //'extends React.Component' will help React know/identify that this is a class based component and so React starts tracking it
                                         // 'React.Component' is a class given to us by React and here 'UserClass' class is inheriting some properties from 'React.Component' class

  //this render method will return some piece of jsx and that jsx eventually gets rendered on the screen
  //so in short similar to functional based components, Class based component is a class which has a render method which returns some piece of jsx
  render(){
    return <div className="user-card">
      <h2>Name: Vishal_Class</h2>
      <h3>Location: Hyderabad_Class</h3>
      <h4>Contact: @vishalsingh2972_Class</h4>
    </div>
  }
}

export default UserClass
