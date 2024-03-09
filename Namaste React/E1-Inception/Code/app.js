const heading1 = React.createElement("h1", {id: "name", xyz:"abc"}, "Hello from inside React!");

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);