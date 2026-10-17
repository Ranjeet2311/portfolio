import type { IconName } from "../../types/portfolio";

export type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  return <i aria-hidden="true" className={`ti ${name}${className ? ` ${className}` : ""}`} />;
}
