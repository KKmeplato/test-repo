import "@fontsource-variable/inter";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

import { cn } from "lib/utils";

import { ThemeContext } from "./types";

const defaultTheme: ThemeContext = {
  theme: "meplato",
  mode: "light"
};

export const ThemeCtx = createContext<ThemeContext>(defaultTheme);

export const ThemeProvider = ({
  theme,
  mode,
  className,
  children
}: PropsWithChildren<ThemeContext>) => {
  const [themeContext, setThemeContext] = useState<ThemeContext>({
    theme,
    mode
  });

  useEffect(() => {
    setThemeContext({ theme, mode });
  }, [theme, mode]);

  if (!children) {
    return null;
  }

  return (
    <ThemeCtx.Provider value={themeContext}>
      <div
        data-theme={theme}
        data-mode={mode}
        id="uikit-theme"
        className={cn("bg font-sans text", className)}
      >
        {children}
      </div>
    </ThemeCtx.Provider>
  );
};
