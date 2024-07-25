## Namaste React Course by Akshay Saini
# Chapter 06 - Exploring_the_World_Assignment_Answers


## Q: What is `Microservice`?
**A1:** `Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

Microservices promotes Agility, Scalability and Resilience so each service can be build, updated and deployed without affecting the rest of the system.

- Benefits of Microservices:
  - Flexible Scaling
  - Easy Deployment
  - Technological Freedom
  - Reusable Code
  - Resilience

- More about Microservices Architecture
  - The application is decomposed into smaller, independent services or microservices such as backend, UI, auth, DB, sms, more.
  - Each microservice is responsible for a specific capability or function and can be developed, deployed, and scaled independently.
  - This follows single responsibility principle.
  - Microservices communicate with each other through lightweight communication mechanisms, such as HTTP/REST APIs or message queues.
  - Individual microservices can be developed using different programming languages, frameworks, and technologies, as long as they adhere to the defined communication protocols.
  - Scaling can be achieved by running multiple instances of individual microservices, rather than scaling the entire application.
  - Microservices architectures promote modularity and scalability.
  - Each microservice can be run on a specific port number.

 
**A2:** A `Microservice` is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service in a microservices architecture is designed to perform a specific, well-defined function and can run as an independent process. These services communicate with each other through well-defined APIs (typically over HTTP or other lightweight protocols) and often make use of data storage systems and other infrastructure components.

Key characteristics of microservices include:

`Decomposition` - In a microservices architecture, a monolithic application is decomposed into multiple smaller services. Each service is responsible for a specific aspect of the application's functionality. For example, one service might handle user authentication, while another manages product catalog information.

`Independence` - Each microservice is independent and has its codebase, database, and often its technology stack. This independence allows teams to develop, deploy, and scale individual services without affecting the entire application.

`Loose Coupling` - Microservices communicate with each other through well-defined APIs or contracts, which enables loose coupling. This means that changes to one service should not impact other services as long as the API contract remains stable.

`Scalability` - Microservices can be scaled independently. Services that experience higher demand can be scaled out, while others can remain unchanged. This provides efficient resource allocation.

`Flexibility` - Microservices are well-suited for applications that require flexibility. Developers can use different technologies and programming languages for different services, allowing them to choose the best tool for the job.

`Resilience` - Microservices are designed to be resilient. If one service fails, it should not bring down the entire application. Redundancy and failover mechanisms can be implemented.

`Continuous Deployment` - Microservices make it easier to implement continuous integration and continuous deployment (CI/CD) practices, as individual services can be deployed and updated independently.

`Ownership` - Teams can take ownership of specific microservices, making it easier to assign responsibility for different parts of the application.

`Microservices` architectures are often used in large and complex applications, such as e-commerce platforms, social media networks, and financial systems, where the ability to scale and maintain individual parts of the system is crucial. However, they also introduce challenges, such as managing inter-service communication, data consistency, and the increased complexity of deployment and monitoring. Proper design, tooling, and best practices are essential to realizing the benefits of a microservices architecture while addressing its challenges.


**A3:** Microservices is an architectural style for developing software applications as a collection of small, independent services that communicate with each other through APIs. Here are the key aspects:

1. Independence: Each microservice is a self-contained unit that can be developed, deployed, and scaled independently of other services.

2. Decentralization: Microservices decentralize the application, allowing for flexibility in development and deployment. Each service can use different technologies and can be updated without affecting the entire application.

3. Scalability: Microservices enable individual services to be scaled independently based on their specific needs, improving resource utilization.

4. Resilience: The failure of one microservice doesn't necessarily impact the entire application. Other services can continue to function, enhancing the overall resilience of the system.

5. Communication via APIs: Microservices communicate through well-defined APIs, exposing endpoints that other services can use to request or send data.

6. Technology Diversity: Microservices allow for the use of different technologies and programming languages for different services, optimizing each for specific tasks.

7. Easy Maintenance and Updates: Updates or changes to one microservice don't necessarily affect the entire application, making maintenance more straightforward.

### Scenarios in Web Development with ReactJS:

#### Load > API call > Render:

- When a React component loads, it initiates an asynchronous API call to a microservice, typically using lifecycle methods (`componentDidMount` for class components or `useEffect` for functional components with hooks).
- The component waits for the API response and, upon receiving the data, renders the content on the user interface.
- This pattern ensures that the UI remains responsive while fetching data.

#### Load > Render > API > Re-render:

- Initially, a React component renders with default or placeholder content.
- After rendering, the component triggers an API call to fetch additional or updated data.
- Upon receiving the response, the component re-renders with the new information, creating a dynamic user interface.
- This approach is useful when you want to display something quickly and then enhance it with real-time or dynamic data.

In the context of microservices, each of these API calls may be directed to a specific microservice responsible for providing the relevant data or functionality. The modular nature of microservices allows for independent development and deployment of different services, contributing to a scalable and maintainable web application architecture.

---

## Q: What is `Monolith architecture`?
**A1:** A `Monolith architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.
means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

