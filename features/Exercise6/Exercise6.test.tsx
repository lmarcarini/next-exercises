import Exercise6 from "./Exercise6";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise3", () => {
  it("should render an unordered list ul", () => {
    const { container } = render(<Exercise6 />);
    const ul = container.querySelector("ul");
    expect(ul).toBeInTheDocument();
  });
  it("should render six li elements", () => {
    const { container } = render(<Exercise6 />);
    const li = container.querySelectorAll("li");
    expect(li.length).toBe(6);
  });
  const array = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  it("should render li elements with the text from the array", () => {
    const { container } = render(<Exercise6 />);
    const li = container.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      expect(li[i]).toHaveTextContent(array[i]);
    }
  });
});
