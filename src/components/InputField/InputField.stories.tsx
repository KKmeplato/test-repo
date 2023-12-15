import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { hideStorybookControls } from "development_support/utils";
import { useState } from "react";

import { InputField, InputFieldProps, InputProps } from "components/InputField";
import { Icon } from "components/icons";

const meta: Meta<typeof InputField> = {
  component: InputField,
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<InputProps>;
type NumberInputStory = StoryObj<Extract<InputFieldProps, { type: "number" }>>;

function TextInputWithArgs(args: InputProps) {
  const [value, setValue] = useState(args.value);

  return <InputField {...args} value={value} onChange={setValue} />;
}

export const TextInput: Story = {
  args: {
    label: "Text input field",
    hint: "Lorem ipsum dolor sit amet, consetetur",
    showHintIcon: true,
    prefix: "https://",
    suffix: "DE",
    suffixIcon: <Icon.info />,
    prefixIcon: <Icon.info />,
    showCharacterCount: true,
    disabled: false,
    preview: false,
    id: "test-input-field",
    maxLength: 10,
    type: "text",
    onChange: action("onChange")
  },
  render: TextInputWithArgs,
  argTypes: {
    ...hideStorybookControls(["type"])
  }
};

function InputFieldWithArgs(
  args: Extract<InputFieldProps, { type: "number" }>
) {
  const [value, setValue] = useState(args.value);

  return <InputField {...args} value={value} onChange={setValue} />;
}

export const NumberInput: NumberInputStory = {
  args: {
    type: "number",
    label: "Text input field",
    hint: "Lorem ipsum dolor sit amet, consetetur",
    showHintIcon: true,
    prefix: "€",
    value: 1,
    suffix: "€",
    disabled: false,
    preview: false,
    id: "test-input-field",
    min: 0,
    max: 10,
    onChange: action("onChange")
  },
  render: InputFieldWithArgs,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["number"]
    },
    ...hideStorybookControls([
      "type",
      "prefixIcon",
      "suffixIcon",
      "showCharacterCount",
      "multiline"
    ])
  }
};
