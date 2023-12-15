import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Button } from "components/Button/index";
import { Icon } from "components/icons";

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Label",
    variant: "primary",
    icon: <Icon.info />,
    size: "small",
    id: "test-button-light-meplato",
    name: "button-light-meplato",
    disabled: false,
    disclosure: undefined,
    onClick: action("onClick")
  }
};
