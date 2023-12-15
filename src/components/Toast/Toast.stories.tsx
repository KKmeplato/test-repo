import { action } from "@storybook/addon-actions";
import { useState } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";

import { Button } from "components/Button";
import { useToast } from "contexts/utils";

import { Toast } from "./Toast";
import { ToastProps } from "./types";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [
    (Story) => (
      <>
        <h1 className="pb-4 text-3xl uppercase">Toast</h1>
        <Story />
      </>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastWithArgs = (args: ToastProps) => {
  const [loading, setLoading] = useState(false);
  const { create } = useToast();

  const handleClose = () => {
    action("onClose")();
    setLoading(false);
  };

  const handleClick = () => {
    setLoading(true);
    create({
      ...args,
      onClose: handleClose
    });
  };

  return (
    <Button
      accessibilityLabel="Format HDD"
      onClick={handleClick}
      variant="primary"
      loading={loading}
    >
      Create Toast
    </Button>
  );
};

const ToastWithActionWithArgs = (args: ToastProps) => {
  const [loading, setLoading] = useState(false);
  const { create } = useToast();

  const handleClose = () => {
    action("onClose")();
    setLoading(false);
  };

  const handleAction = () => {
    action("onAction")();
    setLoading(false);
  };

  const handleClick = () => {
    setLoading(true);
    create({
      ...args,
      action: args.action || "Undo",
      onClose: handleClose,
      onAction: handleAction
    });
  };

  return (
    <Button
      accessibilityLabel="Format HDD"
      onClick={handleClick}
      variant="primary"
      loading={loading}
    >
      Create Toast
    </Button>
  );
};

const createStory = ({
  critical = false,
  duration = 3000,
  message = "HDD Formatted 😈"
}: Pick<Partial<ToastProps>, "critical" | "duration" | "message">): Story => ({
  args: {
    critical,
    duration,
    message
  },
  render: ToastWithArgs
});

const createStoryWithAction = ({
  action = "Undo",
  critical = false,
  duration = 3000,
  message = "HDD Formatted 😈"
}: Pick<
  Partial<ToastProps>,
  "critical" | "duration" | "message" | "action"
>): Story => ({
  args: {
    action,
    critical,
    duration,
    message
  },
  render: ToastWithActionWithArgs
});

export const Default = createStory({});

export const WithAction = createStoryWithAction({});
