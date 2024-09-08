import { act, render, screen } from "@testing-library/react";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_DATA_IT_2 from "../mocks/IT/mockResMenu.json";

global.fetch = jest.fn(() => Promise.resolve
  ({
    json: () => Promise.resolve(MOCK_DATA_IT_2)
  })
);

it("should load the Restaurant Menu component", async () => {

  const chomu = await act(async () => render(<RestaurantMenu />));
  console.log(chomu);

  // const accordion_Header = screen.getByText("Ganpati Collection"); //😵 need to check again

})