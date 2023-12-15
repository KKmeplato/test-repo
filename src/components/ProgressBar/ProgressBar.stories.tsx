import { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "components/ProgressBar/index";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    variant: "highlight",
    size: "medium",
    value: 40,
    max: 100,
    accessibilityLabel: "Onboarding progress bar"
  }
};
