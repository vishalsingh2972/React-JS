//Class based component similar to/same as functional component User.jsx
//whenever we say we are loading a CBC on our webpage that means I am creating an instance of that class

import React from "react"; //'React.Component' is a class inside React, hence importing React

// Class based component: similar to functional based components, class based components are also simply a normal javascript class
// (reminder: functional based components are simple normal javascript functions that return some jsx)

class UserClass extends React.Component { //'extends React.Component' will help React know/identify that this is a class based component and so React starts tracking it
  // 'React.Component' is a class given to us by React and here 'UserClass' class is inheriting properties from 'React.Component' class

  // constructor to recieve the props data in Class based component
  // we will create the state variable for our CBC inside the constructor
  // When a class-based component is rendered, a new instance of that class is created, and the first thing that gets executed in that instance is the constructor (if it exists like here it does), hence the constructor is indeed the best/appropriate place to initialize state variables in a class-based component.
  constructor(props) {
    // In a functional component, you can directly access the props object passed to the component function. However, in a class-based component, the props object is not automatically available to the component class. Instead, you need to call the super() method to initialize the React.Component class and gain access to the props object, and so here as 'UserClass' class is inheriting properties from 'React.Component' class hence 'UserClass' also gets the ability to access the props object.
    // Therefore, by calling super(props) in the constructor of UserClass, you are effectively initializing the React.Component class with the props object. This allows you to use the props object within the UserClass component, just like you would in a functional component.
    // The purpose of using the constructor with super and props as argument is to allow the component to inherit the properties of its parent component and also pass in additional properties as arguments to the component, so to use properties of parent class (React.Component) in child class(UserClass) we are using super(props)
    // IMP Links: overreacted.io/why-do-we-write-super-props/ , www.geeksforgeeks.org/what-is-the-use-of-superprops/
    super(props);

    // console.log(props); //1
    // console.log(this.props); // same as //1 as inside the constructor of parent class i.e here React.Component class  this.props = props and this props value is passed to the parent class constructor via the super(props) in the child class i.e here UserClass class
    // console.log(props.phone);

    // also props here has scope only within the constructor of the child class (UserClass) whereas this.props that is present inside the constructor of the parent class (React.Component) has scope throughtout the child class i.e this.props here has scope throughout the UserClass both inside the constructor of UserClass and even outside the constructor of UserClass
    // so it is indeed always better to use this.props.phone and this.props.gender anywhere outside of constructor in the child class (UseClass) rather than just using props.phone and props.gender

    // state variables in CBC
    this.state = { //here state is a 'big' object that will contain/hold all the state variables for the component
      count: 0,
      count2: 2
    }
    console.log('Child Constructor')
  }

  // this render method will return some piece of jsx and that jsx eventually gets rendered on the screen
  // so in short similar to functional based components, Class based component is a class which has a render method which returns some piece of jsx
  // render(){
  //   return <div className="user-card">
  //     <h2>Name: Vishal_Class</h2>
  //     <h3>Location: Hyderabad_Class</h3>
  //     <h4>Contact: @vishalsingh2972_Class</h4>
  //     <h3>Phone: {this.props.phone}</h3> //props.phone also works in this case(as both {this.props.phone} or {props.phone} give same output) but it is not preferbale, better to use this.props.phone only
  //     <h3>Gender: {this.props.gender}</h3>
  //   </div>
  // }

  // better or cleaner way to write render() ---> destructuring this.props
  render() {
    // console.log('UserClass class/component rerendered');

    const { phone, gender } = this.props;
    const { count, count2 } = this.state;

    console.log('Child Render method')

    return <div className="user-card">
      {/* <h1>Count = {this.state.count}</h1> */}
      <h1>Count = {count}</h1>
      {/* <h1>Count2 = {count2}</h1> */}
      <button onClick={() => {
        // this.state.count = this.state.count + 1 //❌ Similar to FC, even in CBC we cannot update state directly like this
        // console.log(this.state.count)

        //✅ Similar to functions in FC, even in CBC React gives us a special function 'this.setState'
        // inside 'this.setState' we will pass in an object {...} and this object will contact the updated value of our state variable
        this.setState({
          count: this.state.count + 1, //or here simply count: count + 1
          // count2: this.state.count2 + 1
        })
        // here on each onclick render() method gets called, i.e in CBC render() method gets called each time the state of a state variable changes
      }}>+</button>
      <h2>Name: Vishal_Class</h2>
      <h3>Location: Hyderabad_Class</h3>
      <h4>Contact: @vishalsingh2972_Class</h4>
      <h3>Phone: {phone}</h3>
      <h3>Gender: {gender}</h3>
    </div>
  }
}

export default UserClass

// loading a class based component on our webpage means creating an instance of that class. Hence, each time a class-based component is rendered/mounted/loaded on the screen, a new instance of that class is created.

// order in which UserClass gets rendered/loaded on screen ----> 1)first UserClass component is loaded - 2)instance of class created - 3)first constructor is called - 4)then render method gets called