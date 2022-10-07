import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Login from './Login'

describe('login component', () => {
  beforeEach(() => render(<Login />)); 


  test('should renders placeholder', () => {
    const text = screen.getByPlaceholderText(/email/i); 
    expect(text).toBeInTheDocument()
  }); 

  test('should renders button', () => {
    const buttonEl = screen.getByRole('button', { name: /continue/i}); 
    expect(buttonEl).toBeInTheDocument()
  }); 
})



