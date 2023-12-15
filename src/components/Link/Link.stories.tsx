import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";
import { LinkProps } from "./types";

const meta: Meta<typeof Link> = {
  argTypes: {
    as: {
      control: "radio",
      options: ["a", "button"]
    },
    children: {
      control: "text"
    }
  },
  component: Link,
  decorators: [
    (Story) => (
      <div className="h-screen p-4">
        <Story />
      </div>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Link>;

const LinkWithArgs = (args: LinkProps) => {
  if (args.as === "button") {
    const handleClick = () => {
      action("onClick")();
    };

    return <Link {...args} onClick={handleClick} />;
  }

  return <Link {...args} />;
};

const createOnClickStory = ({
  as = "button",
  children = "Darknet",
  disabled = false,
  external = false,
  monochrome = false,
  size = "large",
  variant = "default"
}: Omit<Partial<LinkProps>, "onClick">): Story => ({
  args: {
    as,
    children,
    disabled,
    external,
    monochrome,
    size,
    variant
  },
  render: LinkWithArgs
});

const createHrefStory = ({
  as = "a",
  children = "Darknet",
  disabled = false,
  external = true,
  monochrome = false,
  size = "large",
  variant = "default"
}: Omit<Partial<LinkProps>, "href">): Story => ({
  args: {
    as,
    children,
    disabled,
    external,
    href: "https://www.meplato.com",
    monochrome,
    size,
    variant
  },
  render: LinkWithArgs
});

export const Default = createHrefStory({});

export const AsAButtonElement: Story = createOnClickStory({});
