import React from "react";
import { Icon } from "../../assets/icons/Icon.jsx";

/**
 * Breadcrumb — hierarchical navigation trail.
 * items=[{ label, href? }] — last item is the current page.
 */
export function Breadcrumb({ items = [], className = "", style = {} }) {
  return (
    <nav aria-label="Breadcrumb" className={className} style={{ ...style }}>
      <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", margin: 0, padding: 0, listStyle: "none", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)" }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {last ? (
                <span style={{ color: "var(--foreground)", fontWeight: "var(--weight-medium)" }} aria-current="page">{it.label}</span>
              ) : (
                <a href={it.href || "#"} style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>{it.label}</a>
              )}
              {!last ? <span style={{ color: "var(--muted-foreground)", display: "inline-flex" }}><Icon name="chevron-right" size={14} /></span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
