import React from "react";

/**
 * DropdownMenu — click-triggered menu.
 * trigger = element; items = [{ label, icon?, onSelect?, danger?, disabled?, separator? }].
 */
export function DropdownMenu({ trigger, items = [], align = "start", className = "", style = {} }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return (
    <span ref={ref} className={className} style={{ position: "relative", display: "inline-flex", ...style }}>
      <span onClick={() => setOpen((o) => !o)} style={{ display: "inline-flex" }}>{trigger}</span>
      {open ? (
        <div
          role="menu"
          style={{
            position: "absolute", top: "calc(100% + 6px)",
            [align === "end" ? "right" : "left"]: 0,
            minWidth: "180px",
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            padding: "4px",
            zIndex: 80,
            fontFamily: "var(--font-sans)",
            animation: "rl-dd-pop .12s ease",
          }}
        >
          <style>{`@keyframes rl-dd-pop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}`}</style>
          {items.map((it, i) => it.separator ? (
            <div key={i} style={{ height: "1px", background: "var(--border)", margin: "4px 0" }} />
          ) : (
            <MenuItem key={i} item={it} onClose={() => setOpen(false)} />
          ))}
        </div>
      ) : null}
    </span>
  );
}

function MenuItem({ item, onClose }) {
  const [hover, setHover] = React.useState(false);
  const disabled = !!item.disabled;
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      aria-disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => { if (disabled) return; item.onSelect?.(); onClose(); }}
      style={{
        display: "flex", alignItems: "center", gap: "8px", width: "100%",
        padding: "7px 8px", border: "none", borderRadius: "var(--radius-sm)",
        background: hover && !disabled ? (item.danger ? "rgba(220,38,38,0.1)" : "var(--accent)") : "transparent",
        color: disabled ? "var(--muted-foreground)" : item.danger ? "var(--destructive)" : "var(--foreground)",
        opacity: disabled ? 0.55 : 1,
        fontSize: "var(--text-sm)", fontFamily: "var(--font-sans)", cursor: disabled ? "not-allowed" : "pointer", textAlign: "left",
      }}
    >
      {item.icon}{item.label}
    </button>
  );
}
