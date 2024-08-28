import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMock.json";
// import MOCK_DATA2 from "./mocks/resCardVegLabelMock.json";
import '@testing-library/jest-dom';

it("should render RestaurantCard component with props Data that we pass in", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurant_name = screen.getByText('Chinese Wok');

  expect(restaurant_name).toBeInTheDocument(); //✅
  // expect(restaurant_name).toHaveTextContent('Chinese Wok'); //✅
})

//test HOC : 'withVegLabel' and 'withNonVegLabel'
//need to try
// it("should render RestaurantCard component with Veg Label", () => {

//   const resCard_Veg = withVegLabel(RestaurantCard);

//   render(<resCard_Veg resData={MOCK_DATA2} />);

//   const Veg_label = screen.getByText("PureVeg💚");
//   expect(Veg_label).toBeInTheDocument();
// })