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

  fireEvent.change(search_input_box, { target: { value: 'pizza' } });
  // (EXTRA) fireEvent.change(search_input_box, { target: { value: /pizza/i } }); // /pizza/i is a regex pattern that matches the string "pizza" regardless of case. The i flag at the end makes the match case-insensitive. so Pizza, PIZZA, pizza...etc this will get triggered on all of them irrespective of case 

  fireEvent.click(search_button);

  //Now after typing 'pizza' in input and triggering click search button, in assertion my screen should load 2 pizza cards (~ for this testcase example)
  //Assertion
  const cards = screen.getAllByTestId("resCard");
  // console.log(cards);
  
  expect(cards.length).toBe(2);
})