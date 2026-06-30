/** Lucide glyph names available in the curated set (see Icon.jsx ICON_PATHS). */
export type IconName = string;

export interface IconProps {
  /** Lucide glyph name from the curated set (see icon-data.js keys). */
  name: IconName;
  /** Pixel size (width & height). Default 20. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Renders a Lucide glyph; inherits color via currentColor. */
export function Icon(props: IconProps): JSX.Element | null;
