## Namaste React Course by Akshay Saini
# Chapter 01 - Inception_Assignment_Answers


## Q: What is `Emmet`?
A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules. 
Emmet is a plugin for text editors like VS Code that allows users to code faster.
In short, Emmet allows us to quickly generate HTML code by using abbreviations.

Example emmet abbreviations: !, html:5 etc.

- `html:5` gives :
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- `!` gives :
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

- `div>div>p` gives :
```sh
<div>
  <div>
    <p></p>
  </div>
</div>
```

:writing_hand: Nested Elements: We can use > to nest elements within each other

:writing_hand: Multiplication: We can use the * operator to create multiple elements
- `ul>li*5` gives : (would generate an unordered list with 5 list items)
```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

:writing_hand: Numbering: Use $ to indicate a number that should be incremented in each subsequent item
- `div>ul>li.item$*3` gives : (would generate an list with 3 list items with classes item1, item2, and item3)
```sh
<div>
  <ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
  </ul>
</div>
```

:writing_hand: Siblings: We can use + to create sibling elements
- `div+p+bq` gives : (would create a div, followed by a p, and then a blockquote)
```html
<div></div>
<p></p>
<blockquote></blockquote>
```

:writing_hand: Grouping: Parentheses can be used to group elements
- `ul>(li.item$*2>a{Item $})*3` gives : (would generate a list with nested items and anchor tags)
```sh
<ul>
  <li class="item1"><a href="">Item 1</a></li>
  <li class="item2"><a href="">Item 2</a></li>
  <li class="item1"><a href="">Item 1</a></li>
  <li class="item2"><a href="">Item 2</a></li>
  <li class="item1"><a href="">Item 1</a></li>
  <li class="item2"><a href="">Item 2</a></li>
