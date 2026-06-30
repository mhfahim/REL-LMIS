import React from "react";

/**
 * Textarea — multi-line text field.
 */
export function Textarea({ className = "", style = {}, disabled = false, invalid = false, rows = 4, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={className}
      onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
      style={{
        display: "flex",
        width: "100%",
        minHeight: "72px",
        boxSizing: "border-box",
        borderRadius: "var(--radius-md)",
        border: `1px solid ${invalid ? "var(--destructive)" : "var(--input)"}`,
        background: "var(--background)",
        padding: "8px 12px",
        fontSize: "var(--text-sm)",
        fontFamily: "var(--font-sans)",
        lineHeight: "var(--leading-normal)",
        color: "var(--foreground)",
        outline: "none",
        resize: "vertical",
        transition: "border-color .15s ease, box-shadow .15s ease",
        ...(focus ? { borderColor: invalid ? "var(--destructive)" : "var(--ring)", boxShadow: `0 0 0 3px ${invalid ? "rgba(220,38,38,0.15)" : "rgba(30,41,59,0.15)"}` } : {}),
        ...(disabled ? { opacity: 0.5, cursor: "not-allowed", background: "var(--muted)" } : {}),
        ...style,
      }}
      {...rest}
    />
  );
}
