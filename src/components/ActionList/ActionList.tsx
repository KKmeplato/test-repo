import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import { cn } from "lib/utils";

import { ActionItem } from "./components";
import { ActionListProps } from "./types";

export const ActionList = ({
  items,
  sections,
  activator,
  onOpenChange
}: ActionListProps) => {
  const [, setOpen] = useState(false);
  const shouldRenderAsDropdown = Boolean(activator);

  const getItemsMarkup = (items: ActionListProps["items"]) =>
    items?.map(({ onClick, ...item }, index) =>
      shouldRenderAsDropdown ? (
        <DropdownMenu.Item asChild key={item?.id || index} onSelect={onClick}>
          <ActionItem {...item} />
        </DropdownMenu.Item>
      ) : (
        <ActionItem key={item.id || index} {...item} onClick={onClick} />
      )
    );

  const itemsMarkup = items?.length ? getItemsMarkup(items) : null;

  const sectionsMarkup = sections?.length ? (
    <div className="group divide-y">
      {sections.map((section, index) => (
        <div
          key={index}
          className="group/section-item [&:not(:first-child)]:mt-1"
        >
          {section.title && (
            <p className="mx-4 mt-1 pb-2 pt-4 text-xs font-semibold group-first/section-item:pt-1">
              {section.title}
            </p>
          )}
          {getItemsMarkup(section.items)}
        </div>
      ))}
    </div>
  ) : null;
  const className =
    "flex flex-col overflow-hidden rounded-level-1 bg-surface py-2 shadow-md data-[state=closed]:animate-dropdown-close data-[state=open]:animate-dropdown-open max-w-max";

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  return shouldRenderAsDropdown ? (
    <DropdownMenu.Root onOpenChange={handleOpenChange} modal={false}>
      <DropdownMenu.Trigger asChild>{activator}</DropdownMenu.Trigger>
      <DropdownMenu.Portal container={document.getElementById("uikit-theme")}>
        <DropdownMenu.Content
          side="bottom"
          className={cn(className, "z-dropdown mt-1")}
          align="start"
        >
          {itemsMarkup || sectionsMarkup}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ) : (
    <div className={className}>{itemsMarkup || sectionsMarkup}</div>
  );
};

ActionList.displayName = "ActionList";
