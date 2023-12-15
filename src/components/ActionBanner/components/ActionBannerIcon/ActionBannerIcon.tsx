import { Icon } from "components/icons";

import { ActionBannerIconProps, ActionBannerVariants } from "../../types";

export const ActionBannerIcon = ({
  variant = "default"
}: ActionBannerIconProps) => {
  const getBannerIcon = (variant: ActionBannerVariants) => {
    switch (variant) {
      case "critical":
        return <Icon.error className="text-icon-critical" />;

      case "highlight":
        return <Icon.highlight className="text-icon-highlight" />;

      case "warning":
        return <Icon.warning className="text-icon-warning" />;
      case "upgrade":
        return <Icon.success className="text" />;

      default:
        return <Icon.info className="text-interactive-primary" />;
    }
  };

  const bannerIconMarkup = getBannerIcon(variant);
  return (
    <div className="inline-flex h-5 w-5 flex-col items-center justify-center">
      {bannerIconMarkup}
    </div>
  );
};
