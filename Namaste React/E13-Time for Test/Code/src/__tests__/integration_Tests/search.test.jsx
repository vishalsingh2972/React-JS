import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA_IT from "../mocks/IT/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

//will give me a mock 'fetch' function that i'll use here for testing
//global.fetch = jest.fn(() => { ... }); is creating a mock version of the fetch function using Jest, instead of making a real network request to an API, this mock function will return a predefined response.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_IT);
    }
  });
});

it("should render the Body component with Search Button", async () => {

  //redering
  await act(async () => //whenever rendering component that has 'state' change/update we wrap it inside 'act'
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  //Querying
  const search_button = screen.getByRole('button', { name: "Search" });
  // console.log(search_button);


  const search_input_box = screen.getByTestId("searchInput");
  // console.log(search_input_box);

  fireEvent.change(search_input_box, {});

  //Assertion
  expect(search_button).toBeInTheDocument();
})