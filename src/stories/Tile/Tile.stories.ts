import type { Meta, StoryObj } from "@storybook/react";
import Tile from "./Tile";

const meta: Meta<typeof Tile> = {
  title: "Components/Tile",
  component: Tile,
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const Default: Story = {
  args: {
    title: "Bohmian Rhapsody",
    altText: "Bohmian Rhapsody",
    description:
      "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    imageLink:
      "https://i.scdn.co/image/ab67706c0000da84ea367b0ec3b80d2456395191",
  },
};
