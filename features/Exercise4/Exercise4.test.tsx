import Exercise4 from "./Exercise4";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise4", () => {
  it("should have a button with 'Click Me'", () => {
    render(<Exercise4 />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });
  it("should have text with 'Button has been clicked: x times' with x the number of times the button has been clicked", () => {
    render(<Exercise4 />);
    expect(
      screen.getByText("Button has been clicked: 0 times")
    ).toBeInTheDocument();
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(
      screen.getByText("Button has been clicked: 1 times")
    ).toBeInTheDocument();
    fireEvent.click(button);
    fireEvent.click(button);
    expect(
      screen.getByText("Button has been clicked: 3 times")
    ).toBeInTheDocument();
  });
});
