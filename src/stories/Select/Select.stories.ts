import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    value: "1",
    label: "",
    triggerFunction: () => {},
  },
};
