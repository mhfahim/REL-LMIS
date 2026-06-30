import React from "react";

/**
 * Card — surface container with optional sub-parts.
 * Compose: Card > CardHeader > CardTitle/CardDescription, CardContent, CardFooter.
 */
export function Card({ className = "", style = {}, children, ...rest }) {
  return (
    <div
      className={className}
      style={{
        background: "var(--card)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", style = {}, children, ...rest }) {
  return <div className={className} style={{ padding: "24px 24px 0", display: "flex", flexDirection: "column", gap: "6px", ...style }} {...rest}>{children}</div>;
}

export function CardTitle({ className = "", style = {}, children, ...rest }) {
  return <div className={className} style={{ fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", lineHeight: 1.2, letterSpacing: "-0.01em", ...style }} {...rest}>{children}</div>;
}

export function CardDescription({ className = "", style = {}, children, ...rest }) {
  return <div className={className} style={{ fontSize: "var(--text-sm)", color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)", ...style }} {...rest}>{children}</div>;
}

export function CardContent({ className = "", style = {}, children, ...rest }) {
  return <div className={className} style={{ padding: "24px", ...style }} {...rest}>{children}</div>;
}

export function CardFooter({ className = "", style = {}, children, ...rest }) {
  return <div className={className} style={{ padding: "0 24px 24px", display: "flex", alignItems: "center", gap: "12px", ...style }} {...rest}>{children}</div>;
}
