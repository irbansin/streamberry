import Searchbar from "./Searchbar";

export default {
  component: Searchbar,
  title: "Components/Searchbar",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    initialSearchValue: "Harry Potter",
    search: (value) => alert(value),
  },
};
