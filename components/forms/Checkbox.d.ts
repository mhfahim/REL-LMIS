export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Square boolean toggle. */
export function Checkbox(props: CheckboxProps): JSX.Element;
