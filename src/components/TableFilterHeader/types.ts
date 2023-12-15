import { FilterBadgeProps } from "components/FilterBadge";

export interface TogglableFiltersProps
  extends Omit<
    Extract<FilterBadgeProps, { type: "toggle" }>,
    "type" | "onClick"
  > {
  id: string;
  onToggle: FilterBadgeProps["onClick"];
}

export interface AppliedFilterProps
  extends Omit<
    Extract<FilterBadgeProps, { type: "add" | "remove" }>,
    "type" | "onClick"
  > {
  id: string;
  onRemove: FilterBadgeProps["onClick"];
}

export type FilterOptionsProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export interface TableFilterHeaderProps {
  onClearAll?: () => void;
  togglableFilters?: TogglableFiltersProps[];
  appliedFilters?: AppliedFilterProps[];
  onSearchQueryChange?: (searchQuery: string) => void;
  addFilterButtonText?: string;
  clearAllButtonText?: string;
  searchPlaceholderText?: string;
  filterOptions?: FilterOptionsProps[];
}
