import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Checkbox — controlled or uncontrolled boolean toggle (square).
 */
export function Checkbox({ checked, defaultChecked = false, onChange, disabled = false, indeterminate = false, id, className = "", style = {} }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const active = on || indeterminate;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  return (
    <button
      type="button"
      role="checkbox"
      id={id}
      aria-checked={indeterminate ? "mixed" : on}
      disabled={disabled}
      onClick={toggle}
      className={className}
      style={{
        width: "16px",
        height: "16px",
        flexShrink: 0,
        borderRadius: "var(--radius-sm)",
        border: `1px solid ${active ? "var(--primary)" : "var(--input)"}`,
        background: active ? "var(--primary)" : "var(--background)",
        color: "var(--primary-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        padding: 0,
        transition: "background-color .15s ease, border-color .15s ease",
        ...style,
      }}
    >
      {indeterminate ? <Icon name="minus" size={12} strokeWidth={3} /> : on ? <Icon name="check" size={12} strokeWidth={3} /> : null}
    </button>
  );
}