Monolith architecuture is a traditional software design approach, which combines the whole software into a single unit, Each and every service like: User Interface, Business logic, frontend, backend, database, APIs all are processed into a single container.
Any small change in any service leads to the whole software to be rebuilt, tested and deployed. Still widely used in small scale companies where Microservices isn't much evident.

Monolith architecture, also known as the monolithic architecture pattern, is a traditional software architectural style in which all the components and functions of an application are tightly integrated and packaged as a single, unified codebase. In a monolithic architecture, the entire application, including the user interface, business logic, and data access layer, is typically built and deployed as a single unit.

- Monolith Architecture
  - Built as a single, indivisible unit.
  - All components of the application (UI, logic, API, Auth, DB, etc.) are tightly coupled and deployed together as a single unit.
  - Scaling the application typically involves replicating the entire monolithic instance on multiple servers or virtual machines.
  - Changes to any part of the application require rebuilding and redeploying the entire monolith.
  - Monolithic architectures are simpler to develop and test initially, but can become more complex and harder to maintain as the application grows in size and complexity.
 
**A2:** A `monolithic` architecture, also known as a monolithic application, is a traditional software architectural style in which an entire application is built as a single, self-contained unit. In a monolithic architecture, all components and functionalities of the application, such as user interfaces, business logic, and data access, are tightly integrated and packaged together. This contrasts with microservices architecture, where the application is decomposed into a collection of small, independent services.

Key characteristics of a monolithic architecture include:

`Single Codebase` - In a monolithic application, all the code for different application parts is typically written in the same codebase. This codebase can be organized into different modules or packages, but it's all part of the same project.

`Tight Coupling` - Components and modules within a monolithic application are tightly coupled, meaning they often depend on each other. Changes to one part of the application can have ripple effects on other parts, making it harder to isolate and maintain individual features.

`Single Deployment Unit` - The entire application is deployed as a single unit. When updates or changes are made, the entire monolith must be redeployed. This can lead to longer deployment cycles and increased risk.

`Scaling Challenges` - Scaling a monolithic application can be challenging. If one part of the application requires more resources to handle increased load, the entire application must be scaled, which can be inefficient.

`Technology Stack` - In a monolithic architecture, the entire application typically uses the same technology stack, programming language, and frameworks. This limits the flexibility to use different technologies for different parts of the application.

`Development Team Structure` - Monolithic applications often have development teams working on different features, but all within the same codebase. Teams need to coordinate closely to avoid conflicts and to ensure changes do not disrupt other parts of the application.

`Testing and Debugging` - Testing and debugging a monolithic application can be complex, as changes can impact various parts of the application. Comprehensive testing is required to ensure that updates do not introduce bugs or break existing functionality.

`Resource Allocation` - All resources, such as databases and servers, are shared among the components of the monolith, which can lead to resource contention and performance issues.

Monolithic architectures are a common choice for smaller applications and for projects where simplicity and speed of development are prioritized. However, as applications grow in complexity and scale, monolithic architectures can become less maintainable and harder to evolve. This has led to the adoption of alternative architectures like microservices, which decompose the application into smaller, more manageable components.

---

## Q: What is the difference between `Monolith and Microservice`?
A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

