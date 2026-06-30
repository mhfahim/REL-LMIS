import React from "react";

/**
 * Slider — single-thumb range input styled to the system.
 */
export function Slider({ value, defaultValue = 50, onChange, min = 0, max = 100, step = 1, disabled = false, id, className = "", style = {} }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = isControlled ? value : internal;
  const pct = ((v - min) / (max - min)) * 100;
  const set = (nv) => {
    if (!isControlled) setInternal(nv);
    onChange?.(nv);
  };
  return (
    <div className={className} style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", height: "20px", ...style }}>
      <div style={{ position: "absolute", left: 0, right: 0, height: "4px", borderRadius: "var(--radius-full)", background: "var(--secondary)" }} />
      <div style={{ position: "absolute", left: 0, width: `${pct}%`, height: "4px", borderRadius: "var(--radius-full)", background: "var(--primary)" }} />
      <div style={{ position: "absolute", left: `calc(${pct}% - 8px)`, width: "16px", height: "16px", borderRadius: "var(--radius-full)", background: "var(--background)", border: "2px solid var(--primary)", boxShadow: "var(--shadow-sm)", pointerEvents: "none" }} />
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        disabled={disabled}
        onChange={(e) => set(Number(e.target.value))}
        style={{ position: "absolute", left: 0, width: "100%", height: "20px", margin: 0, opacity: 0, cursor: disabled ? "not-allowed" : "pointer" }}
      />
    </div>
  );
}
