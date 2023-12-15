import type { Config } from "tailwindcss";
import radix from "tailwindcss-radix";

import { uiKitPlugin } from "./src/lib/ui-kit-plugin";
import { uiKitPreset } from "./src/lib/ui-kit-preset";

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    process.env.STORYBOOK_PREVIEW ? "./.storybook/preview.tsx" : ""
  ].filter(Boolean),
  presets: [uiKitPreset],
  plugins: [uiKitPlugin, radix]
} satisfies Config;

export default config;
