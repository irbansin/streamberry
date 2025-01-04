import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab component", () => {
  it("renders the tab text correctly", () => {
    const tabText = "Tab 1";
    const { getByText } = render(<Tab tab={tabText} />);
    const tabElement = getByText(tabText);
    expect(tabElement).toBeInTheDocument();
  });

  it("applies the 'active' class when isActive is true", () => {
    const { container } = render(<Tab tab="Tab 1" isActive={true} />);
    const tabElement = container.querySelector(".active");
    expect(tabElement).toBeInTheDocument();
  });

  it("does not apply the 'active' class when isActive is false", () => {
    const { container } = render(<Tab tab="Tab 1" isActive={false} />);
    const tabElement = container.querySelector(".active");
    expect(tabElement).toBeNull();
  });

  it("calls the 'selectTab' function when clicked", () => {
    const clickMock = jest.fn();
    const { getByTestId } = render(<Tab tab="Tab 1" selectTab={clickMock} />);
    const tabElement = getByTestId("tab");
    fireEvent.click(tabElement);
    expect(clickMock).toHaveBeenCalledTimes(1);
  });
});
