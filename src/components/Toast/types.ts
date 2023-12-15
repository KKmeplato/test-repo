import { ComponentPropsWithoutRef } from "react";

export interface WithActionProps {
  action: string;
  onAction: () => void;
}

export interface WithoutActionProps {
  action?: never;
  onAction?: never;
}

export type ToastProps = Omit<ComponentPropsWithoutRef<"li">, "onPause"> &
  (WithActionProps | WithoutActionProps) & {
    critical?: boolean;
    duration?: number;
    message: string;
    onClose?: () => void;
  };
