import React from "react";

/**
 * Tooltip — hover label. Wraps a trigger; shows `content` on hover/focus.
 */
export function Tooltip({ content, side = "top", className = "", style = {}, children }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" },
  }[side];
  return (
    <span
      className={className}
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            ...pos,
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            fontSize: "12px",
            fontWeight: "var(--weight-medium)",
            fontFamily: "var(--font-sans)",
            padding: "6px 10px",
            borderRadius: "var(--radius-md)",
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-md)",
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
