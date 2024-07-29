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
      count2: 2,
      userInfo:{
        name: "default name", //(initial value)
        location: "default location"
      }
    }
    console.log(this.props.phone + ' Child Constructor')
    // console.log(this.state.userInfo)
  }

  //ComponentDidMount is another method like render method given to us by React CBCs
  //ComponentDidMount method is executed/called after render method is done execution
  //ComponentDidMount = as the name suggests 'Component''Did''Mount', so this will be called after the component has been mounted onto the webpage (i.e after the render method has completed)
  //ComponentDidMount use case ~ why has React given componentDidMount to us? - there are some things that we do once the component has mounted successfully(i.e when render method is done execution), this is when componentDidMount is triggered/used to make API calls
  //using componentDidMount in CBCs is much similar to using useEffect in FCs ---> But but but IMP disclaimer: Never ever compare React Lifecycle Methods of CBCs to Hooks we use in FCs
  async componentDidMount(){
    console.log(this.props.phone + ' Child componentDidMount method called');

    //API call happens in componentDidMount after render method is called once (i.e initial render done) and then the fetched data is now used to change the state of the component typically via useState, this change in state will trigger a re-render so the render method is called once again, this time with the updated state and now the updated UI will eventually get displayed
    const data = await fetch("https://api.github.com/users/vishalsingh2972");
    // console.log(data);
    const json_data = await data.json();
    console.log(json_data);

    this.setState({
      userInfo: json_data
    })

    //componentWillUnmount usage - setInterval example
    this.timer = setInterval(() => {
      console.log("useless text")
    },1000)
  }

  componentDidUpdate(){
    console.log('Child componentDidUpdate method called');

    // //Just tried setInterval example in componentDidUpdate as well (EXTRA)
    // //componentWillUnmount usage - setInterval example
    // this.timer = setInterval(() => {
    //   console.log("useless text")
    // },1000)
  }

  componentWillUnmount(){ //is called just before the component is unmounted and destroyed from the DOM tree, or in simply words here it typically happens when we navigate to a new page or route, or when a component is removed from the UI due to conditional rendering or other factors. //as we saw in one of the examples where unnecessary/redundant setInterval and setTimeout left running in the background leading to performance degradation, hence componentWillUnmount is super super required to completely clean this mess properly
    //as we saw in our setInterval example for knowing the importance/use of componentWillUnmount
    clearInterval(this.timer); // used here to completely stop the execution of setInterval 'just' before we leave this page
    console.log('Child componentWillUnmount method called, component got unmounted successfully');
  } //When to Use: It's ideal for scenarios where a component needs to perform cleanup actions before it's removed from the DOM. This ensures your application doesn't hold onto unnecessary resources or leak memory, hence this method is useful for performing any necessary cleanup, such as invalidating timers, canceling network requests, or removing event listeners.

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
    //console.log('UserClass class/component rerendered');
    // console.log(this.state.userInfo.name);

    const { phone, gender } = this.props;
    const { count, count2 } = this.state;
    const { name, location, html_url, avatar_url } = this.state.userInfo;

    console.log(this.props.phone + ' Child Render method')

    // debugger;
    return <div className="user-card">
      {/* <h1>Count = {this.state.count}</h1> */}
      <h1>Count = {count}</h1>
      {/* <h1>Count2 = {count2}</h1> */}
      <button onClick={() => {
        // this.state.count = this.state.count + 1 //❌ Similar to FC, even in CBC we cannot update state directly like this
        // console.log(this.state.count)

        //✅ Similar to functions in FC, even in CBC React gives us a special function 'this.setState'
        // inside 'this.setState' we will pass in an object {...} and this object will contain the updated value of our state variable
        this.setState({
          count: this.state.count + 1, //or here simply count: count + 1
          // count2: this.state.count2 + 1
        })
        // here on each onclick render() method gets called, i.e in CBC render() method gets called each time the state of a state variable changes
      }}>+</button>
      <img src={avatar_url}/>
      <h2>Name: {name} </h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {html_url}</h4>
      <h3>Phone: {phone}</h3>
      <h3>Gender: {gender}</h3>
    </div>
  }
}

export default UserClass

// loading a class based component on our webpage means creating an instance of that class. Hence, each time a class-based component is rendered/mounted/loaded on the screen, a new instance of that class is created.

// order in which UserClass gets rendered/loaded on screen ----> 1)first UserClass component is loaded - 2)instance of class created - 3)first constructor is called - 4)then render method gets called - 5)then ComponentDidMount method gets called


//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
/*
//✅ Optimised approach of React where it is grouping Render phase of both children together and then doing Commit phase of both children together  ~  This optimization reduces the time spent in layout and rendering updates, resulting in better performance ✅ (optimized approach ensures that React updates the DOM only once for all changes, thereby reducing the time spent on layout and rendering updates, which improves performance)
📌 Parent Render Phase
Parent Constructor
Parent Render method

📌 Both childrens' Render Phase
First Child Constructor
First Child Render method
Second Child Constructor
Second Child Render method

📌 Both childrens' Commit Phase
🔄 ~ React performs a single DOM update for all changes i.e here single DOM update for parent and for both the children happens together in one single batch thereby leading to better performance ~ 🔄
First Child componentDidMount method called
Second Child componentDidMount method called

📌 Parent Commit Phase
Parent componentDidMount method called

DOM update count = 1 only ~ much better performance 🕺🕺🕺 (as updating the DOM is an expensive operation that can significantly impact performance so React follows this approach to reduce costs and time, plus increase efficiency and enhances user experience)
*/
/*
//❌ UnOptimised approach, Bad Performance ❌
📌 Parent Render Phase 
Parent Constructor 
Parent Render method 

📌 First Child Render and Commit Phase 
First Child Constructor 
First Child Render method
🔄 ~ ­React updates ­D­O­M ~ 🔄
First Child componentDidMount method called 

📌 Secoond Child Render and Commit Phase 
Second Child Constructor 
Second Child Render method
🔄 ~ ­React updates ­D­O­M ~ 🔄
Second Child componentDidMount method called 

📌 Parent Commit Phase
🔄 ~ ­React updates ­D­O­M ~ 🔄
Parent componentDidMount method called

DOM update count = 3 ~ very bad performance 🤢🤢🤢
*/

//we use this.timer in CBCs (whereas we used 'const timer' in FCs) because here scope of this.timer is throughout the whole class hence here 'clearInterval(this.timer)' identifies this.timer and works whereas if like FCs you were to use 'const timer' here it would not work as 'clearInterval(timer)' would not be able to identify 'timer' as scope of 'timer' is limited whereas scope of this.timer is throughout the whole class
