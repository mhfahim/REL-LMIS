export interface SliderProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Single-thumb range slider. */
export function Slider(props: SliderProps): JSX.Element;
