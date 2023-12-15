import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";

import { LanguagePicker } from "./LanguagePicker";
import { LanguagePickerProps } from "./types";

const locales = ["de", "en", "es", "tr", "pt-BR", "pt", "it", "de-at", "ja"];

const meta: Meta<typeof LanguagePicker> = {
  argTypes: {
    selected: {
      control: "radio",
      options: locales
    }
  },
  component: LanguagePicker,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof LanguagePicker>;

const LanguagePickerWithArgs = (args: LanguagePickerProps) => {
  const [, updateArgs] = useArgs<LanguagePickerProps>();
  const handleSelect = (locale: string) => {
    action("onChange")(locale);
    updateArgs({ selected: locale });
  };
  return <LanguagePicker {...args} onSelect={handleSelect} />;
};

export const Default: Story = {
  args: {
    selected: "en",
    locales,
    onSelect: action("onSelect")
  },
  render: LanguagePickerWithArgs
};
