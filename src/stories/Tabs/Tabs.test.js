import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs Component", () => {
  const tabsList = ["Tab 1", "Tab 2", "Tab 3"];
  const triggerFunction = jest.fn();

  it("renders tabs correctly", () => {
    const { getByText } = render(
      <Tabs tabsList={tabsList} triggerFunction={triggerFunction} />
    );

    // Ensure that the Tabs component renders with the correct tab names
    tabsList.forEach((tab) => {
      const tabElement = getByText(tab);
      expect(tabElement).toBeInTheDocument();
    });
  });

  it("selects a tab and triggers the triggerFunction", () => {
    const { getByText } = render(
      <Tabs tabsList={tabsList} triggerFunction={triggerFunction} />
    );

    // Click on a tab and check if it triggers the triggerFunction
    const tabElement = getByText("Tab 2");
    fireEvent.click(tabElement);

    // Ensure that the correct tab is active
    expect(tabElement).toHaveClass("active");

    // Ensure that the triggerFunction was called with the correct tab id
    expect(triggerFunction).toHaveBeenCalledWith(1);
  });
});
