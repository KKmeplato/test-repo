import {
  autoUpdate,
  flip,
  offset,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useTransitionStyles
} from "@floating-ui/react";
import * as RadixSlider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";

import { cn } from "lib/utils";

import { SliderThumbProps } from "../../types";

export const SliderThumb = ({
  value,
  forceTooltipOpen,
  onOpenChange,
  ...rest
}: SliderThumbProps) => {
  const [isOpen, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    transform: false,
    onOpenChange: setOpen,
    open: true,
    placement: "top",
    middleware: [flip(), offset(focused ? 10 : 6)],
    whileElementsMounted: autoUpdate
  });
  const hover = useHover(context, {
    delay: 0
  });
  const focus = useFocus(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus
  ]);

  useEffect(() => {
    if (isOpen || focused) {
      return onOpenChange(true);
    }

    return onOpenChange(false);
  }, [isOpen, focused, onOpenChange]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 150,
    common: {
      transformOrigin: "center",
      transitionProperty: "opacity, top, bottom",
      animationTimingFunction: "ease-in-out"
    }
  });

  return (
    <>
      <RadixSlider.Thumb
        ref={refs.setReference}
        {...getReferenceProps({
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false)
        })}
        className="block h-4 w-4 rounded-[10px] bg-interactive-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1 group-active:focus-visible:scale-[1.35] data-[disabled]:bg-interactive-disabled group-hover:[&:not([data-disabled])]:bg-interactive-primary-hovered group-active:[&:not([data-disabled])]:bg-interactive-primary"
        {...rest}
      />
      {isMounted && (isOpen || forceTooltipOpen || focused) && (
        <span
          role="tooltip"
          className={cn(
            "rounded-level-2 bg-surface px-2 py-1 text-sm text shadow-md"
          )}
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {value}
        </span>
      )}
    </>
  );
};
