// InventoryOverview — land stock control hub: holding breakdown, by-project &
// by-mouza tables, risk panel, quick actions. Distinct from Dag Directory
// (which is the searchable dag list). Exposes window.InventoryOverview.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Tabs, TabsList, TabsTrigger } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;

  const toneTile = {
    neutral: { bg: "var(--muted)", fg: "var(--foreground)" },
    success: { bg: "rgba(22,163,74,0.12)", fg: "var(--success)" },
    warning: { bg: "rgba(217,119,6,0.12)", fg: "var(--warning)" },
    destructive: { bg: "rgba(220,38,38,0.10)", fg: "var(--destructive)" },
  };
  function Kpi({ k }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return (
      <Card><CardContent style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>{k.label}</span>
          <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={k.icon} size={15} /></span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 8, fontFamily: "var(--font-mono)" }}>{k.value}</div>
        <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 3 }}>{k.sub}</div>
      </CardContent></Card>
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

  function RiskPanel({ onNavigate }) {
    return (
      <Card>
        <CardHeader><CardTitle>Risk &amp; attention</CardTitle></CardHeader>
        <CardContent style={{ padding: "4px 12px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
          {D.inventoryRisk.map((r, i) => {
            const t = toneTile[r.tone] || toneTile.neutral;
            return (
              <div key={i} role="button" tabIndex={0} onClick={() => r.go && onNavigate && onNavigate(r.go)} className="lims-rowlink" style={{ display: "flex", alignItems: "center", gap: 11, padding: "9px 10px", borderRadius: "var(--radius-md)", cursor: "pointer" }}>
                <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={r.icon} size={15} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{r.label}</div>
                  <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{r.detail}</div>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)", color: t.fg }}>{r.value}</span>
                <Icon name="chevron-right" size={15} style={{ color: "var(--muted-foreground)" }} />
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  function QuickActions({ onNavigate }) {
    const actions = [
      { label: "Open Dag Directory", icon: "map-pin", variant: "default", go: "dag-directory" },
      { label: "Add Transaction", icon: "plus", variant: "outline", go: "add-transaction" },
      { label: "Upload Excel Data", icon: "upload", variant: "outline", go: "migration" },
      { label: "Generate Inventory Report", icon: "bar-chart", variant: "outline", go: "reports" },
      { label: "View Disputed Land", icon: "gavel", variant: "outline", go: "disputes" },
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

  const ar = { textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 };
  function colorCell(v, color) { return { ...ar, color: parseFloat(v) ? color : "var(--muted-foreground)", fontWeight: parseFloat(v) ? 600 : 400 }; }

  function ByProject({ onOpenFiltered }) {
    return (
      <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
        <Table className="lims-table" style={{ minWidth: 920 }}>
          <TableHeader><TableRow>
            <TableHead>Project</TableHead><TableHead style={{ textAlign: "right" }}>Dags</TableHead><TableHead style={{ textAlign: "right" }}>Total area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Clean</TableHead><TableHead style={{ textAlign: "right" }}>Disputed</TableHead><TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
            <TableHead style={{ textAlign: "right" }}>Mutation</TableHead><TableHead style={{ textAlign: "right" }}>Khajna due</TableHead><TableHead style={{ width: 130, textAlign: "right" }}>Action</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {D.inventoryByProject.map((r) => (
              <TableRow key={r.project}>
                <TableCell style={{ fontWeight: 600 }}>{r.project}</TableCell>
                <TableCell style={ar}>{r.dags}</TableCell>
                <TableCell style={ar}>{r.area}</TableCell>
                <TableCell style={colorCell(r.clean, "var(--success)")}>{r.clean}</TableCell>
                <TableCell style={colorCell(r.disputed, "var(--destructive)")}>{r.disputed}</TableCell>
                <TableCell style={colorCell(r.neg, "var(--warning)")}>{r.neg}</TableCell>
                <TableCell style={{ ...ar, color: r.mutation ? "var(--warning)" : "var(--muted-foreground)" }}>{r.mutation}</TableCell>
                <TableCell style={{ ...ar, color: "var(--muted-foreground)" }}>{r.khajna}</TableCell>
                <TableCell style={{ textAlign: "right" }}>
                  <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFiltered({ project: r.project })}>View dags</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    );
  }

  function ByMouza({ onOpenFiltered }) {
    return (
      <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
        <Table className="lims-table" style={{ minWidth: 760 }}>
          <TableHeader><TableRow>
            <TableHead>Mouza</TableHead><TableHead style={{ textAlign: "right" }}>Dags</TableHead><TableHead style={{ textAlign: "right" }}>Total area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Clean</TableHead><TableHead style={{ textAlign: "right" }}>Disputed</TableHead><TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
            <TableHead style={{ width: 130, textAlign: "right" }}>Action</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {D.inventoryByMouza.map((r) => (
              <TableRow key={r.mouza}>
                <TableCell style={{ fontWeight: 600 }}>{r.mouza}</TableCell>
                <TableCell style={ar}>{r.dags}</TableCell>
                <TableCell style={ar}>{r.area}</TableCell>
                <TableCell style={colorCell(r.clean, "var(--success)")}>{r.clean}</TableCell>
                <TableCell style={colorCell(r.disputed, "var(--destructive)")}>{r.disputed}</TableCell>
                <TableCell style={colorCell(r.neg, "var(--warning)")}>{r.neg}</TableCell>
                <TableCell style={{ textAlign: "right" }}>
                  <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFiltered({ mouza: r.mouza })}>View dags</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    );
  }

  function InventoryOverview({ onNavigate, onOpenFiltered }) {
    const loading = K.useFakeLoad(550);
    const [tab, setTab] = React.useState("project");
    const goFiltered = onOpenFiltered || (() => onNavigate && onNavigate("dag-directory"));
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Inventory Overview" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Inventory Overview</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Land stock position by project, mouza, and bucket. Drill into Dag Directory for individual dags.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("reports")}><Icon name="download" size={15} />Inventory report</Button>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("dag-directory")}><Icon name="map-pin" size={15} />Open Dag Directory</Button>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12 }}>
          {loading ? Array.from({ length: 7 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.inventoryKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Breakdown + risk + quick actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20, alignItems: "start" }}>
          <HoldingBreakdown />
          <RiskPanel onNavigate={onNavigate} />
        </div>

        {/* By project / mouza */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Tabs value={tab} onChange={setTab}>
              <TabsList><TabsTrigger value="project">By project</TabsTrigger><TabsTrigger value="mouza">By mouza</TabsTrigger></TabsList>
            </Tabs>
            {loading ? <Card><CardContent style={{ padding: 0 }}><K.TableSkeleton rows={4} cols={8} /></CardContent></Card>
              : tab === "project" ? <ByProject onOpenFiltered={goFiltered} /> : <ByMouza onOpenFiltered={goFiltered} />}
          </div>
          <QuickActions onNavigate={onNavigate} />
        </div>
      </div>
    );
  }
  window.InventoryOverview = InventoryOverview;
})();
