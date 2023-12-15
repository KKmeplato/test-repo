import React, { createElement, forwardRef, useId, useRef } from "react";

import { Icon } from "components/icons";
import { cn } from "lib/utils";

import { StepperControl } from "./components";
import type { InputFieldProps } from "./types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      disabled,
      error,
      hint,
      id,
      label,
      maxLength,
      multiline,
      prefix,
      prefixIcon,
      preview,
      showCharacterCount,
      showHintIcon,
      success,
      suffix,
      suffixIcon,
      value = "",
      type,
      onChange,
      ...rest
    },
    forwardedRef
  ) => {
    const generatedInputRef = useRef<HTMLInputElement>();
    const inputRef = forwardedRef || generatedInputRef;
    const isActive = !disabled && !preview;
    const hasValidationMessage = success || error;
    const generatedId = useId();
    const inputId = id || generatedId;
    const inputField = createElement(multiline ? "textarea" : "input", {
      "aria-disabled": disabled || preview,
      className: cn(
        "w-full bg-interactive-plain rounded font-normal leading-tight appearance-none text uikit-hide-number-spin-controls",
        multiline
          ? "rounded-level-2 px-3 py-2 justify-start items-center gap-1 inline-flex"
          : "focus:outline-none text-base bg-transparent",
        {
          "text-success": success,
          "text-critical": error,
          "bg-transparent text-default group-hover:bg-transparent hover:bg-transparent group-hover:disabled:bg-transparent":
            preview,
          "bg-surface-disabled text-disabled": disabled && !preview
        }
      ),
      disabled: disabled || preview,
      id,
      maxLength,
      value,
      ref: inputRef,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "number") {
          const numberValue = parseInt(e.target.value);
          return onChange?.(isNaN(numberValue) ? undefined : numberValue);
        }

        return onChange?.(e.target.value);
      },
      type,
      ...rest
    });

    const labelMarkup = label ? (
      <label
        htmlFor={inputId}
        className={cn("w-full text-sm font-medium leading-tight text", {
          "text-disabled": disabled && !preview
        })}
      >
        {label}
      </label>
    ) : null;
    const charactersCountMarkup =
      showCharacterCount && maxLength && !preview ? (
        <span
          className={cn(
            "text-right text-sm font-normal leading-tight text-subdued",
            {
              "text-disabled": disabled
            }
          )}
        >
          {`${value?.toString().length || 0}/${maxLength}`}
        </span>
      ) : null;
    const hintMarkup =
      hint && !preview && (!hasValidationMessage || disabled) ? (
        <div className="inline-flex gap-1">
          {showHintIcon && (
            <Icon.info
              className={cn("h-5 w-5 rounded-level-2 text-icon", {
                "text-icon-disabled": disabled
              })}
            />
          )}
          <p
            className={cn(
              "shrink grow basis-0 text-sm font-normal leading-5 text-subdued",
              {
                "text-disabled": disabled
              }
            )}
          >
            {hint}
          </p>
        </div>
      ) : null;
    const messageMarkup =
      hasValidationMessage && isActive ? (
        <div
          className={cn("inline-flex gap-2", {
            "text-success": success,
            "text-critical": error
          })}
        >
          <div className={"inline-flex h-5 w-5 justify-center"}>
            {success ? <Icon.success /> : <Icon.error />}
          </div>
          <div
            className={cn("text-sm font-normal", {
              "text-success": success,
              "text-critical": error
            })}
          >
            {success || error}
          </div>
        </div>
      ) : null;

    const stepperControlMarkup = type === "number" && !preview && (
      <StepperControl
        min={rest?.min as number | undefined}
        max={rest.max as number | undefined}
        value={
          (isNaN(parseInt(String(value))) ? undefined : Number(value)) as
            | number
            | undefined
        }
        disabled={disabled}
        onChange={(value?: number) => {
          if (typeof inputRef !== "function") {
            inputRef.current?.focus();
          }
          onChange?.(value);
        }}
      />
    );

    return (
      <>
        {multiline ? (
          <div
            className={cn(
              "w-full flex-col items-start justify-start gap-1",
              className
            )}
          >
            <div className="inline-flex h-5 w-full items-center justify-center gap-1 pr-1">
              {labelMarkup}
              {charactersCountMarkup}
            </div>
            {inputField}
            {hintMarkup}
            {messageMarkup}
          </div>
        ) : (
          <div
            className={cn(
              "inline-flex w-full flex-col items-start justify-start gap-1",
              className
            )}
          >
            {labelMarkup}
            <div
              className={cn(
                "group inline-flex h-9 w-full items-center justify-start gap-1 rounded-level-2 border border-solid border-default bg-interactive-plain py-2 pl-3 pr-2 focus-within:border-focus focus-within:ring-1 focus-within:ring-focus hover:border-hovered hover:bg-interactive-plain-hovered hover:focus-within:border-focus hover:focus-within:bg-interactive-plain",
                {
                  "border-disabled bg-surface-disabled text-disabled hover:border-disabled hover:bg-surface-disabled":
                    disabled && !preview,
                  "border-interactive-success focus-within:border-interactive-success focus-within:ring-1 focus-within:ring-interactive-success hover:border-interactive-success-hovered hover:focus-within:border-interactive-success":
                    success && isActive,
                  "border-critical focus-within:border-critical focus-within:ring-1 focus-within:ring-critical hover:border-interactive-critical-hovered hover:focus-within:border-critical":
                    error && isActive,
                  "border-none bg-transparent px-0 py-2 text-disabled hover:bg-transparent":
                    preview
                }
              )}
            >
              {prefix && (
                <span
                  className={cn(
                    "min-w-[20px] flex-shrink-0 whitespace-nowrap text-base font-normal leading-tight text-subdued",
                    {
                      "text-success": success && isActive,
                      "text-critical": error && isActive,
                      "text-disabled": disabled && !preview
                    }
                  )}
                >
                  {prefix}
                </span>
              )}
              {prefixIcon && (
                <div
                  className={cn(
                    "flex h-5 w-5 flex-shrink-0 items-center justify-center text-icon",
                    {
                      "text-icon-disabled": disabled && !preview,
                      "text-success": success && isActive,
                      "text-critical": error && isActive
                    }
                  )}
                >
                  {prefixIcon}
                </div>
              )}
              {inputField}
              {suffix && (
                <span
                  className={cn(
                    "min-w-[20px] flex-shrink-0 whitespace-nowrap text-base font-normal leading-tight text-subdued",
                    {
                      "text-success": success && isActive,
                      "text-critical": error && isActive,
                      "text-disabled": disabled && !preview
                    }
                  )}
                >
                  {suffix}
                </span>
              )}
              {charactersCountMarkup}
              {suffixIcon && (
                <div
                  className={cn(
                    "flex h-5 w-5 flex-shrink-0 items-center justify-center text-icon",
                    {
                      "text-icon-disabled": disabled && !preview,
                      "text-success": success && isActive,
                      "text-critical": error && isActive
                    }
                  )}
                >
                  {suffixIcon}
                </div>
              )}

              {stepperControlMarkup}
            </div>
            {hintMarkup}
            {messageMarkup}
          </div>
        )}
      </>
    );
  }
);

InputField.displayName = "InputField";
