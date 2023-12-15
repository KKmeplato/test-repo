import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { cleanupMedia, matchMedia, setMedia } from "mock-match-media";

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));

vi.stubGlobal("ResizeObserver", ResizeObserverMock);
vi.stubGlobal("matchMedia", matchMedia);

// See: https://github.com/testing-library/user-event/discussions/1087
class MockPointerEvent extends Event {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.PointerEvent = MockPointerEvent as any;
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

beforeEach(() => {
  // Set default media query to 1024px = isLg
  setMedia({ width: "1024px" });
});

/** runs a cleanup after each test case (e.g. clearing jsdom) */
afterEach(() => {
  cleanupMedia();
  cleanup();
});
