import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { FilterBadge } from "./FilterBadge";
import { FilterBadgeProps } from "./types";

const meta: Meta<typeof FilterBadge> = {
  component: FilterBadge
};
export default meta;

type Story = StoryObj<typeof FilterBadge>;

const FilterBadgeWithArgs = (args: FilterBadgeProps) => {
  const handleClick = () => {
    action("onClick");
  };

  return <FilterBadge {...args} onClick={handleClick} />;
};

export const Default: Story = {
  args: {
    type: "disclosure",
    direction: "down",
    children: "Text Filter"
  },
  render: FilterBadgeWithArgs
};
