import React from "react";

const RadioContext = React.createContext(null);

/**
 * RadioGroup — single-select group. Wrap RadioGroupItem children.
 */
export function RadioGroup({ value, defaultValue, onChange, disabled = false, className = "", style = {}, children }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const select = (v) => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return (
    <RadioContext.Provider value={{ current, select, disabled }}>
      <div role="radiogroup" className={className} style={{ display: "flex", flexDirection: "column", gap: "10px", ...style }}>
        {children}
      </div>
    </RadioContext.Provider>
  );
}

/**
 * RadioGroupItem — a single option within a RadioGroup.
 */
export function RadioGroupItem({ value, id, disabled: itemDisabled = false, className = "", style = {} }) {
  const ctx = React.useContext(RadioContext);
  const checked = ctx?.current === value;
  const disabled = itemDisabled || ctx?.disabled;
  return (
    <button
      type="button"
      role="radio"
      id={id}
      aria-checked={checked}
      disabled={disabled}
      onClick={() => ctx?.select(value)}
      className={className}
      style={{
        width: "16px",
        height: "16px",
        flexShrink: 0,
        borderRadius: "var(--radius-full)",
        border: `1px solid ${checked ? "var(--primary)" : "var(--input)"}`,
        background: "var(--background)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        padding: 0,
        ...style,
      }}
    >
      {checked ? <span style={{ width: "8px", height: "8px", borderRadius: "var(--radius-full)", background: "var(--primary)" }} /> : null}
    </button>
  );
}
