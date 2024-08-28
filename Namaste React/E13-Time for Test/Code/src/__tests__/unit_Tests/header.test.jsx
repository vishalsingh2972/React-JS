import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from "../../utils/redux/Redux Store/appStore";
import { BrowserRouter } from "react-router-dom";

it("should render Header Component with a Login Button", () => {

  //redering ~ since here we are testing the Header component in isolation, we need to here again separately provide it access to the redux store and we do that using <Provider>, same as we did before (wrapping ... inside <Provider> and passing the Redux store that we want to connect to the app in the form of props)
  render(
    <BrowserRouter> {/* for understanding 'Link' that we used in Header component and that we get from react-router-dom */}
      <Provider store={appStore}> {/* for understanding useSelector here we again reconnect the isolated Header component to redux store */}
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const login_button = screen.getByRole('button'); //✅
  // const login_button = screen.getByText('Login'); //✅

  //Suppose if there were multiple buttons and I want to specifically find out button with name 'Login' then I can do it like this:
  // const login_button2 = screen.getByRole('button', {name: "Login"}); //✅ even this works here

  //Assertion
  expect(login_button).toBeInTheDocument();
})

it("should render Header Component with Cart items O button", () => {

  //redering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cart_items = screen.getByText('🛒');

  //Assertion
  expect(cart_items).toBeInTheDocument();
})

it("should render Header Component with 'Cart' element irrespective of number of items in the cart", () => {

  //redering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cart_items = screen.getByText(/🛒/); //regex (here we just check if we have 'cart' symbol in the header component irresective of whether items in cart are 0, 1 , 2 etc.)

  //Assertion
  expect(cart_items).toBeInTheDocument();
})

it("should render Header Component in which Login Button changes to Logout Button on click", () => {

  //redering
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  // const login_button = screen.getByRole('button'); //✅
  const login_button = screen.getByRole('button', {name: "Login"}); //✅

  //fireEvent to click the button ~ By doing this, you're testing how your application responds when a user clicks the Login Button, basically fireEvent.click method simulates a click event on the login_button
  fireEvent.click(login_button);

  //After the click event, the 'logout_button' is retrieved from the updated DOM(here jsdom env) using getByRole with the name "Logout"
  const logout_button = screen.getByRole('button', {name: "Logout"});

  //Assertion
  expect(logout_button).toBeInTheDocument();
})

/* NOTE:

By wrapping the <Header/> component with both <BrowserRouter> and <Provider>, you're providing it with the necessary context to function correctly in isolation.

Here's what each wrapper does:
- <BrowserRouter>: Provides the routing context, allowing the Link component to work properly. This is necessary because the Header component uses Link from react-router-dom.
- <Provider store={appStore}>: Reconnects the isolated Header component to the Redux store. This is necessary because the Header component uses useSelector to access the Redux store's state.
*/