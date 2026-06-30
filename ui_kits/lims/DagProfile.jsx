// DagProfile — complete profile of one dag/land parcel: summary, balances,
// survey info, transaction ledger, documents, dispute & legal.
// Exposes window.DagProfile.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Button, Breadcrumb, Alert, Tabs, TabsList, TabsTrigger, TabsContent, Separator, DropdownMenu, Skeleton } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;

  function Field({ label, value, mono }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 500, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{value}</span>
      </div>
    );
  }

  function BalanceCard({ label, area, tone, icon }) {
    const tones = {
      success: { fg: "var(--success)", bg: "rgba(22,163,74,0.10)" },
      destructive: { fg: "var(--destructive)", bg: "rgba(220,38,38,0.09)" },
      warning: { fg: "var(--warning)", bg: "rgba(217,119,6,0.10)" },
    };
    const t = tones[tone];
    return (
      <Card>
        <CardContent style={{ padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name={icon} size={19} />
          </span>
          <div>
            <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-mono)", marginTop: 2 }}>{area}</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  function SurveyChips({ values, labels }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
        {values.map((v, i) => (
          <React.Fragment key={v}>
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", padding: "5px 11px", borderRadius: "var(--radius-md)", background: "var(--muted)", border: "1px solid var(--border)" }}>
              <span style={{ fontSize: 9.5, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted-foreground)", fontWeight: 600 }}>{labels[i]}</span>
              <span style={{ fontSize: 12.5, fontWeight: 600, fontFamily: "var(--font-mono)" }}>{v}</span>
            </span>
            {i < values.length - 1 ? <Icon name="chevron-right" size={14} style={{ color: "var(--muted-foreground)" }} /> : null}
          </React.Fragment>
        ))}
      </div>
    );
  }

  function DocCard({ doc }) {
    const pending = doc.state === "pending";
    return (
      <Card>
        <CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--muted)", color: pending ? "var(--muted-foreground)" : "var(--foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={doc.icon} size={18} />
            </span>
            <K.StatusBadge status={pending ? "Pending" : "Available"} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{doc.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>{doc.meta}</div>
          </div>
          <div style={{ marginTop: "auto" }}>
            {pending
              ? <Button variant="outline" size="sm" style={{ width: "100%" }}><Icon name="upload" size={14} />Upload</Button>
              : <Button variant="outline" size="sm" style={{ width: "100%" }}><Icon name="download" size={14} />View / download</Button>}
          </div>
        </CardContent>
      </Card>
    );
  }

  function LoadingSkeleton() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Card><CardContent style={{ padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
            {Array.from({ length: 4 }).map((_, i) => <div key={i}><Skeleton width={70} height={11} /><Skeleton width={120} height={15} style={{ marginTop: 8 }} /></div>)}
          </div>
          <Skeleton width="60%" height={34} />
        </CardContent></Card>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {Array.from({ length: 3 }).map((_, i) => <Card key={i}><CardContent style={{ padding: 18 }}><Skeleton width="80%" height={40} /></CardContent></Card>)}
        </div>
        <Card><CardContent style={{ padding: 0 }}><K.TableSkeleton rows={5} cols={5} /></CardContent></Card>
      </div>
    );
  }

  function DagProfile({ onNavigate, selectedDag, onBack, onPrev, onNext }) {
    const base = D.dagProfile;
    const sel = selectedDag || {};
    const d = {
      ...base,
      dagNo: sel.dag || base.dagNo,
      mouza: sel.mouza || base.mouza,
      project: sel.project || base.project,
      khatian: sel.khatian || base.khatian,
      status: sel.status || base.status,
      areas: sel.dag ? { clean: (sel.clean || "0.00") + " bigha", disputed: (sel.disputed || "0.00") + " bigha", negotiation: (sel.neg || "0.00") + " bigha" } : base.areas,
    };
    const loading = K.useFakeLoad(650);
    const [tab, setTab] = React.useState("survey");
    const disputed = d.status === "Disputed" || d.status === "Locked";

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1180 }}>
        {/* Header */}
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Inventory", href: "#" }, { label: "Dag Directory", href: "#" }, { label: d.dagNo }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="outline" size="sm" onClick={onBack}><Icon name="arrow-left" size={15} />Dag Directory</Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-mono)" }}>{d.dagNo}</h2>
              <K.StatusBadge status={d.status} />
              <span style={{ display: "inline-flex", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                <button onClick={onPrev} aria-label="Previous dag" style={{ width: 32, height: 32, border: "none", borderRight: "1px solid var(--border)", background: "var(--background)", cursor: "pointer", color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevron-left" size={16} /></button>
                <button onClick={onNext} aria-label="Next dag" style={{ width: 32, height: 32, border: "none", background: "var(--background)", cursor: "pointer", color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevron-right" size={16} /></button>
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("add-transaction")}><Icon name="plus" size={15} />Add Transaction</Button>
              <Button variant="outline" size="sm" disabled={disputed} title={disputed ? "This dag is already flagged as disputed" : undefined} onClick={() => onNavigate && onNavigate("disputes")}><Icon name="gavel" size={15} />Flag Dispute</Button>
              <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("reports")}><Icon name="download" size={15} />Export Report</Button>
              <DropdownMenu align="end"
                trigger={<Button variant="outline" size="icon"><Icon name="more-horizontal" size={16} /></Button>}
                items={[
                  { label: "Resolve Dispute", icon: <Icon name="shield-check" size={14} />, disabled: !disputed, onSelect: () => disputed && onNavigate && onNavigate("disputes") },
                  { label: "View Full Ledger", icon: <Icon name="receipt" size={14} />, onSelect: () => onNavigate && onNavigate("ledger") },
                  { separator: true },
                  { label: "Print Khatian", icon: <Icon name="printer" size={14} />, onSelect: () => window.print() },
                ]} />
            </div>
          </div>
        </div>

        {disputed ? (
          <Alert variant="destructive" title="This dag is locked due to dispute" icon={<Icon name="lock" size={18} />}>
            Sale or Awaz booking is restricted until the dispute is resolved.
          </Alert>
        ) : null}

        {loading ? <LoadingSkeleton /> : (
          <React.Fragment>
            {/* Summary header card */}
            <Card>
              <CardContent style={{ padding: 22, display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
                  <Field label="Dag No." value={d.dagNo} mono />
                  <Field label="Mouza" value={d.mouza} />
                  <Field label="Project" value={d.project} />
                  <Field label="Khatian No." value={d.khatian} mono />
                </div>
                <Separator />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Survey mapping</span>
                  <SurveyChips values={d.survey} labels={d.surveyLabels} />
                </div>
              </CardContent>
            </Card>

            {/* Balance cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              <BalanceCard label="Clean area" area={d.areas.clean} tone="success" icon="shield-check" />
              <BalanceCard label="Disputed area" area={d.areas.disputed} tone="destructive" icon="gavel" />
              <BalanceCard label="Under negotiation" area={d.areas.negotiation} tone="warning" icon="repeat" />
            </div>

            {/* Tabbed detail */}
            <Tabs value={tab} onChange={setTab}>
              <TabsList>
                <TabsTrigger value="survey">Survey information</TabsTrigger>
                <TabsTrigger value="ledger">Transaction ledger</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="legal">Dispute &amp; legal</TabsTrigger>
              </TabsList>

              <TabsContent value="survey">
                <Card>
                  <CardContent style={{ padding: "4px 0 0" }}>
                    <Table className="lims-table">
                      <TableHeader><TableRow><TableHead style={{ width: "40%" }}>Field</TableHead><TableHead>Value</TableHead></TableRow></TableHeader>
                      <TableBody>
                        {d.surveyInfo.map((r) => (
                          <TableRow key={r.field}>
                            <TableCell style={{ fontWeight: 500 }}>{r.field}</TableCell>
                            <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{r.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ledger">
                <Card>
                  <CardContent style={{ padding: "4px 0 0" }}>
                    {d.ledger.length === 0 ? (
                      <K.EmptyState icon="receipt" title="No transactions yet" detail="This dag has no recorded purchase, sale, or Awaz entries." actionLabel="Add Transaction" onAction={() => onNavigate && onNavigate("add-transaction")} />
                    ) : (
                      <Table className="lims-table">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead><TableHead>Type</TableHead><TableHead>Deed No.</TableHead>
                            <TableHead>Party</TableHead><TableHead style={{ textAlign: "right" }}>Area</TableHead><TableHead>Bucket</TableHead>
                            <TableHead>File No.</TableHead><TableHead>Status</TableHead><TableHead style={{ width: 56, textAlign: "right" }}>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {d.ledger.map((l, i) => (
                            <TableRow key={i}>
                              <TableCell style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 13, whiteSpace: "nowrap" }}>{l.date}</TableCell>
                              <TableCell><K.TypeBadge type={l.type} /></TableCell>
                              <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{l.deed}</TableCell>
                              <TableCell>{l.party}</TableCell>
                              <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right" }}>{l.area}</TableCell>
                              <TableCell><K.StatusBadge status={l.bucket} /></TableCell>
                              <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}>{l.file}</TableCell>
                              <TableCell><K.StatusBadge status={l.status} /></TableCell>
                              <TableCell style={{ textAlign: "right" }}><Button variant="ghost" size="sm" style={{ height: 28, padding: "0 8px" }}>Open</Button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                {d.documents.length === 0 ? (
                  <Card><CardContent style={{ padding: 0 }}><K.EmptyState icon="file-text" title="No documents uploaded" detail="Deed scans, khajna receipts, and mutation papers will appear here." actionLabel="Upload document" /></CardContent></Card>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                    {d.documents.map((doc) => <DocCard key={doc.name} doc={doc} />)}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="legal">
                <Card>
                  <CardHeader><CardTitle>Dispute &amp; legal status</CardTitle></CardHeader>
                  <CardContent style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                      <Field label="Dispute status" value={<K.StatusBadge status={d.legal.status} />} />
                      <Field label="Advocate" value={d.legal.advocate} />
                      <Field label="Court" value={d.legal.court} />
                      <Field label="Next hearing" value={d.legal.hearing} mono />
                      <Field label="Resolution" value={<K.StatusBadge status={d.legal.resolution} />} />
                    </div>
                    <Separator />
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>Case notes</span>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: "var(--leading-relaxed)", color: "var(--foreground)" }}>{d.legal.notes}</p>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("disputes")}><Icon name="shield-check" size={15} />Resolve Dispute</Button>
                      <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("disputes")}><Icon name="file-text" size={15} />View Case Document</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </React.Fragment>
        )}
      </div>
    );
  }
  window.DagProfile = DagProfile;
})();
