import React from "react";

const variants = {
  default: { border: "var(--border)", bg: "var(--background)", fg: "var(--foreground)", icon: "var(--foreground)" },
  info: { border: "rgba(51,138,243,0.3)", bg: "rgba(51,138,243,0.08)", fg: "var(--foreground)", icon: "rgb(51,138,243)" },
  success: { border: "rgba(22,163,74,0.3)", bg: "rgba(22,163,74,0.08)", fg: "var(--foreground)", icon: "rgb(22,163,74)" },
  warning: { border: "rgba(217,119,6,0.3)", bg: "rgba(217,119,6,0.08)", fg: "var(--foreground)", icon: "rgb(217,119,6)" },
  destructive: { border: "rgba(220,38,38,0.3)", bg: "rgba(220,38,38,0.06)", fg: "var(--destructive)", icon: "var(--destructive)" },
};

/**
 * Alert — inline contextual message. Pass `icon` (Icon element) + children.
 */
export function Alert({ variant = "default", title, icon, className = "", style = {}, children, ...rest }) {
  const v = variants[variant] || variants.default;
  return (
    <div
      role="alert"
      className={className}
      style={{
        display: "flex",
        gap: "12px",
        padding: "14px 16px",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${v.border}`,
        background: v.bg,
        color: v.fg,
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {icon ? <span style={{ color: v.icon, flexShrink: 0, marginTop: "1px" }}>{icon}</span> : null}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {title ? <div style={{ fontWeight: "var(--weight-semibold)", fontSize: "var(--text-sm)", lineHeight: 1.4 }}>{title}</div> : null}
        {children ? <div style={{ fontSize: "var(--text-sm)", color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)" }}>{children}</div> : null}
      </div>
    </div>
  );
}
