import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { ActionBanner, ActionBannerProps } from "components/ActionBanner";

const meta: Meta<typeof ActionBanner> = {
  component: ActionBanner
};

export default meta;
type Story = StoryObj<typeof ActionBanner>;

const BannerWithArgs = (args: ActionBannerProps) => {
  return <ActionBanner {...args} />;
};

// Action Banner
export const Default: Story = {
  args: {
    action: { label: "Action", onClick: action("onClick") },
    children:
      "This is a message that is max 2 lines long and will be truncated",
    variant: "critical"
  },
  render: BannerWithArgs
};
