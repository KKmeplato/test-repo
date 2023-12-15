import * as RadixAccordion from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { useId } from "react";

import { AccordionItemProps } from "components/Accordion/types";
import { Button } from "components/Button";
import { Icon } from "components/icons";
import { cn } from "lib/utils";

export const AccordionItem = forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(
  (
    { actionText, children, disabled, id, header, onActionClick, ...rest },
    forwardRef
  ) => {
    const generatedId = useId();
    const itemId = id || generatedId;

    return (
      <RadixAccordion.Item
        className={cn(
          "w-full rounded-level-2 hover:bg-surface-hovered focus:outline-none",
          "radix-disabled:bg-surface-disabled radix-disabled:hover:bg-surface-disabled radix-disabled:active:bg-surface-disabled",
          "[&:has([data-radix-collection-item]:active:not([data-disabled]))]:bg-surface-pressed "
        )}
        disabled={disabled}
        id={itemId}
        ref={forwardRef}
        {...rest}
      >
        <RadixAccordion.Header
          className={cn(
            "inline-flex w-full items-start justify-start gap-2",
            "radix-state-closed:rounded-level-2 radix-state-open:rounded-t-lg"
          )}
        >
          <RadixAccordion.Trigger className="group inline-flex shrink grow basis-0 gap-2 p-2 text-left focus:outline-none">
            <Icon.chevron
              className={cn(
                "h-5 w-5 shrink-0 p-0.5 text-icon ease-in-out motion-reduce:transition-none",
                "group-radix-state-closed:duration-300 group-radix-state-open:rotate-90 group-radix-state-open:duration-300",
                "group-focus-within:rounded group-focus-within:outline group-focus-within:outline-1 group-focus-within:outline-focus group-focus-within:ring-1 group-focus-within:ring-focus group-focus-within:ring-offset-1"
              )}
            />
            <span className="inline-flex shrink grow basis-0 flex-col items-start justify-center gap-2.5 rounded py-1 text-xs leading-none">
              {header}
            </span>
          </RadixAccordion.Trigger>
          {actionText && !disabled && (
            <div className="flex items-center justify-center rounded p-2">
              <Button
                disabled={disabled}
                plain
                variant="primary"
                size="small"
                onClick={onActionClick}
              >
                {actionText}
              </Button>
            </div>
          )}
        </RadixAccordion.Header>
        <RadixAccordion.Content className="rounded-b-lg p-2 pl-4 text-xs text radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open motion-reduce:transition-none">
          {children}
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    );
  }
);

AccordionItem.displayName = "AccordionItem";
