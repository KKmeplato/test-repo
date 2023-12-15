import { useMedia } from "react-use";

import { Breakpoints } from "lib/constants";

export const useBreakpoints = () => {
  const isXs = useMedia(`(max-width: ${Breakpoints.sm - 1}px)`);
  const isSm = useMedia(
    `(min-width: ${Breakpoints.sm}px) and (max-width: ${Breakpoints.md - 1}px)`
  );
  const isMd = useMedia(
    `(min-width: ${Breakpoints.md}px) and (max-width: ${Breakpoints.lg - 1}px)`
  );
  const isLg = useMedia(
    `(min-width: ${Breakpoints.lg}px) and (max-width: ${Breakpoints.xl - 1}px)`
  );
  const isXl = useMedia(
    `(min-width: ${Breakpoints.xl}px) and (max-width: ${
      Breakpoints["2xl"] - 1
    }px)`
  );
  const is2Xl = useMedia(`(min-width: ${Breakpoints["2xl"]}px)`);

  return { isXs, isSm, isMd, isLg, isXl, is2Xl };
};
