export interface BreadcrumbItem { label: React.ReactNode; href?: string; }
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  style?: React.CSSProperties;
}
/** Hierarchical navigation trail. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
