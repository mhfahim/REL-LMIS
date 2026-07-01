// InventoryOverview — operational land stock register for project, mouza and
// status-level inventory control. Distinct from the executive dashboard and
// Dag Directory. Exposes window.InventoryOverview.
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

  function Kpi({ k, compact }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return (
      <Card>
        <CardContent style={{ padding: compact ? 14 : 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <span style={{ fontSize: compact ? 12 : 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>{k.label}</span>
            <span style={{ width: compact ? 28 : 30, height: compact ? 28 : 30, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={k.icon} size={compact ? 14 : 15} /></span>
          </div>
          <div style={{ fontSize: compact ? 18 : 22, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 7, fontFamily: "var(--font-mono)" }}>{k.value}</div>
          <div style={{ fontSize: compact ? 11.5 : 12, color: "var(--muted-foreground)", marginTop: 2 }}>{k.sub}</div>
        </CardContent>
      </Card>
    );
  }

  function RiskPanel({ onNavigate, onOpenFiltered }) {
    const handleRiskClick = (r) => {
      if (r.label.includes("Disputed dags")) {
        onOpenFiltered && onOpenFiltered({ status: "Disputed" });
        return;
      }
      if (r.label.includes("Mutation pending")) {
        onNavigate && onNavigate("mutation");
        return;
      }
      if (r.label.includes("Khajna overdue")) {
        onNavigate && onNavigate("khajna");
        return;
      }
      if (r.label.includes("Possible duplicate deeds")) {
        onNavigate && onNavigate("ledger");
        return;
      }
      if (r.label.includes("Low remaining balance")) {
        onOpenFiltered && onOpenFiltered({ q: "low balance" });
        return;
      }
      if (r.go && onNavigate) onNavigate(r.go);
    };

    return (
      <Card>
        <CardContent style={{ padding: "12px 14px", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--muted-foreground)", letterSpacing: "0.04em", textTransform: "uppercase", marginRight: 6 }}>Risk &amp; attention</div>
          {D.inventoryRisk.map((r, i) => {
            const t = toneTile[r.tone] || toneTile.neutral;
            return (
              <button key={i} type="button" onClick={() => handleRiskClick(r)} className="lims-rowlink" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--background)", cursor: "pointer", color: "var(--foreground)" }}>
                <span style={{ width: 24, height: 24, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={r.icon} size={13} /></span>
                <span style={{ fontSize: 12.5, fontWeight: 600 }}>{r.label}</span>
                <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-mono)", color: t.fg }}>{r.value}</span>
              </button>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  const ar = { textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 };
  function colorCell(v, color) { return { ...ar, color: parseFloat(v) ? color : "var(--muted-foreground)", fontWeight: parseFloat(v) ? 600 : 400 }; }

  function ByProject({ onOpenFiltered }) {
    return (
      <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
        <Table className="lims-table" style={{ minWidth: 1030 }}>
          <TableHeader><TableRow>
            <TableHead>Project</TableHead>
            <TableHead style={{ textAlign: "right" }}>Dags</TableHead>
            <TableHead style={{ textAlign: "right" }}>Total area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Clean</TableHead>
            <TableHead style={{ textAlign: "right" }}>Disputed</TableHead>
            <TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
            <TableHead style={{ textAlign: "right" }}>Mutation</TableHead>
            <TableHead style={{ textAlign: "right" }}>Khajna due</TableHead>
            <TableHead style={{ width: 150, textAlign: "right" }}>Action</TableHead>
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
                  <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFiltered({ project: r.project })}>View project dags</Button>
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
        <Table className="lims-table" style={{ minWidth: 860 }}>
          <TableHeader><TableRow>
            <TableHead>Mouza</TableHead>
            <TableHead style={{ textAlign: "right" }}>Dags</TableHead>
            <TableHead style={{ textAlign: "right" }}>Total area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Clean</TableHead>
            <TableHead style={{ textAlign: "right" }}>Disputed</TableHead>
            <TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
            <TableHead style={{ width: 150, textAlign: "right" }}>Action</TableHead>
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
                  <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFiltered({ mouza: r.mouza })}>View mouza dags</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    );
  }

  function ByBucketStatus({ onOpenFiltered }) {
    return (
      <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
        <Table className="lims-table" style={{ minWidth: 980 }}>
          <TableHeader><TableRow>
            <TableHead>Bucket / status</TableHead>
            <TableHead style={{ textAlign: "right" }}>Dags</TableHead>
            <TableHead style={{ textAlign: "right" }}>Total area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Clean area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Disputed area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Under neg. area</TableHead>
            <TableHead style={{ textAlign: "right" }}>Locked dags</TableHead>
            <TableHead style={{ textAlign: "right" }}>Available balance</TableHead>
            <TableHead style={{ width: 150, textAlign: "right" }}>Action</TableHead>
          </TableRow></TableHeader>
          <TableBody>
            {D.inventoryByBucket.map((r) => (
              <TableRow key={r.bucket}>
                <TableCell style={{ fontWeight: 600 }}>{r.bucket}</TableCell>
                <TableCell style={ar}>{r.dags}</TableCell>
                <TableCell style={ar}>{r.area}</TableCell>
                <TableCell style={colorCell(r.clean, "var(--success)")}>{r.clean}</TableCell>
                <TableCell style={colorCell(r.disputed, "var(--destructive)")}>{r.disputed}</TableCell>
                <TableCell style={colorCell(r.neg, "var(--warning)")}>{r.neg}</TableCell>
                <TableCell style={{ ...ar, color: r.locked ? "var(--warning)" : "var(--muted-foreground)" }}>{r.locked}</TableCell>
                <TableCell style={{ ...ar, color: "var(--foreground)" }}>{r.balance}</TableCell>
                <TableCell style={{ textAlign: "right" }}>
                  <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFiltered({ status: r.status })}>View related dags</Button>
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
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Inventory Overview" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 12, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Inventory Overview</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Land stock register by project, mouza, and status. Drill down to individual dags.</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("reports")}><Icon name="download" size={15} />Generate inventory report</Button>
              <Button variant="outline" size="sm" onClick={() => goFiltered({ status: "Disputed" })}><Icon name="gavel" size={15} />View disputed land</Button>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("dag-directory")}><Icon name="map-pin" size={15} />Open Dag Directory</Button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          {loading ? Array.from({ length: 5 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.inventoryKpis.slice(0, 5).map((k) => <Kpi key={k.label} k={k} compact />)}
        </div>

        <RiskPanel onNavigate={onNavigate} onOpenFiltered={goFiltered} />

        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
          <Tabs value={tab} onChange={setTab}>
            <TabsList style={{ width: "100%", display: "flex" }}>
              <TabsTrigger value="project" style={{ flex: 1, justifyContent: "center" }}>By project</TabsTrigger>
              <TabsTrigger value="mouza" style={{ flex: 1, justifyContent: "center" }}>By mouza</TabsTrigger>
              <TabsTrigger value="bucket" style={{ flex: 1, justifyContent: "center" }}>By bucket / status</TabsTrigger>
            </TabsList>
          </Tabs>
          {loading ? <Card><CardContent style={{ padding: 0 }}><K.TableSkeleton rows={5} cols={8} /></CardContent></Card>
            : tab === "project" ? <ByProject onOpenFiltered={goFiltered} /> : tab === "mouza" ? <ByMouza onOpenFiltered={goFiltered} /> : <ByBucketStatus onOpenFiltered={goFiltered} />}
        </div>
      </div>
    );
  }
  window.InventoryOverview = InventoryOverview;
})();
