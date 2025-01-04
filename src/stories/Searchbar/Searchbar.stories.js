import Searchbar from "./Searchbar.tsx";

export default {
  component: Searchbar,
  title: "Components/Searchbar",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    initialSearchValue: "Harry Potter",
    search: (value) => console.log(value),
  },
};
