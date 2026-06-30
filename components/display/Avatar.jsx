import React from "react";

const sizes = { sm: 28, default: 36, lg: 48 };

/**
 * Avatar — user/entity image with initials fallback.
 */
export function Avatar({ src, alt = "", initials, size = "default", className = "", style = {}, ...rest }) {
  const px = typeof size === "number" ? size : (sizes[size] || sizes.default);
  const [err, setErr] = React.useState(false);
  return (
    <span
      className={className}
      style={{
        width: px,
        height: px,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: px * 0.4,
        fontWeight: "var(--weight-medium)",
        fontFamily: "var(--font-sans)",
        flexShrink: 0,
        userSelect: "none",
        ...style,
      }}
      {...rest}
    >
      {src && !err ? (
        <img src={src} alt={alt} onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials || alt.slice(0, 2).toUpperCase()
      )}
    </span>
  );
}
