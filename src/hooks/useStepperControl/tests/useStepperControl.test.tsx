import { renderHook } from "@testing-library/react";

import { useStepperControl } from "../useStepperControl";

const mockOnChange = vi.fn();

describe("useStepperControl", () => {
  test("returns the needed props", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: 1,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );

    expect(result.current).toMatchObject({
      isIncrementDisabled: false,
      isDecrementDisabled: false
    });
  });

  test("increments value when `increment` is called", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: 1,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );

    result.current.increment();

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test("descrements value when `descrement` is called", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: 1,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );

    result.current.decrement();

    expect(mockOnChange).toHaveBeenCalledWith(0);
  });

  test("does not call `onChange` if the max value has reached", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: 5,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );

    result.current.decrement();

    expect(mockOnChange).toHaveBeenCalledWith(0);
  });

  it("calls `onChange` with value: 1 when value is `undefined` and increment is called", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: undefined,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );
    result.current.increment();

    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it("calls `onChange` with value: 0 when value is `undefined` and decrement is called", () => {
    const { result } = renderHook(() =>
      useStepperControl({
        value: undefined,
        min: 0,
        max: 5,
        onChange: mockOnChange
      })
    );
    result.current.decrement();

    expect(mockOnChange).toHaveBeenCalledWith(0);
  });
});
