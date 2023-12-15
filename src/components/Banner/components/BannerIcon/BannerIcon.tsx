import { Icon } from "components/icons";

import { BannerIconProps, BannerVariants } from "../../types";

export const BannerIcon = ({ variant = "default" }: BannerIconProps) => {
  const getBannerIcon = (variant: BannerVariants) => {
    switch (variant) {
      case "critical":
        return <Icon.error className="text-icon-critical" />;

      case "success":
        return <Icon.success className="text-icon-success" />;

      case "highlight":
        return <Icon.highlight className="text-icon-highlight" />;

      case "warning":
        return <Icon.warning className="text-icon-warning" />;
      default:
        return <Icon.info className="text-icon" />;
    }
  };

  const bannerIconMarkup = getBannerIcon(variant);

  return (
    <div className="inline-flex h-5 w-5 flex-col items-center justify-center">
      {bannerIconMarkup}
    </div>
  );
};
