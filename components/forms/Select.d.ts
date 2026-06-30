export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e?: any) => void;
  options?: SelectOption[];
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** Styled dropdown select. @startingPoint section="Forms" subtitle="Dropdown select" viewport="700x120" */
export function Select(props: SelectProps): JSX.Element;
