import * as Popover from "@radix-ui/react-popover";

import { FilterBadge } from "components/FilterBadge";

import { FilterOptionsProps } from "../types";

interface Props {
  addFilterButtonText?: string;
  filterOptions?: FilterOptionsProps[];
}
export const TableFilterPopover = ({ addFilterButtonText }: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <FilterBadge type="add">{addFilterButtonText}</FilterBadge>
      </Popover.Trigger>
      <Popover.Portal container={document.getElementById("uikit-theme")}>
        <Popover.Content
          className="w-[260px] rounded bg-white p-5 shadow-sm will-change-[transform,opacity] focus:shadow-sm"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">Coming soon!</div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

TableFilterPopover.displayName = "TableFilterPopover";
