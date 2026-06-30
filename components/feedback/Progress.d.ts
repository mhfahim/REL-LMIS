import * as React from "react";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value?: number;
  color?: string;
}
/** Determinate progress bar. */
export function Progress(props: ProgressProps): JSX.Element;
