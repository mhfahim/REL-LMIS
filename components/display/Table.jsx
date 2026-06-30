import React from "react";

/**
 * Table — data table primitives styled to the system.
 * Compose: Table > TableHeader > TableRow > TableHead; TableBody > TableRow > TableCell.
 */
export function Table({ className = "", style = {}, children, ...rest }) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table className={className} style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", ...style }} {...rest}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children, ...rest }) {
  return <thead {...rest}>{children}</thead>;
}

export function TableBody({ children, ...rest }) {
  return <tbody {...rest}>{children}</tbody>;
}

export function TableRow({ className = "", style = {}, children, ...rest }) {
  return <tr className={className} style={{ borderBottom: "1px solid var(--border)", ...style }} {...rest}>{children}</tr>;
}

export function TableHead({ className = "", style = {}, children, ...rest }) {
  return (
    <th className={className} style={{ textAlign: "left", padding: "10px 16px", height: "44px", color: "var(--muted-foreground)", fontWeight: "var(--weight-medium)", fontSize: "13px", whiteSpace: "nowrap", ...style }} {...rest}>
      {children}
    </th>
  );
}

export function TableCell({ className = "", style = {}, children, ...rest }) {
  return (
    <td className={className} style={{ padding: "12px 16px", color: "var(--foreground)", verticalAlign: "middle", ...style }} {...rest}>
      {children}
    </td>
  );
}
