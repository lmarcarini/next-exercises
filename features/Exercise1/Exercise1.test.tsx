import Exercise1 from "./Exercise1";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise1", () => {
  it("should contain Hello, World!", () => {
    const { getByText } = render(<Exercise1 />);
    const text = getByText("Hello, World!");
    expect(text).toBeInTheDocument();
  });
  /*
  it("should have an element with yellow background color", () => {
    const { getByText } = render(<Exercise1 />);
    const text = getByText("Hello, World!");
    expect(text).toHaveStyle("background-color: #fdc803");
  });

  it("should have an element with height equal to width", () => {
    const { getByText } = render(<Exercise1 />);
    const text = getByText("Hello, World!");
    expect(text).toHaveStyle("height: 200px");
    expect(text).toHaveStyle("width: 200px");
  });
  */
});
