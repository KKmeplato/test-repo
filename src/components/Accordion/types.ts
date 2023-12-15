import {
  AccordionItemProps as RadixAccordionItemProps,
  AccordionMultipleProps as RadixAccordionMultipleProps,
  AccordionSingleProps as RadixAccordionSingleProps
} from "@radix-ui/react-accordion";

export interface AccordionItemProps extends RadixAccordionItemProps {
  actionText?: string;
  children?: string | React.ReactNode;
  header?: string | React.ReactNode;
  onActionClick?: () => void;
}

export interface AccordionSingleProps {
  items: AccordionItemProps[];
  type?: RadixAccordionSingleProps["type"];
  value?: RadixAccordionSingleProps["value"];
  onChange?: RadixAccordionSingleProps["onValueChange"];
}

export interface AccordionMultipleProps {
  items: AccordionItemProps[];
  type?: RadixAccordionMultipleProps["type"];
  value?: RadixAccordionMultipleProps["value"];
  onChange?: RadixAccordionMultipleProps["onValueChange"];
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;
