export interface TabsProps {
  value?: string; defaultValue?: string; onChange?: (v: string) => void;
  className?: string; style?: React.CSSProperties; children?: React.ReactNode;
}
interface TabItemProps { value: string; className?: string; style?: React.CSSProperties; children?: React.ReactNode; }
interface ListProps { className?: string; style?: React.CSSProperties; children?: React.ReactNode; }
/** Segmented content switcher. @startingPoint section="Navigation" subtitle="Tabbed content switcher" viewport="700x200" */
export function Tabs(props: TabsProps): JSX.Element;
export function TabsList(props: ListProps): JSX.Element;
export function TabsTrigger(props: TabItemProps): JSX.Element;
export function TabsContent(props: TabItemProps): JSX.Element;
