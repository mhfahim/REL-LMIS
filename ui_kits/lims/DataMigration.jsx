// DataMigrationModule — migration dashboard, Excel import wizard, and
// validation exceptions. Exposes window.MigrationModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Progress, Breadcrumb, Alert, Badge, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
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

  // ---------------- 11A: Dashboard ----------------
  function MigrationDashboard({ onImport, onErrors }) {
    const loading = K.useFakeLoad(550);
    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Data Migration" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Data migration</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Import legacy Excel and register data into LIMS — safely and reversibly.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={onErrors}><Icon name="alert-triangle" size={15} />View Errors</Button>
              <Button variant="outline" size="sm"><Icon name="file-text" size={15} />Reconciliation Report</Button>
              <Button variant="default" size="sm" onClick={onImport}><Icon name="upload" size={15} />Upload Excel</Button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {loading ? Array.from({ length: 6 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.migrationKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Progress */}
        <Card>
          <CardHeader><CardTitle>Migration progress</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {D.migrationProgress.map((p) => (
              <div key={p.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "var(--font-mono)" }}>{p.pct}%</span>
                </div>
                <Progress value={p.pct} color={p.color} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Source files */}
        <Card>
          <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <CardTitle>Source files</CardTitle>
            <Button variant="outline" size="sm" onClick={onImport}><Icon name="upload" size={15} />Upload Excel</Button>
          </CardHeader>
          <CardContent style={{ padding: "4px 0 0" }}>
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>File name</TableHead><TableHead style={{ textAlign: "right" }}>Sheets</TableHead><TableHead style={{ textAlign: "right" }}>Rows</TableHead>
                <TableHead>Status</TableHead><TableHead>Last updated</TableHead><TableHead style={{ width: 100, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {D.migrationFiles.map((f) => (
                  <TableRow key={f.name}>
                    <TableCell><span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}><Icon name="table" size={15} style={{ color: "var(--muted-foreground)" }} /><span style={{ fontWeight: 500, fontFamily: "var(--font-mono)", fontSize: 13 }}>{f.name}</span></span></TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{f.sheets}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{f.rows.toLocaleString()}</TableCell>
                    <TableCell><K.StatusBadge status={f.status} /></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{f.updated}</TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} onClick={f.status === "Errors" ? onErrors : onImport}>{f.status === "Errors" ? "Fix errors" : f.status === "Mapping" ? "Start mapping" : "Open"}</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent batches */}
        <Card>
          <CardHeader><CardTitle>Recent import batches</CardTitle></CardHeader>
          <CardContent style={{ padding: "4px 0 0" }}>
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>Batch ID</TableHead><TableHead>Source file</TableHead><TableHead style={{ textAlign: "right" }}>Rows imported</TableHead>
                <TableHead style={{ textAlign: "right" }}>Errors</TableHead><TableHead>Imported by</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {D.migrationBatches.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{b.id}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted-foreground)", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.file}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{b.rows.toLocaleString()}</TableCell>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: b.errors > 0 ? "var(--destructive)" : "var(--muted-foreground)", fontWeight: b.errors > 0 ? 700 : 400 }}>{b.errors}</TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)" }}>{b.by}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{b.date}</TableCell>
                    <TableCell><K.StatusBadge status={b.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ---------------- 11B: Import wizard ----------------
  const STEPS = ["Upload File", "Map Columns", "Validate Rows", "Preview Import", "Confirm Import"];
  function Stepper({ step }) {
    return (
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {STEPS.map((s, i) => {
          const done = i < step, cur = i === step;
          return (
            <React.Fragment key={s}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 120, flexShrink: 0 }}>
                <span style={{ width: 32, height: 32, borderRadius: "var(--radius-full)", background: done || cur ? "var(--primary)" : "var(--muted)", color: done || cur ? "#fff" : "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, border: done || cur ? "none" : "1px dashed var(--border)" }}>{done ? <Icon name="check" size={15} /> : i + 1}</span>
                <span style={{ fontSize: 12, fontWeight: cur ? 700 : 500, color: cur ? "var(--foreground)" : "var(--muted-foreground)", textAlign: "center" }}>{s}</span>
              </div>
              {i < STEPS.length - 1 ? <span style={{ flex: 1, height: 2, background: i < step ? "var(--primary)" : "var(--border)", marginTop: 15, minWidth: 16 }} /> : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  function ImportWizard({ onBack, onDone }) {
    const [step, setStep] = React.useState(0);
    const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
    const prev = () => step === 0 ? onBack() : setStep((s) => s - 1);
    const vs = D.validationSummary;

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1000 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Data Migration", href: "#" }, { label: "Excel Import Wizard" }]} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
            <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Excel import wizard</h2>
          </div>
        </div>

        <Card><CardContent style={{ padding: "24px 28px", overflowX: "auto" }}><Stepper step={step} /></CardContent></Card>

        {/* Step body */}
        <Card><CardContent style={{ padding: 24 }}>
          {step === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ border: "1.5px dashed var(--border)", borderRadius: "var(--radius-lg)", padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", background: "var(--muted)" }}>
                <span style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--background)", border: "1px solid var(--border)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--muted-foreground)" }}><Icon name="upload" size={20} /></span>
                <div style={{ fontSize: 15, fontWeight: 600 }}>Drag an Excel or CSV file here</div>
                <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>.xlsx, .xls or .csv up to 50 MB</div>
                <Button variant="outline" size="sm" style={{ marginTop: 4 }}>Browse files</Button>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Button variant="ghost" size="sm"><Icon name="download" size={15} />Download template</Button>
                <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>Use the template to ensure columns map correctly. Bengali (Bijoy) text is converted to Unicode automatically.</span>
              </div>
            </div>
          ) : step === 1 ? (
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Map columns to LIMS fields</div>
              <Table className="lims-table">
                <TableHeader><TableRow><TableHead>Source column</TableHead><TableHead>LIMS field</TableHead><TableHead>Required</TableHead><TableHead>Sample value</TableHead></TableRow></TableHeader>
                <TableBody>
                  {D.columnMapping.map((m) => (
                    <TableRow key={m.source}>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{m.source}</TableCell>
                      <TableCell style={{ width: 220 }}><Select options={opt([m.field, "— Ignore column —"])} value={m.field} onChange={() => {}} /></TableCell>
                      <TableCell>{m.required ? <K.Pill tone="danger">Required</K.Pill> : <K.Pill tone="neutral">Optional</K.Pill>}</TableCell>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{m.sample}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : step === 2 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Validation result</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                <div style={{ padding: 18, borderRadius: "var(--radius-md)", border: "1px solid rgba(22,163,74,0.35)", background: "rgba(22,163,74,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--success)" }}><Icon name="check-circle" size={18} /><span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>Valid rows</span></div>
                  <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "var(--font-mono)", marginTop: 8 }}>{vs.valid.toLocaleString()}</div>
                </div>
                <div style={{ padding: 18, borderRadius: "var(--radius-md)", border: "1px solid rgba(217,119,6,0.35)", background: "rgba(217,119,6,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--warning)" }}><Icon name="alert-triangle" size={18} /><span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>Warning rows</span></div>
                  <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "var(--font-mono)", marginTop: 8 }}>{vs.warning.toLocaleString()}</div>
                </div>
                <div style={{ padding: 18, borderRadius: "var(--radius-md)", border: "1px solid rgba(220,38,38,0.35)", background: "rgba(220,38,38,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--destructive)" }}><Icon name="x-circle" size={18} /><span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>Error rows</span></div>
                  <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "var(--font-mono)", marginTop: 8 }}>{vs.error.toLocaleString()}</div>
                </div>
              </div>
              <Alert variant="warning" title="Errors will be skipped" icon={<Icon name="info" size={18} />}>Only valid and warning rows are imported. Error rows are sent to Validation Exceptions for review — nothing is lost.</Alert>
            </div>
          ) : step === 3 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Preview import (first rows)</div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--success)", fontWeight: 600 }}><Icon name="check" size={14} />Bijoy → Unicode conversion applied</span>
              </div>
              <Table className="lims-table">
                <TableHeader><TableRow><TableHead>Dag No.</TableHead><TableHead>Mouza</TableHead><TableHead>Khatian</TableHead><TableHead style={{ textAlign: "right" }}>Area</TableHead><TableHead>Type</TableHead><TableHead>Notes (Bengali)</TableHead></TableRow></TableHeader>
                <TableBody>
                  {D.importPreview.map((r) => (
                    <TableRow key={r.dag}>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13 }}>{r.dag}</TableCell>
                      <TableCell>{r.mouza}</TableCell>
                      <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{r.khatian}</TableCell>
                      <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.area}</TableCell>
                      <TableCell><K.TypeBadge type={r.type} /></TableCell>
                      <TableCell style={{ color: "var(--muted-foreground)" }}>{r.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", textAlign: "center", padding: "12px 0" }}>
              <span style={{ width: 56, height: 56, borderRadius: "var(--radius-lg)", background: "rgba(22,163,74,0.12)", color: "var(--success)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="database" size={26} /></span>
              <div style={{ fontSize: 17, fontWeight: 700 }}>Ready to import {vs.valid.toLocaleString()} rows</div>
              <div style={{ fontSize: 14, color: "var(--muted-foreground)", maxWidth: 460, lineHeight: "var(--leading-normal)" }}>This creates a new import batch. {vs.error.toLocaleString()} error rows will be skipped and available for review.</div>
              <Alert variant="default" title="Reversible import" icon={<Icon name="repeat" size={18} />}>This batch can be rolled back from the migration dashboard within 7 days without affecting existing records.</Alert>
            </div>
          )}
        </CardContent></Card>

        {/* Wizard nav */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 8 }}>
          <Button variant="ghost" onClick={prev}><Icon name="arrow-left" size={15} />{step === 0 ? "Cancel" : "Back"}</Button>
          {step < STEPS.length - 1
            ? <Button variant="default" onClick={next}>Continue<Icon name="arrow-right" size={15} /></Button>
            : <Button variant="default" onClick={() => onDone()}><Icon name="check" size={15} />Confirm import</Button>}
        </div>
      </div>
    );
  }

  // ---------------- 11C: Validation exceptions ----------------
  function ValidationExceptions({ onBack }) {
    const blank = { type: "", file: "", status: "" };
    const [f, setF] = React.useState(blank);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
    const types = Array.from(new Set(D.validationExceptions.map((e) => e.type)));
    const files = Array.from(new Set(D.validationExceptions.map((e) => e.file)));
    const rows = D.validationExceptions.filter((e) => (!f.type || e.type === f.type) && (!f.file || e.file === f.file) && (!f.status || e.status === f.status));

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Data Migration", href: "#" }, { label: "Validation Exceptions" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <div>
                <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Validation exceptions</h2>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Rows that failed validation. Fix and re-import without losing data.</p>
              </div>
            </div>
            <Button variant="outline" size="sm"><Icon name="download" size={15} />Export error list</Button>
          </div>
        </div>

        <Card><CardContent style={{ padding: 16 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ width: 200 }}><Select placeholder="All error types" options={opt(types)} value={f.type} onChange={(v) => set("type", v)} /></div>
            <div style={{ width: 260 }}><Select placeholder="All source files" options={opt(files)} value={f.file} onChange={(v) => set("file", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All statuses" options={opt(["Open", "Warning", "Fixed"])} value={f.status} onChange={(v) => set("status", v)} /></div>
            {(f.type || f.file || f.status) ? <Button variant="ghost" size="sm" onClick={() => setF(blank)}>Clear</Button> : null}
          </div>
        </CardContent></Card>

        <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
          {rows.length === 0 ? (
            <K.EmptyState icon="check-circle" title="No exceptions" detail="No rows match these filters — all clear." />
          ) : (
            <Table className="lims-table" style={{ minWidth: 1080 }}>
              <TableHeader><TableRow>
                <TableHead style={{ textAlign: "right" }}>Row no.</TableHead><TableHead>Source file</TableHead><TableHead>Field</TableHead>
                <TableHead>Issue</TableHead><TableHead>Current value</TableHead><TableHead>Suggested fix</TableHead>
                <TableHead>Status</TableHead><TableHead style={{ width: 150, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((e, i) => (
                  <TableRow key={i}>
                    <TableCell style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{e.row}</TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted-foreground)", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.file}</TableCell>
                    <TableCell style={{ fontWeight: 500 }}>{e.field}</TableCell>
                    <TableCell><span style={{ color: e.status === "Warning" ? "var(--warning)" : e.status === "Fixed" ? "var(--success)" : "var(--destructive)", fontWeight: 500 }}>{e.issue}</span></TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{e.current}</TableCell>
                    <TableCell style={{ fontSize: 13, color: "var(--success)", fontWeight: 500 }}>{e.suggested}</TableCell>
                    <TableCell><K.StatusBadge status={e.status} /></TableCell>
                    <TableCell style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      {e.status === "Fixed"
                        ? <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }} disabled>Fixed</Button>
                        : <span style={{ display: "inline-flex", gap: 4, justifyContent: "flex-end" }}>
                            <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }}><Icon name="edit" size={13} />Edit</Button>
                            <Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }}><Icon name="check" size={13} />Fix</Button>
                          </span>}
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

  // ---------------- Coordinator ----------------
  function MigrationModule() {
    const [view, setView] = React.useState("dashboard");
    return view === "dashboard" ? <MigrationDashboard onImport={() => setView("wizard")} onErrors={() => setView("errors")} />
      : view === "wizard" ? <ImportWizard onBack={() => setView("dashboard")} onDone={() => setView("dashboard")} />
      : <ValidationExceptions onBack={() => setView("dashboard")} />;
  }

  window.MigrationModule = MigrationModule;
})();
