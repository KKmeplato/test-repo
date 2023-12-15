import { renderHook } from "@testing-library/react";
import { setMedia } from "mock-match-media";

import { Breakpoints } from "lib/constants";

import { useBreakpoints } from "../useBreakpoints";

describe("useBreakpoints", () => {
  it.each([{ width: `${Breakpoints.sm - 1}px` }])(
    "isXs is true when width is $width",
    ({ width }) => {
      setMedia({ width });
      const { result } = renderHook(() => useBreakpoints());
      expect(result.current).toMatchObject({
        isXs: true,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        is2Xl: false
      });
    }
  );

  it.each([
    { width: `${Breakpoints.sm}px` },
    { width: `${Breakpoints.md - 1}px` }
  ])("isSm is true when width is $width", ({ width }) => {
    setMedia({ width });
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current).toMatchObject({
      isXs: false,
      isSm: true,
      isMd: false,
      isLg: false,
      isXl: false,
      is2Xl: false
    });
  });

  it.each([
    { width: `${Breakpoints.md}px` },
    { width: `${Breakpoints.lg - 1}px` }
  ])("isMd is true when width is $width", ({ width }) => {
    setMedia({ width });
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current).toMatchObject({
      isXs: false,
      isSm: false,
      isMd: true,
      isLg: false,
      isXl: false,
      is2Xl: false
    });
  });

  it.each([
    { width: `${Breakpoints.lg}px` },
    { width: `${Breakpoints.xl - 1}px` }
  ])("isLg is true when width is $width", ({ width }) => {
    setMedia({ width });
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current).toMatchObject({
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: true,
      isXl: false,
      is2Xl: false
    });
  });

  it.each([
    { width: `${Breakpoints.xl}px` },
    { width: `${Breakpoints["2xl"] - 1}px` }
  ])("isXl is true when width is $width", ({ width }) => {
    setMedia({ width });
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current).toMatchObject({
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: true,
      is2Xl: false
    });
  });

  it.each([{ width: `${Breakpoints["2xl"]}px` }])(
    "is2Xl is true when width is $width",
    ({ width }) => {
      setMedia({ width });
      const { result } = renderHook(() => useBreakpoints());
      expect(result.current).toMatchObject({
        isXs: false,
        isSm: false,
        isMd: false,
        isLg: false,
        isXl: false,
        is2Xl: true
      });
    }
  );
});
