// LIMSKit — shared UX patterns for the Reliance LIMS screens:
// consistent status badges, empty / loading / error states.
// Exposes window.LIMSKit.
(function () {
  const { Skeleton, Button, Icon, Card, CardContent } = window.RelianceLIMSDesignSystem_12526c;

  // ---- Status badge: one soft pill style with a leading dot ----
  const TONES = {
    success: { bg: "rgba(22,163,74,0.12)", fg: "rgb(21,128,61)", dot: "var(--success)" },
    warning: { bg: "rgba(217,119,6,0.12)", fg: "rgb(180,83,9)", dot: "var(--warning)" },
    danger: { bg: "rgba(220,38,38,0.10)", fg: "rgb(185,28,28)", dot: "var(--destructive)" },
    neutral: { bg: "var(--muted)", fg: "var(--muted-foreground)", dot: "rgb(100,116,139)" },
    navy: { bg: "var(--brand-subtle)", fg: "var(--brand)", dot: "var(--brand)" },
  };
  // canonical status -> tone
  const STATUS_TONE = {
    "Clean": "success", "Recorded": "success", "Paid": "success", "Resolved": "success", "Available": "success", "Settled": "success",
    "Pending mutation": "warning", "Under negotiation": "warning", "Under Negotiation": "warning", "Pending": "warning", "Pending hearing": "warning", "Unresolved": "warning",
    "Under Review": "warning", "In Court": "warning", "Hearing Pending": "warning", "Hearing": "warning", "At risk": "warning",
    "Disputed": "danger", "Locked": "danger", "Overdue": "danger", "High-risk": "danger", "High": "danger", "Rejected": "danger",
    "Under verification": "neutral", "Draft": "neutral", "Open": "neutral", "Not Started": "neutral", "Submitted": "neutral", "On track": "success", "Approved": "success", "Medium": "warning", "Low": "neutral", "—": "neutral",
    "Due": "warning", "Due Soon": "warning", "Receipt missing": "warning", "Active": "success", "Inactive": "neutral",
    "Imported": "success", "Completed": "success", "Validating": "warning", "Mapping": "warning", "Partial": "warning", "Errors": "danger", "Pending review": "warning", "Open": "warning", "Warning": "warning", "Fixed": "success",
  };
  const TYPE_TONE = { "Purchase": "neutral", "Sale": "navy", "Awaz": "navy", "Khajna": "neutral" };

  function Pill({ tone, children }) {
    const t = TONES[tone] || TONES.neutral;
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 9px 2px 8px", borderRadius: "var(--radius-full)", background: t.bg, color: t.fg, fontSize: 12, fontWeight: 600, fontFamily: "var(--font-sans)", lineHeight: 1.5, whiteSpace: "nowrap" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />
        {children}
      </span>
    );
  }
  function StatusBadge({ status }) {
    return <Pill tone={STATUS_TONE[status] || "neutral"}>{status}</Pill>;
  }
  function TypeBadge({ type }) {
    const t = TONES[TYPE_TONE[type] || "neutral"];
    return <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 9px", borderRadius: "var(--radius-full)", background: t.bg, color: t.fg, fontSize: 12, fontWeight: 600, fontFamily: "var(--font-sans)", lineHeight: 1.5, whiteSpace: "nowrap" }}>{type}</span>;
  }

  // ---- Empty state ----
  function EmptyState({ icon = "folder", title, detail, actionLabel, onAction, compact }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: compact ? "28px 24px" : "48px 24px", fontFamily: "var(--font-sans)" }}>
        <span style={{ width: 48, height: 48, borderRadius: "var(--radius-lg)", background: "var(--muted)", color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={icon} size={22} />
        </span>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
        {detail ? <div style={{ fontSize: 13.5, color: "var(--muted-foreground)", maxWidth: 380, lineHeight: "var(--leading-normal)" }}>{detail}</div> : null}
        {actionLabel ? <Button variant="outline" size="sm" onClick={onAction} style={{ marginTop: 4 }}>{actionLabel}</Button> : null}
      </div>
    );
  }

  // ---- Error state ----
  function ErrorState({ title = "Couldn't load data", detail = "The registry service did not respond. Check your connection and try again.", onRetry }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "44px 24px", fontFamily: "var(--font-sans)" }}>
        <span style={{ width: 48, height: 48, borderRadius: "var(--radius-lg)", background: "rgba(220,38,38,0.10)", color: "var(--destructive)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="alert-circle" size={22} />
        </span>
        <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
        <div style={{ fontSize: 13.5, color: "var(--muted-foreground)", maxWidth: 380, lineHeight: "var(--leading-normal)" }}>{detail}</div>
        {onRetry ? <Button variant="outline" size="sm" onClick={onRetry} style={{ marginTop: 4 }}><Icon name="refresh-cw" size={14} />Retry</Button> : null}
      </div>
    );
  }

  // ---- Loading skeletons ----
  function KpiSkeleton() {
    return (
      <Card><CardContent style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton width={90} height={12} />
          <Skeleton width={34} height={34} radius="var(--radius-md)" />
        </div>
        <Skeleton width={120} height={26} style={{ marginTop: 12 }} />
        <Skeleton width={80} height={11} style={{ marginTop: 8 }} />
      </CardContent></Card>
    );
  }
  function TableSkeleton({ rows = 5, cols = 6 }) {
    return (
      <div style={{ padding: "8px 16px 16px" }}>
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16, padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
            {Array.from({ length: cols }).map((_, c) => <Skeleton key={c} width={c === 0 ? "70%" : "55%"} height={13} />)}
          </div>
        ))}
      </div>
    );
  }

  // ---- Fake async load hook ----
  function useFakeLoad(ms = 650) {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      setLoading(true);
      const id = setTimeout(() => setLoading(false), ms);
      return () => clearTimeout(id);
    }, []);
    return loading;
  }

  window.LIMSKit = { StatusBadge, TypeBadge, Pill, EmptyState, ErrorState, KpiSkeleton, TableSkeleton, useFakeLoad };
})();
