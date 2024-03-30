import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "text inside heading"); //create React element using core React //creating this is still very lengthy/clumpy/verbose when compared to directly creating a HTML tag via index.html, hence use use JSX
console.log(heading);

//JSX (JavaScript XML)
const JSX_heading = <h1 id="heading">text inside heading using JSX</h1>;//create React element using JSX //this is not HTML written inside javascript file, this is JSX //JSX is just a HTML like syntax
//console.log(typeof JSX_heading); //object //JSX_heading is a react element or JS object
console.log(JSX_heading); //object that is exactly same as console.log(heading);

const root4 = ReactDOM.createRoot(document.getElementById("root"));
root4.render(heading);
root4.render(JSX_heading); 

//from now onwards we will not be using "React.createElement" instead we will be using JSX as we want our code to be less verbose so that other devs can read and understand it easily //JSX is not an inherent part of React itself, but it's a widely used and convenient syntax extension for JavaScript that makes writing React code more readable and maintainable.












//ReactDOM direct attack 
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';

// const heading = React.createElement("h1", {id: "heading"}, "text inside heading");
// const root4 = createRoot(document.getElementById("root"));
// root4.rende
