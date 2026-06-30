import React from "react";

/**
 * Progress — horizontal determinate progress bar (0–100).
 */
export function Progress({ value = 0, className = "", style = {}, color = "var(--primary)", ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={className}
      style={{
        width: "100%",
        height: "8px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "var(--radius-full)", transition: "width .3s ease" }} />
    </div>
  );
}
