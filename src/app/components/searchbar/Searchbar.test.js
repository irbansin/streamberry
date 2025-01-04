import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("Searchbar Component", () => {
  it("renders with initial search value", () => {
    const mockSearch = jest.fn();

    const { getByTestId } = render(
      <Searchbar initialSearchValue="Harry Potter" search={mockSearch} />
    );

    const searchInput = getByTestId("searchValue-input");

    expect(searchInput.value).toBe("Harry Potter");
  });

  it("calls search function on Enter key press", () => {
    const mockSearch = jest.fn();
    const { getByTestId } = render(<Searchbar search={mockSearch} />);
    const searchInput = getByTestId("searchValue-input");

    fireEvent.change(searchInput, { target: { value: "Jurassic Park" } });
    fireEvent.keyUp(searchInput, { key: "Enter" });

    expect(mockSearch).toHaveBeenCalledWith("Jurassic Park");
  });

  it("calls search function on button click", () => {
    const mockSearch = jest.fn();
    const { getByTestId } = render(<Searchbar search={mockSearch} />);
    const searchInput = getByTestId("searchValue-input");
    const searchButton = getByTestId("searchButton");

    fireEvent.change(searchInput, { target: { value: "Avatar" } });
    fireEvent.click(searchButton);

    expect(mockSearch).toHaveBeenCalledWith("Avatar");
  });
});
