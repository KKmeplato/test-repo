### ActionList

The Action List component provides users with a context-sensitive list of possible actions they can take on a given item. This list is typically revealed through interaction, offering a dropdown or context-menu-like appearance.

#### When to use

* When users need to perform actions on specific items or content
* To provide a consistent set of actions across multiple parts of the application
* When screen real estate is limited, and actions cannot be presented directly next to each item

```tsx
const items = [
  {
    id: "sort-asc",
    content: "Sort ascending",
    helpText: "You can also use keyboard controls",
    children: "Sort ascending",
    prefixIcon: <Icon.info />,
    onClick: () => console.log("Sort ascending clicked"),
    active: true,
  },
  {
    id: "sort-desc",
    content: "Sort descending",
    suffixIcon: <Icon.info />,
    onClick: () => console.log("Sort ascending clicked"),
  }
];

<ActionList
  items={items}
  activator={
    <Button
      variant="primary"
      disclosure
      onClick={() => console.log("Item click")}
    >
      Action List
    </Button>
  }
/> 
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme