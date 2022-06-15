import Exercise7 from "./Exercise7";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise7", () => {
  it("should have a form", () => {
    const { container } = render(<Exercise7 />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });
  it("should have a input with the placeholder 'First name'", () => {
    render(<Exercise7 />);
    const input = screen.getByPlaceholderText("First name");
    expect(input).toBeInTheDocument();
  });
  it("should have a input with the placeholder 'Last name'", () => {
    render(<Exercise7 />);
    const input = screen.getByPlaceholderText("Last name");
    expect(input).toBeInTheDocument();
  });
  it("should have a button with text 'GREET ME'", () => {
    render(<Exercise7 />);
    const button = screen.getByText("GREET ME");
    expect(button).toBeInTheDocument();
  });
  it("should show alert with 'Hello First name Last name!' when the button is clicked", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Exercise7 />);
    const button = screen.getByText("GREET ME");
    const inputFirstName = screen.getByPlaceholderText("First name");
    const inputLastName = screen.getByPlaceholderText("Last name");
    fireEvent.change(inputFirstName, { target: { value: "John" } });
    fireEvent.change(inputLastName, { target: { value: "Doe" } });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("Hello John Doe!");
  });
});
