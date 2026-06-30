import React from "react";

const variants = {
  default: { background: "var(--primary)", color: "var(--primary-foreground)", border: "1px solid transparent" },
  secondary: { background: "var(--secondary)", color: "var(--secondary-foreground)", border: "1px solid transparent" },
  outline: { background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)" },
  destructive: { background: "var(--destructive)", color: "var(--destructive-foreground)", border: "1px solid transparent" },
  success: { background: "rgba(22,163,74,0.12)", color: "rgb(21,128,61)", border: "1px solid rgba(22,163,74,0.3)" },
  warning: { background: "rgba(217,119,6,0.12)", color: "rgb(180,83,9)", border: "1px solid rgba(217,119,6,0.3)" },
  brand: { background: "var(--brand-subtle)", color: "var(--brand)", border: "1px solid rgba(30,41,59,0.2)" },
};

/**
 * Badge — compact status/label pill.
 */
export function Badge({ variant = "default", className = "", style = {}, children, ...rest }) {
  const v = variants[variant] || variants.default;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "2px 8px",
        borderRadius: "var(--radius-full)",
        fontSize: "12px",
        fontWeight: "var(--weight-medium)",
        fontFamily: "var(--font-sans)",
        lineHeight: 1.4,
        whiteSpace: "nowrap",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
