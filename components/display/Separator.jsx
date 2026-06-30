import React from "react";

/**
 * Separator — thin divider line, horizontal or vertical.
 */
export function Separator({ orientation = "horizontal", className = "", style = {}, ...rest }) {
  const isH = orientation === "horizontal";
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={{
        background: "var(--border)",
        flexShrink: 0,
        ...(isH ? { width: "100%", height: "1px" } : { width: "1px", alignSelf: "stretch", height: "auto" }),
        ...style,
      }}
      {...rest}
    />
  );
}
