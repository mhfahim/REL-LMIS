import React from "react";

/**
 * Skeleton — animated loading placeholder block.
 */
export function Skeleton({ width = "100%", height = "16px", radius = "var(--radius-md)", className = "", style = {}, ...rest }) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: radius,
        background: "var(--muted)",
        animation: "rl-skeleton-pulse 1.6s ease-in-out infinite",
        ...style,
      }}
      {...rest}
    >
      <style>{`@keyframes rl-skeleton-pulse{0%,100%{opacity:1}50%{opacity:.5}}`}</style>
    </div>
  );
}
