import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Slider } from "./Slider";
import { SliderProps } from "./types";

const meta: Meta<typeof Slider> = {
  component: Slider,
  decorators: [
    (Story) => {
      return (
        <div className="max-w-sm py-16">
          <Story />
        </div>
      );
    }
  ]
};

export default meta;
type Story = StoryObj<typeof Slider>;

function SliderWithArgs(args: SliderProps) {
  const [value, setValue] = useState(args.defaultValue);
  const handleChange = React.useCallback((value: number[]) => {
    setValue(value);
  }, []);

  return (
    <Slider
      {...args}
      value={value}
      onChange={handleChange}
      onChangeCommit={action("onChangeCommit")}
    />
  );
}

const createStory = ({
  defaultValue
}: {
  defaultValue: SliderProps["defaultValue"];
}): Story => ({
  args: {
    defaultValue,
    step: 1,
    min: 0,
    max: 100,
    disabled: false,
    prefix: "$",
    suffix: "100",
    label: "Label",
    accessibilityLabel: defaultValue?.length === 1 ? "Price" : "Price range"
  },
  render: SliderWithArgs
});

export const SingleThumb = createStory({
  defaultValue: [40]
});

export const DualThumb = createStory({
  defaultValue: [40, 100]
});
