import { ThemeProvider } from "contexts/theme";
import { ToastProvider } from "contexts/toast";

import { UikitProviderProps } from "./types";

export const UikitProvider = ({ children, ...rest }: UikitProviderProps) => {
  return (
    <ThemeProvider {...rest}>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};
