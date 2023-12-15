import * as RadixToast from "@radix-ui/react-toast";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconButton } from "components/IconButton";
import { Link } from "components/Link";
import { ProgressBar } from "components/ProgressBar";
import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { ToastProps } from "./types";

export const Toast = ({
  action,
  className,
  critical,
  duration = 3000,
  message,
  onAction,
  onClose,
  ...rest
}: ToastProps) => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [open, setOpen] = useState(true);
  const tickIntervalRef = useRef(0);
  const startTimeRef = useRef(0);
  const closeFuncRef = useRef<() => void | undefined>();
  const tick = 1000 / 60; // FPS
  const radixDuration = Infinity; // Duration for RadixToast, set to Infinity to prevent RadixToast from closing automatically and use our own timer

  // Is called on every tick, calculate elapsed time
  const handleTick = useCallback(() => {
    // Calculate diff, it's more accurate than using "tick"
    const diff = new Date().getTime() - startTimeRef.current;
    setElapsed((elapsed) => elapsed + diff);
    startTimeRef.current = new Date().getTime();
  }, []);

  // Stop tick interval and change state so down below the "close" animation is started
  const startCloseAnimation = useCallback((closeFunc?: () => void) => {
    window.clearInterval(tickIntervalRef.current);
    closeFuncRef.current = closeFunc;
    setEnd(true);
    setOpen(false);
  }, []);

  // Pause tick interval when RadixToast is paused
  const handlePause = useCallback(() => {
    window.clearInterval(tickIntervalRef.current);

    // Add diff to elapsed time to keep it accurate
    const diff = new Date().getTime() - startTimeRef.current;
    if (diff <= tick) {
      setElapsed((elapsed) => elapsed + diff);
    }
  }, [tick]);

  // Resume tick interval when RadixToast is resumed
  const handleResume = useCallback(() => {
    startTimeRef.current = new Date().getTime();
    tickIntervalRef.current = window.setInterval(handleTick, tick);
  }, [handleTick, tick]);

  // User clicked on action button
  const handleAction = useCallback(() => {
    startCloseAnimation(onAction);
  }, [onAction, startCloseAnimation]);

  // User closed RadixToast
  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) return;
      startCloseAnimation(onClose);
    },
    [onClose, startCloseAnimation]
  );

  // Start "start" animation timer
  useEffect(() => {
    const timeout = window.setTimeout(() => setStart(true), 600);
    return () => window.clearTimeout(timeout);
  }, []);

  // Start "close" animation timer
  useEffect(() => {
    if (!end) return;

    const timeout = window.setTimeout(() => closeFuncRef.current?.(), 600);
    return () => window.clearTimeout(timeout);
  }, [end]);

  // Start tick interval
  useEffect(() => {
    if (!start) return;

    startTimeRef.current = new Date().getTime();
    tickIntervalRef.current = window.setInterval(handleTick, tick);
    return () => window.clearInterval(tickIntervalRef.current);
  }, [handleTick, start, tick]);

  // Duration reached
  useEffect(() => {
    if (elapsed >= duration && !end) {
      startCloseAnimation(onClose);
    }
  }, [duration, elapsed, end, onClose, startCloseAnimation]);

  return (
    <RadixToast.Root
      className={cn(
        "relative rounded-level-2 bg-surface shadow-2xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-focus focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1",
        critical && "bg-interactive-critical",
        "data-[state=closed]:animate-[toastOut_0.6s_cubic-bezier(1,-0.01,0.41,1.39)] data-[state=open]:animate-[toastIn_0.6s_cubic-bezier(0.86,0.13,0.29,1.34)]",
        className
      )}
      duration={radixDuration}
      onOpenChange={handleOpenChange}
      onPause={handlePause}
      onResume={handleResume}
      open={open}
      {...rest}
    >
      <RadixToast.Description className="flex items-center gap-2 px-3 py-2 md:gap-4 md:px-4 md:py-3">
        {critical && <Icon.error className="h-5 w-5 text-on-interactive" />}
        <span className={cn("text-sm text", critical && "text-on-interactive")}>
          {message}
        </span>
        {action && (
          <Link
            variant={critical ? "critical" : "default"}
            className={cn(
              "underline-offset-2",
              critical &&
                "text-on-interactive hover:text-on-interactive active:text-on-interactive"
            )}
            onClick={handleAction}
            style={{ textUnderlinePosition: "from-font" }}
            as="button"
          >
            {action}
          </Link>
        )}
        {onClose && (
          <IconButton
            variant={critical ? "critical" : "default"}
            accessibilityLabel="Close toast"
            onClick={() => handleOpenChange(false)}
          >
            <Icon.close
              className={cn(
                "h-5 w-5 text-icon",
                critical && "text-on-interactive"
              )}
            />
          </IconButton>
        )}
        <ProgressBar
          accessibilityLabel="close automatically"
          max={duration}
          value={elapsed < duration ? elapsed : duration}
          className="absolute bottom-0 left-0 h-1 w-full rounded-t-none"
          size="small"
          variant={critical ? "critical" : "primary"}
          noAnimation
        />
      </RadixToast.Description>
    </RadixToast.Root>
  );
};