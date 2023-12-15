import {
  ToastProps,
  WithActionProps,
  WithoutActionProps
} from "components/Toast";
import { Mode, Theme } from "lib/types";

export interface ThemeContext {
  theme: Theme;
  mode: Mode;
  className?: string;
}

export type CreateToastProps = Pick<
  ToastProps,
  "message" | "critical" | "duration" | "onClose"
> &
  (WithActionProps | WithoutActionProps);

export interface ToastContext {
  create: (props: CreateToastProps) => void;
}
