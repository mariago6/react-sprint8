import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CardStarShips from './CardStarShips'
import {BrowserRouter} from 'react-router-dom';


test('Must go back', () => {
  const backFunct = jest.fn();
  const result = {
    model: '',
    manufacturer: '',
    cost_in_credits: '', 
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: []
  };

  render(<BrowserRouter><CardStarShips result={result} backFunct={backFunct}/></BrowserRouter>); 
  const button = screen.queryByText('← Back');
  fireEvent.click(button);
  expect(backFunct).toHaveBeenCalledTimes(1); 
})