export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** Hover/focus label over a trigger. */
export function Tooltip(props: TooltipProps): JSX.Element;
