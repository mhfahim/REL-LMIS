export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Pill on/off toggle. */
export function Switch(props: SwitchProps): JSX.Element;
