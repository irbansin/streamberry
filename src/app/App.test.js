import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

afterAll(() => {
  cleanup();
});

test("App Name", () => {
  render(<App />);
  const linkElement = screen.getByText("Zolo Movies");
  expect(linkElement).toBeInTheDocument();
});
