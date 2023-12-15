### RadioGroup

The RadioGroup component is a list of radio buttons.
You can specify the orientation of the radio buttons by setting the `orientation` prop to `horizontal` or `vertical`. Default is `vertical`.
You can also set the `disabled` prop to `true` to disable the whole group, or set the `disabled` prop to `true` on a single item to disable only that item.
You can act on the `onChange` event to get the selected value.
You can also set the `value` prop to set the preselected value.

#### When to use

- When users need to select a single state from multiple options

```tsx
const exampleItems = [
  {
    label: <b>Email</b>,
    value: "email"
  },
  {
    label: "Phone",
    value: "phone"
  },
  {
    label: "Fax",
    value: "fax",
    hint: <>Old school but <b>still supported</b></>
  },
  {
    label: "Laser",
    value: "laser",
    disabled: true
    hint: "Not supported, yet 😉"
  }
];

const [contact, setContact] = useState("phone"); // or set to "" when no option should be selected on mount

const handleChange = (value: string) => {
  console.log("do something with new value", value);
  setContact(value);
}

<RadioGroup
  items={exampleItems}
  value={contact}
  orientation="horizontal"
  name="contact"
  onChange={handleChange}
  disabled // set this to disable the whole component
/>
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
