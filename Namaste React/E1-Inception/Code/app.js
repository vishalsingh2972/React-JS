const heading1 = React.createElement(
  "h1", 
  {id: "name", xyz: "abc" }, 
  "Hello from inside React!"
);

console.log(heading1);
console.log(typeof heading1); //heading1 is a react element or javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);


//Nested Divs in React
const parent = React.createElement(
  "div", 
  {id: "parent"}, 
  React.createElement(
    "div", 
    {id: "child"},
    React.createElement(
      "h1", 
      {id: "grandchild"}, 
      "I am h1 tag!"
    )
  )
);

console.log(parent); 
console.log(typeof parent); //parent is a react element or javascript object
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
//root.render(parent);
root2.render(parent);
