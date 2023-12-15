export interface LanguagePickerProps {
  locales: string[];
  selected: string;
  onSelect?: (locale: string) => void;
}
