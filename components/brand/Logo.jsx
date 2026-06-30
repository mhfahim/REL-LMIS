import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Logo — the Reliance LIMS lockup: a land/map mark in a rounded tile
 * plus the wordmark. Use `markOnly` for compact placements.
 */
export function Logo({ size = 28, markOnly = false, color = "var(--primary)", className = "", style = {} }) {
  const mark = (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: color,
        color: "var(--primary-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon name="map" size={size * 0.6} strokeWidth={2.2} />
    </span>
  );
  if (markOnly) return <span className={className} style={style}>{mark}</span>;
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: size * 0.34, ...style }}>
      {mark}
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--weight-bold)", fontSize: size * 0.62, letterSpacing: "-0.02em", color: "var(--foreground)" }}>
          Reliance<span style={{ color: "var(--brand)" }}> LIMS</span>
        </span>
      </span>
    </span>
  );
}
