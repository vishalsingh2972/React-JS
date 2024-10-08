import { render, screen } from "@testing-library/react";
import Contact from "../../components/Contact";
import '@testing-library/jest-dom';//for getting access to 'toBeInTheDocument' and using it here

describe("Contact Us Page Test Cases", () => { //grouping of testcases using 'describe'

  // beforeAll(() => {
  //   console.log("Main Ek hi Baar Aunga before start of TestCases 👼🏻");
  // })

  // beforeEach(() => {
  //   console.log("Main Baar Baar Aunga before each TestCase 😈");
  // })

  // afterAll(() => {
  //   console.log("Main Ek hi Baar Aunga after all TestCases are finished 👼🏻👼🏻");
  // })

  // afterEach(() => {
  //   console.log("Main Baar Baar Aunga after each TestCase finishes 😈😈");
  // })

  test("should load heading inside Contact (us) component", () => { 

    //whenever you are testing a UI component inside React, you will have to 'render' that component onto the jsdom first - and we do this using the render method from react-testing-library. So, in essence, you're using a method (render) from React Testing Library to test your component within the jsdom library (our simulated browser environment)
    //When you render a React component onto the jsdom for testing, you're creating a simulated environment that mimics the real browser environment (the actual UI or real DOM). This allows you to test the component's behavior, props, state, and interactions in a controlled and isolated way
    //The jsdom is essentially kind of a "dummy DOM" or a test environment that lets you test your components without actually rendering them in a real browser. By testing your components in this simulated environment, you can confidently predict how they'll behave in the actual UI (real DOM) when rendered in a real browser

    render(<Contact />); //rendered contact component onto the jsdom

    //everything that got rendered(all the elements present in the component that was rendered) can now be accessed using screen object from react-testing-library
    const heading = screen.getByRole("heading"); //'Querying'

    expect(heading).toBeInTheDocument(); //'Assertion'
    //toBeInTheDocument() is like saying "is this element(heading) actually visible on the page?, specifically here is the heading element present in the DOM(i.e in our case, the jsdom environment)" whereas toBe in sum.test.js is like saying "is this value exactly equal to 5?"
    //so in short expect(heading).toBeInTheDocument() checks if the heading element is present in the Contact component we just rendered onto the jsdom environment using render(<Contact/>)
  });

  it("should load button inside Contact (us) component", () => { //can also write 'test' as 'it'

    render(<Contact />);

    //const button = screen.getByRole("button"); //✅
    const button = screen.getByText("Submit"); //✅

    expect(button).toBeInTheDocument();
  });

  test("should load input name inside Contact (us) component", () => {

    render(<Contact />);

    const input_name = screen.getByPlaceholderText('Name');

    expect(input_name).toBeInTheDocument();
  });

  test("should load 2 inputs inside Contact (us) component", () => {

    render(<Contact />);

    const all_inputs = screen.getAllByRole("textbox"); //✅
    //console.log(typeof(all_inputs[0])); // JS object ~ React element ~ virtual DOM object
    //console.log(all_inputs.length)

    expect(all_inputs.length).toBe(2); //✅
    //  expect(all_inputs.length).not.toBe(3); //also ✅
  });

})


//basics of testing ~ in short 3 step process for every test case - 'rendering' ---> 'Querying' ---> 'Assertion'