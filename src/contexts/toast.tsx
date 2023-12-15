import * as RadixToast from "@radix-ui/react-toast";
import { PropsWithChildren, createContext, useCallback, useState } from "react";

import { Toast, ToastProps } from "components/Toast";

import { CreateToastProps, ToastContext } from "./types";

export const ToastCtx = createContext<ToastContext | undefined>(undefined);
ToastCtx.displayName = "uikit.Toast";

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toast, setToast] = useState<ToastProps>({ message: "" });
  const [show, setShow] = useState(false);

  const createToast = useCallback(
    ({ action, onAction, onClose, ...rest }: CreateToastProps) => {
      const handleAction = () => {
        setShow(false);
        onAction?.();
      };

      const handleClose = () => {
        setShow(false);
        onClose?.();
      };

      let props: ToastProps;
      if (action) {
        props = {
          ...rest,
          onClose: handleClose,
          action,
          onAction: handleAction
        };
      } else {
        props = {
          ...rest,
          onClose: handleClose
        };
      }

      setToast(props);
      setShow(true);
    },
    []
  );

  const value: ToastContext = {
    create: createToast
  };

  return (
    <RadixToast.Provider>
      <ToastCtx.Provider value={value}>
        {children}
        {show && <Toast {...toast} />}
      </ToastCtx.Provider>
      <RadixToast.Viewport className="fixed bottom-[3.75rem] left-0 right-0 flex justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1" />
    </RadixToast.Provider>
  );
};
