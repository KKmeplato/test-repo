import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Banner, BannerProps } from "components/Banner";

const meta: Meta<typeof Banner> = {
  component: Banner
};

export default meta;
type Story = StoryObj<typeof Banner>;

const BannerWithArgs = (args: BannerProps) => {
  return <Banner {...args} />;
};

// Default Banner
export const Default: Story = {
  args: {
    title: "This is a title",
    children:
      "This is a message that is max 2 lines long and will be truncated",
    variant: "warning",
    primaryAction: {
      label: "Label",
      onClick: action("Click")
    },
    secondaryAction: {
      label: "Label2",
      onClick: action("Click")
    },
    isInsideCard: false
  },
  render: BannerWithArgs
};
