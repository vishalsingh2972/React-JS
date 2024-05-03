import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "text inside heading"); //create React element using core React //creating this is still very lengthy/clumpy/verbose when compared to directly creating a HTML tag via index.html, hence use use JSX
console.log(heading);

// JSX (JavaScript XML)
// JSX => Babel transpiles JSX to React.createElement => ReactElement-JS Object => HTMLElement(render)
// React.createElement creates an object, when we render this element on DOM, it becomes HTML Element
const JSX_heading = <h1 id="heading" className="head" tabIndex="1">text inside heading using JSX</h1>;//create React element using JSX //this is not HTML written inside javascript file, this is JSX //JSX is just a HTML like syntax //JSX attributes are always in camelcse like className, tabIndex etc.
//console.log(typeof JSX_heading); //object //JSX_heading is a react element or JS object
console.log(JSX_heading); //object that is exactly same as console.log(heading);

const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(heading);
root4.render(JSX_heading); 

//from now onwards we will not be using "React.createElement" instead we will be using JSX as we want our code to be less verbose so that other devs can read and understand it easily //JSX is not an inherent part of React itself, but it's a widely used and convenient syntax extension for JavaScript that makes writing React code more readable and maintainable.

//babel - transpiler/javascript compiler - babeljs.io //here babel transpiles or converts "const JSX_heading = <h1 id="heading" className="head" tabIndex="1">text inside heading using JSX</h1>;" to "const JSX_heading = React.createElement("h1", {id: "heading"}, "text inside heading");" ✅

//if we are writing JSX in multiple lines we need to add '(' and ')' for babel to be able to understand where JSX is starting and where it is ending
const JSX_heading2 = (<h1 id="heading" className="head2" tabIndex="1">
  text inside heading using JSX
  </h1>);

//const JSX_heading2 = (<h1 id="heading" className="head2" tabIndex="1">text inside heading using JSX</h1>); //can put '(' and ')' even when JSX written in 1 line but not mandatory in this case, aapki marzi.

//Therefore in short, JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HMTLElement(render)


//React components -  2 types  
// 1)Class based components - old way of writing code - nobody uses these now - uses javascript classes to create components
// 2)Functional components - new way of writing code - 99.99% devs use this majorly - uses javascript functions to create components

//React Functional component
// Functional component is simply the basic javascript function which takes some arguments and returns some JSX/ React element /JavaScript Object
// - always name the function with capital letter to avoid error (this is a react way to understand that this function is a component)

//Functional Component Syntax
// functional component by using return
const HeadingFunctionalComponent = () => {
  return <h1 className="heading">text inside functional component</h1>;
};

// functional component can also be directly written without using return as
const HeadingFunctionalComponent2 = () => <h1 className="heading">text inside functional component</h1>;

// functional component having multiple lines without using return we wrap it in '(' and ')'
const HeadingFunctionalComponent3 = () => (
  <h1 className="heading">text inside functional component</h1>
);

// using normal function instead of arrow function to form a functional component
const HeadingFunctionalComponentNormal = function() {
  return(
    <h1 className="heading">
      text inside functional component
    </h1>
  );
};

// functional component returning a nested JSX
const HeadingFunctionalComponent4 = () => (
  <div id="container">
    <h1 className="heading">text inside functional component🌈🌈🌈</h1>
  </div>
);

root4.render(<HeadingFunctionalComponent4/>); //correct way to render react functional components //<HeadingFunctionalComponent4/> this is the syntax which babel will understand and know that this is a functional component
//root4.render(HeadingFunctionalComponent4()); //will work in some cases but not correct way

//Putting a Component inside another Component - also known as Component Composition
//rendering Title component inside HEADING component
const Title = () => (
  <h1 className="title">Title component🧨</h1>
);

const HEADING = () => (
  <div id="container">
    <h1 className="heading">HEADING component🏠</h1>
    <Title/>
    {<Title/>}
    <Title></Title>
    {Title()}
  </div>
);
root4.render(<HEADING/>);

const number = 1000;
//Superpower of JSX - we can write any javascript code inside the '{}' in the JSX
const FunctionalComponent = () => (
  <div id="container">
    {number+2+8}
    <h2>{number+2+8}</h2>
    <h2>{number+2+'zara'}</h2>
    <h2>{number+'zara'+2}</h2>
    <h2>{console.log('ye bhi print hoga')}</h2>
    <h1 className="heading">Hakuna Matata</h1>
  </div>
);
//root4.render(<FunctionalComponent/>);


//Putting a element inside another Component - again making use of '{}' inside the functional component
//rendering Title2 element inside HEADING2 component
const Title2 = (
  <h1 className="title">Title element🧨🧨</h1>
);
//console.log(typeof Title2); //JSX /React Element /Javascript object

const HEADING2 = () => (
  <div id="container">
    <h1 className="heading">HEADING component🏠🏠</h1>
    {Title2}
  </div>
);
root4.render(<HEADING2/>);

//Putting a element inside another element - again making use of '{}' inside the functional component
//rendering joker element and ghost element inside Title4 element
const joker = <h1>🤡🤡🤡</h1>
const casper = <span>👻👻👻</span>

const Title4 = (
  <h1 className="title">
    💩💩💩
    {casper}
    {joker}
    {casper}
  </h1>
);
root4.render(Title4);

//Putting a component inside an element
//rendering Haddi component inside kutta element
const Haddi = () => (
  <div id="container">
    <h1 className="heading">Component🦴🦴🦴</h1>
  </div>
);

const kutta = (
  <h1 className="title">
    element🐕🐕🐕
    <Haddi/>
  </h1>
);
root4.render(kutta);

//Cross-Site Scripting(XSS) attacks where attacker can send some data and make manipulate the javascript present in your browser but when we are putting the data inside '{}' JSX takes care of these injection attacks by first sanitising the malicious data and then executing it.


//ReactDOM direct attack 
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';

// const heading = React.createElement("h1", {id: "heading"}, "text inside heading");
// const root4 = createRoot(document.getElementById("root"));
// root4.render(heading);
