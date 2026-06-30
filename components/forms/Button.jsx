import React from "react";

const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  whiteSpace: "nowrap",
  borderRadius: "var(--radius-md)",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-medium)",
  fontSize: "var(--text-sm)",
  lineHeight: 1,
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background-color .15s ease, color .15s ease, border-color .15s ease, box-shadow .15s ease, opacity .15s ease",
  userSelect: "none",
  textDecoration: "none",
};

const sizes = {
  sm: { height: "32px", padding: "0 12px", fontSize: "13px", borderRadius: "var(--radius-md)" },
  default: { height: "36px", padding: "0 16px" },
  lg: { height: "40px", padding: "0 24px", fontSize: "15px" },
  icon: { height: "36px", width: "36px", padding: "0" },
};

const variants = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
  },
  outline: {
    background: "var(--background)",
    color: "var(--foreground)",
    borderColor: "var(--border)",
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)",
  },
  link: {
    background: "transparent",
    color: "var(--primary)",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    height: "auto",
    padding: "0",
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
  },
  brand: {
    background: "var(--brand)",
    color: "var(--brand-foreground)",
  },
};

const hoverBg = {
  default: "rgba(15,23,42,0.92)",
  secondary: "rgba(226,232,240,0.7)",
  outline: "var(--accent)",
  ghost: "var(--accent)",
  link: "transparent",
  destructive: "rgba(220,38,38,0.9)",
  brand: "var(--brand)",
};

/**
 * Button — primary action control. shadcn variants + sizes.
 */
export function Button({
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.default;
  const composed = {
    ...base,
    ...s,
    ...v,
    ...(hover && !disabled ? { background: hoverBg[variant], ...(variant === "brand" ? { filter: "brightness(0.92)" } : {}), ...(variant === "link" ? { textDecorationColor: "currentColor" } : {}) } : {}),
    ...(disabled ? { opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" } : {}),
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
