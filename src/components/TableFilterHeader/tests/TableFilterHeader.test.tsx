import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import { TableFilterHeader } from "../TableFilterHeader";
import { TableFilterHeaderProps } from "../types";

const mockClick = vi.fn();
// Toggle Filter
const togglableFiltersData = [
  {
    id: "local",
    children: "Local Catalog",
    active: true,

    disabled: false,
    onToggle: mockClick("toggle-local")
  },
  {
    id: "amazon",
    children: "Amazon",
    active: false,

    disabled: false,
    onToggle: mockClick
  },
  {
    id: "psg",
    children: "PSG",
    active: true,

    disabled: false,
    onToggle: mockClick
  }
];

// Applied filter
const appliedFiltersData: TableFilterHeaderProps["appliedFilters"] = [
  {
    id: "filter-1",
    children: "Some Filter 1",
    onRemove: mockClick("remove-filter-1")
  },
  {
    id: "filter-2",
    children: "Some Filter 2",
    onRemove: mockClick
  },
  {
    id: "filter-3",
    children: "Some Filter 3",
    onRemove: mockClick
  }
];

const filterOptions = [
  {
    id: "price",
    label: "Price",
    children: <div>Filter option</div>
  },
  {
    id: "bulkDiscount",
    label: "Filter offers that...",
    children: <div>Filter option</div>
  }
];

describe("<TableFilterHeaderProps />", () => {
  it.each<TableFilterHeaderProps>([
    {
      appliedFilters: appliedFiltersData,
      addFilterButtonText: "Add Filter",
      clearAllButtonText: "Clear All"
    },
    {
      togglableFilters: togglableFiltersData,
      onClearAll: () => mockClick("clear"),
      onSearchQueryChange: mockClick
    },
    {
      appliedFilters: appliedFiltersData,
      togglableFilters: togglableFiltersData,
      addFilterButtonText: "Add Filter",
      clearAllButtonText: "Clear All",
      onClearAll: () => mockClick("clear"),
      onSearchQueryChange: mockClick,
      filterOptions: filterOptions
    }
  ])(
    "renders with onClearAll:$onClearAll, onSearchQueryChange:$onSearchQueryChange, appliedFilters:$appliedFilters, togglableFilters:$togglableFilters",
    (props) => {
      const result = render(<TableFilterHeader {...props} />);
      expect(result).toMatchSnapshot();
    }
  );

  it("renders clear and add filter buttons", async () => {
    const result = render(
      <TableFilterHeader
        onClearAll={() => mockClick("clear")}
        appliedFilters={appliedFiltersData}
        addFilterButtonText="Add Filter"
        clearAllButtonText="Clear All"
        onSearchQueryChange={mockClick}
        filterOptions={filterOptions}
      />
    );

    expect(result.getByText("Add Filter")).toBeDefined();
    expect(result.getByText("Clear All")).toBeInTheDocument();

    await userEvent.click(result.getByText("Clear All"));
    expect(mockClick).toHaveBeenCalledWith("clear");
  });

  it("Render togglable and applied filter badge", async () => {
    const result = render(
      <TableFilterHeader
        onClearAll={() => mockClick("clear")}
        togglableFilters={togglableFiltersData}
        appliedFilters={appliedFiltersData}
        addFilterButtonText="Add Filter"
        clearAllButtonText="Clear All"
        onSearchQueryChange={mockClick}
        filterOptions={filterOptions}
      />
    );

    const togglableButton = await result.findByText("Local Catalog");
    expect(togglableButton).toBeInTheDocument();
    expect(result.getAllByRole("button")[0]).toHaveTextContent("Local Catalog");

    const appliedButton = await screen.findByText("Some Filter 1");
    expect(appliedButton).toBeInTheDocument();
    expect(result.getAllByRole("button")).toHaveLength(9);
  });

  it("Calls the click handler when clicked", async () => {
    const result = render(
      <TableFilterHeader
        onClearAll={() => mockClick("clear")}
        togglableFilters={togglableFiltersData}
        appliedFilters={appliedFiltersData}
        addFilterButtonText="Add Filter"
        clearAllButtonText="Clear All"
        onSearchQueryChange={mockClick}
        filterOptions={filterOptions}
      />
    );
    await userEvent.click(result.getByText("Some Filter 1"));
    await userEvent.click(result.getAllByRole("button")[1]);
    expect(mockClick).toHaveBeenCalledWith("toggle-local");
    expect(mockClick).toHaveBeenCalledWith("remove-filter-1");
  });
});
