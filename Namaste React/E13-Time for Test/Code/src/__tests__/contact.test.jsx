import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom';

test("should load contact us page/component",() => {

  //whenever you are testing a UI component inside React, you will have to 'render' that component onto the jsdom first - and we do this using the render method from react-testing-library, So, in essence, you're using a method (render) from React Testing Library to test your component within the jsdom library (simulated browser environment).
  //When you render a React component onto the jsdom for testing, you're creating a simulated environment that mimics the real browser environment (the actual UI or real DOM). This allows you to test the component's behavior, props, state, and interactions in a controlled and isolated way.
  //The jsdom is essentially a "dummy DOM" or a test environment that lets you test your components without actually rendering them in a real browser. By testing your components in this simulated environment, you can confidently predict how they'll behave in the actual UI (real DOM) when rendered in a real browser.

  render(<Contact/>); //rendered contact component onto the jsdom

  //everything that got rendered(all the rendered elements present in the component that was rendered) can now be accessed using screen object from react-testing-library
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument(); //'Assertion'
  //toBeInTheDocument() is like saying "is this element actually visible on the page?" whereas toBe in sum.test.js is like saying "is this value exactly 5?"
});