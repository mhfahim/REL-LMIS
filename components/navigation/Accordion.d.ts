export interface AccordionItem { value: string; title: React.ReactNode; content: React.ReactNode; }
export interface AccordionProps {
  items: AccordionItem[];
  defaultValue?: string | string[];
  allowMultiple?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Collapsible stacked sections. */
export function Accordion(props: AccordionProps): JSX.Element;
