### Checkbox

The Checkbox component allows the user to toggle between checked and unchecked states. It also supports the indeterminate state, which can be used to indicate that not all sub-items are checked.

You can set the `disabled` prop to `true` to disable the checkbox.
You can set the `error` prop to `true` to indicate an error state.
You can `checked` prop to `true` to set the checkbox to checked or to `indeterminate` to set it to indeterminate. If you don't set the `checked` prop or set it to `false`, the checkbox will be unchecked.
You can act on the `onChange` event to get the new state.

#### When to use

- **Multiple Selections**: When users need to select multiple options from a list
- **Binary Choices**: For "yes" or "no" decisions, such as opt-ins or consent agreements
- **Settings & Preferences**: To allow users to toggle specific features on or off
- **Form Inputs**: As a part of larger forms, where specific criteria or selections are required

#### Simple usage

```tsx
<Checkbox name="terms" value="confirmed" label="I agree to the terms." />
```

After validation failed:

```tsx
<Checkbox name="terms" value="confirmed" label="I agree to the terms." error />
```

#### Usage multiple selections

```tsx
const hobbies: Partial<CheckboxProps>[] = [
  {
    label: "Football",
    value: "football"
  },
  {
    label: "Basketball",
    value: "basketball"
  },
  {
    label: "Cricket",
    value: "cricket"
  },
  {
    label: "Volleyball",
    hint: "The best game ever 🏐",
    value: "volleyball"
  }
];

const Hobbies = (props: { hobbies: CheckboxProps[] }) => {
  const [rootChecked, setRootChecked] = useState<CheckState>();
  const [hobbiesChecked, setHobbiesChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (hobbiesChecked.size === hobbies.length) {
      setRootChecked(true);
    } else if (hobbiesChecked.size) {
      setRootChecked("indeterminate");
    } else {
      setRootChecked(false);
    }
  }, [hobbies.length, hobbiesChecked.size]);

  const handleRootChange = (newValue: CheckState) => {
    if (!newValue) {
      setHobbiesChecked(new Set());
    } else {
      setHobbiesChecked(new Set(hobbies.map((hobby) => hobby.value)));
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <Checkbox
        label="Hobbies"
        value="hobbies"
        checked={rootChecked}
        onChange={handleRootChange}
      />
      {hobbies.map(({ hint, label, value }, index) => {
        const handleChange = (newValue: CheckState) => {
          const set = new Set(hobbiesChecked);
          if (!newValue) {
            set.delete(value);
          } else {
            set.add(value);
          }

          setHobbiesChecked(set);
        };

        return (
          <div className="px-6" key={index}>
            <Checkbox
              checked={hobbiesChecked.has(value)}
              hint={hint}
              label={label}
              value={value}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
