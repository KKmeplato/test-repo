### InputField

This component offers a powerful and adaptable input or textarea field that can handle various input types, including text, numbers, passwords, and multiline text. Incorporating this component into your React SPA simplifies form management and enhances the overall user input interactions.

#### Text format

```tsx
<InputField
  id="text-input-field"
  data-testid="test-text-input"
  disabled={false}
  error={null}
  hint="Lorem ipsum dolor sit amet, consetetur"
  label="Input text field"
  maxLength={255}
  prefix="https://"
  prefixIcon={<Icon.info />}
  preview={false}
  showCharacterCount
  showHintIcon={true}
  success="Input text field is valid"
  suffix="DE"
  suffixIcon={<Icon.info />}
  type="text"
  value="Test input text field"
/>
```

#### Number InputField

```tsx
<InputField
  id="text-input-field"
  data-testid="test-text-input"
  disabled={false}
  error={null}
  hint="Lorem ipsum dolor sit amet, consetetur"
  label="Input text field"
  prefix="https://"
  preview={false}
  showHintIcon={true}
  success="Input text field is valid"
  suffix="DE"
  type="number"
  value={3}
  min={0}
  max={5}
/>

Text field:

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme

Number field:

- [ ] Meplato light theme
- [ ] Meplato dark theme
- [ ] Webridge light theme
- [ ] Webridge dark theme

Password field:

- [ ] Meplato light theme
- [ ] Meplato dark theme
- [ ] Webridge light theme
- [ ] Webridge dark theme

Multiline field:

- [ ] Meplato light theme
- [ ] Meplato dark theme
- [ ] Webridge light theme
- [ ] Webridge dark theme
```
