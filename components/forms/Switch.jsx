import React from "react";

/**
 * Switch — on/off toggle (pill).
 */
export function Switch({ checked, defaultChecked = false, onChange, disabled = false, id, className = "", style = {} }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={on}
      disabled={disabled}
      onClick={toggle}
      className={className}
      style={{
        width: "36px",
        height: "20px",
        flexShrink: 0,
        borderRadius: "var(--radius-full)",
        border: "1px solid transparent",
        background: on ? "var(--primary)" : "var(--input)",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        padding: 0,
        transition: "background-color .2s ease",
        ...style,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "1px",
          left: on ? "17px" : "1px",
          width: "16px",
          height: "16px",
          borderRadius: "var(--radius-full)",
          background: "var(--background)",
          boxShadow: "var(--shadow-sm)",
          transition: "left .2s ease",
        }}
      />
    </button>
  );
}
