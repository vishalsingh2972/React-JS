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

1 `Accessing Object Properties` - When we use optional chaining to access object properties, it checks if the property we're trying to access exists. If the property is present, it `returns its value; otherwise, it returns undefined`.
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

2 `Invoking Object Methods - We can also use optional chaining to call methods on objects. It ensures the method is called only if it exists.
```
const car = {
  start: function () {
    console.log("Car started");
  },
};

car.start?.(); // "Car started"
car.stop?.(); // No error, nothing happens (undefined is returned)
```

3 `Handling Arrays` - Optional chaining can also be used with arrays to access elements by their index. It returns undefined if the index is out of bounds.
```
const numbers = [1, 2, 3, 4];

const firstNumber = numbers[0]; // 1
const fifthNumber = numbers[4]; // undefined
const lastNumber = numbers[4]?.(); // undefined (not a function)
```

Optional chaining is especially valuable when working with `API responses, user input, or any scenario where data might be missing or incomplete`. It helps us avoid common runtime errors like "TypeError: Cannot read property 'x' of undefined" and allows us to write more robust and concise code.

---


