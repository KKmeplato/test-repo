import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import { ActionList } from "../ActionList";

const mockClick = vi.fn();

describe("<ActionList />", () => {
  test("renders a simple ActionList", async () => {
    const items = [
      {
        id: "sort-asc",
        children: "Sort ascending",
        onClick: mockClick("sort-asc")
      },
      {
        id: "sort-desc",
        children: "Sort descending",
        onClick: mockClick("sort-desc")
      }
    ];
    const result = render(<ActionList items={items} />);

    expect(result.getByText("Sort ascending")).toBeDefined();
    expect(result.getByText("Sort descending")).toBeDefined();

    expect(result).toMatchSnapshot();

    await userEvent.click(result.getAllByRole("button")[0]);

    expect(mockClick).toHaveBeenCalledWith("sort-asc");
  });

  test("renders an ActionList with sections", async () => {
    const mockClick = vi.fn();

    const sections = [
      {
        title: "Sort options",
        items: [
          {
            id: "sort-asc",
            children: "Sort ascending",
            onClick: () => mockClick("sort-asc")
          },
          {
            id: "sort-desc",
            children: "Sort descending",
            onClick: () => mockClick("sort-desc")
          }
        ]
      },
      {
        title: "Bulk options",
        items: [
          {
            id: "edit",
            children: "Edit",
            onClick: () => mockClick("edit")
          },
          {
            id: "remove",
            children: "Sort descending",
            onClick: () => mockClick("remove")
          }
        ]
      }
    ];
    const result = render(<ActionList sections={sections} />);

    expect(result.getByText("Sort options")).toBeDefined();
    expect(result.getByText("Bulk options")).toBeDefined();
    expect(result).toMatchSnapshot();

    await userEvent.click(result.getAllByRole("button")[2]);

    expect(mockClick).toHaveBeenCalledWith("edit");
  });

  test("renders an ActionList as a dropdown", async () => {
    function Wrapper({ children }: { children: React.ReactElement }) {
      return <div id="uikit-theme">{children}</div>;
    }

    const items = [
      {
        id: "sort-asc",
        children: "Sort ascending",
        onClick: mockClick("sort-asc")
      },
      {
        id: "sort-desc",
        children: "Sort descending",
        onClick: mockClick("sort-desc")
      }
    ];
    const activator = <button>Open</button>;
    const result = render(<ActionList items={items} activator={activator} />, {
      wrapper: Wrapper
    });

    expect(result).toMatchSnapshot();

    await userEvent.click(result.getByText("Open"));

    expect(result.getAllByRole("menuitem")).toHaveLength(2);
    expect(result.getAllByRole("menuitem")[0]).toHaveTextContent(
      "Sort ascending"
    );
  });
});
