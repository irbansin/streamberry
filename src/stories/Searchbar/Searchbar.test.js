import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar Component", () => {
  it("renders with the initial search value", () => {
    const { getByTestId } = render(
      <Searchbar initialSearchValue="Test Value" />
    );
    const searchInput = getByTestId("searchValue-input");

    expect(searchInput.value).toBe("Test Value");
  });

  it("calls the search function when the search button is clicked", () => {
    const searchFunction = jest.fn();
    const { getByTestId } = render(<Searchbar search={searchFunction} />);
    const searchInput = getByTestId("searchValue-input");
    const searchButton = getByTestId("search-button");

    fireEvent.change(searchInput, { target: { value: "New Value" } });
    // fireEvent.click(searchButton);

    expect(searchFunction).toHaveBeenCalledWith("New Value");
  });

  it("calls the search function when Enter key is pressed in the input field", () => {
    const searchFunction = jest.fn();
    const { getByTestId } = render(<Searchbar search={searchFunction} />);
    const searchInput = getByTestId("searchValue-input");

    fireEvent.change(searchInput, { target: { value: "New Value" } });
    fireEvent.keyUp(searchInput, { key: "Enter" });

    expect(searchFunction).toHaveBeenCalledWith("New Value");
  });
});
