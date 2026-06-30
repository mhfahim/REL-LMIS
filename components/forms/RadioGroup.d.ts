export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export interface RadioGroupItemProps {
  value: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Single-select radio group. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
/** One option inside a RadioGroup. */
export function RadioGroupItem(props: RadioGroupItemProps): JSX.Element;
