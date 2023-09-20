import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import RouteSwitch from './RouteSwitch';

test('renders learn react link', () => {
  render(<RouteSwitch/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
