import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "components/Accordion";

import { AccordionItemProps, AccordionProps } from "./types";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items: AccordionItemProps[] = [
  {
    actionText: "action",
    children: (
      <span>
        Customizing Radix UI components is easy. You can use <b>CSS</b> to style
        them according to your projects design requirements. Additionally, Radix
        provides a set of props and API options for fine-grained control over
        behavior and appearance. Customizing Radix UI components is easy. You
        can use CSS to style them according to your projects design
        requirements. Additionally, Radix provides a set of props and API
        options for fine-grained control over behavior and appearance.
      </span>
    ),
    header: (
      <span>
        Here you will find an overview of all customer projects. In the{" "}
        <b>Meplato Store</b>, the requirements of the respective customers are
        summarized in projects. There is one project per customer and per
        country. The customer-specific requirements can be found in the
        respective project as a PDF. Simply click on the customers name.
      </span>
    ),
    value: "item-1",
    onActionClick: action("click")
  },
  {
    actionText: "action",
    children:
      "The latest Radix UI release brings several exciting features and improvements, including enhanced accessibility features, improved performance optimizations, and new interactive components. Check out the release notes for a detailed list of changes and updates.",
    header: "What's new in the latest Radix UI release?",
    value: "item-2",
    onActionClick: action("click")
  },
  {
    actionText: "action",
    children:
      "Yes, Radix UI is designed to be framework-agnostic. You can easily integrate Radix components into your projects built with React, Vue.js, Angular, and more. Radix components work seamlessly with these frameworks, providing a consistent and accessible user interface.",
    header: "Can I use Radix UI with popular JavaScript frameworks?",
    value: "item-3",
    disabled: true,
    onActionClick: action("click")
  }
];

const defaultItems = items;

const createStory = ({
  type,
  items = defaultItems
}: Omit<Partial<AccordionProps>, "onChange">): Story => ({
  args: {
    items: items,
    type: type
  }
});

export const Single = createStory({
  type: "single"
});

export const Multiple = createStory({
  type: "multiple"
});