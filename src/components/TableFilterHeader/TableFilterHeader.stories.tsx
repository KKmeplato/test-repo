import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";

import { TableFilterHeader } from "./TableFilterHeader";
import { FilterOptionsProps, TableFilterHeaderProps } from "./types";

const meta: Meta<typeof TableFilterHeader> = {
  component: TableFilterHeader
};
export default meta;

type Story = StoryObj<typeof TableFilterHeader>;

// filter option to display on popover
const filterOptions: FilterOptionsProps[] = [
  {
    id: "price",
    label: "Price",
    children: <div>Filter Option</div>
  },
  {
    id: "bulkDiscount",
    label: "Filter offers that...",
    children: <div>Filter Option</div>
  }
];

const TableFilterWithArgs = (args: TableFilterHeaderProps) => {
  // Toggle Filter
  const togglableFiltersData: TableFilterHeaderProps["togglableFilters"] = [
    {
      id: "local",
      children: "Local Catalog",
      active: true,
      disabled: false,
      onToggle: () => handleToggle("local")
    },
    {
      id: "2",
      children: "Amazon",
      active: false,

      disabled: false,
      onToggle: () => handleToggle("2")
    },
    {
      id: "3",
      children: "PSG",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("3")
    },
    {
      id: "4",
      children: "Amazon Business",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("4")
    },
    {
      id: "5",
      children: "Meplato Business",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("5")
    },
    {
      id: "6",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("6")
    },
    {
      id: "7",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("7")
    },
    {
      id: "8",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("8")
    },
    {
      id: "9",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("9")
    },
    {
      id: "10",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("10")
    },
    {
      id: "11",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("11")
    }
  ];

  // Applied filter
  const appliedFiltersData: TableFilterHeaderProps["appliedFilters"] = [
    {
      id: "1",
      children: "Some Filter 1",
      onRemove: () => handleRemove("1")
    },
    {
      id: "2",
      children: "Some Filter 2",
      disabled: true,
      onRemove: () => handleRemove("2")
    },
    {
      id: "3",
      children: "Some Filter 3",
      onRemove: () => handleRemove("3")
    }
  ];

  const [fixedData, setFixedData] = useState(togglableFiltersData);
  const [dynamicData, setDynamicData] = useState(appliedFiltersData);
  const [, setSearchQuery] = useState("");

  const handleClearAll = () => {
    setDynamicData([]);
  };

  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleToggle = (recordId: string) => {
    setFixedData((prevData) =>
      prevData.map((filter) =>
        filter.id === recordId ? { ...filter, active: !filter.active } : filter
      )
    );
  };

  const handleRemove = (recordId: string) => {
    setDynamicData((prevDynamicData) => {
      return prevDynamicData.filter((item) => item.id !== recordId);
    });
  };

  return (
    <TableFilterHeader
      {...args}
      onClearAll={handleClearAll}
      togglableFilters={fixedData}
      appliedFilters={dynamicData}
      onSearchQueryChange={handleSetSearchQuery}
    />
  );
};
// Default filter
const defaultTogglable = [
  {
    id: "local",
    children: "Local Catalog",
    active: true,

    disabled: false,
    onToggle: () => action("local")
  }
];
const defaultAppliedFilter = [
  {
    id: "1",
    children: "Some Filter 1",
    onRemove: () => action("1")
  }
];
export const Default: Story = {
  args: {
    togglableFilters: defaultTogglable,
    appliedFilters: defaultAppliedFilter,
    addFilterButtonText: "Add Filter",
    clearAllButtonText: "Clear All",
    searchPlaceholderText: "Search...",
    filterOptions: filterOptions
  },
  render: TableFilterWithArgs
};
// Togglable filter
const TableFilterTogglableWithArgs = (args: TableFilterHeaderProps) => {
  // Toggle Filter
  const togglableFiltersData: TableFilterHeaderProps["togglableFilters"] = [
    {
      id: "local",
      children: "Local Catalog",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("local")
    },
    {
      id: "2",
      children: "Amazon",
      active: false,

      disabled: false,
      onToggle: () => handleToggle("2")
    },
    {
      id: "3",
      children: "PSG",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("3")
    },
    {
      id: "4",
      children: "Amazon Business",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("4")
    },
    {
      id: "5",
      children: "Meplato Business",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("5")
    },
    {
      id: "6",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("6")
    },
    {
      id: "7",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("7")
    },
    {
      id: "8",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("8")
    },
    {
      id: "9",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("9")
    },
    {
      id: "10",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("10")
    },
    {
      id: "11",
      children: "Some Filter",
      active: true,

      disabled: false,
      onToggle: () => handleToggle("11")
    }
  ];

  const [fixedData, setFixedData] = useState(togglableFiltersData);
  const [, setSearchQuery] = useState("");

  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleToggle = (recordId: string) => {
    setFixedData((prevData) =>
      prevData.map((filter) =>
        filter.id === recordId ? { ...filter, active: !filter.active } : filter
      )
    );
  };

  return (
    <TableFilterHeader
      {...args}
      togglableFilters={fixedData}
      onSearchQueryChange={handleSetSearchQuery}
    />
  );
};
export const TogglableFilter: Story = {
  args: {
    togglableFilters: defaultTogglable,
    searchPlaceholderText: "Search..."
  },
  render: TableFilterTogglableWithArgs
};

// Applied Filter
const TableFilterAppliedFilterWithArgs = (args: TableFilterHeaderProps) => {
  // Applied filter
  const appliedFiltersData: TableFilterHeaderProps["appliedFilters"] = [
    {
      id: "1",
      children: "Some Filter 1",
      onRemove: () => handleRemove("1")
    },
    {
      id: "2",
      children: "Some Filter 2",
      onRemove: () => handleRemove("2")
    },
    {
      id: "3",
      children: "Some Filter 3",
      onRemove: () => handleRemove("3")
    },
    {
      id: "4",
      children: "Some Filter 4",
      onRemove: () => handleRemove("4")
    },
    {
      id: "5",
      children: "Some Filter 5",
      onRemove: () => handleRemove("5")
    },
    {
      id: "6",
      children: "Some Filter 6",
      onRemove: () => handleRemove("6")
    }
  ];

  const [dynamicData, setDynamicData] = useState(appliedFiltersData);
  const [, setSearchQuery] = useState("");

  const handleClearAll = () => {
    setDynamicData([]);
  };

  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleRemove = (recordId: string) => {
    setDynamicData((prevDynamicData) => {
      return prevDynamicData.filter((item) => item.id !== recordId);
    });
  };

  return (
    <TableFilterHeader
      {...args}
      onClearAll={handleClearAll}
      appliedFilters={dynamicData}
      onSearchQueryChange={handleSetSearchQuery}
    />
  );
};
export const AppliedFilter: Story = {
  args: {
    addFilterButtonText: "Add Filter",
    clearAllButtonText: "Clear All",
    searchPlaceholderText: "Search...",
    filterOptions: filterOptions
  },
  render: TableFilterAppliedFilterWithArgs
};
