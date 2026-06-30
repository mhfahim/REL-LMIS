import * as React from "react";
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}
/** Form field label. */
export function Label(props: LabelProps): JSX.Element;
