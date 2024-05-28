# Chapter 04 - Talk_is_Cheap_Show_Me_the_Code_Assignment_Answers

## Q: Is `JSX` mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```
In short,
JSX is a syntax that is used for writing better and clean code insted of writing code using React.CreateElement. It is not mandatory to use JSX but makes things much simpler and smoother for React, hence it's widely adopted and considered a best practice.

JSX => It's an extension of Javascript which allows us to write HTML like syntax in JavaScript. It makes it really easier to create and manipulate dynamic interfaces. This HTML like syntax is transformed into standard JS objects using a transpiler such a Babel.
e.g: JSX: const element = <button className="btn btn-primary">Click me</button>;
Converted into JS: const element = React.createElement("button", { className: "btn btn-primary" }, "Click me");

No, `JSX` is not mandatory for React, but it is the recommended and widely used way of defining the structure of your user interfaces when working with React. React can be used without JSX, but JSX makes the process of defining and working with components in React much more convenient and readable.
We can write React components using plain JavaScript functions or classes, and create React elements using `React.createElement` function. However, this approach can be less intuitive and more verbose compared to JSX.
Here's an example of creating a React component and element without JSX:
```
const element = React.createElement('h1', null, 'Hello, React without JSX!');

class App extends React.Component {
  render() {
    return React.createElement('div', null, element);
  }
}
```
As you can see, it's less readable and more cumbersome compared to the JSX equivalent:

```
const element = <h1>Hello, React with JSX!</h1>;

class App extends React.Component {
  render() {
    return <div>{element}</div>;
  }
}
```
While JSX is not mandatory, it is highly recommended for most React development because it provides a more natural and expressive way to define the structure of your components and is widely adopted by the React community. JSX is also the approach you will find in most React documentation and tutorials.

---
## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

`ES6 (ECMAScript 2015)` is not mandatory for React, but it is highly recommended and widely used in React development. React itself does not require ES6, and we can write React applications using older versions of JavaScript, such as ES5. 
However, using ES6 or a more recent version of JavaScript has several advantages:

`Enhanced Syntax` - ES6 introduces many features and syntactical improvements that make our code more concise and readable. Features like `arrow functions`, `template literals`, `destructuring`, and `classes` can significantly improve our code quality and maintainability.

`Module System` - ES6 introduced a standardized module system, allowing us to use `import` and `export` statements for better code organization and dependency management in React applications.

`Arrow Functions` - Arrow functions provide a more concise way to define functions, and they have lexical scoping, making it easier to work with this in React components.

`Class Syntax` - ES6 class syntax is commonly used for defining React components, providing a clear and more structured way to create components.

`Default Parameters` - ES6 allows us to set default parameter values for function arguments, which can make our code more robust.

`Spread and Rest Operators` - These operators are useful for working with arrays and objects, which are common in React applications.

`Template Literals` - Template literals provide a more convenient way to work with strings.

However, adopting ES6 and modern JavaScript practices is generally recommended for a more productive and maintainable React development experience.

---
## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression the JSX returned by that component is used to create the UI element, basically when you write a component name inside curly braces ({}), it instructs React to render the component on the frontend. 
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

---
## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```
```
will look something like this: const sample = {/* <h2> Greetings </h2>; */};
```

You can write comments in JSX using curly braces {} and JavaScript-style comments within them. 
`Single-Line Comments` - We can use JavaScript's single-line comment syntax within curly braces. This is useful for adding comments on a single line within your JSX code.
**Example:**
```
<div>
    {/* This is a single-line comment */}
    <p>Hello, World!</p>
</div>
```
`Multi-Line Comments` - If we want to add multi-line comments within our JSX code, we can use JavaScript's block comment syntax within curly braces.
**Example:**
```
<div>
    {/*
        This is a multi-line comment.
        You can use it for longer explanations.
    */}
    <p>Hello, World!</p>
</div>
```
It's important to note that these comments are for documentation and readability purposes and do not appear in the final rendered HTML. They are stripped out during the compilation of JSX into JavaScript, so they won't affect the behavior of your application.

---











