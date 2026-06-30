// DisputeManagement — list, case detail, and update/resolution modal.
// Exposes window.DisputeModule (coordinates the three views).
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Textarea, Label, Breadcrumb, Alert, Dialog, DialogFooter, Separator, DropdownMenu, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const O = () => D.disputeOptions;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  function RiskBadge({ risk }) {
    const tone = risk === "High" ? "danger" : risk === "Medium" ? "warning" : "neutral";
    return <K.Pill tone={tone}>{risk} risk</K.Pill>;
  }
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
  function DocCard({ doc }) {
    const pending = doc.state === "pending";
    return (
      <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--muted)", color: pending ? "var(--muted-foreground)" : "var(--foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name={doc.icon} size={18} /></span>
          <K.StatusBadge status={pending ? "Pending" : "Available"} />
        </div>
        <div><div style={{ fontSize: 14, fontWeight: 600 }}>{doc.name}</div><div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>{doc.meta}</div></div>
        <div style={{ marginTop: "auto" }}>
          {pending ? <Button variant="outline" size="sm" style={{ width: "100%" }}><Icon name="upload" size={14} />Upload</Button>
            : <Button variant="outline" size="sm" style={{ width: "100%" }}><Icon name="download" size={14} />View</Button>}
        </div>
      </CardContent></Card>
    );
  }

  // ---------------- 5A: List ----------------
  function DisputeList({ onOpenCase, onCreate }) {
    const blank = { q: "", status: "", mouza: "", advocate: "", court: "", risk: "", range: "Any time", locked: false };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const rows = D.disputes.filter((r) => {
      if (f.q) { const h = [r.caseNo, r.dag, r.mouza, r.parties].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.status && r.status !== f.status) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.advocate && r.advocate !== f.advocate) return false;
      if (f.court && r.court !== f.court) return false;
      if (f.risk && r.risk !== f.risk) return false;
      if (f.locked && !r.locked) return false;
      return true;
    });

    const chips = [];
    [["q", "Search"], ["status", "Status"], ["mouza", "Mouza"], ["advocate", "Advocate"], ["court", "Court"], ["risk", "Risk"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    if (f.range !== "Any time") chips.push({ k: "range", label: "Date", value: f.range });
    if (f.locked) chips.push({ k: "locked", label: "View", value: "Locked dags only" });
    const clearOne = (k) => set(k, k === "range" ? "Any time" : k === "locked" ? false : "");
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Dispute Management" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Dispute Management</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Track disputed land, court progress, and locked dags.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={() => set("locked", !f.locked)}><Icon name="lock" size={15} />View Locked Dags</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Dispute List</Button>
              <Button variant="default" size="sm" onClick={onCreate}><Icon name="plus" size={15} />Create Dispute Case</Button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {loading ? Array.from({ length: 6 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.disputeKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search dag, mouza, file, case no…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 160 }}><Select placeholder="All statuses" options={opt(O().statuses)} value={f.status} onChange={(v) => set("status", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All mouzas" options={opt(D.options.mouzas)} value={f.mouza} onChange={(v) => set("mouza", v)} /></div>
            <div style={{ width: 180 }}><Select placeholder="All advocates" options={opt(O().advocates)} value={f.advocate} onChange={(v) => set("advocate", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="Date range" options={opt(["Any time", "This month", "Next 30 days", "This year"])} value={f.range} onChange={(v) => set("range", v)} /></div>
            <div style={{ width: 140 }}><Select placeholder="All risk" options={opt(O().risks)} value={f.risk} onChange={(v) => set("risk", v)} /></div>
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
            <K.EmptyState icon="search" title="No dispute cases match" detail="Adjust or clear your filters to see more cases." actionLabel="Clear filters" onAction={clearAll} />
          ) : (
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>Case No.</TableHead><TableHead>Dag No.</TableHead><TableHead>Mouza</TableHead>
                <TableHead>Dispute type</TableHead><TableHead>Parties</TableHead><TableHead>Advocate</TableHead>
                <TableHead>Court</TableHead><TableHead>Next hearing</TableHead><TableHead>Status</TableHead>
                <TableHead>Risk</TableHead><TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.caseNo} style={{ cursor: "pointer" }} onClick={() => onOpenCase(r)}>
                    <TableCell><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{r.locked ? <Icon name="lock" size={13} style={{ color: "var(--destructive)" }} /> : null}<span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.caseNo}</span></span></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.dag}</TableCell>
                    <TableCell>{r.mouza}</TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>{r.type}</TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>{r.parties}</TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{r.advocate}</TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)", whiteSpace: "nowrap", maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis" }}>{r.court}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, whiteSpace: "nowrap" }}>{r.hearing}</TableCell>
                    <TableCell><K.StatusBadge status={r.status} /></TableCell>
                    <TableCell><RiskBadge risk={r.risk} /></TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenCase(r)}>View</Button>
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

  // ---------------- 5B: Case Detail ----------------
  function TimelineItem({ it, last }) {
    return (
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ width: 30, height: 30, borderRadius: "var(--radius-full)", background: it.done ? "var(--primary)" : "var(--muted)", color: it.done ? "var(--primary-foreground)" : "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: it.done ? "none" : "1px dashed var(--border)" }}><Icon name={it.icon} size={14} /></span>
          {!last ? <span style={{ flex: 1, width: 2, background: "var(--border)", marginTop: 2, minHeight: 18 }} /> : null}
        </div>
        <div style={{ paddingBottom: last ? 0 : 18 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{it.title}</div>
          <div style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 1 }}>{it.detail}</div>
          <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 3, fontFamily: "var(--font-mono)" }}>{it.time}</div>
        </div>
      </div>
    );
  }

  function DisputeDetail({ onBack, onUpdate, flash }) {
    const d = D.disputeDetail;
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1180 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Dispute Management", href: "#" }, { label: "Case Detail" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Dispute Case #{d.caseNo}</h2>
              <K.StatusBadge status={d.status} />
              <RiskBadge risk={d.risk} />
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="default" size="sm" onClick={() => onUpdate("update")}><Icon name="history" size={15} />Update Status</Button>
              <Button variant="outline" size="sm" onClick={() => onUpdate("resolve")}><Icon name="shield-check" size={15} />Resolve Dispute</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Case Report</Button>
              <DropdownMenu align="end" trigger={<Button variant="outline" size="icon"><Icon name="more-horizontal" size={16} /></Button>}
                items={[
                  { label: "Add Hearing Date", icon: <Icon name="calendar" size={14} />, onSelect: () => onUpdate("update") },
                  { label: "Upload Document", icon: <Icon name="upload" size={14} />, onSelect: () => onUpdate("update") },
                ]} />
            </div>
          </div>
        </div>

        {flash ? <Alert variant={flash.tone} title={flash.title} icon={<Icon name={flash.tone === "success" ? "check-circle" : "info"} size={18} />}>{flash.detail}</Alert> : null}
        {d.locked ? (
          <Alert variant="destructive" title="Dag locked due to dispute" icon={<Icon name="lock" size={18} />}>
            {d.dag} is restricted from sale and Awaz booking until this case is resolved.
          </Alert>
        ) : null}

        {/* Summary */}
        <Card><CardHeader><CardTitle>Case summary</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Field label="Case No." value={d.caseNo} mono />
            <Field label="Dag No." value={d.dag} mono />
            <Field label="Mouza" value={d.mouza} />
            <Field label="Project" value={d.project} />
            <Field label="File No." value={d.file} mono />
            <Field label="Dispute type" value={d.type} />
            <Field label="Current status" value={<K.StatusBadge status={d.status} />} />
            <Field label="Created date" value={d.created} mono />
            <Field label="Last updated" value={d.updated} mono />
          </CardContent>
        </Card>

        {/* Parties + Legal */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card><CardHeader><CardTitle>Case parties</CardTitle></CardHeader>
            <CardContent style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <Field label="Claimant / opponent" value={d.parties.claimant} />
              <Field label="Donor / seller" value={d.parties.donor} />
              <Field label="LT / plot holder" value={d.parties.holder} />
              <Field label="Responsible officer" value={d.parties.officer} />
            </CardContent>
          </Card>
          <Card><CardHeader><CardTitle>Legal details</CardTitle></CardHeader>
            <CardContent style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <Field label="Advocate" value={d.legal.advocate} />
              <Field label="Court" value={d.legal.court} />
              <Field label="Case number" value={d.legal.caseNumber} mono />
              <Field label="Next hearing" value={d.legal.nextHearing} mono />
              <Field label="Previous hearing" value={d.legal.prevHearing} mono />
              <div />
              <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Legal notes</span>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: "var(--leading-relaxed)" }}>{d.legal.notes}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 12 }}>Documents</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {d.documents.map((doc) => <DocCard key={doc.name} doc={doc} />)}
          </div>
        </div>

        {/* Timeline */}
        <Card><CardHeader><CardTitle>Case timeline</CardTitle></CardHeader>
          <CardContent>
            {d.timeline.map((it, i) => <TimelineItem key={i} it={it} last={i === d.timeline.length - 1} />)}
          </CardContent>
        </Card>
      </div>
    );
  }

  // ---------------- 5C: Update / Resolution Modal ----------------
  function UpdateModal({ open, mode, onClose, onDone }) {
    const resolve = mode === "resolve";
    const create = mode === "create";
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const title = create ? "Create dispute case" : resolve ? "Resolve dispute" : "Update dispute status";
    const desc = create ? "Open a new dispute case and lock the affected dag." : resolve ? "Record the resolution and request approval to unlock the dag." : "Record a status change, hearing, or document on this case.";

    function primaryClick() {
      if (resolve) setConfirmOpen(true);
      else onDone({ tone: "success", title: create ? "Dispute case created" : "Case updated", detail: create ? "A new case was opened and the dag was locked." : "The status change has been saved to the case file." });
    }
    function confirmResolve() {
      setConfirmOpen(false);
      onDone({ tone: "success", title: "Dispute resolved", detail: "Resolution submitted for approval; the dag will be unlocked once approved." });
    }

    return (
      <Dialog open={open} onClose={onClose} title={title} description={desc} width={560}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>New status</Label>
            <Select placeholder="Select status" options={opt(O().statuses)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Hearing date</Label>
            <Input type="date" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Advocate</Label>
            <Select placeholder="Assign advocate" options={opt(O().advocates)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Court</Label>
            <Select placeholder="Select court" options={opt(O().courts)} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
            <Label>Case note</Label>
            <Textarea rows={3} placeholder="Describe the update or hearing outcome…" />
          </div>

          {resolve ? (
            <React.Fragment>
              <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--border)" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Label>Resolution type</Label>
                <Select placeholder="Select resolution" options={opt(O().resolutionTypes)} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <Label>Approved by</Label>
                <Input placeholder="e.g. GM Land" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
                <Label>Final remarks</Label>
                <Textarea rows={2} placeholder="Closing remarks for the case record…" />
              </div>
            </React.Fragment>
          ) : null}

          <div style={{ gridColumn: "1 / -1" }}>
            <Label>Supporting document</Label>
            <div style={{ marginTop: 6, border: "1.5px dashed var(--border)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--muted)", color: "var(--muted-foreground)", fontSize: 13 }}>
              <Icon name="upload" size={16} />Drag a file here or <span style={{ color: "var(--foreground)", fontWeight: 600 }}>browse</span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          {!resolve ? <Button variant="outline" onClick={() => onDone({ tone: "success", title: "Update saved", detail: "Your changes were saved to the case file." })}><Icon name="save" size={15} />Save update</Button> : null}
          <Button variant="default" onClick={primaryClick}>
            <Icon name={resolve ? "shield-check" : "check"} size={15} />{resolve ? "Resolve dispute" : create ? "Create case" : "Submit for approval"}
          </Button>
        </DialogFooter>

        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)} title="Resolve this dispute?" description="This submits the resolution for approval. Once approved, the dag is unlocked and sale/Awaz restrictions are lifted." width={420}>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button variant="default" onClick={confirmResolve}><Icon name="check" size={15} />Confirm &amp; resolve</Button>
          </DialogFooter>
        </Dialog>
      </Dialog>
    );
  }

  // ---------------- Coordinator ----------------
  function DisputeModule() {
    const [view, setView] = React.useState("list"); // list | detail
    const [modalMode, setModalMode] = React.useState(null); // null | update | resolve | create
    const [flash, setFlash] = React.useState(null);

    return (
      <React.Fragment>
        {view === "list"
          ? <DisputeList onOpenCase={() => { setFlash(null); setView("detail"); }} onCreate={() => setModalMode("create")} />
          : <DisputeDetail onBack={() => setView("list")} onUpdate={(m) => setModalMode(m)} flash={flash} />}
        <UpdateModal open={!!modalMode} mode={modalMode}
          onClose={() => setModalMode(null)}
          onDone={(f) => { setModalMode(null); setFlash(f); if (view === "list") setView("detail"); }} />
      </React.Fragment>
    );
  }

  window.DisputeModule = DisputeModule;
})();
