import React from "react";

/**
 * Input — single-line text field.
 */
export function Input({ className = "", style = {}, disabled = false, invalid = false, type = "text", ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      type={type}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={className}
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      style={{
        display: "flex",
        height: "36px",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "var(--radius-md)",
        border: `1px solid ${invalid ? "var(--destructive)" : "var(--input)"}`,
        background: "var(--background)",
        padding: "0 12px",
        fontSize: "var(--text-sm)",
        fontFamily: "var(--font-sans)",
        color: "var(--foreground)",
        outline: "none",
        transition: "border-color .15s ease, box-shadow .15s ease",
        ...(focus ? { borderColor: invalid ? "var(--destructive)" : "var(--ring)", boxShadow: `0 0 0 3px ${invalid ? "rgba(220,38,38,0.15)" : "rgba(30,41,59,0.15)"}` } : {}),
        ...(disabled ? { opacity: 0.5, cursor: "not-allowed", background: "var(--muted)" } : {}),
        ...style,
      }}
      {...rest}
    />
  );
}
