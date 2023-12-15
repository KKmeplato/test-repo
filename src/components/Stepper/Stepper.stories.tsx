import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./Stepper";
import { StepperProps } from "./types";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  decorators: [
    (Story) => (
      <>
        <h1 className="pb-4 text-2xl font-bold uppercase">Update quantity</h1>
        <Story />
      </>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const StepperWithArgs = (args: StepperProps) => {
  const [, updateArgs] = useArgs<StepperProps>();
  const handleChange = (value: number) => {
    action("onValueChange")(value);
    updateArgs({ value });
  };

  return (
    <>
      <div className="pb-4">
        min/max: {args.min}/{args.max}
      </div>
      <Stepper {...args} onChange={handleChange} />
    </>
  );
};

const createStory = ({
  disabled = false,
  min,
  max,
  value
}: Omit<Partial<StepperProps>, "onChange">): Story => ({
  args: {
    disabled,
    min,
    max,
    value
  },
  render: StepperWithArgs
});

export const Default = createStory({
  min: 5000,
  max: 9999,
  value: 9009
});

export const MinReached = createStory({
  value: 0
});

export const MaxReached = createStory({
  value: 9999
});
