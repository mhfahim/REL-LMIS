import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Select — native-backed dropdown styled to match the system.
 * Pass options=[{value,label}] or children <option>.
 */
export function Select({ value, defaultValue, onChange, options, disabled = false, placeholder, id, className = "", style = {}, children }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: "relative", display: "inline-flex", width: "100%", ...style }}>
      <select
        id={id}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value, e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={className}
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          height: "36px",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--input)",
          background: "var(--background)",
          padding: "0 32px 0 12px",
          fontSize: "var(--text-sm)",
          fontFamily: "var(--font-sans)",
          color: "var(--foreground)",
          outline: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transition: "border-color .15s ease, box-shadow .15s ease",
          ...(focus ? { borderColor: "var(--ring)", boxShadow: "0 0 0 3px rgba(30,41,59,0.15)" } : {}),
        }}
      >
        {placeholder ? <option value="" disabled hidden>{placeholder}</option> : null}
        {options ? options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>) : children}
      </select>
      <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--muted-foreground)", display: "inline-flex" }}>
        <Icon name="chevron-down" size={16} />
      </span>
    </div>
  );
}