</ul>
```

- `bgc:red` gives :
```css
background-color: red;
```

>More can be found here - https://docs.emmet.io/cheat-sheet

## Q: Difference between a `Library and Framework`?
A: A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.

A `library`is a piece of code that we can incorporate in our existing project via a CDN or as a package. A library does not affect our project structure whereas a `framework` is a structured set of libraries and packages implementing a perticular methodology that we have to follow to create a project.

A `framework` is a set of pre-written code that provides a structure for developing software applications. A `library`, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

A `Library` is a collection of pre-written code that provides specific functionalities or features. It is designed to be reused across different projects to save development time and effort.
- **Control**: When using a library, the developer maintains more control over the overall structure and flow of the application. The developer decides when and how to use the library's components and functions.
- **Usage**: Libraries are generally used to solve specific tasks or provide utilities. They are often "called" by the developer's code to perform specific actions or computations.
- **Inversion of Control**: In a library, the developer controls the flow of the application. The library doesn't dictate the overall structure or architecture of the application.
For instance, React.js is a JavaScript library developed by Facebook.
React is primarily concerned with rendering UI components and managing their state and updates. It can be integrated into different project setups and combined with other libraries to create complete applications.

A `Framework` is a structured, pre-designed architecture that provides a foundation for building an entire application. It dictates the overall structure, flow, and design patterns of the application.
- **Control**: When using a framework, the developer gives up some control over the application's structure and flow. The framework enforces certain conventions and rules that the developer must follow.
- **Usage**: Frameworks are used to build entire applications. They provide a foundation and a set of tools to handle various aspects of application development, such as routing, database interactions, user authentication, etc.
- **Inversion of Control**: In a framework, control is often inverted, meaning the framework controls parts of the application's flow. Developers extend or customize the framework's components to build the application's logic.
For instance, Angular is a front-end framework developed by Google.
Angular is used for building dynamic and feature-rich web applications, particularly single-page applications (SPAs).

>Is React a Library or Framework ?

React is library because it is unopinionated and it helps you accomplish a couple of tasks, whereas a framework defines your whole project. A framework provides a structure and set of rules for developing applications. It offers a collection of libraries, tools, and utilities that work together to facilitate the development process.

For example, In React, developers have the flexibility to choose the tools and libraries they want to use for routing, state management, and other functionalities. It provides the core features for building UI components and managing the application's state, but developers need to handle other aspects, such as routing and server-side rendering, by integrating additional libraries or tools.

Next.js on the other hand, is a framework built on top of React that provides a more opinionated structure and additional features for building React applications. It offers Server-Side Rendering (SSR), Static Site Generation (SSG), routing, and other performance optimizations out of the box, sometimes called batteries included.

## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content all over the globe.It is fast because of less server load etc. Genrally we use it to deliver our assets like images, videos, pdfs etc. to store and retrieve.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.
CDN provides us different type of assets / features / libraries created by others over the internet. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.

>More can be found here - https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

React can be included in your project in multiple ways and one of them is using CDN. You include React and ReactDOM libraries directly from a CDN in your HTML file like below from [React CDN Links](https://legacy.reactjs.org/docs/cdn-links.html)

## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.

`React` was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

Answer lies in event driven architechture we follow in `React`. Any event handlers updating the dynamic data of react's piece of code, makes the code REACTIVE for events.

And it's called `React` because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

`React` is known as "React" because of its core principle, which is to efficiently react to changes in a component's state and efficiently update the user interface (UI) accordingly. The name "React" reflects the core concept of how the library operates.

## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

React is used to create views while React Dom is used to render components in the web UI.

> Why do we need both React and ReactDOM ?

The React package holds the code for components, state, props and all the code that is react. Whereas ReactDOM is the glue between React and the DOM. ReactDOM deals with placing the components in browser DOM.
The reason that React and ReactDOM are separate is because React supports other platforms like mobile and desktop and in that case ReactDOM is not required as there is no browser involved.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

`react.development.js` is used for development purpose and the code is not compressed while `react.production.js` is used for production purposes and the code for this library is compressed.

The `react.development.js` file is intended for use during development and includes additional features and debugging tools that can be helpful when building and testing React applications. These features may include additional warning messages, error checking, and other tools that can help identify problems or potential issues with the code.
The `react.production.js` file, on the other hand, is intended for use in production environments and has been optimized for performance and minified. It does not include the additional debugging tools and may have other features disabled in order to reduce the size of the file and improve performance.

`react.development.js`
- This file is intended for development purposes. It contains the full and unminified version of the React library, including helpful warning messages and development-specific features.
- It is larger in size compared to the production version since it includes additional information and code to aid developers in identifying potential issues during development and debugging.
- When using **`react.development.js`**, developers get more descriptive error messages and warnings in the browser's console, making it easier to identify and address problems in the code.

`react.production.js`
- This file is intended for production deployment. It contains the minified and optimized version of the React library, stripped of any development-specific code, warnings, and console logs.
- It is smaller in size compared to the development version, as all unnecessary code and debug information have been removed during the minification process.
- Using **`react.production.js`** results in faster loading times and improved performance for end-users, as the minimized code is more efficient and consumes fewer resources.

When deploying a React application to a production environment, it is best practice to use **`react.production.js`** (along with the corresponding **`react-dom.production.js`** file) from the CDN. This ensures that the application is delivered to users with a smaller and more optimized bundle, reducing the load time and improving overall performance.
During development, developers may prefer to use **`react.development.js`** (and **`react-dom.development.js`**) to take advantage of the helpful error messages and development tools that assist in identifying and resolving issues during the development and testing phase. However, it's essential to switch to the production version before deploying the application to a live environment to achieve better performance and user experience.

## Q: What is `async and defer`?
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
### _Syntax_
```sh
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.
### _Syntax_
```sh
<script src="demo_defer.js" defer></script>
```

Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:
```sh
<script type="module" src="main.js"></script> and place the tag inside <head>
```
```sh
 <script defer nomodule> can be used as a legacy fallback.
```


As the name suggests, it allows you to import `modules`, which makes it easier to organize your code.
Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.
Prevent top level variables from implicitly polluting the global namespace.
Allow you to use top-level await in supported engines.
Load and parse your code `asynchronously`, which improves load performance.

<img width="407" alt="image" src="https://github.com/vishalsingh2972/React-JS/assets/106817047/9dc81997-866d-466b-a413-8171e5b7aa27">

When we have multiple script tags which are dependent on each other, defer attribute maintains the order of execution of the scripts i.e. each script is executed line by line whereas async does not maintain order of execution and can cause break the production, hence we mostly use defer for Order, async for Independent Scripts.

Choosing Wisely:
- Use defer when the order of execution matters between defer scripts and they interact with the DOM upon loading.
- Use async for truly independent scripts that don't rely on other scripts or the DOM to be fully available. These are often scripts for analytics, tracking, or third-party services.
- Therefore, the choice between async and defer depends on whether script independence or order of execution is more critical for your application.


