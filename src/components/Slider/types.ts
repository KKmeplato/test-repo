import * as RadixSlider from "@radix-ui/react-slider";

export interface SliderProps
  extends Omit<
    RadixSlider.SliderProps,
    "onValueChange" | "onChange" | "onValueCommit" | "asChild" | "orientation"
  > {
  onChange?: RadixSlider.SliderProps["onValueChange"];
  onChangeCommit?: RadixSlider.SliderProps["onValueCommit"];
  prefix?: string;
  suffix?: string;
  label?: string;
  id?: string;
  accessibilityLabel?: string;
}

export interface SliderThumbProps extends RadixSlider.SliderThumbProps {
  forceTooltipOpen: boolean;
  onOpenChange: (open: boolean) => void;
  value: number;
}
