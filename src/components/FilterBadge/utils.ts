import { Icon } from "components/icons";

import { FilterBadgeProps } from "./types";

export const getFilterBadgeIcon = (
  type: FilterBadgeProps["type"],
  direction?: FilterBadgeProps["direction"]
) => {
  if (type) {
    if (type === "add") {
      return Icon.plus;
    }
    if (type === "remove") {
      return Icon.close;
    }
    if (type === "disclosure") {
      if (direction === "down") {
        return Icon.sort;
      }
      if (direction === "up") {
        return Icon.ascending;
      }
    }
  }
};
