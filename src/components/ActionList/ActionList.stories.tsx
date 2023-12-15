import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { ActionList } from "components/ActionList";
import { Button } from "components/Button";
import { Icon } from "components/icons";

import { ActionItemProps, ActionListProps } from "./types";

const meta: Meta<typeof ActionList> = {
  component: ActionList
};

export default meta;
type Story = StoryObj<typeof ActionList>;

const activator = (
  <Button variant="primary" disclosure="down" accessibilityLabel="">
    Open
  </Button>
);

const items: ActionItemProps[] = [
  {
    id: "sort-asc",
    children: "Sort ascending",
    sideHelpText: "XX",
    bottomHelpText: "You can also use keyboard controls",
    prefixIcon: <Icon.info />,
    onClick: action("sort ascending"),
    active: true
  },
  {
    id: "sort-desc",
    children: "Sort descending",
    suffixIcon: <Icon.info />,
    onClick: action("sort descending")
  },
  {
    id: "sort-disabled",
    children: "Sort disabled",
    disabled: true,
    prefixIcon: <Icon.info />,
    onClick: action("noop")
  },
  {
    id: "sort-critcal",
    children: "Sort critical disabled",
    disabled: true,
    suffixIcon: <Icon.info />,
    variant: "critical",
    onClick: action("sort critical")
  },
  {
    id: "sort-critcal-active",
    children: "Sort critical",
    active: true,
    suffixIcon: <Icon.info />,
    variant: "critical",
    onClick: action("sort critical active")
  }
];

const defaultItems = items;

const createStory = ({
  items = defaultItems,
  sections,
  activator
}: Partial<ActionListProps>): Story => ({
  args: {
    items: sections ? undefined : items,
    sections,
    activator
  }
});

export const WithActivator = createStory({
  activator: activator
});

export const WithSections = createStory({
  sections: [
    {
      title: "Sort options",
      items
    },
    {
      title: "Bulk actions",
      items
    }
  ]
});

export const CustomElement = createStory({
  items: [
    {
      id: "sort-asc",
      children: (
        <button className="text-lg text-primary">Custom element</button>
      ),
      onClick: action("Click custom element")
    },
    {
      id: "sort-desc",
      children: "Sort descending",
      prefixIcon: <Icon.info />,
      onClick: action("sort descending")
    }
  ]
});

const figmaExampleItems = [
  {
    children: "Import",
    onClick: action("import")
  },
  {
    children: "Export",
    onClick: action("export")
  },
  {
    children: "Duplicate",
    onClick: action("duplicate")
  },
  {
    children: "Archive",
    active: true,
    onClick: action("archive")
  }
];

export const FigmaExample = createStory({
  sections: [
    {
      items: figmaExampleItems
    },
    {
      title: "Section title",
      items: [
        {
          children: "Archive",
          variant: "critical",
          onClick: action("archive")
        }
      ]
    }
  ]
});
