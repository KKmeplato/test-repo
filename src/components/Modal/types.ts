import * as RadixDialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

export interface Action {
  label: string;
  loading?: boolean;
  onClick: () => void;
}

export interface ModalProps extends Pick<RadixDialog.DialogProps, "open"> {
  activator: ReactNode;
  children: ReactNode;
  className?: string;
  primaryAction?: Action;
  secondaryActions?: Action[];
  tertiaryAction?: Action;
  title: string;
  onClose?: () => void;
}