![Monolith and Microservice](https://raw.githubusercontent.com/chetannada/Namaste-React/main/Chapter%2006%20-%20Exploring%20the%20world/Coding/Images/monolith-microservices.png)


| Monolith                                | Microservice                                     |
| --------------------------------------- | ------------------------------------------------ |
| Every service is inside the application | Services are scattered                           |
| Single code base                        | Code base is divided into separated applications |
| Hard to maintain                        | Easy to maintain                                 |
| Deployment takes more time              | Deployment is easy                               |


Main different points:
  - Scalability: Monolithic Achitectures can't be scaled very much as a small change in any particular service leads to the whole application rebuilt, tested and redeployed. Where as in Microservice, all the services are independent of each other so changing anyone doesn't affect the rest of the system so scaling in easier.
  - Resilience: In Monolithic Architecture, if one service fails, the application may go down but same in not to be necessarily true in case of Microservices as each service is independent of other.
 - Agility: Monolithic can be too hard to modify and update as the size of application grows whereas Microservices are easier and agile to change.

| Characteristics | Monolithic Architecture | Microservice Architecture |
| :--- | :--- | ---: |
| Architecture | Single, self-contained application | Collection of small, independent services | 
| Codebase | Single codebase for the entire application | Multiple codebases for individual services | 
| Coupling	| Tight coupling between components | Loose coupling between services | 
| Deployment Unit | Single deployment unit | Individual service deployment |
| Scalability | Application scaled as a whole | Services scaled independently | 
| Technology Stack | Single technology stack for the entire application | Flexibility to use different technologies for each service | 
| Development Teams | Single development team working on the same codebase | Teams can own and develop individual services | 
| Testing and Debugging | Complex testing and debugging due to tight integration | Easier testing and debugging of isolated services |
| Resource Allocation | Shared resources among all components | More efficient resource allocation for individual services |
| Deployment | Slower deployment cycles due to the need to redeploy the entire monolith | Faster and more frequent deployments of individual services |
| Change Impact | Changes can impact other parts of the application | Changes are isolated and have limited impact |
| Complexity | Simpler for small applications but can become complex as the application grows | Suitable for complex applications but introduces its own challenges |

![image](https://private-user-images.githubusercontent.com/34181144/279416555-b0a72a0b-29f0-4f85-8b72-7f2e03608e4d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTg3ODA0MzAsIm5iZiI6MTcxODc4MDEzMCwicGF0aCI6Ii8zNDE4MTE0NC8yNzk0MTY1NTUtYjBhNzJhMGItMjlmMC00Zjg1LThiNzItN2YyZTAzNjA4ZTRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE5VDA2NTUzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzOTcwOTc0NDY1YWU3ZDAxNmM5NzNmNGQ1NDRiOTg5NjZiNDllMGRlYTBjNWU3NmRhMGVkOWMwMjg0YWJjNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.FOoWlKYKXkWqiYIsJZUk0zLo0AUFDVS8wx8r-_0rnZM)

```diff
- ## Q: Why do we need a `useEffect Hook`?
```
A: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to  `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```
The `() => {}` is callback function and `[]` is called a empty dependency array. 
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.
```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```

A2: `useEffect` is a Hook provided by react . This hook is responsible for maintaining the state of the application when anything that triggers this hook changes.
The useEffect hook conatins two arguments a callback functin and a dependency array.
eg.
`  useEffect(() => {}, [])`

The `() => {}` in the function is called a callback function and `[]` is called a dependency array. If anyhting that we pass inside the `[]` changes the callback function is triggered and changes the state of the application.

> Note: If we do not pass empty dependency array then the useEffect hook only runs when the UI is rendered for the first time.

A3:  Used to perform side effects, which affects the world outside the component. e.g. fetching the data from and API, updating the browser's title(a/c to the component name/current page openend), websocket. It takes two arguments: callback function with side effects, which tell what to do and an array of depenedencies, when changed, callback is called.

A4: The `useEffect` hook is an essential part of React, a popular JavaScript library for building user interfaces. `It's used to manage side effects in functional components`. Side effects are actions that occur outside the normal flow of a React component, such as `data fetching`, `DOM manipulation`, and `subscribing to external data sources`.

Here are several reasons why the useEffect hook is necessary:

`Data Fetching` - In many applications, we need to fetch data from external sources, like an API, when a component is rendered. The useEffect hook allows us to perform these data-fetching operations after the initial rendering.

`DOM Manipulation` - Sometimes, we may need to interact with the Document Object Model (DOM) directly. For instance, we might want to update the title of a webpage or manipulate the size and position of DOM elements. useEffect is used for these purposes.

`Subscriptions` - If our component needs to subscribe to external events, like `WebSocket connections` or `real-time updates from a server`, useEffect is a suitable place to `manage and clean up these subscriptions`.

`Lifecycle Events` - React components have lifecycles, and useEffect allows us to perform actions at specific points in a component's lifecycle. We can control when code is executed, such as when the component mounts, updates, or unmounts.

`Avoiding Memory Leaks` - Using useEffect, we can ensure that any `resources or event listeners we create in a component are cleaned up when the component is unmounted`. This helps prevent `memory leaks and ensures our application runs efficiently`.

`Conditional Effects` - We can use useEffect with dependencies to run code conditionally when certain values change. This allows us to react to changes in state or props and execute side effects accordingly.

`Separation of Concerns` - The useEffect hook promotes a more organized and maintainable code structure by separating the logic for side effects from the rendering logic within a component.

Here's a basic example of how useEffect is used to fetch data:

```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run after the component is mounted.
    // You can fetch data here and update the state when it's available.
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;
```

In this example, the useEffect hook is used to fetch data when the component is mounted, ensuring that the side effect of data fetching occurs at the appropriate time in the component's lifecycle.

---

## Q: What is `Optional Chaining`?
**A1:** `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.

Optional chaning is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a key error, it returns `undefined`.

Optional chaning: It's the ability to check whether a property of a JS object exists before going to access that. It saves us from getting a type error. operator => '?.'


**A2:** `Optional chaining` is a feature in modern JavaScript that provides a concise and safe way to access properties and methods on potentially null or undefined objects without causing runtime errors. It's denoted by the `?.` syntax and is particularly useful when dealing with `deeply nested object structures` or when we're unsure if a property or method exists.

Here's how optional chaining works:

1. `Accessing Object Properties` - When we use optional chaining to access object properties, it checks if the property we're trying to access exists. If the property is present, it `returns its value; otherwise, it returns undefined`.
```
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

const city = person.address?.city; // "New York"
const country = person.address?.country; // undefined
```

2. `Invoking Object Methods` - We can also use optional chaining to call methods on objects. It ensures the method is called only if it exists.
```
const car = {
  start: function () {
    console.log("Car started");
  },
};

car.start?.(); // "Car started"
car.stop?.(); // No error, nothing happens (undefined is returned)
```

3. `Handling Arrays` - Optional chaining can also be used with arrays to access elements by their index. It returns undefined if the index is out of bounds.
```
const numbers = [1, 2, 3, 4];

const firstNumber = numbers[0]; // 1
const fifthNumber = numbers[4]; // undefined
const lastNumber = numbers[4]?.(); // undefined (not a function)
```

Optional chaining is especially valuable when working with `API responses, user input, or any scenario where data might be missing or incomplete`. It helps us avoid common runtime errors like "TypeError: Cannot read property 'x' of undefined" and allows us to write more robust and concise code.

---

## Q: What is `Shimmer UI`?
**A1:** A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

When the website is loading, it's used to provide visual feedback to the users. It's a technique used to simulate the loading of the content by showing placeholders and animations which mimics the actual content to be loaded.

**A2:** A `Shimmer UI` is a user interface design technique used to indicate that `content is loading or placeholders are being displayed`. It involves creating a subtle animation or visual effect that gives the impression of activity or content rendering, even when the actual content has not yet loaded. Shimmer UIs are often used in applications, websites, or mobile apps to enhance the user experience during loading times.

The key characteristics of Shimmer UIs include:

`Animation` - Shimmer UIs typically involve a `gentle and repetitive animation that creates a shimmering or fading effect`, mimicking the appearance of content gradually appearing on the screen.

`Placeholder Content` - Instead of displaying empty or blank areas where content will eventually appear, a Shimmer UI shows placeholder content that resembles the expected content in terms of layout, structure, and style. This gives users a visual cue about the content that will load.

`Loading State` - Shimmer UIs are used to convey that the application or webpage is in a loading state. This is particularly useful when fetching data from a server, as it provides feedback to users that something is happening in the background.

`User Engagement` - By adding a Shimmer UI, users may feel more engaged and less frustrated during loading times because they receive visual feedback that the app is working to retrieve the data.

Here's a basic example of how a Shimmer UI might be implemented in a React component using CSS for styling:
```
import React from 'react';
import './Shimmer.css';

function ShimmerUI() {
  return (
    <div className="shimmer-container">
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
    </div>
  );
}

export default ShimmerUI;
```

```
/* Shimmer.css */
.shimmer-container {
  display: flex;
  flex-direction: column;
}

.shimmer-placeholder {
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

In this example, the shimmer container holds placeholder elements (shimmer-placeholder) that animate with a shimmer effect, giving the appearance of content loading.

Shimmer UIs are an effective way to enhance the user experience during loading and can help reduce the perception of long wait times, making applications feel more responsive and engaging.

---

## Q: What is the difference between `JS expression and JS statement`?
**A1:** A `JS expression` returns a value that we use in the application. for example: 
```
1 + 2 // expresses 
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```
A `JS statement`, does not return a value. for example:
```
let x; // variable declaration
if () { } // if condition
```
If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;

- A JS expression returns a value that we use in the application. e.g. : `isOdd ? true : false` returns us a `true` or `false` value based on isOdd value
- A JS statement, however does not return a value e.g
  `  let a = 10;`
  does not return a value.

**A2:** `JavaScript Expression` - An expression is a piece of code that produces a value. It can be a single value, a variable, a function call, or a combination of values and operators that result in a value. Expressions can be used wherever a value is expected, such as in assignments, function arguments, and within other expressions.

**Examples of expressions:**
```
5 + 3       // Produces the value 8
"Hello"     // Produces the string value "Hello"
myVariable  // Produces the value stored in the variable myVariable
func(4)     // Calls a function and produces its return value
```

2 `JavaScript Statement` - A statement is a line of code that performs an action. It doesn't produce a value like an expression. Statements are often used to control the flow of a program, define functions, declare variables, and perform other tasks. Statements can include loops, conditionals, function declarations, and variable assignments.

**Examples of statements**:
```
if (x > 10) {
  // Conditional statement
  // Executes a block of code if x is greater than 10
}

for (let i = 0; i < 5; i++) {
  // Loop statement
  // Repeats a block of code five times
}

function greet(name) {
  // Function declaration statement
  console.log("Hello, " + name);
}

let y = 42;  // Variable assignment statement
```

In summary, expressions produce values and can be used within statements, while statements are used to `control the program's flow`, `define functions`, `declare variables`, and perform actions. Understanding the distinction between `expressions` and `statements` is important when writing JavaScript code because it affects how we structure our code and where we can use different constructs.

---

## Q: What is `Conditional Rendering`? explain with a code example.
**A1:** `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:
```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

**A2:** A conditional rendering is a way of rendering components based on the a state. If the condition is true for a component, then it gets rendered; otherwise, the other component is rendered.

For example : We load a shimmer UI before our component is loaded completely.
We can create a state variable that will keep the value of our current application state.
i.e.

```
  const [isLoaded, setIsLoaded] = useState(false)
```

In the above example, we are creating a state variable that is initially set to false, since our data has not been loaded in our application yet.

Untill our data is loaded completely we can show a shimmer UI to the user and when our data gets loaded we can render the data on the page.
The conditional rendering is done via a ternery operator `?:`
for example :

```
isLoaded ? <Body /> : <Shimmer />
```

In the above expression, if `isLoaded` is set to `false` then, `Shimmer` component will be loaded , when the data loading is completed, the `Body` component will be rendered.

**A3:** Technique that allows us to render different content/component based on certain conditions. Commonly used in showing/hiding a data based on user interactions.

```
Ex: function Greetings(props){
	const isLoggedin = props.isLoggedIn;
	if(isLoggedin) return <h1>Welcome back<h1/>
	else	return <h1>Login pls<h1/>
    }

ReactDOM.render(
	<Greetings "true"/>, 
	document.getElementById('root')
);
```


**A4:**  `Conditional rendering` in a React application refers to the practice of displaying different content or components based on certain conditions or states. It allows us to control what is rendered in the user interface depending on the values of variables, props, or the application's current state. Conditional rendering is a fundamental concept in building dynamic and interactive user interfaces.

Here's an example of conditional rendering in a React component:
```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <WelcomeUser />
      ) : (
        <Login />
      )}
    </div>
  );
}

function WelcomeUser() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button>Log Out</button>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Please Log In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
```

In this example, we have a simple React application with conditional rendering:

- We have a state variable isLoggedIn that determines whether a user is logged in or not. Initially, it's set to false.

- In the App component, we use a conditional rendering technique within the JSX to display different components based on the value of isLoggedIn.

- If isLoggedIn is true, the <WelcomeUser /> component is displayed, welcoming the user.
- If isLoggedIn is false, the <Login /> component is displayed, prompting the user to log in.
- The <WelcomeUser /> and <Login /> components represent different parts of the UI that are conditionally rendered based on the state. Depending on the user's login status, one of these components will be displayed.

Conditional rendering is a powerful technique for building responsive and interactive user interfaces in React. It allows us to show or hide content, components, or even entire sections of our application based on user actions, data, or other factors, providing a more personalized and dynamic user experience.

---


```diff
- ## Q: What is `CORS`?
```
A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

**CORS** stands for _Cross Origin Resource Sharing_ , It is a header based machanism that allows a server to indicate any origin other that it's own.
We can create requests to other domains or ports to get the data from our browser.

Cross Origin Resource Sharing, is security feature implemented by web browsers that restricts web browsers to make request to a different domain than the one that served the page. It's a mechanism that allows servers to specify who can access their resources. Without CORS web pages would be able to access any resource on any domain which is risky.

When a web page includes resources from different domains, it can introduce security and privacy concerns. Modern web browsers implement the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is designed to prevent malicious websites from accessing sensitive data from other domains without permission.

---
```diff
- ## Q: What is `async and await`?'
```

**A1:** `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example: 
```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "FOODFIRE_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```

async/await` is a method of making asynchronous requests to a API. Using these we can utilise a API request in our application.

These are the keywords used for asynchronous programming. This is useful when performing a time consuming operations like reading and writing files which takes a long time, it would be inefficient to bolck the program's execution until the operation completes.
Async & await work together, async defines a function that can be executed asynchronously, await keyword is to pause the function execution until the async operation completes. Allowing other tasks to executed in meantime.

**A2:** `async` and `await` are JavaScript features that simplify working with `asynchronous code` and `asynchronous operations`, such as making network requests, reading files, or waiting for timeouts. They were introduced in ECMAScript 2017 (ES8) and have become a fundamental part of modern JavaScript, making asynchronous code more readable and manageable.

Here's an overview of async and await:

`async` Function - The async keyword is used to define an asynchronous function. When a `function is declared as async, it always returns a promise`, which can resolve to a value or be rejected with an error.
Inside an async function, we can use the await keyword to pause the function's execution until a promise is resolved. This allows us to write asynchronous code in a more synchronous style.

```
async function fetchData() {
  // This function is asynchronous and returns a promise.
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return data;
}
```

2 `await` Operator - The `await keyword is used inside an async function to pause the execution of the function until a promise is resolved`. It can only be used within an async function. When an await statement is encountered, the function will pause at that point until the awaited promise is settled (resolved or rejected).

3 `Error Handling` - We can use try...catch blocks to handle errors when working with async and await. If an awaited promise is rejected, it will throw an exception that can be caught in a catch block.

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

4 `Concise and Readable Code` - `async` and `await` make asynchronous code more concise and readable, as it resembles synchronous code flow. This can improve code maintainability and reduce callback hell or "Pyramid of Doom."

`async` and `await` are widely used in JavaScript for handling asynchronous operations, such as `fetching data from APIs`, `reading files`, `making database queries`, and performing other tasks that involve waiting for results. They provide a more structured and clean way to work with asynchronous code compared to using callbacks or promises directly.

---

```diff
- ## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?
```
**A1:** The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.

Used to extract and parse JSON data from response object returned by an API call.

**A2:** The line `const json = await data.json();` is used in a function called `getRestaurants()` to convert the response data from a JSON API into a JavaScript object. Let me break down what this line of code does in the context of an asynchronous JavaScript function.

`data` represents the response object from a network request, typically obtained using a library like `fetch or axios`. This response object contains data in a raw format.

`.json()` is a method available on the response object that is used to `extract and parse JSON data` from the response body. It returns a promise that resolves to the parsed JavaScript object.

`await` is used within an async function to pause the execution of the function until the promise returned by data.json() is resolved. This ensures that the function won't proceed until the JSON data is ready to be used.

`const json = ...` declares a constant variable json to hold the parsed JSON data.

So, in the context of a function like getRestaurants(), this line of code waits for the JSON data to be parsed from the response object and assigns it to the json variable, which we can then work with as a JavaScript object. Here's an example:

```
async function getRestaurants() {
  try {
    const response = await fetch('https://api.example.com/restaurants');
    const data = await response.json(); // Parse the JSON response
    console.log(data); // You can now use the JSON data as a JavaScript object
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
}

getRestaurants();
```

In this example, the data variable contains the parsed JSON data from the API response, and we can access and manipulate this data as needed within the getRestaurants() function.

---
