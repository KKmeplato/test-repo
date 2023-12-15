import * as Radix from "@radix-ui/react-dialog";

import { Button } from "components/Button";
import { IconButton } from "components/IconButton";
import { Icon } from "components/icons";
import { useBreakpoints } from "hooks";
import { cn } from "lib/utils";

import { ModalProps } from "./types";

export const Modal = ({
  activator,
  children,
  className,
  open,
  primaryAction,
  secondaryActions,
  tertiaryAction,
  title,
  onClose,
  ...rest
}: ModalProps) => {
  const { isXs } = useBreakpoints();

  const renderTertiaryAction = tertiaryAction && !isXs;
  const hasSecondaryActions = secondaryActions && secondaryActions.length > 0;
  const renderFooter =
    renderTertiaryAction || hasSecondaryActions || primaryAction;

  return (
    <Radix.Root open={open} modal>
      <Radix.Trigger asChild>{activator}</Radix.Trigger>
      <Radix.Portal container={document.getElementById("uikit-theme")}>
        <Radix.Overlay className="fixed inset-0 z-modalOverlay bg-overlay-modal opacity-20 radix-state-closed:animate-[modalOutOverlay_0.3s_cubic-bezier(0.26,0.25,0.41,0.67)] radix-state-open:animate-[modalInOverlay_0.3s_cubic-bezier(0.26,0.25,0.25,0.63)]" />
        <Radix.Content
          onEscapeKeyDown={onClose}
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
          className={cn(
            "fixed inset-0 z-modal flex items-center justify-center radix-state-closed:animate-[modalOut_0.3s_cubic-bezier(0.26,0.25,0.41,0.67)] radix-state-open:animate-[modalIn_0.3s_cubic-bezier(0.26,0.25,0.25,0.63)]",
            className
          )}
          {...rest}
        >
          <div className="relative flex w-[20rem] max-w-[20rem] flex-col items-start rounded-level-1 border-t border-default bg-surface shadow-2xl sm:w-[38.75rem] sm:min-w-[23.75rem] sm:max-w-[61.25rem]">
            <Radix.Title asChild>
              <div className="flex items-center self-stretch border-b border-default p-4 pr-9">
                <h2 className="flex-1 text-base font-semibold text sm:text-xl sm:leading-6">
                  {title}
                </h2>
              </div>
            </Radix.Title>
            <div className="flex w-full items-start self-stretch px-4 py-2">
              {children}
            </div>
            {renderFooter && (
              <div className="flex items-center justify-end gap-4 self-stretch border-t border-default p-4 sm:justify-normal">
                {renderTertiaryAction && (
                  <Radix.Close asChild>
                    <Button
                      plain
                      variant="primary"
                      className="hidden sm:block"
                      loading={tertiaryAction.loading}
                      onClick={tertiaryAction.onClick}
                    >
                      {tertiaryAction.label}
                    </Button>
                  </Radix.Close>
                )}
                {(hasSecondaryActions || primaryAction) && (
                  <div className="flex items-start gap-2 sm:flex-1 sm:items-center sm:justify-end">
                    {hasSecondaryActions &&
                      secondaryActions.map(
                        ({ label, onClick, loading }, index) => (
                          <Button
                            key={index}
                            size={isXs ? "small" : "medium"}
                            loading={loading}
                            onClick={onClick}
                          >
                            {label}
                          </Button>
                        )
                      )}
                    {primaryAction && (
                      <Button
                        size={isXs ? "small" : "medium"}
                        variant="primary"
                        loading={primaryAction.loading}
                        onClick={primaryAction.onClick}
                      >
                        {primaryAction.label}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}
            {/**
             * Had to move the close button to here and position it absolute,
             * because otherwise it would be focused when the modal opens.
             */}
            <Radix.Close asChild>
              <IconButton
                accessibilityLabel="close modal"
                className="absolute right-4 top-4"
                onClick={onClose}
              >
                <Icon.close className="h-5 w-5 text-icon" />
              </IconButton>
            </Radix.Close>
          </div>
        </Radix.Content>
      </Radix.Portal>
    </Radix.Root>
  );
};
