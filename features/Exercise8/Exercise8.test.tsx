import Exercise8 from "./Exercise8";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Exercise8", () => {
  const testText = (text: string) => {
    it(`should render a card with the text ${text}`, () => {
      render(<Exercise8 />);
      const card = screen.getByText(text);
      expect(card).toBeInTheDocument();
    });
  };
  const testSuite = [
    "What's the best thing about a Boolean?",
    "Even if you're wrong, you're only off by a bit",
    "Why do programmers wear glasses?",
    "Because they need to C#",
  ];
  testSuite.forEach(testText);
});
