// AddTransaction — form for entering land transactions. Multi-dag entry,
// validation, confirmation dialog. Exposes window.AddTransaction.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Textarea, Label, Breadcrumb, Alert, Dialog, DialogFooter, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  function Field({ label, required, error, children, style }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0, ...style }}>
        <Label>{label}{required ? <span style={{ color: "var(--destructive)", marginLeft: 2 }}>*</span> : null}</Label>
        {children}
        {error ? <span style={{ fontSize: 12, color: "var(--destructive)" }}>{error}</span> : null}
      </div>
    );
  }

  function AddTransaction({ onNavigate }) {
    const [form, setForm] = React.useState({ type: "", deed: "", deedDate: "", deedType: "", party: "", file: "", project: "", mouza: "", amount: "", notes: "" });
    const [dags, setDags] = React.useState([{ dag: "", area: "", bucket: "" }]);
    const [errors, setErrors] = React.useState({});
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [flash, setFlash] = React.useState(null); // {tone,title,detail}

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
    const setDag = (i, k, v) => setDags((d) => d.map((row, idx) => idx === i ? { ...row, [k]: v } : row));
    const addDag = () => setDags((d) => [...d, { dag: "", area: "", bucket: "" }]);
    const removeDag = (i) => setDags((d) => d.length > 1 ? d.filter((_, idx) => idx !== i) : d);

    function validate() {
      const e = {};
      if (!form.type) e.type = "Select a transaction type.";
      if (!form.deed.trim()) e.deed = "Deed number is required.";
      if (!form.deedDate) e.deedDate = "Deed date is required.";
      if (!form.party.trim()) e.party = "Counterparty is required.";
      if (!form.mouza) e.mouza = "Select a mouza.";
      if (!dags.some((r) => r.dag.trim())) e.dags = "Add at least one dag with a dag number.";
      setErrors(e);
      return Object.keys(e).length === 0;
    }

    function onSubmitClick() {
      if (validate()) { setFlash(null); setShowConfirm(true); }
      else setFlash({ tone: "destructive", title: "Please fix the highlighted fields", detail: "Some required information is missing or incomplete." });
    }
    function confirmSubmit() {
      setShowConfirm(false);
      setFlash({ tone: "success", title: "Transaction submitted", detail: "The entry has been recorded in the ledger and the audit log." });
    }
    function saveDraft() {
      setFlash({ tone: "info", title: "Draft saved", detail: "You can resume this transaction from your drafts." });
    }

    const validDags = dags.filter((r) => r.dag.trim()).length;

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 1080 }}>
        {/* Header */}
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Transactions", href: "#" }, { label: "Add Transaction" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Add Transaction</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Record a purchase, sale, Awaz, or status change against one or more dags.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={saveDraft}><Icon name="save" size={15} />Save draft</Button>
              <Button variant="default" size="sm" onClick={onSubmitClick}><Icon name="check" size={15} />Submit transaction</Button>
            </div>
          </div>
        </div>

        {flash ? (
          <Alert variant={flash.tone} title={flash.title}
            icon={<Icon name={flash.tone === "success" ? "check-circle" : flash.tone === "destructive" ? "alert-triangle" : "info"} size={18} />}>
            {flash.detail}
          </Alert>
        ) : null}

        {/* Transaction details */}
        <Card>
          <CardHeader><CardTitle>Transaction details</CardTitle></CardHeader>
          <CardContent style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Field label="Transaction type" required error={errors.type}>
              <Select placeholder="Select type" options={opt(D.options.transactionTypes)} value={form.type} onChange={(v) => set("type", v)} />
            </Field>
            <Field label="Deed No." required error={errors.deed}>
              <Input placeholder="e.g. DEED-7749" value={form.deed} invalid={!!errors.deed} onChange={(e) => set("deed", e.target.value)} />
            </Field>
            <Field label="Deed date" required error={errors.deedDate}>
              <Input type="date" value={form.deedDate} invalid={!!errors.deedDate} onChange={(e) => set("deedDate", e.target.value)} />
            </Field>
            <Field label="Deed type">
              <Select placeholder="Select deed type" options={opt(D.options.deedTypes)} value={form.deedType} onChange={(v) => set("deedType", v)} />
            </Field>
            <Field label="Party / Counterparty" required error={errors.party}>
              <Input placeholder="Donor / buyer / counterparty" value={form.party} invalid={!!errors.party} onChange={(e) => set("party", e.target.value)} />
            </Field>
            <Field label="File No.">
              <Input placeholder="e.g. F-2025-124" value={form.file} onChange={(e) => set("file", e.target.value)} />
            </Field>
            <Field label="Project">
              <Select placeholder="Select project" options={opt(D.options.projects)} value={form.project} onChange={(v) => set("project", v)} />
            </Field>
            <Field label="Mouza" required error={errors.mouza}>
              <Select placeholder="Select mouza" options={opt(D.options.mouzas)} value={form.mouza} onChange={(v) => set("mouza", v)} />
            </Field>
            <Field label="Consideration amount">
              <Input placeholder="৳ 0" value={form.amount} onChange={(e) => set("amount", e.target.value)} />
            </Field>
          </CardContent>
        </Card>

        {/* Dag entries */}
        <Card>
          <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <CardTitle>Dag entries</CardTitle>
              {errors.dags ? <div style={{ fontSize: 12, color: "var(--destructive)", marginTop: 4 }}>{errors.dags}</div> : null}
            </div>
            <Button variant="outline" size="sm" onClick={addDag}><Icon name="plus" size={15} />Add another dag</Button>
          </CardHeader>
          <CardContent style={{ padding: "4px 0 0" }}>
            <Table className="lims-table">
              <TableHeader>
                <TableRow>
                  <TableHead style={{ width: 36 }}>#</TableHead>
                  <TableHead>Dag No.</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Bucket</TableHead>
                  <TableHead style={{ width: 48 }}></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dags.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{i + 1}</TableCell>
                    <TableCell><Input placeholder="DAG-0000" value={row.dag} onChange={(e) => setDag(i, "dag", e.target.value)} style={{ height: 34 }} /></TableCell>
                    <TableCell><Input placeholder="0.00 bigha" value={row.area} onChange={(e) => setDag(i, "area", e.target.value)} style={{ height: 34 }} /></TableCell>
                    <TableCell><Select placeholder="Select" options={opt(D.options.buckets)} value={row.bucket} onChange={(v) => setDag(i, "bucket", v)} /></TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" style={{ height: 32, width: 32 }} onClick={() => removeDag(i)} disabled={dags.length === 1}><Icon name="trash" size={15} /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Documents & notes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <Card>
            <CardHeader><CardTitle>Documents</CardTitle></CardHeader>
            <CardContent>
              <div style={{ border: "1.5px dashed var(--border)", borderRadius: "var(--radius-lg)", padding: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center", background: "var(--muted)" }}>
                <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--background)", border: "1px solid var(--border)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--muted-foreground)" }}><Icon name="upload" size={18} /></span>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>Drag deed scans &amp; receipts here</div>
                <div style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>PDF, JPG or PNG up to 20 MB</div>
                <Button variant="outline" size="sm" style={{ marginTop: 4 }}>Browse files</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Notes</CardTitle></CardHeader>
            <CardContent>
              <Textarea rows={6} placeholder="Add any context for officers reviewing this transaction…" value={form.notes} onChange={(e) => set("notes", e.target.value)} />
            </CardContent>
          </Card>
        </div>

        {/* Footer actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, paddingBottom: 8 }}>
          <Button variant="ghost" onClick={() => onNavigate && onNavigate("ledger")}>Cancel</Button>
          <Button variant="outline" onClick={saveDraft}><Icon name="save" size={15} />Save draft</Button>
          <Button variant="default" onClick={onSubmitClick}><Icon name="check" size={15} />Submit transaction</Button>
        </div>

        {/* Confirmation dialog */}
        <Dialog open={showConfirm} onClose={() => setShowConfirm(false)} title="Submit this transaction?" description="Once submitted, it is recorded in the ledger and the audit log. You can correct it later with a Correction entry.">
          <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "12px 14px", borderRadius: "var(--radius-md)", background: "var(--muted)", fontSize: 13.5 }}>
            <Row k="Transaction type" v={form.type || "—"} />
            <Row k="Deed No." v={form.deed || "—"} mono />
            <Row k="Counterparty" v={form.party || "—"} />
            <Row k="Dags" v={`${validDags} dag${validDags === 1 ? "" : "s"}`} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
            <Button variant="default" onClick={confirmSubmit}><Icon name="check" size={15} />Confirm &amp; submit</Button>
          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  function Row({ k, v, mono }) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <span style={{ color: "var(--muted-foreground)" }}>{k}</span>
        <span style={{ fontWeight: 600, fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)" }}>{v}</span>
      </div>
    );
  }

  window.AddTransaction = AddTransaction;
})();
