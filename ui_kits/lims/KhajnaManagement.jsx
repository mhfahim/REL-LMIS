// KhajnaManagement — Khajna/land-tax dashboard, dag tax detail, and
// add-payment modal. Exposes window.KhajnaModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Textarea, Label, Breadcrumb, Alert, Dialog, DialogFooter, DropdownMenu, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const KO = () => D.khajnaOptions;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  function Field({ label, value, mono }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 500, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{value}</span>
      </div>
    );
  }
  const toneTile = {
    neutral: { bg: "var(--muted)", fg: "var(--foreground)" },
    success: { bg: "rgba(22,163,74,0.12)", fg: "var(--success)" },
    warning: { bg: "rgba(217,119,6,0.12)", fg: "var(--warning)" },
    destructive: { bg: "rgba(220,38,38,0.10)", fg: "var(--destructive)" },
  };
  function Kpi({ k }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return (
      <Card><CardContent style={{ padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <span style={{ fontSize: 13, color: "var(--muted-foreground)", fontWeight: 500 }}>{k.label}</span>
          <span style={{ width: 34, height: 34, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={k.icon} size={17} /></span>
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 10, fontFamily: "var(--font-mono)" }}>{k.value}</div>
        <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 4 }}>{k.sub}</div>
      </CardContent></Card>
    );
  }
  function ReceiptCell({ has }) {
    return has
      ? <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--success)", fontSize: 12.5, fontWeight: 600 }}><Icon name="check" size={14} />On file</span>
      : <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--destructive)", fontSize: 12.5, fontWeight: 600 }}><Icon name="alert-circle" size={14} />Missing</span>;
  }

  // ---------------- Add payment modal ----------------
  function PaymentModal({ open, onClose, onDone }) {
    return (
      <Dialog open={open} onClose={onClose} title="Add khajna payment" description="Record a land-tax payment against this dag for a Bengali year." width={540}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Bengali year</Label>
            <Select placeholder="e.g. 1432" options={opt(KO().years)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>English date</Label>
            <Input type="date" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Amount</Label>
            <Input placeholder="৳ 0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Receipt number</Label>
            <Input placeholder="e.g. RCP-32-1184" />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <Label>Upload receipt</Label>
            <div style={{ marginTop: 6, border: "1.5px dashed var(--border)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--muted)", color: "var(--muted-foreground)", fontSize: 13 }}>
              <Icon name="upload" size={16} />Drag receipt scan here or <span style={{ color: "var(--foreground)", fontWeight: 600 }}>browse</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
            <Label>Notes</Label>
            <Textarea rows={2} placeholder="Optional notes for this payment…" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="default" onClick={() => onDone({ tone: "success", title: "Payment recorded", detail: "The khajna payment and receipt were saved to the dag record." })}><Icon name="check" size={15} />Save payment</Button>
        </DialogFooter>
      </Dialog>
    );
  }

  // ---------------- 7A: Dashboard ----------------
  function KhajnaList({ onOpenDag, onAdd }) {
    const blank = { q: "", year: "", status: "", mouza: "", project: "", range: "Any time" };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const rows = D.khajnaRows.filter((r) => {
      if (f.q) { const h = [r.dag, r.mouza, r.khatian].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.status && r.status !== f.status) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      return true;
    });

    const overdue = D.khajnaRows.filter((r) => r.status === "Overdue").length;
    const missing = D.khajnaRows.filter((r) => r.status !== "Due" && !r.receipt && r.status === "Paid").length;

    const chips = [];
    [["q", "Search"], ["year", "Year"], ["status", "Status"], ["mouza", "Mouza"], ["project", "Project"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    if (f.range !== "Any time") chips.push({ k: "range", label: "Due", value: f.range });
    const clearOne = (k) => set(k, k === "range" ? "Any time" : "");
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Khajna" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Khajna / land tax</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Land-tax payment status by dag and Bengali year. Current year: 1432 BS.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Khajna Due Report</Button>
              <Button variant="default" size="sm" onClick={onAdd}><Icon name="plus" size={15} />Add Payment</Button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {loading ? Array.from({ length: 6 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.khajnaKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Due / receipt alerts */}
        {overdue > 0 ? (
          <Alert variant="destructive" title={`${overdue} dags have khajna overdue past 1st Boishakh`} icon={<Icon name="alert-triangle" size={18} />}>
            Clear these before further sale or Awaz booking. Overdue khajna blocks mutation processing.
          </Alert>
        ) : null}
        {missing > 0 ? (
          <Alert variant="warning" title={`${missing} paid dags are missing a receipt on file`} icon={<Icon name="file-text" size={18} />}>
            Upload the scanned khajna receipt to complete these records.
          </Alert>
        ) : null}

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search dag, mouza, khatian, file no…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 140 }}><Select placeholder="Bengali year" options={opt(KO().years)} value={f.year} onChange={(v) => set("year", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All statuses" options={opt(KO().statuses)} value={f.status} onChange={(v) => set("status", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All mouzas" options={opt(D.options.mouzas)} value={f.mouza} onChange={(v) => set("mouza", v)} /></div>
            <div style={{ width: 200 }}><Select placeholder="All projects" options={opt(D.options.projects)} value={f.project} onChange={(v) => set("project", v)} /></div>
          </div>
          {chips.length ? (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
              <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>Active filters</span>
              {chips.map((c) => (
                <span key={c.k} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 6px 4px 10px", borderRadius: "var(--radius-full)", background: "var(--secondary)", border: "1px solid var(--border)", fontSize: 12.5, fontWeight: 500 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{c.label}:</span><span style={{ fontWeight: 600 }}>{c.value}</span>
                  <button onClick={() => clearOne(c.k)} aria-label="Clear" style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", color: "var(--muted-foreground)", padding: 1 }}><Icon name="x" size={13} /></button>
                </span>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAll} style={{ height: 28 }}>Clear all</Button>
            </div>
          ) : null}
        </CardContent></Card>

        {/* Table */}
        <Card><CardContent style={{ padding: 0 }}>
          {loading ? <K.TableSkeleton rows={6} cols={7} /> : rows.length === 0 ? (
            <K.EmptyState icon="search" title="No khajna records match" detail="Adjust or clear your filters to see more dags." actionLabel="Clear filters" onAction={clearAll} />
          ) : (
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>Dag No.</TableHead><TableHead>Mouza</TableHead><TableHead>Khatian</TableHead>
                <TableHead>Paid up to</TableHead><TableHead>Current year</TableHead><TableHead style={{ textAlign: "right" }}>Due amount</TableHead>
                <TableHead>Status</TableHead><TableHead>Receipt</TableHead><TableHead>Last payment</TableHead>
                <TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.dag} style={{ cursor: "pointer" }} onClick={() => onOpenDag(r)}>
                    <TableCell><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.dag}</span></TableCell>
                    <TableCell>{r.mouza}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.khatian}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.paidUpTo} BS</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.curYear} BS</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right", fontWeight: r.due !== "৳ 0" ? 700 : 400, color: r.status === "Overdue" ? "var(--destructive)" : "var(--foreground)" }}>{r.due}</TableCell>
                    <TableCell><K.StatusBadge status={r.status} /></TableCell>
                    <TableCell><ReceiptCell has={r.receipt} /></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{r.lastPaid}</TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenDag(r)}>View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent></Card>
      </div>
    );
  }

  // ---------------- 7B: Dag tax detail ----------------
  function KhajnaDetail({ onBack, onAdd, flash }) {
    const d = D.khajnaDetail;
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1180 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Khajna", href: "#" }, { label: "Dag Tax Detail" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Khajna Detail</h2>
              <K.StatusBadge status={d.status} />
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="default" size="sm" onClick={onAdd}><Icon name="plus" size={15} />Add Payment</Button>
              <Button variant="outline" size="sm"><Icon name="check" size={15} />Mark as Paid</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Khajna Report</Button>
              <DropdownMenu align="end" trigger={<Button variant="outline" size="icon"><Icon name="more-horizontal" size={16} /></Button>}
                items={[{ label: "Upload Receipt", icon: <Icon name="upload" size={14} />, onSelect: onAdd }]} />
            </div>
          </div>
        </div>

        {flash ? <Alert variant={flash.tone} title={flash.title} icon={<Icon name="check-circle" size={18} />}>{flash.detail}</Alert> : null}
        {d.status === "Overdue" ? (
          <Alert variant="destructive" title={`Khajna overdue — paid only up to ${d.paidUpTo} BS`} icon={<Icon name="alert-triangle" size={18} />}>
            {d.totalDue} is outstanding for this dag. Clear before further transactions or mutation.
          </Alert>
        ) : null}

        {/* Summary */}
        <Card><CardHeader><CardTitle>Dag summary</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            <Field label="Dag No." value={d.dag} mono />
            <Field label="Mouza" value={d.mouza} />
            <Field label="Khatian" value={d.khatian} mono />
            <Field label="Project" value={d.project} />
            <Field label="Paid up to (BS)" value={`${d.paidUpTo} BS`} mono />
            <Field label="Current status" value={<K.StatusBadge status={d.status} />} />
            <Field label="Total due" value={<span style={{ color: "var(--destructive)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>{d.totalDue}</span>} />
            <Field label="Last payment" value={d.lastPaid} mono />
          </CardContent>
        </Card>

        {/* Payment history */}
        <Card>
          <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <CardTitle>Payment history</CardTitle>
            <Button variant="outline" size="sm" onClick={onAdd}><Icon name="plus" size={15} />Add Payment</Button>
          </CardHeader>
          <CardContent style={{ padding: "4px 0 0" }}>
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>Bengali year</TableHead><TableHead>English date</TableHead><TableHead style={{ textAlign: "right" }}>Amount paid</TableHead>
                <TableHead>Receipt No.</TableHead><TableHead>Status</TableHead><TableHead>Uploaded by</TableHead>
                <TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {d.history.map((h, i) => (
                  <TableRow key={i}>
                    <TableCell><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{h.year} BS</span></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{h.date}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right" }}>{h.amount}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{h.receipt}</TableCell>
                    <TableCell><K.StatusBadge status={h.status} /></TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)" }}>{h.by}</TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      {h.status === "Paid"
                        ? <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }}><Icon name="download" size={14} /></Button>
                        : <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={onAdd}>Pay</Button>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Receipts */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 12 }}>Receipts on file</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {d.receipts.map((r) => (
              <Card key={r.no}><CardContent style={{ padding: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--muted)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="receipt" size={18} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, fontFamily: "var(--font-mono)" }}>{r.no}</div>
                  <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{r.year} · uploaded {r.uploaded}</div>
                </div>
                <Button variant="ghost" size="icon" style={{ height: 32, width: 32 }}><Icon name="download" size={15} /></Button>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------------- Coordinator ----------------
  function KhajnaModule() {
    const [view, setView] = React.useState("list");
    const [modal, setModal] = React.useState(false);
    const [flash, setFlash] = React.useState(null);
    return (
      <React.Fragment>
        {view === "list"
          ? <KhajnaList onOpenDag={() => { setFlash(null); setView("detail"); }} onAdd={() => setModal(true)} />
          : <KhajnaDetail onBack={() => setView("list")} onAdd={() => setModal(true)} flash={flash} />}
        <PaymentModal open={modal} onClose={() => setModal(false)}
          onDone={(f) => { setModal(false); setFlash(f); if (view === "list") setView("detail"); }} />
      </React.Fragment>
    );
  }

  window.KhajnaModule = KhajnaModule;
})();
