import * as RadixSlider from "@radix-ui/react-slider";
import React, { useId, useMemo, useState } from "react";

import { cn } from "lib/utils";

import { SliderThumb } from "./components";
import { SliderProps } from "./types";

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      prefix,
      suffix,
      label,
      id: _id,
      className,
      disabled,
      accessibilityLabel,
      onChange,
      onChangeCommit,
      defaultValue,
      ...rest
    },
    forwardedRef
  ) => {
    const prefixSuffixClassName = "text-sm";
    const generatedId = useId();
    const [isSliderHovered, setSliderHovered] = useState(false);
    const id = _id || generatedId;
    const [thumbs, setThumbs] = useState(
      (value || defaultValue)?.map(() => ({
        tooltipOpen: false
      })) || []
    );

    const isThumbTooltipOpen = useMemo(() => {
      return Boolean(
        thumbs.filter(({ tooltipOpen }) => Boolean(tooltipOpen))?.length
      );
    }, [thumbs]);

    return (
      <div
        className={cn("group flex flex-col gap-1", {
          "text-disabled": disabled
        })}
      >
        {label && (
          <label className="text-sm" id={id}>
            {label}
          </label>
        )}
        <div className="flex items-center gap-2">
          {prefix && <span className={prefixSuffixClassName}>{prefix}</span>}
          <RadixSlider.Root
            {...rest}
            orientation="horizontal"
            defaultValue={defaultValue}
            disabled={disabled}
            ref={forwardedRef}
            className={cn(
              "relative flex w-full touch-none select-none items-center py-3",
              { "pointer-events-none": disabled },
              className
            )}
            onValueCommit={onChangeCommit}
            onValueChange={onChange}
            value={value}
            onMouseEnter={() => {
              setSliderHovered(true);
            }}
            onMouseLeave={() => {
              setSliderHovered(false);
            }}
          >
            <RadixSlider.Track className="relative grow rounded-full border-[2px] border-dashed border-surface-disabled data-[disabled]:border-solid">
              <RadixSlider.Range className="absolute ml-[-2px] mt-[-2px] h-full rounded-full border-[2px] border-interactive-primary data-[disabled]:border-disabled group-hover:[&:not([data-disabled])]:border-interactive-primary-hovered group-active:[&:not([data-disabled])]:border-interactive-primary" />
            </RadixSlider.Track>
            {(value || defaultValue)?.map((v, index) => (
              <SliderThumb
                key={index}
                aria-labelledby={(label && id) || undefined}
                aria-label={accessibilityLabel}
                forceTooltipOpen={isThumbTooltipOpen || isSliderHovered}
                onOpenChange={(open) => {
                  const updatedThumbs = [...thumbs];

                  if (!updatedThumbs?.[index]) {
                    return;
                  }

                  if (updatedThumbs[index]["tooltipOpen"] === open) {
                    return;
                  }
                  updatedThumbs[index] = {
                    ...updatedThumbs[index],
                    tooltipOpen: open
                  };
                  setThumbs(updatedThumbs);
                }}
                value={v}
              />
            ))}
          </RadixSlider.Root>
          {suffix && <span className={prefixSuffixClassName}>{suffix}</span>}
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
