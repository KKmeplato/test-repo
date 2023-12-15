import { useContext } from "react";

import { ThemeCtx } from "./theme";
import { ToastCtx } from "./toast";

export const useTheme = () => useContext(ThemeCtx);

export const useToast = () => useContext(ToastCtx)!;
