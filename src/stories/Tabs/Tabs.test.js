import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

const tabsList = ["Tab 1", "Tab 2", "Tab 3"];

describe("Tabs Component", () => {
  it("renders tabs correctly", () => {
    const { getByTestId } = render(<Tabs tabsList={tabsList} />);
    const tabsContainer = getByTestId("tabs");

    expect(tabsContainer.children.length).toBe(tabsList.length);

    expect(tabsContainer.firstChild).toHaveClass("active");
  });

  it("changes active tab on click", () => {
    const { getByTestId } = render(<Tabs tabsList={tabsList} />);
    const tabsContainer = getByTestId("tabs");

    const secondTab = tabsContainer.children[1];
    fireEvent.click(secondTab);

    expect(secondTab).toHaveClass("active");

    const firstTab = tabsContainer.children[0];
    expect(firstTab).not.toHaveClass("active");
  });
});
