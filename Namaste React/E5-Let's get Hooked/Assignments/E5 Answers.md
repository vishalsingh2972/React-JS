# Chapter 05 - Let's_get_Hooked_Assignment_Answers

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:
```js
export const MyComponent = () => {}
export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```js
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:
```js
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```js
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:
```js
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```js
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```js
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```js
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```js
import MyComponent, {MyComponent2} from "./MyComponent";
```

Hence, Ways to export a component:

- Named Export: add export keyword in front of component definition, import will -> import {Name} from "file path"
- Default Export: at the end of compo file: export default name: import -> import Name from "file path" (only one compo can be exported by defualt)
- If we have exported multiple components from a file, we can import them like: import * as XYZ from "file path" and later use it as: XYZ.Name.


## Q: What is the importance of `config.js` file?
A: `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable.
Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces.
Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:
```
Vishal
```
Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:
```
NAME='Vishal'
SURNAME='Singh'
```
- config.js files are in a config folder, config folder can also be named as utils, constants etc., in our E5 episode example we are naming the folder as utils (our utils folder contains config.js files - 
 `constants.jsx` and `mockData.jsx`).
- config.js file is used for the hard coded values used in our application. We can use it import a configration in side any component without having to copy it over and over again.
```
- The `config.js` file that is used to configure the settings for a  application. It is typically located in the root directory of the application. 

The `config.js` file can be used to store a variety of settings, such as:

	- The application's port number
	- The database connection string
	- The API keys for third-party services
	- The application's environment (e.g., development, staging, production)

By storing these settings in a `config.js` file, the application code can be kept clean and DRY (Don't Repeat Yourself). This makes the code easier to read, understand, and maintain.

The `config.js` file can also be used to make the application more flexible and adaptable to different environments.
For example, the application's port number can be set to a different value in the development environment than in the production environment. This allows the application to be tested on a different port number in development than it will be used on in production.
```
**Few reasons importance of config files:**
- Centralized Configuration: It stores all the configuration data at one place which makes it easy to access and modify them when needed.
- Separation of Concerns: Separating config data from the code makes it easier to maintain the code, developers can fully focus on building the product by using already available data instead of hard coding them.
- Security: Adding the API keys and other sensitive information in config file helps in protecting them from being exposed in code base.


## Q: What are `React Hooks`?
A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
### React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

In short, React Hooks are basically JavaScript functions which are provided by React. Hooks have some special capabilities that are useful for the development like managing state, memory etc.

---

```
Hooks are functions, introduced in react 16.8, allows us to add state and lifecycle methods to functional components, earlier these were available only for class components.
Popular hooks:
-> useState: Allows functional component to use state, takes an inital value and returns an array of current value and a function to update the value.
-> useEffect: Allows functional component to use lifecycle methods such as componentDidMount, componentDidUpdate. takes a function as a parameter and executes it after every render.
-> useContext: helps to consume context element that were defined by the parent element using React.useContext API.
-> useReducer
-> useCallback
```

---


In React version 16.8, React introduced a new pattern called Hooks. It allow us to use state and other React features without writing a class. Hooks are functions that you can call from within your functional components to access React features.

Some of the benefits of using React Hooks include:

	They make it easier to write reusable and testable components.
	They can help you to reduce the amount of code in your components.
	They can make your components more performant.
Here are some of the most common React Hooks:
```js
- `useState`: This hook allows you to manage state in your functional components.
- `useEffect`: This hook allows you to perform side effects in your functional components.
- `useContext`: This hook allows you to access context data in your functional components.
- `useReducer`: This hook is an alternative to useState for managing complex state.

- `useCallback`: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- `useMemo`: It returns a memoized value that helps in performance optimizations.
- `useRef`: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- `useLayoutEffect`: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- `useDebugValue`: Helps to display a label in React DevTools for custom hooks.

```

---

`React Hooks` is a feature introduced in React 16.8 to allow functional components to manage state and side effects without the need for class components. They provide a more concise and easier-to-understand way to work with component state and lifecycle methods.

Several built-in hooks serve different purposes in a React application. Here are some of the most commonly used ones:

1. `useState` - This hook allows us to add a state to your functional components. We can use it to declare and manage component-specific state variables.
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

2. `useEffect` - This hook enables you to perform side effects in your components, such as data fetching, subscriptions, or manually changing the DOM. It's the functional equivalent of the componentDidMount, componentDidUpdate, and `componentWillUnmount` lifecycle methods in class components.
```
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data and update the state
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

3. `useContext` - This hook allows us to access the context in our component tree. It's used to consume context values provided by a `Context.Provider`.
```
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <div>Context Value: {value}</div>;
}
```

4. `useReducer` - This hook is an alternative to useState for managing more complex state. It's often used when we need to manage state transitions in a predictable way, such as when building forms.
```
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

These are just a few of the commonly used React Hooks. Hooks make it easier to reuse logic across components, keep components more focused, and simplify the code structure of functional components in React applications.

5. `useRef` - It is a React Hook that provides a way to create and access mutable references to a DOM element or a value that persists across renders in a functional component. It's particularly useful for accessing and interacting with DOM elements directly or for storing values that you don't want to trigger a re-render when they change.

Here are some common use cases for useRef:

`Accessing DOM elements` - We can use useRef to get a reference to a DOM element and then manipulate it directly. For example, we can focus on an input field or measure the size of an element.

```
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```


## Q: Why do we need `useState Hook`?
A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
#### Syntax for useState hook
```
const [state, setState] = useState(initialstate);
```
#### Importing: To use useState you need to import useState from react as shown below:
```
import React, { useState } from "react";
```
we can use Hooks in Functional Components
```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```
- Therefore, useState hook is used to maintain the state in our React application. It keeps track of the state changes. When a component is re-rendered it changes the state of our compoent.
- useState hook allows functional components to use state,also Performance: Reduces un-necessary re renders of components.

---

The `useState` Hook is an essential part of React because it allows functional components to manage and update their local state. State management is a fundamental concept in React, as it enables components to store and update data that affects their behavior and appearance. 

Here are some key reasons why the useState Hook is used:

`Local Component State` - useState allows functional components to maintain their own local state. This state is isolated to the component and doesn't affect or interfere with the state of other components. This is crucial for building self-contained and reusable components.

`Reactive Updates` - When we use useState, React automatically handles re-rendering the component when the state changes. This means that when we call setState (the function returned by useState), React efficiently updates the component's user interface to reflect the new state. This reactivity is a core feature of React and simplifies UI development.

`Functional Components` - Before the introduction of Hooks in React, state management was primarily achieved in class components using the `this.state` and `this.setState` mechanisms. With Hooks, functional components can now have their own state, making them more powerful and easier to work with. This reduces the need for class components in many cases.

`Declarative Programming` - Using useState promotes a declarative style of programming. Instead of directly manipulating the DOM or managing state changes imperatively, we declare how our UI should look based on the current state. React takes care of updating the DOM to match the desired state.

`Easy to Understand` - useState provides a simple and intuitive way to add and update state in functional components. We can see the current state and its updates in one place, making it easier to understand and maintain our code.

Here's a basic example of how to use the useState Hook to manage state in a functional component:
```
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0.
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the 'count' state by calling 'setCount'.
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this example, useState is used to create and manage the 'count' state variable. When the button is clicked, it triggers a state update, and React re-renders the component to reflect the new state. This is the core mechanism for creating interactive and dynamic user interfaces in React.


