import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

// Sample data for tabsList
const tabsList = ["Tab 1", "Tab 2", "Tab 3"];

describe("Tabs Component", () => {
  it("renders tabs correctly", () => {
    const { getByTestId } = render(<Tabs tabsList={tabsList} />);
    const tabsContainer = getByTestId("tabs");

    // Ensure that the correct number of tabs is rendered
    expect(tabsContainer.children.length).toBe(tabsList.length);

    // Ensure that the first tab is active by default
    expect(tabsContainer.firstChild).toHaveClass("active");
  });

  it("changes active tab on click", () => {
    const { getByTestId } = render(<Tabs tabsList={tabsList} />);
    const tabsContainer = getByTestId("tabs");

    // Click on the second tab
    const secondTab = tabsContainer.children[1];
    fireEvent.click(secondTab);

    // Ensure that the second tab is now active
    expect(secondTab).toHaveClass("active");

    // Ensure that the first tab is no longer active
    const firstTab = tabsContainer.children[0];
    expect(firstTab).not.toHaveClass("active");
  });
});
