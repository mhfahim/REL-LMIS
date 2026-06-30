// TransactionDetail — full detail of one transaction / deed, opened from the
// Transaction Ledger (Deed No. or View). Exposes window.TransactionDetail.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Breadcrumb, Separator } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;

  function Field({ label, value, mono, link, onClick }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted-foreground)", fontWeight: 600 }}>{label}</span>
        {link ? (
          <button className="lims-link" onClick={onClick} style={{ alignSelf: "flex-start", fontSize: 14, fontWeight: 600, color: "var(--brand)", background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{value}</button>
        ) : (
          <span style={{ fontSize: 14, fontWeight: 500, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{value}</span>
        )}
      </div>
    );
  }

  function TransactionDetail({ tx, onBack, onOpenDag, onNavigate }) {
    const r = tx || D.ledgerAll[0];
    const loading = K.useFakeLoad(450);
    const docs = [
      { name: "Deed scan", meta: `${r.deed} · PDF`, icon: "file-text" },
      { name: "Mutation reference", meta: "namjari ref · PDF", icon: "file-signature" },
      { name: "Payment voucher", meta: "voucher · PDF", icon: "receipt" },
    ];
    const history = [
      { icon: "plus", title: "Transaction recorded", by: r.by, time: r.date },
      { icon: "upload", title: "Deed scan attached", by: r.by, time: r.date },
      { icon: "check-circle", title: `Status set to ${r.status}`, by: "GM Land", time: r.date },
    ];

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1120 }}>
        {/* Header */}
        <div>
          <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Transaction Ledger", href: "#" }, { label: r.deed }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <Button variant="outline" size="sm" onClick={onBack}><Icon name="arrow-left" size={15} />Transaction Ledger</Button>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-mono)" }}>{r.deed}</h2>
              <K.TypeBadge type={r.type} />
              <K.StatusBadge status={r.status} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={() => onOpenDag && onOpenDag(r.dag)}><Icon name="map-pin" size={15} />Open Dag Profile</Button>
              <Button variant="outline" size="sm" onClick={() => onNavigate && onNavigate("reports")}><Icon name="download" size={15} />Export</Button>
              <Button variant="default" size="sm" onClick={() => onNavigate && onNavigate("add-transaction")}><Icon name="edit" size={15} />Edit</Button>
            </div>
          </div>
        </div>

        {loading ? (
          <Card><CardContent style={{ padding: 0 }}><K.TableSkeleton rows={6} cols={4} /></CardContent></Card>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Core details */}
              <Card>
                <CardHeader><CardTitle>Transaction details</CardTitle></CardHeader>
                <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                  <Field label="Transaction type" value={r.type} />
                  <Field label="Deed No." value={r.deed} mono />
                  <Field label="Deed date" value={r.date} mono />
                  <Field label="Deed type" value={r.deedType || "Saf Kobla"} />
                  <Field label="File No." value={r.file} mono />
                  <Field label="Party / Counterparty" value={r.party} />
                  <Field label="Dag No." value={r.dag} mono link onClick={() => onOpenDag && onOpenDag(r.dag)} />
                  <Field label="Mouza" value={r.mouza} />
                  <Field label="Project" value={r.project || "Padma Riverfront — Phase I"} />
                  <Field label="Area" value={r.area} mono />
                  <Field label="Bucket" value={<K.StatusBadge status={r.bucket} />} />
                  <Field label="Amount" value={r.amount} mono />
                  <Field label="Created by" value={r.by} />
                  <Field label="Status" value={<K.StatusBadge status={r.status} />} />
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader><CardTitle>Notes</CardTitle></CardHeader>
                <CardContent style={{ fontSize: 13.5, color: "var(--muted-foreground)", lineHeight: "var(--leading-relaxed)" }}>
                  {r.notes || "Registered at sub-registry office. Deed scan verified against khatian record. No outstanding objection at time of entry."}
                </CardContent>
              </Card>
            </div>

            {/* Side: documents + history */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Card>
                <CardHeader><CardTitle>Attached documents</CardTitle></CardHeader>
                <CardContent style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {docs.map((d) => (
                    <div key={d.name} className="lims-rowlink" style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", cursor: "pointer" }}>
                      <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: "var(--muted)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={d.icon} size={15} /></span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{d.name}</div>
                        <div style={{ fontSize: 11.5, color: "var(--muted-foreground)" }}>{d.meta}</div>
                      </div>
                      <Icon name="download" size={15} style={{ color: "var(--muted-foreground)" }} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>History</CardTitle></CardHeader>
                <CardContent style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {history.map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: 11 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--muted)", color: "var(--muted-foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={h.icon} size={13} /></span>
                        {i < history.length - 1 ? <span style={{ width: 1, flex: 1, minHeight: 18, background: "var(--border)" }} /> : null}
                      </div>
                      <div style={{ paddingBottom: i < history.length - 1 ? 16 : 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{h.title}</div>
                        <div style={{ fontSize: 11.5, color: "var(--muted-foreground)" }}>{h.by} · {h.time}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    );
  }
  window.TransactionDetail = TransactionDetail;
})();
