// MutationManagement — Kharij/Mutation pipeline dashboard, case detail, and
// stage-update modal. Exposes window.MutationModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Textarea, Label, Breadcrumb, Alert, Dialog, DialogFooter, DropdownMenu, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const MO = () => D.mutationOptions;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));
  const HAPPY = ["Not Started", "Submitted", "Under Review", "Hearing", "Approved"];

  function RiskBadge({ risk }) {
    const tone = risk === "High" ? "danger" : risk === "Medium" ? "warning" : "neutral";
    return <K.Pill tone={tone}>{risk}</K.Pill>;
  }
  function PendingCell({ days }) {
    const color = days > 30 ? "var(--destructive)" : days > 20 ? "var(--warning)" : "var(--muted-foreground)";
    const weight = days > 20 ? 700 : 500;
    return <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color, fontWeight: weight }}>{days} d</span>;
  }
  function slaBadge(days) {
    if (days > 30) return <K.Pill tone="danger">SLA breached</K.Pill>;
    if (days > 20) return <K.Pill tone="warning">Due soon</K.Pill>;
    return <K.Pill tone="success">Within SLA</K.Pill>;
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
      <Card><CardContent style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>{k.label}</span>
          <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={k.icon} size={15} /></span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 8, fontFamily: "var(--font-mono)" }}>{k.value}</div>
        <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 3 }}>{k.sub}</div>
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

  function StageStepper({ stage }) {
    const rejected = stage === "Rejected";
    const steps = rejected ? ["Not Started", "Submitted", "Under Review", "Hearing", "Rejected"] : HAPPY;
    const curIdx = rejected ? steps.length - 1 : HAPPY.indexOf(stage);
    return (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {steps.map((s, i) => {
          const done = i <= curIdx;
          const isRej = rejected && i === steps.length - 1;
          const bg = isRej ? "var(--destructive)" : done ? "var(--primary)" : "var(--muted)";
          const fg = (isRej || done) ? "#fff" : "var(--muted-foreground)";
          return (
            <React.Fragment key={s}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0, width: 110 }}>
                <span style={{ width: 32, height: 32, borderRadius: "var(--radius-full)", background: bg, color: fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, border: done || isRej ? "none" : "1px dashed var(--border)" }}>
                  {isRej ? <Icon name="x" size={15} /> : done ? <Icon name="check" size={15} /> : i + 1}
                </span>
                <span style={{ fontSize: 12, fontWeight: i === curIdx ? 700 : 500, color: i === curIdx ? "var(--foreground)" : "var(--muted-foreground)", textAlign: "center", lineHeight: 1.3 }}>{s}</span>
              </div>
              {i < steps.length - 1 ? <span style={{ flex: 1, height: 2, background: i < curIdx ? "var(--primary)" : "var(--border)", marginTop: 15, minWidth: 16 }} /> : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  // ---------------- 6A: Pipeline dashboard ----------------
  function MutationList({ onOpenFile, onAdd }) {
    const blank = { q: "", stage: "", status: "", advocate: "", pending: "Any", risk: "" };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const rows = D.mutations.filter((r) => {
      if (f.q) { const h = [r.file, r.dag, r.khatian, r.mouza].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.stage && r.stage !== f.stage) return false;
      if (f.status && r.status !== f.status) return false;
      if (f.advocate && r.advocate !== f.advocate) return false;
      if (f.risk && r.risk !== f.risk) return false;
      if (f.pending === "0–15 days" && r.pending > 15) return false;
      if (f.pending === "16–30 days" && (r.pending < 16 || r.pending > 30)) return false;
      if (f.pending === "30+ days" && r.pending <= 30) return false;
      return true;
    });

    const raceCount = D.mutations.filter((r) => r.race).length;
    const priority = [...D.mutations].filter((r) => r.stage !== "Approved" && r.stage !== "Rejected").sort((a, b) => b.pending - a.pending).slice(0, 3);

    const chips = [];
    [["q", "Search"], ["stage", "Stage"], ["status", "Status"], ["advocate", "Advocate"], ["risk", "Risk"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    if (f.pending !== "Any") chips.push({ k: "pending", label: "Pending", value: f.pending });
    const clearOne = (k) => set(k, k === "pending" ? "Any" : "");
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Kharij / Mutation" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Kharij / Mutation pipeline</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Track namjari applications, stages, and SLA across AC Land offices.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm"><Icon name="file-signature" size={15} />Generate Forwarding Letter</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Pipeline Report</Button>
              <Button variant="default" size="sm" onClick={onAdd}><Icon name="plus" size={15} />Add Mutation File</Button>
            </div>
          </div>
        </div>

        {/* KPIs (8) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {loading ? Array.from({ length: 8 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.mutationKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Race warning */}
        {raceCount > 0 ? (
          <Alert variant="destructive" title={`${raceCount} files have a competing mutation (race warning)`} icon={<Icon name="alert-triangle" size={18} />}>
            Another party has applied to mutate the same dag. Prioritise these files and notify the AC Land office.
          </Alert>
        ) : null}

        {/* Priority pending + filters */}
        <Card>
          <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <CardTitle>Priority pending</CardTitle>
            <span style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>Longest-waiting open files</span>
          </CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {priority.map((r) => (
              <div key={r.file} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1px solid var(--border)", borderRadius: "var(--radius-md)", cursor: "pointer" }} onClick={() => onOpenFile(r)}>
                <span style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: r.pending > 30 ? "rgba(220,38,38,0.10)" : "rgba(217,119,6,0.12)", color: r.pending > 30 ? "var(--destructive)" : "var(--warning)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="clock" size={16} /></span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-mono)" }}>{r.file}</div>
                  <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{r.dag} · {r.mouza}</div>
                </div>
                <PendingCell days={r.pending} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search dag, file no., khatian, mouza…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 156 }}><Select placeholder="All stages" options={opt(MO().stages)} value={f.stage} onChange={(v) => set("stage", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All statuses" options={opt(MO().statuses)} value={f.status} onChange={(v) => set("status", v)} /></div>
            <div style={{ width: 168 }}><Select placeholder="Pending days" options={opt(MO().pendingBuckets)} value={f.pending} onChange={(v) => set("pending", v)} /></div>
            <div style={{ width: 140 }}><Select placeholder="All risk" options={opt(["High", "Medium", "Low"])} value={f.risk} onChange={(v) => set("risk", v)} /></div>
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
            <K.EmptyState icon="search" title="No mutation files match" detail="Adjust or clear your filters to see more files." actionLabel="Clear filters" onAction={clearAll} />
          ) : (
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>File No.</TableHead><TableHead>Dag No.</TableHead><TableHead>Mouza</TableHead><TableHead>Khatian</TableHead>
                <TableHead>Batch</TableHead><TableHead>Stage</TableHead><TableHead style={{ textAlign: "right" }}>Pending</TableHead>
                <TableHead>Advocate</TableHead><TableHead>AC Land office</TableHead><TableHead>Risk</TableHead><TableHead>Status</TableHead>
                <TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.file} style={{ cursor: "pointer" }} onClick={() => onOpenFile(r)}>
                    <TableCell><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{r.race ? <Icon name="alert-triangle" size={13} style={{ color: "var(--destructive)" }} /> : null}<span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.file}</span></span></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.dag}</TableCell>
                    <TableCell>{r.mouza}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.khatian}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.batch}</TableCell>
                    <TableCell><K.StatusBadge status={r.stage} /></TableCell>
                    <TableCell style={{ textAlign: "right" }}><PendingCell days={r.pending} /></TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{r.advocate}</TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{r.ac}</TableCell>
                    <TableCell><RiskBadge risk={r.risk} /></TableCell>
                    <TableCell><K.StatusBadge status={r.status} /></TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpenFile(r)}>View</Button>
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

  // ---------------- 6B: File detail ----------------
  function MutationDetail({ onBack, onUpdate, flash }) {
    const d = D.mutationDetail;
    const rejected = d.stage === "Rejected";
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1180 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Kharij / Mutation", href: "#" }, { label: "File Detail" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Mutation File Detail</h2>
              <K.StatusBadge status={d.stage} />
              {slaBadge(d.pending)}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="default" size="sm" onClick={() => onUpdate("stage")}><Icon name="history" size={15} />Update Stage</Button>
              <Button variant="outline" size="sm"><Icon name="file-signature" size={15} />Generate Forwarding Letter</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Mutation Report</Button>
              <DropdownMenu align="end" trigger={<Button variant="outline" size="icon"><Icon name="more-horizontal" size={16} /></Button>}
                items={[
                  { label: "Add Hearing Date", icon: <Icon name="calendar" size={14} />, onSelect: () => onUpdate("stage") },
                  { label: "Capture Rejection Reason", icon: <Icon name="x-circle" size={14} />, onSelect: () => onUpdate("rejection") },
                  { label: "Upload Document", icon: <Icon name="upload" size={14} />, onSelect: () => onUpdate("stage") },
                ]} />
            </div>
          </div>
        </div>

        {flash ? <Alert variant={flash.tone} title={flash.title} icon={<Icon name={flash.tone === "success" ? "check-circle" : "info"} size={18} />}>{flash.detail}</Alert> : null}
        {d.race ? (
          <Alert variant="destructive" title="Race warning — competing mutation detected" icon={<Icon name="alert-triangle" size={18} />}>
            Another party has filed to mutate {d.dag}. Prioritise this file and flag it to the AC Land office before the hearing.
          </Alert>
        ) : null}

        {/* Summary */}
        <Card><CardHeader><CardTitle>File summary</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Field label="File No." value={d.file} mono />
            <Field label="Dag No." value={d.dag} mono />
            <Field label="Mouza" value={d.mouza} />
            <Field label="Khatian" value={d.khatian} mono />
            <Field label="Project" value={d.project} />
            <Field label="AC Land office" value={d.ac} />
            <Field label="Current stage" value={<K.StatusBadge status={d.stage} />} />
            <Field label="Pending days" value={<PendingCell days={d.pending} />} />
            <Field label="Submission batch" value={d.batch} mono />
          </CardContent>
        </Card>

        {/* Stage timeline */}
        <Card><CardHeader><CardTitle>Workflow stage</CardTitle></CardHeader>
          <CardContent style={{ paddingTop: 8, paddingBottom: 20, overflowX: "auto" }}>
            <StageStepper stage={d.stage} />
          </CardContent>
        </Card>

        {/* Application details + rejection */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
          <Card><CardHeader><CardTitle>Application details</CardTitle></CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <Field label="Submission date" value={d.submission} mono />
                <Field label="Hearing date" value={d.hearing} mono />
                <Field label="Assigned advocate" value={d.advocate} />
                <Field label="Next action" value={d.nextAction} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Notes</span>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: "var(--leading-relaxed)" }}>{d.notes}</p>
              </div>
            </CardContent>
          </Card>
          <Card><CardHeader><CardTitle>Rejection reason</CardTitle></CardHeader>
            <CardContent>
              {rejected && d.rejectionReason ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <K.Pill tone="danger">{d.rejectionReason}</K.Pill>
                  <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted-foreground)", lineHeight: "var(--leading-relaxed)" }}>Resolve the issue above and resubmit the file to the AC Land office.</p>
                </div>
              ) : (
                <K.EmptyState compact icon="shield-check" title="No rejection recorded" detail="This file has not been rejected. Capture a reason here if it is returned." actionLabel="Capture rejection reason" onAction={() => onUpdate("rejection")} />
              )}
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
      </div>
    );
  }

  // ---------------- Stage / rejection modal ----------------
  function StageModal({ open, mode, onClose, onDone }) {
    const [stage, setStage] = React.useState("");
    const showReject = mode === "rejection" || stage === "Rejected";
    React.useEffect(() => { if (open) setStage(mode === "rejection" ? "Rejected" : ""); }, [open, mode]);
    return (
      <Dialog open={open} onClose={onClose} title={mode === "rejection" ? "Capture rejection reason" : "Update mutation stage"} description={mode === "rejection" ? "Record why the AC Land office returned this file." : "Move the file to its next workflow stage and log the update."} width={540}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>New stage</Label>
            <Select placeholder="Select stage" options={opt(MO().stages)} value={stage} onChange={setStage} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Label>Hearing date</Label>
            <Input type="date" />
          </div>
          {showReject ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
              <Label>Rejection reason</Label>
              <Select placeholder="Select reason" options={opt(MO().rejectionReasons)} />
            </div>
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}>
            <Label>Notes</Label>
            <Textarea rows={3} placeholder="Add context for this stage change…" />
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <Label>Supporting document</Label>
            <div style={{ marginTop: 6, border: "1.5px dashed var(--border)", borderRadius: "var(--radius-md)", padding: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--muted)", color: "var(--muted-foreground)", fontSize: 13 }}>
              <Icon name="upload" size={16} />Drag a file here or <span style={{ color: "var(--foreground)", fontWeight: 600 }}>browse</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="default" onClick={() => onDone({ tone: "success", title: mode === "rejection" ? "Rejection recorded" : "Stage updated", detail: mode === "rejection" ? "The rejection reason was saved to the file." : "The mutation stage change has been logged." })}><Icon name="check" size={15} />Save update</Button>
        </DialogFooter>
      </Dialog>
    );
  }

  // ---------------- Coordinator ----------------
  function MutationModule() {
    const [view, setView] = React.useState("list");
    const [modalMode, setModalMode] = React.useState(null);
    const [flash, setFlash] = React.useState(null);
    return (
      <React.Fragment>
        {view === "list"
          ? <MutationList onOpenFile={() => { setFlash(null); setView("detail"); }} onAdd={() => setModalMode("stage")} />
          : <MutationDetail onBack={() => setView("list")} onUpdate={(m) => setModalMode(m)} flash={flash} />}
        <StageModal open={!!modalMode} mode={modalMode}
          onClose={() => setModalMode(null)}
          onDone={(f) => { setModalMode(null); setFlash(f); if (view === "list") setView("detail"); }} />
      </React.Fragment>
    );
  }

  window.MutationModule = MutationModule;
})();
