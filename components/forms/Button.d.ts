import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "default" */
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive" | "brand";
  /** Control height. @default "default" */
  size?: "sm" | "default" | "lg" | "icon";
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Button — the primary action control of the Reliance LIMS system.
 *
 * @startingPoint section="Forms" subtitle="Action button with shadcn variants & sizes" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
