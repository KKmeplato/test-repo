export const useStepperControl = ({
  min = 0,
  max = Infinity,
  value,
  onChange
}: {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}) => {
  const increment = () => {
    if (typeof value !== "undefined") {
      if (value >= max) {
        return;
      }

      if (value < min) {
        return onChange?.(min);
      }

      onChange?.(value + 1);

      return;
    }

    onChange?.(1);
  };

  const decrement = () => {
    if (typeof value !== "undefined") {
      if (value <= min) {
        return;
      }

      if (value > max) {
        return onChange?.(max);
      }

      return onChange?.(value - 1);
    }

    onChange?.(0);
  };

  const isIncrementDisabled = typeof value !== "undefined" && value >= max;
  const isDecrementDisabled = typeof value !== "undefined" && value <= min;

  return {
    increment,
    decrement,
    isIncrementDisabled,
    isDecrementDisabled
  };
};
