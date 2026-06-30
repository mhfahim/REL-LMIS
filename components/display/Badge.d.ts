import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "brand";
  children?: React.ReactNode;
}
/** Compact status/label pill. */
export function Badge(props: BadgeProps): JSX.Element;
