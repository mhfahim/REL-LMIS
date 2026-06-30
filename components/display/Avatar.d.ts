export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "default" | "lg" | number;
  className?: string;
  style?: React.CSSProperties;
}
/** User/entity image with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
