//Class based component similar to/same as functional component User.jsx

import React from "react"; //'React.Component' is a class inside React, hence importing React

// Class based component: similar to functional based components, class based components are also simply a normal javascript class
//(reminder: functional based components are simple normal javascript functions that return some jsx)

class UserClass extends React.Component{ //'extends React.Component' will help React know/identify that this is a class based component and so React starts tracking it
                                         // 'React.Component' is a class given to us by React and here 'UserClass' class is inheriting properties from 'React.Component' class

  //constructor to recieve the props data in Class based component
  constructor(props){
    //In a functional component, you can directly access the props object passed to the component function. However, in a class-based component, the props object is not automatically available to the component class. Instead, you need to call the super() method to initialize the React.Component class and gain access to the props object, and so here as 'UserClass' class is inheriting properties from 'React.Component' class hence 'UserClass' also gets the ability to access the props object.
    //Therefore, by calling super(props) in the constructor of UserClass, you are effectively initializing the React.Component class with the props object. This allows you to use the props object within the UserClass component, just like you would in a functional component.
    //The purpose of using the constructor with super and props as argument is to allow the component to inherit the properties of its parent component and also pass in additional properties as arguments to the component, so to use properties of parent class (React.Component) in child class(UserClass) we are using super(props)
    //IMP Links: overreacted.io/why-do-we-write-super-props/ , www.geeksforgeeks.org/what-is-the-use-of-superprops/
    super(props);

    console.log(props); //1
    console.log(this.props); // same as //1 as inside the constructor of parent class i.e here React.Component class  this.props = props and this props value is passed to the parent class constructor via the super(props) in the child class i.e here UserClass class
    // console.log(props.phone);

   //also props here has scope only within the constructor of the child class (UserClass) whereas this.props that is present inside the constructor of the parent class (React.Component) has scope throughtout the child class i.e this.props here has scope throughout the UserClass both inside the constructor of UserClass and even outside the constructor of UserClass
   // so it is indeed always better to use this.props.phone and this.props.gender anywhere outside of constructor in the child class (UseClass) rather than just using props.phone and props.gender
  }
  
  //this render method will return some piece of jsx and that jsx eventually gets rendered on the screen
  //so in short similar to functional based components, Class based component is a class which has a render method which returns some piece of jsx
  // render(){
  //   return <div className="user-card">
  //     <h2>Name: Vishal_Class</h2>
  //     <h3>Location: Hyderabad_Class</h3>
  //     <h4>Contact: @vishalsingh2972_Class</h4>
  //     <h3>Phone: {this.props.phone}</h3> //props.phone also works in this case(as both {this.props.phone} or {props.phone} give same output) but it is not preferbale, better to use this.props.phone only
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
