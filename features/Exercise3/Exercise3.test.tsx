import Exercise3 from "./Exercise3";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise3", () => {
  it("should have three buttons", () => {
    render(<Exercise3 />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });
  it("should have buttons with the text 'Button x' where x is its number", () => {
    render(<Exercise3 />);
    const buttons = screen.getAllByRole("button");
    for (let i = 0; i < buttons.length; i++) {
      expect(buttons[i]).toHaveTextContent(`Button ${i + 1}`);
    }
  });
  it("should show alert with the text 'You clicked on Button x' when the button is clicked", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Exercise3 />);
    const buttons = screen.getAllByRole("button");
    for (let i = 0; i < buttons.length; i++) {
      fireEvent.click(buttons[i]);
      expect(window.alert).toHaveBeenCalledWith(
        `You clicked on Button ${i + 1}`
      );
    }
  });
});
