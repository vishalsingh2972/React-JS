import { render, act, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA_IT from "../mocks/IT/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

//will give me a mock 'fetch' function that i'll use here for testing
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_IT);
    }
  });
});

it("should render the Body component with Search Button", async () => {

  //redering
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  //Querying
  const search_button = screen.getByRole('button', { name: "Search" });
  // console.log(search_button);

  //Assertion
  expect(search_button).toBeInTheDocument();
})