import { useMemo, useState } from "react";

import { ActionItemProps, ActionList } from "components/ActionList";
import { IconButton } from "components/IconButton";
import { Icon } from "components/icons";

import { LanguagePickerProps } from "./types";

function LanguagePicker({ selected, locales, onSelect }: LanguagePickerProps) {
  const selectedLocale = new Intl.Locale(selected);
  const [isOpen, setIsOpen] = useState(false);

  const activator = (
    <IconButton accessibilityLabel="" active={isOpen}>
      <span className="flex items-center justify-center gap-2 pl-0.5 pr-1">
        <Icon.language className="h-5 py-0.5" />
        <span className="font-mono text-sm font-medium uppercase">
          {selectedLocale.language}
        </span>
      </span>
    </IconButton>
  );

  const items = useMemo(() => {
    const languageNames = new Intl.DisplayNames([selected], {
      type: "language"
    });

    return locales.map<ActionItemProps>((locale) => {
      const { language } = new Intl.Locale(locale);
      const isSelected = selected === locale;

      return {
        active: isSelected,
        sideHelpText: <span className="uppercase">{language}</span>,
        bottomHelpText:
          !isSelected &&
          new Intl.DisplayNames([locale], {
            type: "language"
          }).of(locale),
        suffixIcon: isSelected && (
          <Icon.tick className="text-interactive-primary" />
        ),
        children: <span>{languageNames.of(locale)}</span>,
        onClick: () => onSelect?.(locale)
      };
    });
  }, [selected, locales, onSelect]);

  return (
    <ActionList activator={activator} items={items} onOpenChange={setIsOpen} />
  );
}

export { LanguagePicker };
