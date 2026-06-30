export interface DropdownMenuItem {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  onSelect?: () => void;
  danger?: boolean;
  separator?: boolean;
}
export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownMenuItem[];
  align?: "start" | "end";
  className?: string;
  style?: React.CSSProperties;
}
/** Click-triggered action menu. */
export function DropdownMenu(props: DropdownMenuProps): JSX.Element;
