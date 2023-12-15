import { Meta, StoryObj } from "@storybook/react";
import { hideStorybookControls } from "development_support/utils";

import { Icon } from "components/icons";

import { Badge } from "./Badge";
import { BadgeProps } from "./types";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    as: {
      control: "radio",
      options: [undefined, "notification", "dot"]
    },
    progress: {
      control: "radio",
      options: [undefined, "complete", "partial", "incomplete"]
    },
    variant: {
      control: "radio"
    },
    ...hideStorybookControls(["ref", "prefixIcon"])
  }
};
export default meta;

type Story = StoryObj<typeof Badge>;

const BadgeWithArgs = (args: BadgeProps) => {
  const { as } = args;
  return (
    <>
      {as === "dot" && (
        <p className="pb-2">
          <span>Need to set </span>
          <code className="rounded p-1 text">progress</code>
        </p>
      )}
      <div className="flex max-w-[500px]">
        <Badge {...args} />
      </div>
    </>
  );
};

const createStory = ({
  as,
  children,
  progress,
  variant
}: Pick<
  Partial<BadgeProps>,
  "as" | "children" | "progress" | "variant"
>): Story => ({
  args: {
    as,
    children,
    progress,
    variant
  },
  render: BadgeWithArgs
});

const createIconStory = ({
  children,
  variant
}: Pick<Partial<BadgeProps>, "children" | "variant">): Story => ({
  args: {
    as: undefined,
    children,
    prefixIcon: <Icon.info className="h-5 w-5 shrink-0 text-icon" />,
    variant
  },
  render: BadgeWithArgs
});

export const Default = createStory({
  as: undefined,
  children: "Discounts available",
  variant: "default"
});

export const WithIcon = createIconStory({
  children: "Discounts available",
  variant: "default"
});

export const WithComplexChildren = createStory({
  as: undefined,
  variant: "default",
  children: <div>💯✌🏾</div>
});
