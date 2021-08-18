import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Button has correct initial color", () => {
  render(<App />);
  //find the button with text as 'change to blue'
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  //click the button
  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect button text to be red
  expect(colorButton.textContent).toBe("Change to red");
});

test("should check initial conditions", () => {
  render(<App />);
  //check that button starts out enabled
  const colorbutton = screen.getByRole("button", { name: /Change to blue/i });
  expect(colorbutton).toBeEnabled();

  //check that the checkBox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("checkbox disables btton on first click and enables on second click", () => {
  //render the app
  render(<App />);
  //click on check box to disable
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });
  fireEvent.click(checkBox);
  //expect checkbox should be checked
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
  //uncheck the checkBox
  fireEvent.click(checkBox);
  //expect checkbox not checked
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("Chnage color to gray if button is red and revert again on click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkBox);
  //expect button to be gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  //expect button to be enabled
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Chnage color to gray and revert if color is blue", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /Change to blue/i });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(colorButton);
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});






