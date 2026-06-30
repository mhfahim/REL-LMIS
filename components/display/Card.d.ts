import * as React from "react";
interface DivProps extends React.HTMLAttributes<HTMLDivElement> { children?: React.ReactNode; }
/** Surface container. @startingPoint section="Display" subtitle="Content card with header/content/footer" viewport="700x300" */
export function Card(props: DivProps): JSX.Element;
export function CardHeader(props: DivProps): JSX.Element;
export function CardTitle(props: DivProps): JSX.Element;
export function CardDescription(props: DivProps): JSX.Element;
export function CardContent(props: DivProps): JSX.Element;
export function CardFooter(props: DivProps): JSX.Element;
