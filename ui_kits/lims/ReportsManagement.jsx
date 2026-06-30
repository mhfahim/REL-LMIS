// ReportsModule — Reports library, report viewer (Dag-wise Ledger), and
// export preview dialog. Exposes window.ReportsModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Breadcrumb, Logo, Dialog, DialogFooter, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  const CAT_ICON = {
    "Inventory & Ledger": "layers", "Legal & Dispute": "gavel",
    "Khajna & Mutation": "banknote", "Operational": "bar-chart", "Audit": "history",
  };

  // ---------------- 8A: Library ----------------
  function ReportsLibrary({ onOpen }) {
    const [q, setQ] = React.useState("");
    const [cat, setCat] = React.useState("All");
    const cats = ["All", ...D.reportCategories];
    const rows = D.reports.filter((r) => {
      if (cat !== "All" && r.cat !== cat) return false;
      if (q && !(`${r.name} ${r.desc}`.toLowerCase().includes(q.toLowerCase()))) return false;
      return true;
    });

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Reports" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Reports</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Generate, preview, and export land-record reports.</p>
            </div>
            <div style={{ position: "relative", width: 300, maxWidth: "40vw" }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search reports…" value={q} onChange={(e) => setQ(e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {cats.map((c) => {
            const on = cat === c;
            return (
              <button key={c} onClick={() => setCat(c)} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 13px", borderRadius: "var(--radius-full)", border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`, background: on ? "var(--primary)" : "var(--background)", color: on ? "var(--primary-foreground)" : "var(--foreground)", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                {c !== "All" ? <Icon name={CAT_ICON[c]} size={14} /> : null}{c}
              </button>
            );
          })}
        </div>

        {/* Report grid */}
        {rows.length === 0 ? (
          <Card><CardContent style={{ padding: 0 }}><K.EmptyState icon="search" title="No reports match" detail="Try another search term or category." actionLabel="Clear search" onAction={() => { setQ(""); setCat("All"); }} /></CardContent></Card>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {rows.map((r) => (
              <Card key={r.name}>
                <CardContent style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--muted)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={CAT_ICON[r.cat]} size={18} /></span>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.3 }}>{r.name}</div>
                      <div style={{ fontSize: 11.5, color: "var(--muted-foreground)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>{r.cat}</div>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)", flex: 1 }}>{r.desc}</p>
                  <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                    <Button variant="default" size="sm" style={{ flex: 1 }} onClick={() => onOpen(r)}><Icon name="eye" size={14} />View</Button>
                    <Button variant="outline" size="sm" onClick={() => onOpen(r, true)}><Icon name="download" size={14} />Export</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ---------------- 8B: Viewer (Dag-wise Ledger) ----------------
  function num(v) { return parseFloat(v) || 0; }
  function ReportViewer({ report, onBack, onExport }) {
    const [f, setF] = React.useState({ range: "FY 2024–25", project: "", mouza: "", dag: "", file: "", deedType: "", bucket: "", status: "" });
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
    const rows = D.dagLedgerReport.filter((r) => (!f.mouza || r.mouza === f.mouza) && (!f.dag || r.dag.toLowerCase().includes(f.dag.toLowerCase())));

    const totals = rows.reduce((a, r) => {
      ["govArea", "pSaf", "sSaf", "awazIn", "awazOut", "clean", "disputed", "neg"].forEach((k) => { a[k] = (a[k] || 0) + num(r[k]); });
      return a;
    }, {});
    const fmt = (n) => n.toFixed(2);

    const chips = [];
    chips.push({ k: "range", label: "Period", value: f.range });
    [["mouza", "Mouza"], ["dag", "Dag"], ["project", "Project"], ["bucket", "Bucket"], ["status", "Status"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    const clearOne = (k) => set(k, k === "range" ? "FY 2024–25" : "");

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Reports", href: "#" }, { label: report.name }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <div>
                <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{report.name}</h2>
                <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "var(--muted-foreground)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><K.Pill tone="success">Ready</K.Pill></span>
                  <span style={{ marginLeft: 8 }}>Last generated 30 Jun 2026, 10:14 · {rows.length} dags</span>
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={onExport}><Icon name="file-text" size={15} />Export PDF</Button>
              <Button variant="outline" size="sm" onClick={onExport}><Icon name="download" size={15} />Export Excel</Button>
              <Button variant="outline" size="sm" onClick={onExport}><Icon name="printer" size={15} />Print</Button>
            </div>
          </div>
        </div>

        {/* Filter panel */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Date range</span><Select options={opt(["FY 2024–25", "FY 2023–24", "Last 90 days", "All time"])} value={f.range} onChange={(v) => set("range", v)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Project</span><Select placeholder="All projects" options={opt(D.options.projects)} value={f.project} onChange={(v) => set("project", v)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Mouza</span><Select placeholder="All mouzas" options={opt(D.options.mouzas)} value={f.mouza} onChange={(v) => set("mouza", v)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Dag No.</span><Input placeholder="e.g. DAG-1184" value={f.dag} onChange={(e) => set("dag", e.target.value)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>File No.</span><Input placeholder="e.g. F-2025-118" value={f.file} onChange={(e) => set("file", e.target.value)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Deed type</span><Select placeholder="All deed types" options={opt(D.options.deedTypes)} value={f.deedType} onChange={(v) => set("deedType", v)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Bucket</span><Select placeholder="All buckets" options={opt(D.options.buckets)} value={f.bucket} onChange={(v) => set("bucket", v)} /></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-foreground)" }}>Status</span><Select placeholder="All statuses" options={opt(D.options.statuses)} value={f.status} onChange={(v) => set("status", v)} /></div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
            <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>Applied filters</span>
            {chips.map((c) => (
              <span key={c.k} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 6px 4px 10px", borderRadius: "var(--radius-full)", background: "var(--secondary)", border: "1px solid var(--border)", fontSize: 12.5, fontWeight: 500 }}>
                <span style={{ color: "var(--muted-foreground)" }}>{c.label}:</span><span style={{ fontWeight: 600 }}>{c.value}</span>
                {c.k !== "range" ? <button onClick={() => clearOne(c.k)} aria-label="Clear" style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", color: "var(--muted-foreground)", padding: 1 }}><Icon name="x" size={13} /></button> : null}
              </span>
            ))}
          </div>
        </CardContent></Card>

        {/* Report table */}
        <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
          {rows.length === 0 ? (
            <K.EmptyState icon="table" title="No rows for these filters" detail="Adjust the filter panel to populate the report." />
          ) : (
            <Table className="lims-table" style={{ minWidth: 1280 }}>
              <TableHeader>
                <TableRow>
                  <TableHead style={{ position: "sticky", left: 0, background: "var(--muted)", zIndex: 1 }}>Dag No.</TableHead>
                  <TableHead>Mouza</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Govt. area</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Purch. Saf Kobla</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Purch. Power</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Sale Saf Kobla</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Sale Power</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Awaz in</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Awaz out</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Clean bal.</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Disputed bal.</TableHead>
                  <TableHead style={{ textAlign: "right" }}>Under neg.</TableHead>
                  <TableHead>Khajna</TableHead>
                  <TableHead>Mutation</TableHead>
                  <TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.dag}>
                    <TableCell style={{ position: "sticky", left: 0, background: "var(--card)", fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.dag}</TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>{r.mouza}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.govArea}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.pSaf}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.pPower}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.sSaf}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.sPower}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.awazIn}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.awazOut}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--success)", fontWeight: 600 }}>{r.clean}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: num(r.disputed) ? "var(--destructive)" : "var(--muted-foreground)", fontWeight: num(r.disputed) ? 600 : 400 }}>{r.disputed}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: num(r.neg) ? "var(--warning)" : "var(--muted-foreground)", fontWeight: num(r.neg) ? 600 : 400 }}>{r.neg}</TableCell>
                    <TableCell><K.StatusBadge status={r.khajna} /></TableCell>
                    <TableCell><K.StatusBadge status={r.mutation} /></TableCell>
                    <TableCell style={{ textAlign: "right" }}><Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }}>Open</Button></TableCell>
                  </TableRow>
                ))}
                {/* Totals row */}
                <TableRow style={{ background: "var(--muted)", fontWeight: 700 }}>
                  <TableCell style={{ position: "sticky", left: 0, background: "var(--muted)", fontWeight: 700 }}>Total</TableCell>
                  <TableCell style={{ color: "var(--muted-foreground)" }}>{rows.length} dags</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{fmt(totals.govArea)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{fmt(totals.pSaf)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>0.00</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{fmt(totals.sSaf)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>0.00</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{fmt(totals.awazIn)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{fmt(totals.awazOut)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--success)" }}>{fmt(totals.clean)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--destructive)" }}>{fmt(totals.disputed)}</TableCell>
                  <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--warning)" }}>{fmt(totals.neg)}</TableCell>
                  <TableCell colSpan={3}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          )}
        </CardContent></Card>
      </div>
    );
  }

  // ---------------- 8C: Export preview ----------------
  function ExportPreview({ open, report, onClose }) {
    if (!report) return null;
    const rows = D.dagLedgerReport.slice(0, 6);
    return (
      <Dialog open={open} onClose={onClose} title="Export preview" description="Review the document before downloading or printing." width={860}>
        {/* Printable sheet */}
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 28, maxHeight: "56vh", overflowY: "auto" }}>
          {/* Letterhead */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid var(--primary)", paddingBottom: 16 }}>
            <div>
              <Logo size={26} />
              <div style={{ fontSize: 11.5, color: "var(--muted-foreground)", marginTop: 8 }}>Land Inventory Management System</div>
            </div>
            <div style={{ textAlign: "right", fontSize: 11.5, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              <div><span style={{ fontWeight: 600, color: "var(--foreground)" }}>Ref:</span> RPT-2026-0412</div>
              <div><span style={{ fontWeight: 600, color: "var(--foreground)" }}>Generated:</span> 30 Jun 2026</div>
            </div>
          </div>
          {/* Title block */}
          <div style={{ textAlign: "center", padding: "20px 0 16px" }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{report.name}</div>
            <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 4 }}>Period: FY 2024–25 · All mouzas · All projects</div>
          </div>
          {/* Meta row */}
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: "var(--muted-foreground)", marginBottom: 12 }}>
            <span><span style={{ fontWeight: 600, color: "var(--foreground)" }}>Prepared by:</span> S. Rahman, GM Land</span>
            <span><span style={{ fontWeight: 600, color: "var(--foreground)" }}>Office:</span> Reliance Land Cell, Dhaka</span>
          </div>
          {/* Table preview */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11.5 }}>
            <thead>
              <tr style={{ background: "var(--muted)" }}>
                {["Dag No.", "Mouza", "Govt. area", "Clean", "Disputed", "Under neg.", "Khajna", "Mutation"].map((h) => (
                  <th key={h} style={{ textAlign: h === "Dag No." || h === "Mouza" || h === "Khajna" || h === "Mutation" ? "left" : "right", padding: "7px 9px", borderBottom: "1px solid var(--border)", fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.dag}>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>{r.dag}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)" }}>{r.mouza}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)", textAlign: "right", fontFamily: "var(--font-mono)" }}>{r.govArea}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)", textAlign: "right", fontFamily: "var(--font-mono)" }}>{r.clean}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)", textAlign: "right", fontFamily: "var(--font-mono)" }}>{r.disputed}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)", textAlign: "right", fontFamily: "var(--font-mono)" }}>{r.neg}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)" }}>{r.khajna}</td>
                  <td style={{ padding: "6px 9px", borderBottom: "1px solid var(--border)" }}>{r.mutation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Signature area */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 48, gap: 24 }}>
            {["Prepared by", "Checked by", "Approved by"].map((s) => (
              <div key={s} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ borderTop: "1px solid var(--foreground)", paddingTop: 6, fontSize: 11.5, color: "var(--muted-foreground)" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="outline" onClick={onClose}><Icon name="download" size={15} />Export Excel</Button>
          <Button variant="default" onClick={onClose}><Icon name="file-text" size={15} />Export PDF</Button>
        </DialogFooter>
      </Dialog>
    );
  }

  // ---------------- Coordinator ----------------
  function ReportsModule() {
    const [report, setReport] = React.useState(null); // selected for viewer
    const [exportFor, setExportFor] = React.useState(null);
    return (
      <React.Fragment>
        {report
          ? <ReportViewer report={report} onBack={() => setReport(null)} onExport={() => setExportFor(report)} />
          : <ReportsLibrary onOpen={(r, exp) => { if (exp) setExportFor(r); else setReport(r); }} />}
        <ExportPreview open={!!exportFor} report={exportFor} onClose={() => setExportFor(null)} />
      </React.Fragment>
    );
  }

  window.ReportsModule = ReportsModule;
})();
