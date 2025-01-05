import Select from "./Select.tsx";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: ["Greece", "Italy", "Spain", "France", "Germany"],
    value: "Greece",
  },
};
