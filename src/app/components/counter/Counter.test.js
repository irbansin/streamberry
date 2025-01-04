import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders with initial count", () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const counterElement = getByTestId("counter");
    expect(counterElement).toHaveTextContent("5");
  });

  test("increases count when '+' button is clicked", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const incrementButton = getByTestId("increment-button");
    const counterElement = getByTestId("counter");

    fireEvent.click(incrementButton);

    expect(counterElement).toHaveTextContent("1");
  });

  test("decreases count when '-' button is clicked", () => {
    const { getByTestId } = render(<Counter initialCount={2} />);
    const decrementButton = getByTestId("decrement-button");
    const counterElement = getByTestId("counter");

    fireEvent.click(decrementButton);

    expect(counterElement).toHaveTextContent("1");
  });

  //extra test above assignment

  test("doesn't allow count to go below 0", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const decrementButton = getByTestId("decrement-button");
    const counterElement = getByTestId("counter");

    fireEvent.click(decrementButton);

    expect(counterElement).toHaveTextContent("0");
  });
});
