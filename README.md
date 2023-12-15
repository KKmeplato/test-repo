<<<<<<< HEAD
# test-repo
=======
# Meplato UI Kit

[![Build Status](https://github.com/meplato/ui-kit/workflows/Test/badge.svg)](https://github.com/meplato/ui-kit/actions)

This library provides a number of ready-to-use React components, mainly to ensure a consistent layout over all Meplato apps. It's purpose is not provide solutions for every UI aspect and can (or should) be used together with CSS frameworks like Bootstrap or other component libraries.
The ui-kit React component library built with Vite.js and Tailwind CSS. It includes a Storybook implementation for easy development, testing, and documentation of the components.

## Prerequisites

The component library was build in React for React apps. Besides the "normal" setup (node.js etc.) it does not rely on any specific setup and can be used with zero-config boilerplates.

This project uses `npm`.

## Getting Started

### test components with Storybook

```sh
npm run storybook
```

### Build library

```sh
npm run build
```

### Add library to your project

Install the latest version of the UI Kit V2:

```sh
npm install @meplato/ui-kit
```

If you've previously integrated ui-kit@v1 into your project and wish to utilize both v1 and v2 simultaneously, consider the following approach:

```sh
npm install @meplato/ui-kit-2@npm:@meplato/ui-kit@2
```

> UI Kit currently works with every React version from 18.2.

### Add CSS

Add the UI Kit CSS file to the entry point of your app (usually `src/index.js`):

```tsx
import "@meplato/ui-kit-2/ui-kit.css";
```

OR

If your Single Page Application (SPA) utilizes Tailwind, include the `uiKitPreset` and `uiKitPlugin` in the `tailwind.config.ts` file.

```tsx
import { uiKitPlugin, uiKitPreset } from "@meplato/ui-kit";
```

Incorporate the `uiKitPlugin` and `uiKitPreset` within your project's `tailwind.config.ts` file:

```tsx
import { uiKitPlugin, uiKitPreset } from "@meplato/ui-kit";
import type { Config } from "tailwindcss";

const config = {
  presets: [uiKitPreset],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@meplato/ui-kit/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [uiKitPlugin]
} satisfies Config;

export default config;
```

It's important that you include `./node_modules/@meplato/ui-kit/**/*.{ts,tsx,js,jsx}`, else there is a possibility that tailwind might not include the styles for the components defined in `uik-kit`.

### Add UikitProvider to your project

```tsx
import { UikitProvider } from "@meplato/ui-kit";
```

### Use UikitProvider in your project to determine theme and mode globally

Provide theme and mode for your components. Manage theme and mode change in your SPA.
SPA should manage how exactly theme change will be implemented. ui-kit components will reflect theme/mode change accordingly:

```tsx
<UikitProvider theme="meplato" mode="light" className="h-screen">
  <Button variant="primary" onClick={() => console.log("do something")}>
    Foo
  </Button>
</UikitProvider>
```

`UikitProvider` also exposes a `className` prop, making it flexible for the SPA to add any additional class names if needed. E.g. `h-screen` to make ui-kit components take up the entire screen.

### Import the desired components from the library:

```tsx
import { Button, InputField, RadioGroup, useToast } from "@meplato/ui-kit";
```

## Unit Testing

### Running Tests

We use the "vitest" test runner along with the "react-testing-library" to ensure the quality and reliability of our components.
To execute the unit tests, run the following command:

```tsx
npm test
```

## Publishing

To publish a new release of UI-Kit v2, simply add a new tag that uses the new desired version.
(Optionally specify the exact commit you want to use for the tag)

```sh
# Tag latest commit on branch v2 and push
git checkout v2
git tag -a v2.0.123 -m 'Release v2.0.123'
git push --tags

# Tag specific commit and push in case
# you only want to release features/components up to that commit.
git tag -a v2.0.123 9fceb02 -m 'Release v2.0.123'
git push --tags
```

A new tag will trigger the GitHub Actions Workflow ('package.yaml),
that again will run a npm build + pusblish, pushing a new npm package
to the GitHub Registry.

## Components

### Action list

[ActionList Component](./src/components/ActionList/README.md)

### Badge

[Badge Component](./src/components/Badge/README.md)

### Button

[Button Component](./src/components/Button/README.md)

### Checkbox

[Checkbox Component](./src/components/Checkbox/README.md)

### FilterBadge

[Filter Badge Component](./src/components/FilterBadge/README.md)

### InputField

[InputField Component](./src/components/InputField/README.md)

### LanguagePicker

[LanguagePicker Component](./src/components/LanguagePicker/README.md)

### Link

[Link Component](./src/components/Link/README.md)

### Modal

[Modal Component](./src/components/Modal/README.md)

### ProgressBar

[ProgressBar Component](./src/components/ProgressBar/README.md)

### RadioGroup

[RadioGroup Component](./src/components/RadioGroup/README.md)

### Stepper

[Stepper Component](./src/components/Stepper/README.md)

### TableFilterHeader

[Table Filter Header Component](./src/components/TableFilterHeader/README.md)

### Toast

[Toast Component](./src/components/Toast/README.md)

### Banner

[Banner Component](./src/components/Banner/README.md)
>>>>>>> da84a79 (added fiels)
