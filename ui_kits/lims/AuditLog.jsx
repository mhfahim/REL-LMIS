// AuditModule — Audit log list + audit event detail (forensic view).
// Exposes window.AuditModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Breadcrumb, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  function RiskBadge({ risk }) {
    const tone = risk === "High" ? "danger" : risk === "Permission" ? "warning" : "success";
    const label = risk === "Normal" ? "Normal" : risk;
    return <K.Pill tone={tone}>{label}</K.Pill>;
  }
  const ACTION_TONE = { "Delete": "danger", "Dispute Lock": "danger", "Role Change": "warning", "Approval": "navy", "Dispute Resolve": "navy", "Login": "neutral", "Export": "neutral", "Create": "neutral", "Update": "neutral" };
  function ActionBadge({ action }) {
    const t = { danger: { bg: "rgba(220,38,38,0.10)", fg: "rgb(185,28,28)" }, warning: { bg: "rgba(217,119,6,0.12)", fg: "rgb(180,83,9)" }, navy: { bg: "var(--brand-subtle)", fg: "var(--brand)" }, neutral: { bg: "var(--muted)", fg: "var(--muted-foreground)" } }[ACTION_TONE[action] || "neutral"];
    return <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 9px", borderRadius: "var(--radius-full)", background: t.bg, color: t.fg, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{action}</span>;
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
  function Field({ label, value, mono }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 500, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{value}</span>
      </div>
    );
  }

  // ---------------- 10A: List ----------------
  function AuditList({ onOpen }) {
    const blank = { q: "", user: "", action: "", module: "", range: "Last 7 days", sensitive: false, ip: "" };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const users = Array.from(new Set(D.auditEvents.map((e) => e.user)));
    const rows = D.auditEvents.filter((e) => {
      if (f.q) { const h = [e.id, e.user, e.record, e.action, e.module].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.user && e.user !== f.user) return false;
      if (f.action && e.action !== f.action) return false;
      if (f.module && e.module !== f.module) return false;
      if (f.sensitive && !e.sensitive) return false;
      if (f.ip && !e.ip.includes(f.ip)) return false;
      return true;
    });

    const chips = [];
    [["q", "Search"], ["user", "User"], ["action", "Action"], ["module", "Module"], ["ip", "IP"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    if (f.range !== "Last 7 days") chips.push({ k: "range", label: "Period", value: f.range });
    if (f.sensitive) chips.push({ k: "sensitive", label: "View", value: "Sensitive only" });
    const clearOne = (k) => set(k, k === "range" ? "Last 7 days" : k === "sensitive" ? false : "");
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Audit Log" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Audit log</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>An immutable record of who changed what, and when.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant={f.sensitive ? "default" : "outline"} size="sm" onClick={() => set("sensitive", !f.sensitive)}><Icon name="lock" size={15} />Sensitive only</Button>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Audit Log</Button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
          {loading ? Array.from({ length: 5 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.auditKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 220px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search event, user, record…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 160 }}><Select placeholder="All users" options={opt(users)} value={f.user} onChange={(v) => set("user", v)} /></div>
            <div style={{ width: 160 }}><Select placeholder="All actions" options={opt(D.auditActions)} value={f.action} onChange={(v) => set("action", v)} /></div>
            <div style={{ width: 168 }}><Select placeholder="All modules" options={opt(D.auditModules)} value={f.module} onChange={(v) => set("module", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="Date range" options={opt(["Today", "Last 7 days", "Last 30 days", "This year"])} value={f.range} onChange={(v) => set("range", v)} /></div>
            <div style={{ width: 150 }}><Input placeholder="IP address" value={f.ip} onChange={(e) => set("ip", e.target.value)} /></div>
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
        <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
          {loading ? <K.TableSkeleton rows={6} cols={8} /> : rows.length === 0 ? (
            <K.EmptyState icon="search" title="No audit events match" detail="Adjust or clear your filters to see more events." actionLabel="Clear filters" onAction={clearAll} />
          ) : (
            <Table className="lims-table" style={{ minWidth: 1180 }}>
              <TableHeader><TableRow>
                <TableHead>Timestamp</TableHead><TableHead>User</TableHead><TableHead>Module</TableHead>
                <TableHead>Action</TableHead><TableHead>Record ID</TableHead><TableHead>Old value</TableHead>
                <TableHead>New value</TableHead><TableHead>IP address</TableHead><TableHead>Risk</TableHead>
                <TableHead style={{ width: 56, textAlign: "right" }}>View</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((e) => (
                  <TableRow key={e.id} style={{ cursor: "pointer" }} onClick={() => onOpen(e)}>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{e.ts}</TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>{e.sensitive ? <Icon name="lock" size={13} style={{ color: "var(--destructive)" }} /> : null}<span style={{ fontWeight: 500 }}>{e.user}</span></span>
                    </TableCell>
                    <TableCell style={{ whiteSpace: "nowrap" }}>{e.module}</TableCell>
                    <TableCell><ActionBadge action={e.action} /></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{e.record}</TableCell>
                    <TableCell style={{ fontSize: 13, color: "var(--muted-foreground)", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.old}</TableCell>
                    <TableCell style={{ fontSize: 13, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.new}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted-foreground)" }}>{e.ip}</TableCell>
                    <TableCell><RiskBadge risk={e.risk} /></TableCell>
                    <TableCell style={{ textAlign: "right" }} onClick={(ev) => ev.stopPropagation()}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={() => onOpen(e)}>View</Button>
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

  // ---------------- 10B: Event detail ----------------
  function AuditDetail({ onBack }) {
    const d = D.auditDetail;
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1000 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Audit Log", href: "#" }, { label: d.id }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-mono)" }}>{d.id}</h2>
              <RiskBadge risk={d.risk} />
              {d.sensitive ? <K.Pill tone="danger">Sensitive</K.Pill> : null}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm"><Icon name="download" size={15} />Export Event</Button>
              <Button variant="default" size="sm" onClick={onBack}><Icon name="arrow-left" size={15} />Back to Audit Log</Button>
            </div>
          </div>
        </div>

        {/* Event summary */}
        <Card><CardHeader><CardTitle>Event summary</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Field label="Event ID" value={d.id} mono />
            <Field label="Timestamp" value={d.ts} mono />
            <Field label="Action type" value={<ActionBadge action={d.action} />} />
            <Field label="Module" value={d.module} />
            <Field label="Affected record" value={d.record} mono />
            <Field label="Risk" value={<RiskBadge risk={d.risk} />} />
          </CardContent>
        </Card>

        {/* Actor / session */}
        <Card><CardHeader><CardTitle>Actor & session</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Field label="User name" value={d.user} />
            <Field label="Role" value={d.role} />
            <Field label="IP address" value={d.ip} mono />
            <Field label="Device / browser" value={d.device} />
            <Field label="Session ID" value={d.session} mono />
          </CardContent>
        </Card>

        {/* Before / after comparison */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 12 }}>Change comparison</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "stretch" }}>
            <Card style={{ borderColor: "rgba(220,38,38,0.4)" }}>
              <CardContent style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ width: 24, height: 24, borderRadius: "var(--radius-sm)", background: "rgba(220,38,38,0.10)", color: "var(--destructive)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="minus" size={14} /></span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)" }}>Previous value</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--destructive)" }}>{d.old}</div>
              </CardContent>
            </Card>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px", color: "var(--muted-foreground)" }}><Icon name="arrow-right" size={20} /></div>
            <Card style={{ borderColor: "rgba(22,163,74,0.4)" }}>
              <CardContent style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ width: 24, height: 24, borderRadius: "var(--radius-sm)", background: "rgba(22,163,74,0.12)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={14} /></span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)" }}>New value</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "var(--font-mono)", color: "var(--success)" }}>{d.new}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reason + related */}
        <Card><CardContent style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Reason / comment</span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: "var(--leading-relaxed)" }}>{d.reason}</p>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Related record</span>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{d.related}</span>
            </div>
            <Button variant="outline" size="sm"><Icon name="external-link" size={15} />Open related record</Button>
          </div>
        </CardContent></Card>
      </div>
    );
  }

  // ---------------- Coordinator ----------------
  function AuditModule() {
    const [view, setView] = React.useState("list");
    return view === "list"
      ? <AuditList onOpen={() => setView("detail")} />
      : <AuditDetail onBack={() => setView("list")} />;
  }

  window.AuditModule = AuditModule;
})();
