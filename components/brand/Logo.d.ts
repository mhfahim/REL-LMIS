export interface LogoProps {
  /** Mark height in px (wordmark scales with it). @default 28 */
  size?: number;
  /** Render only the flask mark, no wordmark. */
  markOnly?: boolean;
  /** Mark tile fill. @default var(--primary) */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Reliance LIMS logo lockup (flask mark + wordmark). */
export function Logo(props: LogoProps): JSX.Element;
