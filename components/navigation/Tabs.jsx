import React from "react";

const TabsContext = React.createContext(null);

/**
 * Tabs — segmented content switcher. Compose TabsList>TabsTrigger + TabsContent.
 */
export function Tabs({ value, defaultValue, onChange, className = "", style = {}, children }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const select = (v) => { if (!isControlled) setInternal(v); onChange?.(v); };
  return (
    <TabsContext.Provider value={{ current, select }}>
      <div className={className} style={{ display: "flex", flexDirection: "column", gap: "16px", ...style }}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = "", style = {}, children }) {
  return (
    <div className={className} style={{ display: "inline-flex", gap: "2px", padding: "3px", background: "var(--muted)", borderRadius: "var(--radius-lg)", ...style }}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = "", style = {}, children }) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.current === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => ctx?.select(value)}
      className={className}
      style={{
        appearance: "none",
        border: "none",
        cursor: "pointer",
        padding: "6px 14px",
        borderRadius: "var(--radius-md)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        fontFamily: "var(--font-sans)",
        background: active ? "var(--background)" : "transparent",
        color: active ? "var(--foreground)" : "var(--muted-foreground)",
        boxShadow: active ? "var(--shadow-sm)" : "none",
        transition: "background-color .15s ease, color .15s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", style = {}, children }) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.current !== value) return null;
  return <div role="tabpanel" className={className} style={style}>{children}</div>;
}
