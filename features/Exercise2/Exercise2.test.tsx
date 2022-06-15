import Exercise2 from "./Exercise2";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise2", () => {
  it("should contain a button with Click Me", () => {
    render(<Exercise2 />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });
  it("should show alert with Clicked! when the button is clicked", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Exercise2 />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Clicked!");
  });
});
