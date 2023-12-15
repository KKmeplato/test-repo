import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "./RadioGroup";
import { RadioGroupItemProps, RadioGroupProps } from "./types";

const meta: Meta<typeof RadioGroup> = {
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"]
    },
    value: {
      control: "text"
    }
  },
  component: RadioGroup,
  decorators: [
    (Story) => (
      <>
        <h1 className="pb-4 text-2xl font-bold uppercase">Preferred contact</h1>
        <Story />
      </>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const preferredContactItems: RadioGroupItemProps[] = [
  {
    label: <b>Email</b>,
    value: "email"
  },
  {
    label: "Phone",
    value: "phone",
    id: "contact-phone"
  },
  {
    label: "Mail",
    value: "mail",
    hint: (
      <>
        <b>Really?</b> Soo oldschool...
      </>
    )
  },
  {
    label: "Laser",
    value: "laser",
    disabled: true,
    hint: "Maybe not the best idea..."
  }
];

const RadioGroupWithArgs = (args: RadioGroupProps) => {
  const [, updateArgs] = useArgs<RadioGroupProps>();
  const handleChange = (value: string) => {
    action("onChange")(value);
    updateArgs({ value });
  };

  return <RadioGroup {...args} onChange={handleChange} />;
};

const createStory = ({
  disabled = false,
  items,
  orientation = "vertical",
  value
}: Omit<Partial<RadioGroupProps>, "onChange">): Story => ({
  args: {
    disabled,
    items,
    orientation,
    value
  },
  render: RadioGroupWithArgs
});

export const Single = createStory({
  name: "foo",
  items: [
    {
      label: "Lorem ipsum",
      value: "bar"
    }
  ]
});

export const Multiple = createStory({
  name: "contact",
  items: preferredContactItems,
  value: "phone"
});
