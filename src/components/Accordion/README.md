## Accordion

The accordion component is a UI element that allows content to be collapsed and expanded. It's useful for presenting information in a concise manner, allowing users to access details on-demand without overwhelming the primary content view.

### When to use

* When you have multiple chunks of content but want to save space
* When you want to give users the option to reveal more detailed information
* For FAQs, product descriptions, or any list that can be broken down into individual sections

### Usage Guidelines

* Ensure the header is descriptive enough so users know what content to expect when expanded
* Avoid using accordions for content that is essential for the user to see immediately
* When possible, limit the number of accordions on a single page to avoid overwhelming the user

### Accessibility

* Accordions should be navigable with keyboard controls
* Use the appropriate ARIA attributes (aria-expanded, aria-controls, etc.) to ensure screen readers can interpret the accordion correctly

### Accordion types
* Accordion of type "single" can expand one item. A `value` prop is provided in order to expand an item.
* Accordion of type multiple can expand one or multiple items. `value` prop is provided in order to expand item/items.

```tsx
const items: AccordionItemProps[] = [
  {
    action: "action",
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
    header: "How do I customize Radix UI components?",
    value: "item-1",
    onActionClick: () => console.log("one")
  },
  {
    action: "action",
    children:
      "The latest Radix UI release brings several exciting features and improvements, including enhanced accessibility features, improved performance optimizations, and new interactive components. Check out the release notes for a detailed list of changes and updates.",
    header: "What's new in the latest Radix UI release?",
    value: "item-2",
    onActionClick: () => console.log("two"),
  },
  {
    action: "action",
    children:
      "Yes, Radix UI is designed to be framework-agnostic. You can easily integrate Radix components into your projects built with React, Vue.js, Angular, and more. Radix components work seamlessly with these frameworks, providing a consistent and accessible user interface.",
    header: <h3>Can I use Radix UI with popular JavaScript frameworks?</h3>,
    value: "item-3",
    disabled: true,
    onActionClick: () => console.log("three"),
  }
];

// You can manage Accordion State in your SPA

const [accordionValue, setAccordionValue] = useState("");
const [accordionMultiValue, setAccordionMultiValue] = useState(["item-2"]);

// single
<Accordion
  items={AccordionItems}
  value={accordionValue}
  onChange={(newValue: string) => setAccordionValue(newValue)}
/>

// multiple
<Accordion
  type="multiple"
  items={AccordionItems}
  value={accordionMultiValue}
  onChange={(newValue: string[]) => setAccordionMultiValue(newValue)}
/>
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme