// InventoryDashboard — KPIs, holding breakdown, alert center, recent
// transactions, quick actions. Exposes window.InventoryDashboard.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Button, Breadcrumb } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;

  const toneTile = {
    neutral: { bg: "var(--muted)", fg: "var(--foreground)" },
    success: { bg: "rgba(22,163,74,0.12)", fg: "var(--success)" },
    warning: { bg: "rgba(217,119,6,0.12)", fg: "var(--warning)" },
    destructive: { bg: "rgba(220,38,38,0.10)", fg: "var(--destructive)" },
  };
  const alertTone = {
    destructive: { bg: "rgba(220,38,38,0.07)", bd: "rgba(220,38,38,0.22)", fg: "var(--destructive)" },
    warning: { bg: "rgba(217,119,6,0.07)", bd: "rgba(217,119,6,0.25)", fg: "var(--warning)" },
  };

  function Kpi({ k }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return (
      <Card>
        <CardContent style={{ padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <span style={{ fontSize: 13, color: "var(--muted-foreground)", fontWeight: 500 }}>{k.label}</span>
            <span style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={k.icon} size={17} />
            </span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10, fontFamily: "var(--font-mono)" }}>{k.value}</div>
          <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 4 }}>{k.sub}</div>
        </CardContent>
      </Card>
    );
  }

  function HoldingBreakdown() {
    const segs = D.holdingBreakdown;
    return (
      <Card>
        <CardHeader><CardTitle>Holding breakdown</CardTitle></CardHeader>
        <CardContent style={{ paddingTop: 4 }}>
          <div style={{ display: "flex", height: 14, borderRadius: "var(--radius-full)", overflow: "hidden", background: "var(--muted)", gap: 2 }}>
            {segs.map((s) => <div key={s.label} title={`${s.label} ${s.pct}%`} style={{ width: `${s.pct}%`, background: s.color }} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
            {segs.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{s.label}</span>
                <span style={{ fontSize: 13, color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{s.area}</span>
                <span style={{ fontSize: 13, fontWeight: 600, width: 52, textAlign: "right", fontFamily: "var(--font-mono)" }}>{s.pct}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  function AlertCenter({ onNavigate }) {
    const alerts = D.alerts;
    return (
      <Card>
        <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <CardTitle>Alert center</CardTitle>
          {alerts.length ? <K.Pill tone="danger">{alerts.length} active</K.Pill> : null}
        </CardHeader>
        <CardContent style={{ padding: alerts.length ? "8px 12px 12px" : "0 12px 4px", display: "flex", flexDirection: "column", gap: 8 }}>
          {alerts.length === 0 ? (
            <K.EmptyState compact icon="shield-check" title="All clear" detail="No active alerts on the portfolio right now." />
          ) : alerts.map((a, i) => {
            const t = alertTone[a.sev];
            return (
              <div key={i} role="button" tabIndex={0} onClick={() => a.go && onNavigate && onNavigate(a.go)} title="View details" style={{ display: "flex", gap: 11, padding: "10px 12px", borderRadius: "var(--radius-md)", background: t.bg, border: `1px solid ${t.bd}`, cursor: a.go ? "pointer" : "default" }}>
                <span style={{ color: t.fg, flexShrink: 0, marginTop: 1 }}><Icon name={a.icon} size={17} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{a.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 1 }}>{a.detail}</div>
                </div>
                <span style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  <span style={{ fontSize: 11.5, color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{a.time}</span>
                  {a.go ? <Icon name="chevron-right" size={15} style={{ color: "var(--muted-foreground)" }} /> : null}
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  function QuickActions({ onNavigate }) {
    const actions = [
      { label: "Add Transaction", icon: "plus", variant: "default", go: "add-transaction" },
      { label: "View Dag Ledger", icon: "receipt", variant: "outline", go: "ledger" },
      { label: "Upload Excel Data", icon: "upload", variant: "outline", go: "migration" },
      { label: "Generate Report", icon: "bar-chart", variant: "outline", go: "reports" },
    ];
    return (
      <Card>
        <CardHeader><CardTitle>Quick actions</CardTitle></CardHeader>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {actions.map((a) => (
            <Button key={a.label} variant={a.variant} onClick={() => a.go && onNavigate && onNavigate(a.go)} style={{ width: "100%", justifyContent: "flex-start" }}>
              <Icon name={a.icon} size={16} />{a.label}
            </Button>
          ))}
        </CardContent>
      </Card>
    );
  }

  function RecentTransactions({ onOpenDag, onNavigate, loading }) {
    return (
      <Card>
        <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <CardTitle>Recent transactions</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => onNavigate && onNavigate("ledger")}>View all <Icon name="chevron-right" size={14} /></Button>
        </CardHeader>
        <CardContent style={{ padding: "4px 0 0" }}>
          {loading ? <K.TableSkeleton rows={6} cols={7} /> : (
            <Table className="lims-table">
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Dag no.</TableHead>
                  <TableHead>Mouza</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Area</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead style={{ width: 64, textAlign: "right" }}>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {D.recentTransactions.map((t, i) => (
                  <TableRow key={i} style={{ cursor: "pointer" }} onClick={() => onOpenDag && onOpenDag(t.dag)}>
                    <TableCell style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 13, whiteSpace: "nowrap" }}>{t.date}</TableCell>
                    <TableCell><K.TypeBadge type={t.type} /></TableCell>
                    <TableCell><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{t.dag}</span></TableCell>
                    <TableCell>{t.mouza}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right" }}>{t.area}</TableCell>
                    <TableCell><K.StatusBadge status={t.status} /></TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenDag && onOpenDag(t.dag)}>Open</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    );
  }

  function InventoryDashboard({ onOpenDag, onNavigate }) {
    const loading = K.useFakeLoad(650);
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Executive Dashboard" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16 }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Executive Dashboard</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Portfolio overview as of 12 Jun 2025, 09:20</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("dag-directory")}><Icon name="list-filter" size={15} />Browse dags</Button>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("add-transaction")}><Icon name="plus" size={15} />Add Transaction</Button>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {loading ? Array.from({ length: 6 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.kpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Two-column body */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <HoldingBreakdown />
            <RecentTransactions onOpenDag={onOpenDag} onNavigate={onNavigate} loading={loading} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <AlertCenter onNavigate={onNavigate} />
            <QuickActions onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    );
  }
  window.InventoryDashboard = InventoryDashboard;
})();
