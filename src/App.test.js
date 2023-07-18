import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';

test('renders navbar with home and shop links', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const shopLink = screen.getByText(/^shop$/i);
  expect(homeLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();
});

test('renders homepage with welcome message and image', () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/welcome to our shop/i);
    const productImage = screen.getByAltText(/product/i);
    expect(welcomeMessage).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
  });
  
  test('renders shopping cart route with sticky bar and product cards', () => {
    render(<App />);
    const cartLink = screen.getByText(/^shop$/i);
    fireEvent.click(cartLink);
    const stickyBar = screen.getByText(/items in cart/i);
    const productCards = screen.getAllByText(/product/i);
    expect(stickyBar).toBeInTheDocument();
    expect(productCards.length).toBe(3);
  });
  