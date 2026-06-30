import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Show error styling. */
  invalid?: boolean;
}
/** Single-line text field. @startingPoint section="Forms" subtitle="Text input field" viewport="700x120" */
export function Input(props: InputProps): JSX.Element;
