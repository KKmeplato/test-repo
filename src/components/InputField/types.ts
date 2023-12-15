import {
  InputHTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes
} from "react";

interface SuccessProps {
  success?: string;
  error?: never;
}

interface ErrorProps {
  success?: never;
  error?: string;
}

interface CommonInputFieldProps {
  hint?: string;
  showHintIcon?: boolean;
  label?: string;
  prefix?: string;
  prefixIcon?: ReactElement;
  preview?: boolean;
  showCharacterCount?: boolean;
  suffix?: string;
  suffixIcon?: ReactElement;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    CommonInputFieldProps {
  multiline?: false;
  type?: "text" | "password";
  onChange?: (value: string) => void;
}

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">,
    CommonInputFieldProps {
  multiline?: true;
  type?: "text";
  onChange?: (value: string) => void;
  min?: never;
  max?: never;
}

interface NumberInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">,
    CommonInputFieldProps {
  type: "number";
  value?: number;
  prefixIcon?: never;
  suffixIcon?: never;
  multiline?: never;
  showCharacterCount?: never;
  maxLength?: never;
  onChange?: (value?: number) => void;
}

export interface StepperControlProps
  extends Pick<
    NumberInputProps,
    "max" | "min" | "value" | "disabled" | "onChange"
  > {
  min?: number;
  max?: number;
}

export type InputFieldProps = (InputProps | TextareaProps | NumberInputProps) &
  (SuccessProps | ErrorProps);
