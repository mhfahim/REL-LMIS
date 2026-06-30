// TransactionLedger — full transaction list with filters, summary chips,
// pagination, and export actions. Exposes window.TransactionLedger.
(function () {
  const { Card, CardContent, Icon, Button, Input, Select, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));
  const PAGE = 8;

  const RANGES = ["Any time", "Last 7 days", "Last 30 days", "This year"];

  function FilterChip({ label, value, onClear }) {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 6px 4px 10px", borderRadius: "var(--radius-full)", background: "var(--secondary)", border: "1px solid var(--border)", fontSize: 12.5, fontWeight: 500, fontFamily: "var(--font-sans)" }}>
        <span style={{ color: "var(--muted-foreground)" }}>{label}:</span>
        <span style={{ fontWeight: 600 }}>{value}</span>
        <button onClick={onClear} aria-label={`Clear ${label}`} style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", color: "var(--muted-foreground)", padding: 1, borderRadius: "var(--radius-full)" }}><Icon name="x" size={13} /></button>
      </span>
    );
  }

  function TransactionLedger({ onNavigate, onOpenDag, onOpenTransaction }) {
    const blank = { q: "", type: "", mouza: "", project: "", bucket: "", status: "", range: "Any time" };
    const [f, setF] = React.useState(blank);
    const [page, setPage] = React.useState(0);
    const set = (k, v) => { setF((p) => ({ ...p, [k]: v })); setPage(0); };

    const filtered = D.ledgerAll.filter((r) => {
      if (f.q) {
        const q = f.q.toLowerCase();
        const hay = [r.deed, r.file, r.party, r.dag, r.mouza].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (f.type && r.type !== f.type) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.bucket && r.bucket !== f.bucket) return false;
      if (f.status && r.status !== f.status) return false;
      // (project is an illustrative filter — not stored on rows)
      return true;
    });

    const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
    const cur = Math.min(page, pages - 1);
    const rows = filtered.slice(cur * PAGE, cur * PAGE + PAGE);

    const chips = [];
    if (f.q) chips.push({ k: "q", label: "Search", value: f.q });
    if (f.type) chips.push({ k: "type", label: "Type", value: f.type });
    if (f.mouza) chips.push({ k: "mouza", label: "Mouza", value: f.mouza });
    if (f.project) chips.push({ k: "project", label: "Project", value: f.project });
    if (f.bucket) chips.push({ k: "bucket", label: "Bucket", value: f.bucket });
    if (f.status) chips.push({ k: "status", label: "Status", value: f.status });
    if (f.range !== "Any time") chips.push({ k: "range", label: "Date", value: f.range });
    const clearOne = (k) => set(k, k === "range" ? "Any time" : "");
    const clearAll = () => { setF(blank); setPage(0); };

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        {/* Header */}
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Transaction Ledger" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Transaction Ledger</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>All purchase, sale, Awaz, and status entries across the portfolio.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm"><Icon name="file-text" size={15} />Export PDF</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Excel</Button>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("add-transaction")}><Icon name="plus" size={15} />Add Transaction</Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative", flex: "1 1 240px", minWidth: 200 }}>
                <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
                <Input placeholder="Search deed, file, party, dag, mouza…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
              </div>
              <div style={{ width: 168 }}><Select placeholder="All types" options={opt(D.options.transactionTypes)} value={f.type} onChange={(v) => set("type", v)} /></div>
              <div style={{ width: 150 }}><Select placeholder="All mouzas" options={opt(D.options.mouzas)} value={f.mouza} onChange={(v) => set("mouza", v)} /></div>
              <div style={{ width: 200 }}><Select placeholder="All projects" options={opt(D.options.projects)} value={f.project} onChange={(v) => set("project", v)} /></div>
              <div style={{ width: 168 }}><Select placeholder="Date range" options={opt(RANGES)} value={f.range} onChange={(v) => set("range", v)} /></div>
              <div style={{ width: 168 }}><Select placeholder="All buckets" options={opt(D.options.buckets)} value={f.bucket} onChange={(v) => set("bucket", v)} /></div>
              <div style={{ width: 168 }}><Select placeholder="All statuses" options={opt(D.options.statuses)} value={f.status} onChange={(v) => set("status", v)} /></div>
            </div>
            {chips.length ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
                <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>Active filters</span>
                {chips.map((c) => <FilterChip key={c.k} label={c.label} value={c.value} onClear={() => clearOne(c.k)} />)}
                <Button variant="ghost" size="sm" onClick={clearAll} style={{ height: 28 }}>Clear all</Button>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardContent style={{ padding: 0 }}>
            {rows.length === 0 ? (
              <K.EmptyState icon="search" title="No transactions match" detail="Try adjusting or clearing your filters to see more results." actionLabel="Clear filters" onAction={clearAll} />
            ) : (
              <Table className="lims-table">
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Deed No.</TableHead>
                    <TableHead>File No.</TableHead>
                    <TableHead>Party</TableHead>
                    <TableHead>Dag No.</TableHead>
                    <TableHead>Mouza</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Area</TableHead>
                    <TableHead>Bucket</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
                    <TableHead>Created by</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r, i) => (
                    <TableRow key={i} style={{ cursor: "pointer" }} onClick={() => onOpenTransaction ? onOpenTransaction(r) : onNavigate && onNavigate("transaction-detail")}>
                      <TableCell style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 13, whiteSpace: "nowrap" }}>{r.date}</TableCell>
                      <TableCell><K.TypeBadge type={r.type} /></TableCell>
                      <TableCell onClick={(e) => { e.stopPropagation(); onOpenTransaction && onOpenTransaction(r); }}><button className="lims-link" style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: "var(--brand)", background: "none", border: "none", padding: 0, cursor: "pointer" }}>{r.deed}</button></TableCell>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.file}</TableCell>
                      <TableCell style={{ whiteSpace: "nowrap" }}>{r.party}</TableCell>
                      <TableCell onClick={(e) => { e.stopPropagation(); onOpenDag && onOpenDag(r.dag); }}><button className="lims-link" style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13, color: "var(--brand)", background: "none", border: "none", padding: 0, cursor: "pointer" }}>{r.dag}</button></TableCell>
                      <TableCell>{r.mouza}</TableCell>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right", whiteSpace: "nowrap" }}>{r.area}</TableCell>
                      <TableCell><K.StatusBadge status={r.bucket} /></TableCell>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right", whiteSpace: "nowrap" }}>{r.amount}</TableCell>
                      <TableCell style={{ color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{r.by}</TableCell>
                      <TableCell><K.StatusBadge status={r.status} /></TableCell>
                      <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenTransaction ? onOpenTransaction(r) : onNavigate && onNavigate("transaction-detail")}>View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        {/* Pagination */}
        {filtered.length ? (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, color: "var(--muted-foreground)" }}>
            <span>Showing {cur * PAGE + 1}–{Math.min(filtered.length, cur * PAGE + PAGE)} of {filtered.length} transactions</span>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Button variant="outline" size="sm" disabled={cur === 0} onClick={() => setPage(cur - 1)}><Icon name="chevron-left" size={15} />Previous</Button>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--foreground)" }}>{cur + 1} / {pages}</span>
              <Button variant="outline" size="sm" disabled={cur >= pages - 1} onClick={() => setPage(cur + 1)}>Next<Icon name="chevron-right" size={15} /></Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  window.TransactionLedger = TransactionLedger;
})();
