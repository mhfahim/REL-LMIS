// DagDirectory — searchable/filterable registry of all dags; entry point to
// the Dag Profile detail page. Exposes window.DagDirectory.
(function () {
  const { Card, CardContent, Icon, Button, Input, Select, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

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
        <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 8, fontFamily: "var(--font-mono)" }}>{k.value}</div>
        <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 3 }}>{k.sub}</div>
      </CardContent></Card>
    );
  }

  function DagDirectory({ onOpenDag, initialFilter }) {
    const blank = { q: "", mouza: "", project: "", status: "", khajna: "", mutation: "" };
    const [f, setF] = React.useState({ ...blank, ...(initialFilter || {}) });
    React.useEffect(() => { if (initialFilter) setF((p) => ({ ...blank, ...initialFilter })); }, [initialFilter]);
    const [view, setView] = React.useState("table"); // table | cards
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const rows = D.dags.filter((r) => {
      if (f.q) { const h = [r.dag, r.mouza, r.khatian, r.project].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.project && r.project !== f.project) return false;
      if (f.status && r.status !== f.status) return false;
      if (f.khajna && r.khajna !== f.khajna) return false;
      if (f.mutation && r.mutation !== f.mutation) return false;
      return true;
    });

    const chips = [];
    [["q", "Search"], ["mouza", "Mouza"], ["project", "Project"], ["status", "Status"], ["khajna", "Khajna"], ["mutation", "Mutation"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Inventory", href: "#" }, { label: "Dag Directory" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Dag Directory</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Search and select a dag to open its full profile.</p>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div style={{ display: "inline-flex", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                <button onClick={() => setView("table")} aria-label="Table view" style={{ width: 34, height: 34, border: "none", cursor: "pointer", background: view === "table" ? "var(--secondary)" : "var(--background)", color: view === "table" ? "var(--foreground)" : "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="table" size={16} /></button>
                <button onClick={() => setView("cards")} aria-label="Card view" style={{ width: 34, height: 34, border: "none", borderLeft: "1px solid var(--border)", cursor: "pointer", background: view === "cards" ? "var(--secondary)" : "var(--background)", color: view === "cards" ? "var(--foreground)" : "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="layout-dashboard" size={16} /></button>
              </div>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export</Button>
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
          {loading ? Array.from({ length: 6 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.dagDirectoryKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search dag no., mouza, khatian, project, file no…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 150 }}><Select placeholder="All mouzas" options={opt(D.options.mouzas)} value={f.mouza} onChange={(v) => set("mouza", v)} /></div>
            <div style={{ width: 200 }}><Select placeholder="All projects" options={opt(D.options.projects)} value={f.project} onChange={(v) => set("project", v)} /></div>
            <div style={{ width: 160 }}><Select placeholder="All statuses" options={opt(["Clean", "Disputed", "Under Negotiation"])} value={f.status} onChange={(v) => set("status", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="Khajna status" options={opt(["Paid", "Due", "Due Soon", "Overdue"])} value={f.khajna} onChange={(v) => set("khajna", v)} /></div>
            <div style={{ width: 160 }}><Select placeholder="Mutation status" options={opt(["Submitted", "Under Review", "Hearing", "Approved", "Rejected"])} value={f.mutation} onChange={(v) => set("mutation", v)} /></div>
          </div>
          {chips.length ? (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
              <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>Active filters</span>
              {chips.map((c) => (
                <span key={c.k} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 6px 4px 10px", borderRadius: "var(--radius-full)", background: "var(--secondary)", border: "1px solid var(--border)", fontSize: 12.5, fontWeight: 500 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{c.label}:</span><span style={{ fontWeight: 600 }}>{c.value}</span>
                  <button onClick={() => set(c.k, "")} aria-label="Clear" style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", color: "var(--muted-foreground)", padding: 1 }}><Icon name="x" size={13} /></button>
                </span>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAll} style={{ height: 28 }}>Clear all</Button>
            </div>
          ) : null}
        </CardContent></Card>

        {/* Results */}
        {loading ? (
          <Card><CardContent style={{ padding: 0 }}><K.TableSkeleton rows={6} cols={7} /></CardContent></Card>
        ) : rows.length === 0 ? (
          <Card><CardContent style={{ padding: 0 }}><K.EmptyState icon="search" title="No dags match" detail="Adjust or clear your filters to see more of the registry." actionLabel="Clear filters" onAction={clearAll} /></CardContent></Card>
        ) : view === "cards" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {rows.map((r) => (
              <Card key={r.dag}>
                <CardContent style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{r.dag}</div>
                      <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 2 }}>{r.mouza} · {r.khatian}</div>
                    </div>
                    <K.StatusBadge status={r.status} />
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>{r.project}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[["Clean", r.clean, "var(--success)"], ["Disputed", r.disputed, "var(--destructive)"], ["Under neg.", r.neg, "var(--warning)"]].map(([lbl, val, col]) => (
                      <div key={lbl} style={{ flex: 1, padding: "8px 10px", borderRadius: "var(--radius-md)", background: "var(--muted)" }}>
                        <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>{lbl}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "var(--font-mono)", color: parseFloat(val) ? col : "var(--muted-foreground)" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12.5 }}>
                    <span style={{ color: "var(--muted-foreground)" }}>Khajna</span><K.StatusBadge status={r.khajna} />
                    <span style={{ color: "var(--muted-foreground)", marginLeft: 4 }}>Mutation</span><K.StatusBadge status={r.mutation} />
                  </div>
                  <Button variant="default" size="sm" style={{ width: "100%" }} onClick={() => onOpenDag(r)}>View profile<Icon name="arrow-right" size={14} /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
            <Table className="lims-table" style={{ minWidth: 1100 }}>
              <TableHeader><TableRow>
                <TableHead>Dag No.</TableHead><TableHead>Mouza</TableHead><TableHead>Project</TableHead><TableHead>Khatian</TableHead>
                <TableHead style={{ textAlign: "right" }}>Clean</TableHead><TableHead style={{ textAlign: "right" }}>Disputed</TableHead><TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
                <TableHead>Status</TableHead><TableHead>Khajna</TableHead><TableHead>Mutation</TableHead><TableHead style={{ width: 110, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.dag} style={{ cursor: "pointer" }} onClick={() => onOpenDag(r)}>
                    <TableCell><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.dag}</span></TableCell>
                    <TableCell>{r.mouza}</TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)", maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.project}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.khatian}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: parseFloat(r.clean) ? "var(--success)" : "var(--muted-foreground)", fontWeight: parseFloat(r.clean) ? 600 : 400 }}>{r.clean}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: parseFloat(r.disputed) ? "var(--destructive)" : "var(--muted-foreground)", fontWeight: parseFloat(r.disputed) ? 600 : 400 }}>{r.disputed}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: parseFloat(r.neg) ? "var(--warning)" : "var(--muted-foreground)", fontWeight: parseFloat(r.neg) ? 600 : 400 }}>{r.neg}</TableCell>
                    <TableCell><K.StatusBadge status={r.status} /></TableCell>
                    <TableCell><K.StatusBadge status={r.khajna} /></TableCell>
                    <TableCell><K.StatusBadge status={r.mutation} /></TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenDag(r)}>View profile</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent></Card>
        )}
      </div>
    );
  }
  window.DagDirectory = DagDirectory;
})();
