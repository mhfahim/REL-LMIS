import React from "react";

/**
 * Label — form field label. Pair with Input/Select/Checkbox via htmlFor.
 */
export function Label({ className = "", style = {}, children, ...rest }) {
  return (
    <label
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        fontFamily: "var(--font-sans)",
        color: "var(--foreground)",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </label>
  );
}
