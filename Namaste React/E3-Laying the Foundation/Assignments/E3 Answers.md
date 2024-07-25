## Namaste React Course by Akshay Saini
# Chapter 03 - Laying_the_Foundation_Assignment_Answers


## Q: What is `JSX`?
A: JSX stands for JavaScript XML, created by Facebook.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

 JSX stands for JavaScript XML, It allows developers to write HTML-like code in JavaScript without writing createElement in React which makes React code more confusing and inefficient. JSX is not part of React. JSX makes it easier to add HTML in React. JSX converts HTML code into JavaScript code that React can understand and renders in the DOM. React developers prefer the conciseness of JSX.
### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

- We can use JavaScript variables inside JSX using curly braces. Basically inside JSX we can evaluate/execute JavaScript using JSX.

- JSX escapes the attribute and children we pass to it. It is converted to string before getting rendered as HTML in browser.(JSX escaping protects your application by ensuring that all data is treated as text and can't be used for malicious purposes. It's a crucial security measure in React development.) , Does JSX suffers from cyber attack ? - No, JSX curly braces sanitizes the data ~ related to Cross-Site Scripting(XSS) attacks.

- JSX is just an another way to write React.createElement, hence evaluate to React Elements, i.e., objects, under the hood babel indirectly converts the JSX to React.createElement format for react to understand and render the code ~ JSX is indeed a syntactic sugar for writing React.createElement calls.

In short JSX is
- Easy to maintain
- Secure
- Easy to debug

### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags, it tells the browser how to interpret the script. It has a Default value which is “text/javascript”. 
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required babel to transpile it.
- `text/typescript`: As the name suggests the script is written in `TypeScript`.

More examples - There are a few different values you can use with the type attribute:

`Omitted or Empty String`: If the type attribute is omitted or set to an empty string (type=""), the browser will assume the default JavaScript type, which is **text/javascript**. This is the most commonly used type for JavaScript, and it's supported by all modern browsers.

**Example:**
```
<script>
    // JavaScript code here
</script>
```

`text/javascript (Deprecated)`: While it used to be the default and widely used, specifying type="text/javascript" is no longer necessary in modern web development. Browsers assume the script is JavaScript by default. You can still use it for compatibility reasons, but it's not required.

**Example:**
```
<script type="text/javascript">
    // JavaScript code here
</script>
```

`module`: When we specify type="module", the script is treated as an ECMAScript module. This value tells the browser that the script is a module that can import or export other files or modules inside it.
**Example**:
```
<script type="module">
    // JavaScript module code here
</script>
```

`text/babel`: This value indicates that the script is a babel type and requires the Babel JavaScript compiler to transpile JSX code.
`text/typescript`: The script is written in TypeScript.


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

### if there are no child elements, then we can write

```
<TitleComponent />
```

More detailed view:
`{TitleComponent}` - This expression is used when we want to embed a component as a javascript expression or a variable.
**Example:**
```
const TitleComponent = <h1>Hello, JSX!</h1>;

const App = () => {
    return (
        <div>
            {TitleComponent}
        </div>
    );
};
```

`{<TitleComponent/>}` - This expression creates and renders an instance of the **TitleComponent** component.
It's the most common way to use a component in JSX when we want to render the component as part of your UI. Most commonly, you will use {<TitleComponent/>} to create and render a component.

**Example**
```
const TitleComponent = () => <h1>Hello, JSX!</h1>;

const App = () => {
    return (
        <div>
            <TitleComponent />
        </div>
    );
};
```

`{<TitleComponent></TitleComponent>}` - This is essentially the same as `{<TitleComponent/>}` in most cases. Both create and render an instance of the **TitleComponent** component. The explicit use of opening and closing tags might be used in situations where we want to include child elements within the TitleComponent.
**Example:**
```
<TitleComponent>
    <Header />
    <MainContainer/>
    <SecondContainer/>
</TitleComponent>
```