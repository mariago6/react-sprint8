import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Navbar from "./Navbar";
import {BrowserRouter} from 'react-router-dom';

describe("Navbar", () => {
  beforeEach(() => render(<BrowserRouter> <Navbar logged={() => true}/> </BrowserRouter>));

  it("must display the StarWars logo in Navbar", async () => {
    expect(screen.getByAltText("logo").src).toContain("http://localhost/images/logo-starwars.jpg");
  });

  it("must display buttons in Navbar", async () => {
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

});
