### TableFilterHeader

The Table Filter Header component provides users with the possibility to list both the available togglable filters and the applied filters. Users will be able to toggle the filters or remove the applied ones. Furthermore, users can also open a popover to select more options.

```tsx

const togglableFilterData = [
  {
    id: "local",
    children: "Local Catalog",
    active: true,
    disabled: false,
    onToggle: () => actionHandler("local")
  }
];

const appliedFilterData = [
  {
    id: "filter-1",
    children: "Some Filter 1",
    onRemove: () => actionHandler("filter-1")
  }
];

const filterOptions = [
  {
    id: "price",
    label: "Price",
    children: <div>Filter option</div>
  },


<TableFilterHeader
  onClearAll={handleClearAll}
  togglableFilters={togglableFilterData}
  appliedFilters={appliedFilterData}
  onSearchQueryChange={handleSetSearchQuery}
  addFilterButtonText="Add Filter"
  clearAllButtonText="Clear All"
  searchPlaceholderText="Search..."
  filterOptions={filterOptions}
/>
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
