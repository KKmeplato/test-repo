import { useEffect, useRef, useState } from "react";

import { Button } from "components/Button";
import { FilterBadge } from "components/FilterBadge";
import { IconButton } from "components/IconButton";
import { InputField } from "components/InputField";
import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { TableFilterPopover } from "./components/TableFilterPopover";
import { TableFilterHeaderProps } from "./types";

export const TableFilterHeader = ({
  togglableFilters,
  appliedFilters,
  onClearAll,
  onSearchQueryChange,
  addFilterButtonText,
  clearAllButtonText,
  searchPlaceholderText,
  filterOptions
}: TableFilterHeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputFieldRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    searchQuery !== "" ? setSearchQuery("") : setShowSearch(false);
    searchInputFieldRef.current?.focus();
  };

  useEffect(() => {
    onSearchQueryChange?.(searchQuery);
  }, [onSearchQueryChange, searchQuery]);

  return (
    <div className=" flex w-full shrink grow basis-0 items-start justify-between gap-4 border-b border-default p-4 pr-5 md:pr-4">
      <div
        className={cn(
          "flex w-full gap-4",
          !togglableFilters?.length
            ? "flex-col gap-0 md:flex-row-reverse md:gap-4"
            : "flex-col"
        )}
      >
        <div
          className={cn(
            "flex flex-col-reverse justify-between gap-6 md:gap-4",
            showSearch ? "flex-col-reverse" : "flex-row",
            !togglableFilters?.length
              ? "md:flex-row-reverse"
              : "w-full md:flex-row"
          )}
        >
          {togglableFilters && (
            <div className="flex flex-auto flex-wrap items-start justify-start gap-2 self-stretch">
              {togglableFilters?.map((toggleFilter) => (
                <FilterBadge
                  type="toggle"
                  onClick={toggleFilter.onToggle}
                  {...toggleFilter}
                  key={`fixed-${toggleFilter.id}`}
                >
                  {toggleFilter.children}
                </FilterBadge>
              ))}
            </div>
          )}
          {/** Input */}
          {showSearch && (
            <div
              className={cn(
                "-mr-1 -mt-2 flex h-auto md:h-5",
                !togglableFilters?.length ? "mb-4 md:mb-0" : "mb-0"
              )}
            >
              <div className="w-full md:w-80">
                <InputField
                  ref={searchInputFieldRef}
                  prefixIcon={<Icon.search />}
                  placeholder={searchPlaceholderText}
                  type="text"
                  onChange={setSearchQuery}
                  value={searchQuery}
                  suffixIcon={
                    <IconButton
                      accessibilityLabel="clear search"
                      onClick={handleClear}
                    >
                      <Icon.close className="h-5 w-5" aria-label="Close" />
                    </IconButton>
                  }
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full flex-wrap items-start justify-start gap-2">
          {appliedFilters?.map((appliedFilter) => (
            <FilterBadge
              type="remove"
              onClick={appliedFilter.onRemove}
              {...appliedFilter}
              key={`dynamic-${appliedFilter.id}`}
            >
              {appliedFilter.children}
            </FilterBadge>
          ))}

          {addFilterButtonText && (
            <TableFilterPopover
              filterOptions={filterOptions}
              addFilterButtonText={addFilterButtonText}
            />
          )}

          {Boolean(appliedFilters?.length) && (
            <Button
              variant="primary"
              plain
              accessibilityLabel="Clear all"
              onClick={onClearAll}
            >
              {clearAllButtonText}
            </Button>
          )}
        </div>
      </div>

      {/** Search */}
      {!showSearch && (
        <IconButton
          accessibilityLabel="Search Icon"
          onClick={() => setShowSearch(true)}
        >
          <Icon.search className="h-5 w-5 text-icon" />
        </IconButton>
      )}
    </div>
  );
};

FilterBadge.displayName = "FilterBadge";
