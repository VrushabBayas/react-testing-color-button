import { render, screen } from '@testing-library/react';
import App from './App';

test("Button has correct initial color", () => {
  render(<App />);
  //find the button with text as 'change to blue'
  const colorButton = screen.getByRole("button", { name: /chnage to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Button turns to blue when clicked", () => {});
