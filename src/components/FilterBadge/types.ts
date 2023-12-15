interface CommonFilterBadgeProps {
  onClick?: () => void;
  children: React.ReactNode;
}

interface BasicFilterBadgeProps extends CommonFilterBadgeProps {
  type?: never;
  active?: never;
  direction?: never;
  disabled?: never;
}

interface DisclosureFilterBadgeProps extends CommonFilterBadgeProps {
  type: "disclosure";
  direction?: "up" | "down";
  active?: never;
  disabled?: boolean;
}

interface NonDisclosureFilterBadgeProps extends CommonFilterBadgeProps {
  type: "add" | "remove";
  direction?: never;
  active?: never;
  disabled?: boolean;
}

interface ToggleableFilterBadgeProps extends CommonFilterBadgeProps {
  type: "toggle";
  active?: boolean;
  direction?: never;
  disabled?: boolean;
}

export type FilterBadgeProps =
  | BasicFilterBadgeProps
  | DisclosureFilterBadgeProps
  | NonDisclosureFilterBadgeProps
  | ToggleableFilterBadgeProps;
