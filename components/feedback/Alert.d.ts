import * as React from "react";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "info" | "success" | "warning" | "destructive";
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
/** Inline contextual message banner. */
export function Alert(props: AlertProps): JSX.Element;
