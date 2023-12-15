import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import { CheckState, CheckboxProps } from "./types";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: {
      control: "radio",
      options: [true, "indeterminate"]
    }
  },
  decorators: [
    (Story) => (
      <>
        <h1 className="pb-4 text-2xl font-bold uppercase">Hobbies</h1>
        <Story />
      </>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxWithArgs = (args: CheckboxProps) => {
  const [, updateArgs] = useArgs<CheckboxProps>();
  const handleChange = (value: CheckState) => {
    action("onChange")(value);
    updateArgs({ checked: value });
  };

  return <Checkbox {...args} onChange={handleChange} />;
};

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    error: undefined,
    name: "hobbies",
    label: (
      <p>
        Ich habe die{" "}
        <b>
          Allgemeine Geschäftsbedingungen (AGB), Nutzungsbedingungen und
          Datenschutzbestimmungen
        </b>{" "}
        gelesen und stimme ihnen zu.
      </p>
    ),
    hint: "The best sport 🏐",
    value: "volleyball"
  },
  render: CheckboxWithArgs
};
