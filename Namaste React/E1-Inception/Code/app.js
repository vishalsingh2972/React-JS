// const heading1 = React.createElement(
//   "h1", 
//   {id: "name", xyz: "abc" }, 
//   "Hello from inside React!"
// );

// console.log(heading1);
// console.log(typeof heading1); //heading1 is a react element or javascript object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);


//Nested Divs in React
const parent = React.createElement("div", {id: "parent"}, 
  React.createElement("div", {id: "child"},[ //for adding 2 or more elements as siblings inside an element we use Arrays
    React.createElement("h1", {id: "grandchild", key: "h1"}, "I am h1 tag!"),
    React.createElement("h2", {id: "grandchild2", key: "h2"}, "I am h2 tag!")
  ])
);

console.log(parent); 
console.log(typeof parent); //parent is a react element or javascript object
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
//root.render(parent);
root2.render(parent);
//ReactDOM.createRoot(document.getElementById("root2")).render(parent);

//ReactElement(Object) => HTML(Browser Understands)
//In React, the React.createElement function creates lightweight JavaScript objects that describe the UI components you want to display. These objects are called React elements and act as blueprints for the actual HTML elements. When you use ReactDOM.render, React takes these blueprints and translates them into real HTML elements within the browser's Document Object Model (DOM). This process involves creating the necessary HTML elements with their attributes and inserting them into the designated container element in your HTML, making them visible on the webpage.


//Arrays inside Arrays
const parent2 = React.createElement("div", {id: "parent"},[ 
  React.createElement("div", {id: "child"},[
    React.createElement("h1", {id: "grandchild1", key: "h1"}, "Hare"),
    React.createElement("h2", {id: "grandchild2", key: "h2"}, "Krishna")
  ]),
  React.createElement("div", {id: "child2"},[
    React.createElement("h1", {id: "grandchild3", key: "h1"}, "Luv"),
    React.createElement("h2", {id: "grandchild4", key: "h2"}, "Kush")
  ])
]);

console.log(parent2); 
console.log(typeof parent2);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent2);

//even after using React, parent2 is still very untidy and can get difficult to understand as the code gets more complicated, to solve this we use JSX
