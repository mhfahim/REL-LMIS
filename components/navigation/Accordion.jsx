import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Accordion — vertically stacked, collapsible sections.
 * items=[{ value, title, content }]. allowMultiple optional.
 */
export function Accordion({ items = [], defaultValue, allowMultiple = false, className = "", style = {} }) {
  const init = defaultValue == null ? [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const [open, setOpen] = React.useState(init);
  const toggle = (v) => {
    setOpen((prev) => {
      const has = prev.includes(v);
      if (allowMultiple) return has ? prev.filter((x) => x !== v) : [...prev, v];
      return has ? [] : [v];
    });
  };
  return (
    <div className={className} style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", fontFamily: "var(--font-sans)", ...style }}>
      {items.map((it, i) => {
        const isOpen = open.includes(it.value);
        return (
          <div key={it.value} style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)" }}>
            <button
              type="button"
              onClick={() => toggle(it.value)}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "12px", padding: "16px", background: "transparent", border: "none", cursor: "pointer",
                fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--foreground)", textAlign: "left",
              }}
            >
              {it.title}
              <span style={{ color: "var(--muted-foreground)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s ease", display: "inline-flex" }}>
                <Icon name="chevron-down" size={16} />
              </span>
            </button>
            {isOpen ? (
              <div style={{ padding: "0 16px 16px", fontSize: "var(--text-sm)", color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)" }}>{it.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
