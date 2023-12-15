import type { Config } from "tailwindcss";

import { uiKitPlugin } from "./ui-kit-plugin";

export const uiKitPreset = {
  content: [],
  plugins: [uiKitPlugin]
} satisfies Config;
