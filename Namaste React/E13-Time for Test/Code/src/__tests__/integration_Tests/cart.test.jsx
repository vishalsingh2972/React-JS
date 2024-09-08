import { act, render, screen } from "@testing-library/react";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_DATA_IT_2 from "../mocks/IT/mockResMenu.json";
// import { MemoryRouter } from 'react-router-dom';

global.fetch = jest.fn(() => Promise.resolve
  ({
    json: () => Promise.resolve(MOCK_DATA_IT_2)
  })
);

it("should load the Restaurant Menu component", async () => {
  await act(async () => render(
    // <MemoryRouter initialEntries={[`/restaurants/${MOCK_DATA_IT_2.data.cards[2].card.card.info.id}`]}>
      <RestaurantMenu />
    // </MemoryRouter>
  ))

  const accordion_Header = screen.getByText("Ganpati Collection"); //😵 need to check again

})