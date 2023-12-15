import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "node:path";
import tailwindcss from "tailwindcss";
import { UserConfigExport } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import { name } from "./package.json";

const uiKit = async (): Promise<UserConfigExport> => {
  return defineConfig({
    mode: "jit",
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        tsconfigPath: "tsconfig.json",
        exclude: [
          "./src/tests",
          "./src/**/*.stories.tsx",
          "./src/**/*.test.{ts,tsx}"
        ]
      }),
      viteTsconfigPaths(),
      svgr()
    ],
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer]
      }
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name,
        formats: ["umd", "es"],
        fileName: (format) => `ui-kit.${format}.js`
      },
      rollupOptions: {
        external: ["react", "react-dom", "tailwindcss"],
        output: {
          sourcemap: true,
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss"
          },
          assetFileNames: "ui-kit[extname]"
        }
      },
      emptyOutDir: true
    },
    test: {
      environment: "jsdom",
      setupFiles: "./src/tests/setup.ts",

      /** By default, vitest does not provide global APIs for explicitness.
      If you prefer to use the APIs globally like Jest, you can pass the --globals option to CLI or add globals: true in the config. */
      globals: true
    }
  });
};

export default uiKit;
