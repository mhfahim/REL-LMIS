export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** Modal overlay dialog. */
export function Dialog(props: DialogProps): JSX.Element | null;
export function DialogFooter(props: { style?: React.CSSProperties; children?: React.ReactNode }): JSX.Element;
