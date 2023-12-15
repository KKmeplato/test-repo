import type { Decorator, Preview } from "@storybook/react";
import React from "react";

import { UikitProvider } from "../src/components/UikitProvider";
import { Mode, Theme } from "../src/lib/types";
import "../src/tailwind.css";

interface ViewportStyle {
  width: string;
  height: string;
}

interface Viewport {
  name: string;
  styles: ViewportStyle;
}

const viewports: Record<string, Viewport> = {
  responsive: {
    name: "Responsive",
    styles: {
      width: "100%",
      height: "100%"
    }
  },
  xs: {
    name: "XS",
    styles: {
      width: "489px",
      height: "900px"
    }
  },
  sm: {
    name: "SM",
    styles: {
      width: "560px",
      height: "900px"
    }
  },
  md: {
    name: "MD",
    styles: {
      width: "768px",
      height: "900px"
    }
  },
  lg: {
    name: "LG",
    styles: {
      width: "1024px",
      height: "900px"
    }
  },
  xl: {
    name: "XL",
    styles: {
      width: "1280px",
      height: "900px"
    }
  },
  doubleXl: {
    name: "2XL",
    styles: {
      width: "1536px",
      height: "900px"
    }
  }
};

const withApp: Decorator = (StoryFn, context) => {
  const { _theme: theme, _mode: mode } = context.globals;
  const storyTheme: Theme = theme;
  const storyMode: Mode = mode;
  return (
    <UikitProvider
      theme={storyTheme}
      mode={storyMode}
      className="min-h-screen p-4"
    >
      <StoryFn />
    </UikitProvider>
  );
};

const preview: Preview = {
  globalTypes: {
    // TODO
    // Using _theme & _mode since there seems to be some conflict with the stories' parameters
    // and because of that storybook preview doesn't seem to be selecting the default values
    // Rename it to theme & mode when we remove the parameters from every story
    _theme: {
      description: "Global theme for components",
      defaultValue: "meplato",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { title: "Meplato", value: "meplato" },
          { title: "Webridge", value: "webridge" }
        ],
        dynamicTitle: true
      }
    },
    _mode: {
      description: "Choose between light / dark mode",
      defaultValue: "light",
      toolbar: {
        title: "Mode",
        icon: "circlehollow",
        items: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      disable: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports,
      defaultViewport: "responsive"
    },
    layout: "fullscreen"
  },
  decorators: [withApp]
};

export default preview;
