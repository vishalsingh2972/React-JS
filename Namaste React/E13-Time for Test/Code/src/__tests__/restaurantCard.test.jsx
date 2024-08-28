import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMock.json";
import '@testing-library/jest-dom';

it("should render RestaurantCard component with props Data that we pass in", () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);

  const restaurant_name = screen.getByText('Chinese Wok');

  expect(restaurant_name).toBeInTheDocument(); //✅
  // expect(restaurant_name).toHaveTextContent('Chinese Wok'); //✅
})

it("should render RestaurantCard component with Promoted Label", () => {
  //need to try
})