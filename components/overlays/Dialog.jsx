import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Dialog — modal overlay. Controlled via `open` / `onClose`.
 * Compose children freely; pass `title` + `description` for the header.
 */
export function Dialog({ open, onClose, title, description, className = "", style = {}, width = 440, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(15,23,42,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "rl-dialog-fade .15s ease",
      }}
      onClick={onClose}
    >
      <style>{`@keyframes rl-dialog-fade{from{opacity:0}to{opacity:1}}@keyframes rl-dialog-pop{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`}</style>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={className}
        style={{
          width, maxWidth: "100%",
          background: "var(--popover)",
          color: "var(--popover-foreground)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          fontFamily: "var(--font-sans)",
          animation: "rl-dialog-pop .15s ease",
          position: "relative",
          ...style,
        }}
      >
        {onClose ? (
          <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: "16px", right: "16px", background: "transparent", border: "none", cursor: "pointer", color: "var(--muted-foreground)", display: "inline-flex", padding: "4px", borderRadius: "var(--radius-sm)" }}>
            <Icon name="x" size={18} />
          </button>
        ) : null}
        {(title || description) ? (
          <div style={{ padding: "24px 24px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
            {title ? <div style={{ fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", letterSpacing: "-0.01em" }}>{title}</div> : null}
            {description ? <div style={{ fontSize: "var(--text-sm)", color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)" }}>{description}</div> : null}
          </div>
        ) : null}
        <div style={{ padding: "20px 24px 24px" }}>{children}</div>
      </div>
    </div>
  );
}

export function DialogFooter({ style = {}, children }) {
  return <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px", ...style }}>{children}</div>;
}
