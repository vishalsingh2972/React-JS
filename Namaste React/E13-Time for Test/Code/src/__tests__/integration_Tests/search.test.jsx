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

it("should render corresponding RestaurantCard components when searching for 'pizza' text in the search input", async () => {

  //redering
  await act(async () => //whenever rendering component that has 'state' change/update we wrap it inside 'act'
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  // const cards_Before_Search = screen.getAllByTestId("resCard");
  // expect(cards_Before_Search.length).toBe(20);

  //Querying
  const search_button = screen.getByRole('button', { name: "Search" });
  // console.log(search_button);


  const search_input_box = screen.getByTestId("searchInput");
  // console.log(search_input_box);

  fireEvent.change(search_input_box, { target: { value: 'pizza' } });
  // (EXTRA) fireEvent.change(search_input_box, { target: { value: /pizza/i } }); // /pizza/i is a regex pattern that matches the string "pizza" regardless of case. The i flag at the end makes the match case-insensitive. so Pizza, PIZZA, pizza...etc this will get triggered on all of them irrespective of case 
  // console.log(search_input_box);

  fireEvent.click(search_button);

  //Now after typing 'pizza' in input and triggering click search button, in assertion my screen should load 2 pizza cards (~ for this testcase example)
  //Assertion
  const cards_After_Search = screen.getAllByTestId("resCard");
  // console.log(cards_After_Search);

  expect(cards_After_Search.length).toBe(2);
})

it("should render corresponding RestaurantCard components when clicking on top rated restaurants button", async () => {

  //redering
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  // const cards_Before_Click = screen.getAllByTestId("resCard");
  // expect(cards_Before_Click.length).toBe(20);

  //Querying
  const top_rated_restaurant_button = screen.getByRole('button', { name: "Top Rated Restaurants" });

  fireEvent.click(top_rated_restaurant_button);

  //Assertion
  const top_restaurant_cards = screen.getAllByTestId("resCard");

  expect(top_restaurant_cards.length).toBe(2);
})