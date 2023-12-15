### Stepper

Component is well designed within a value range of 0 to 9999.
Default min value: 0
Default max value: 9999
Default size: medium

You can reduce the value by 1 by clicking on the minus button
or by focusing on the input field and pressing the "arrow down".

You can increase the value by 1 by clicking on the plus button
or by focusing on the input field and pressing the "arrow up".

You can change the value by typing in the input field.

#### Example

```tsx
const [value, setValue] = useState(0);
const handleChange = (newValue: number) => setValue(newValue);
<Stepper value={value} onChange={handleChange} />
```

#### Implementation

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme