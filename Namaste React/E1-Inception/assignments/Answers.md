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


>Is React a Library or Framework

React is library because it is unopinionated and it helps you accomplish a couple of tasks, whereas a framework defines your whole project. A framework provides a structure and set of rules for developing applications. It offers a collection of libraries, tools, and utilities that work together to facilitate the development process.

For example, In React, developers have the flexibility to choose the tools and libraries they want to use for routing, state management, and other functionalities. It provides the core features for building UI components and managing the application's state, but developers need to handle other aspects, such as routing and server-side rendering, by integrating additional libraries or tools.

Next.js on the other hand, is a framework built on top of React that provides a more opinionated structure and additional features for building React applications. It offers Server-Side Rendering (SSR), Static Site Generation (SSG), routing, and other performance optimizations out of the box, sometimes called batteries included.


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


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


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


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
