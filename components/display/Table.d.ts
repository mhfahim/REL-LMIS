import * as React from "react";
interface TblProps extends React.HTMLAttributes<HTMLElement> { children?: React.ReactNode; }
/** Data table. @startingPoint section="Display" subtitle="Data table with header & rows" viewport="700x320" */
export function Table(props: TblProps): JSX.Element;
export function TableHeader(props: TblProps): JSX.Element;
export function TableBody(props: TblProps): JSX.Element;
export function TableRow(props: TblProps): JSX.Element;
export function TableHead(props: TblProps): JSX.Element;
export function TableCell(props: TblProps): JSX.Element;
