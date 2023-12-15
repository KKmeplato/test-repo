import {
  AccordionMultipleProps,
  AccordionSingleProps
} from "@radix-ui/react-accordion";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Accordion } from "../Accordion";
import { AccordionItemProps } from "../types";

interface Props {
  type?: AccordionSingleProps["type"] | AccordionMultipleProps["type"];
  items: AccordionItemProps[];
  value?: AccordionSingleProps["value"] | AccordionMultipleProps["value"];
  onChange?: () => void;
}

const items: AccordionItemProps[] = [
  {
    actionText: "action 1",
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
    header: "Header content 1",
    value: "item-1",
    onActionClick: vi.fn()
  },
  {
    actionText: "action 2",
    children: "Accordion content 2",
    header: "Header content 2",
    value: "item-2",
    onActionClick: vi.fn()
  },
  {
    actionText: "action 3",
    children: "Accordion content 3",
    header: <h3>Header content 3</h3>,
    value: "item-3",
    disabled: true,
    onActionClick: vi.fn()
  }
];

describe("<Accordion />", () => {
  it.each([
    { items },
    { items, type: "multiple" },
    { items, type: "multiple", value: ["item-1", "item-2"] },
    { items, type: "single" },
    { items, type: "single", value: "item-1" }
  ])("renders with $items.length, type:$type", () => {
    const result = render(<Accordion type="multiple" items={items} />);

    expect(result).toMatchSnapshot();
  });

  it("changes accordion single type value", async () => {
    const mockOnChange = vi.fn() as Props["onChange"];

    render(<Accordion items={items} onChange={mockOnChange} />);

    const ItemOneElement = await screen.findByText("Header content 1");
    expect(ItemOneElement).toBeInTheDocument();
    const ItemTwoElement = await screen.findByText("Header content 2");
    expect(ItemTwoElement).toBeInTheDocument();

    await fireEvent.click(ItemOneElement);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("item-1");

    await fireEvent.click(ItemTwoElement);
    expect(mockOnChange).toBeCalledTimes(2);
    expect(mockOnChange).toHaveBeenCalledWith("item-2");
  });

  it("changes accordion multiple type value", async () => {
    const mockOnChange = vi.fn() as Props["onChange"];

    render(<Accordion items={items} onChange={mockOnChange} type="multiple" />);

    const ItemOneElement = await screen.findByText("Header content 1");
    expect(ItemOneElement).toBeInTheDocument();
    const ItemTwoElement = await screen.findByText("Header content 2");
    expect(ItemTwoElement).toBeInTheDocument();

    await fireEvent.click(ItemOneElement);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(["item-1"]);

    await fireEvent.click(ItemTwoElement);
    expect(mockOnChange).toBeCalledTimes(2);
    expect(mockOnChange).toHaveBeenCalledWith(["item-1", "item-2"]);
  });
});
