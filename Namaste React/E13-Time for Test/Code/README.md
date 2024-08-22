## Episode 13 – Time for Test

**Detailed Mention of Topics and its Timestamps according to Namaste React Web Series**

```sh
### Part - 1

- 00:00 to 08:30 – Scope of Testing and its importance
- 09:00 – Types of Testing
- 16:50 – React Testing Library
- 19:55 – Create React App
- 23:40 – Jest Introduction
- 25:30 – Installation of React Testing Library
- 27:00 – Installation of Jest
- 28:00 to 40:00 – Installing and configuring the Babel dependencies and configure the parcel
  `Part - 1 Completed`

### Part - 2

- 41:38 - JS-DOM
- 47:45 to 52:12 – Configure the Jest
- 53:00 – Sample Testing of JS programs
- 56:00 – VSCode -icons plugin installed
- 57:00 - tests folder created
- 59:00 – double underscore means dunder method
- 01:02:00 – Syntax of a Test function
  `Part - 2 Completed`

### Part - 3

- 01:10:10 – Testing of React components, Contact.test.js file created
  getByRole, toBeInTheDocument() ,
  JSX isn’t enabled for testing
- 01:23:35 – Enabling JSX using Babel
- 01:30:10 – Installing a library - @testing-library/jest-dom
- 01:35:30 – Test case to test is there a button exists
- 01:38:45 – Beauty of “Jest”
- 01:48:55 – getAllByRole(“textbox”) , getByPlaceholderText(“name”),
  expect(inputBoxes.length).toBe(2);
- 01:55:15 – “describe”, test or it usage, Unit Testing
- 02:02:31 – push coverage folder to gitignore
- 02:04:06 – Building Header.test.js file
- 02:19:40 – Testing cart items
- 02:21:55 – “REGEX” use cases
- 02:24:30 – how to simulate “click” button
- 02:27:45 – Test cases for “Restaurant-card” component
  (How to pass props & do unit testing)
- 02:30:25 – mock data
- 02:40:22 – conclusion of Unit Testing
- 02:41:15 – how to do “Integration Testing”
  Testing the feature of “Search”
- 02:48:28 – fetch() API is not JS. Its in the browser
- 02:58:32 – Running the test cases each time when something in code changes, act function
- 03:06:55 – getByTestId
- 03:14:31 – getAllBytestId(“rescard”)
- 03:22:13 – Test for “top-rated restaurants list”
- 03:27:15 – beforeAll(()), beforeEach(()) , afterAll(()), afterEach(())
- 03:32:25 – Integration Testing of adding a item to cart
  `Part - 3 Completed`
```
								NOTES

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel - create babel.config.js file
 - Configure Parcel Config file (.parcelrc) to disable default babel transpilation (so now parcel will stop using its own predefined babel which was earlier causing conflict issue with the jest babel defined in babel.config.js) 
 - Jest configuration - npx jest --init
 - Install jsdom library - npm install -D jest-environment-jsdom
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config ~ AKA inside my babel.config.js file
 - npm i -D @testing-library/jest-dom
