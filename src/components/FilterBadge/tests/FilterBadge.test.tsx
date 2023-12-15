import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import { FilterBadgeProps } from "components/FilterBadge/types";

import { FilterBadge } from "../FilterBadge";

const mockClick = vi.fn();

describe("<FilterBadge />", () => {
  it("renders toggle button not disabled", () => {
    const result = render(
      <FilterBadge type="toggle" active={true}>
        Filter badge text
      </FilterBadge>
    );

    expect(result.getByRole("button")).toBeInTheDocument();
    expect(result.getByRole("button")).not.toHaveAttribute("disabled");
    expect(result.getByRole("button")).toHaveTextContent("Filter badge text");
  });

  it.each<FilterBadgeProps>([
    { type: "toggle", children: "Filter badge text" },
    { type: "toggle", children: "Filter badge text", active: true },
    {
      type: "toggle",
      children: "Filter badge text",
      active: true,
      disabled: true
    },
    {
      type: "remove",
      children: "Filter badge text"
    },
    {
      children: "Filter badge text",
      type: "add"
    },
    {
      type: "disclosure",
      children: "Filter badge text",
      direction: "up"
    }
  ])(
    "renders with toggleable:$toggleable, disabled:$disabled, disclosure:$disclosure, icon:$icon",
    (props) => {
      const result = render(<FilterBadge {...props} />);
      expect(result).toMatchSnapshot();
    }
  );

  it("calls the click handler when clicked", async () => {
    const result = render(
      <FilterBadge type="toggle" onClick={mockClick}>
        Filter badge text
      </FilterBadge>
    );

    await userEvent.click(result.getByRole("button"));
    expect(mockClick).toHaveBeenCalled();
  });

  it("renders add badge", async () => {
    const result = render(
      <FilterBadge type="add">Filter badge text</FilterBadge>
    );
    const badgeElement = await result.getAllByRole("button")[0];
    const beforeSvgIcon = await badgeElement.querySelector("svg");
    expect(beforeSvgIcon).toBeInTheDocument();

    expect(result).toMatchSnapshot();
  });

  it("renders disclosure filter badge", async () => {
    const result = render(
      <FilterBadge type="disclosure" direction={"up"} onClick={mockClick}>
        Filter badge text
      </FilterBadge>
    );

    const buttonElement = await result.getByRole("button");
    await userEvent.click(buttonElement);
    expect(mockClick).toHaveBeenCalled();
    expect(result.getByText("Filter badge text")).toBeDefined();
  });
});
