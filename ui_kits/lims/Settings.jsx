// SettingsModule — Notification center, System settings, Security settings.
// Exposes window.NotificationCenter and window.SettingsModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Label, Switch, Breadcrumb, Alert, Tabs, TabsList, TabsTrigger, TabsContent, Separator } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = (arr) => arr.map((v) => ({ value: v, label: v }));

  const CAT_ICON = { Dispute: "gavel", Mutation: "file-signature", Khajna: "banknote", Approval: "check-circle", Audit: "history", "Data Import": "database", System: "settings" };

  // ---------------- 12A: Notification center ----------------
  function NotificationCenter() {
    const [filter, setFilter] = React.useState("All");
    const [items, setItems] = React.useState(D.notifications);
    const filters = ["All", "Unread", "High Priority", "Dispute", "Mutation", "Khajna"];
    const rows = items.filter((n) => {
      if (filter === "All") return true;
      if (filter === "Unread") return n.unread;
      if (filter === "High Priority") return n.priority === "High";
      return n.cat === filter;
    });
    const unread = items.filter((n) => n.unread).length;
    const markAll = () => setItems((it) => it.map((n) => ({ ...n, unread: false })));
    const toggleRead = (id) => setItems((it) => it.map((n) => n.id === id ? { ...n, unread: false } : n));

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 920 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Notifications" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Notification center</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>{unread} unread · system alerts and reminders.</p>
            </div>
            <Button variant="outline" size="sm" onClick={markAll} disabled={unread === 0}><Icon name="check" size={15} />Mark all as read</Button>
          </div>
        </div>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map((c) => {
            const on = filter === c;
            return (
              <button key={c} onClick={() => setFilter(c)} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 13px", borderRadius: "var(--radius-full)", border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`, background: on ? "var(--primary)" : "var(--background)", color: on ? "var(--primary-foreground)" : "var(--foreground)", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                {c}{c === "Unread" && unread ? <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 18, height: 18, padding: "0 5px", borderRadius: "var(--radius-full)", background: on ? "rgba(255,255,255,0.25)" : "var(--destructive)", color: "#fff", fontSize: 11, fontWeight: 700 }}>{unread}</span> : null}
              </button>
            );
          })}
        </div>

        {/* List */}
        <Card><CardContent style={{ padding: 0 }}>
          {rows.length === 0 ? (
            <K.EmptyState icon="bell" title="Nothing here" detail="No notifications match this filter." />
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {rows.map((n, i) => (
                <div key={n.id} style={{ display: "flex", gap: 14, padding: "16px 18px", borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none", background: n.unread ? "rgba(30,41,59,0.025)" : "transparent" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--muted)", color: n.priority === "High" ? "var(--destructive)" : "var(--foreground)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={n.icon} size={18} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      {n.unread ? <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--brand)", flexShrink: 0 }} /> : null}
                      <span style={{ fontSize: 14.5, fontWeight: 600 }}>{n.title}</span>
                      <K.Pill tone="neutral">{n.cat}</K.Pill>
                      {n.priority === "High" ? <K.Pill tone="danger">High</K.Pill> : n.priority === "Medium" ? <K.Pill tone="warning">Medium</K.Pill> : null}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 3 }}>{n.msg}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                      <span style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{n.time}</span>
                      <Button variant="ghost" size="sm" style={{ height: 26, padding: "0 8px" }}>View related record<Icon name="chevron-right" size={13} /></Button>
                      {n.unread ? <Button variant="ghost" size="sm" style={{ height: 26, padding: "0 8px" }} onClick={() => toggleRead(n.id)}>Mark read</Button> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent></Card>
      </div>
    );
  }

  // ---------------- Settings shared bits ----------------
  function SettingRow({ title, desc, children }) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{title}</div>
          {desc ? <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", marginTop: 2 }}>{desc}</div> : null}
        </div>
        <div style={{ flexShrink: 0 }}>{children}</div>
      </div>
    );
  }
  function SettingsCard({ icon, title, children }) {
    return (
      <Card>
        <CardHeader style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
          <span style={{ width: 30, height: 30, borderRadius: "var(--radius-md)", background: "var(--muted)", color: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={icon} size={16} /></span>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent style={{ paddingTop: 0 }}>{children}</CardContent>
      </Card>
    );
  }

  // ---------------- 12B + 12C: Settings ----------------
  function SettingsModule() {
    const [tab, setTab] = React.useState("system");
    const [flash, setFlash] = React.useState(false);
    const save = () => { setFlash(true); };

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)", maxWidth: 900 }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Settings" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Settings</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>System configuration and security policy.</p>
            </div>
            <Button variant="default" size="sm" onClick={save}><Icon name="save" size={15} />Save changes</Button>
          </div>
        </div>

        {flash ? <Alert variant="success" title="Settings saved" icon={<Icon name="check-circle" size={18} />}>Your changes have been applied and recorded in the audit log.</Alert> : null}

        <Tabs value={tab} onChange={setTab}>
          <TabsList>
            <TabsTrigger value="system">System settings</TabsTrigger>
            <TabsTrigger value="security">Security settings</TabsTrigger>
          </TabsList>

          {/* ---- System ---- */}
          <TabsContent value="system">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <SettingsCard icon="building" title="Company information">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Company name</Label><Input defaultValue="Reliance Land Holdings Ltd." /></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Address</Label><Input defaultValue="Reliance Land Cell, Dhaka" /></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <Label>Logo</Label>
                    <div style={{ border: "1.5px dashed var(--border)", borderRadius: "var(--radius-md)", padding: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--muted)", color: "var(--muted-foreground)", fontSize: 13 }}><Icon name="upload" size={15} />Upload logo</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <Label>Signature image</Label>
                    <div style={{ border: "1.5px dashed var(--border)", borderRadius: "var(--radius-md)", padding: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--muted)", color: "var(--muted-foreground)", fontSize: 13 }}><Icon name="upload" size={15} />Upload signature</div>
                  </div>
                </div>
              </SettingsCard>

              <SettingsCard icon="file-text" title="Report settings">
                <SettingRow title="Default export format" desc="Format used when exporting a report.">
                  <div style={{ width: 160 }}><Select options={opt(["PDF", "Excel", "Both"])} defaultValue="PDF" /></div>
                </SettingRow>
                <SettingRow title="PDF header" desc="Show company letterhead on every report.">
                  <Switch defaultChecked />
                </SettingRow>
                <SettingRow title="Signature panel" desc="Prepared / Checked / Approved signature blocks.">
                  <Switch defaultChecked />
                </SettingRow>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 14 }}><Label>Report footer text</Label><Input defaultValue="Confidential — Reliance Land Records" /></div>
              </SettingsCard>

              <SettingsCard icon="map" title="Land data settings">
                <SettingRow title="Default area unit"><div style={{ width: 160 }}><Select options={opt(["Bigha", "Katha", "Decimal", "Acre"])} defaultValue="Bigha" /></div></SettingRow>
                <SettingRow title="Decimal precision"><div style={{ width: 120 }}><Select options={opt(["1", "2", "3"])} defaultValue="2" /></div></SettingRow>
                <SettingRow title="Bengali numerals" desc="Display numbers in Bengali script where applicable."><Switch /></SettingRow>
                <SettingRow title="Default project type"><div style={{ width: 200 }}><Select options={opt(D.options.projects)} defaultValue={D.options.projects[1]} /></div></SettingRow>
              </SettingsCard>

              <SettingsCard icon="bell" title="Notification settings">
                <SettingRow title="Email alerts" desc="Send important alerts by email."><Switch defaultChecked /></SettingRow>
                <SettingRow title="In-app alerts" desc="Show alerts in the notification center."><Switch defaultChecked /></SettingRow>
                <SettingRow title="Khajna reminder (days before due)"><div style={{ width: 120 }}><Input defaultValue="30" /></div></SettingRow>
                <SettingRow title="Mutation SLA (days)"><div style={{ width: 120 }}><Input defaultValue="30" /></div></SettingRow>
              </SettingsCard>

              <SettingsCard icon="database" title="Backup settings">
                <SettingRow title="Backup frequency"><div style={{ width: 160 }}><Select options={opt(["Hourly", "Daily", "Weekly"])} defaultValue="Daily" /></div></SettingRow>
                <SettingRow title="Retention period"><div style={{ width: 160 }}><Select options={opt(["30 days", "90 days", "1 year", "5 years"])} defaultValue="1 year" /></div></SettingRow>
                <SettingRow title="Last backup status" desc="Completed 30 Jun 2026, 02:00."><K.Pill tone="success">Healthy</K.Pill></SettingRow>
              </SettingsCard>
            </div>
          </TabsContent>

          {/* ---- Security ---- */}
          <TabsContent value="security">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Alert variant="default" title="Security changes are audited" icon={<Icon name="shield-check" size={18} />}>
                Every change on this tab is recorded in the audit log with your name and a timestamp.
              </Alert>

              <SettingsCard icon="lock" title="Password policy">
                <SettingRow title="Minimum length"><div style={{ width: 120 }}><Select options={opt(["8", "10", "12", "14"])} defaultValue="12" /></div></SettingRow>
                <SettingRow title="Complexity rule" desc="Require upper, lower, number, and symbol."><Switch defaultChecked /></SettingRow>
                <SettingRow title="Expiry rule"><div style={{ width: 160 }}><Select options={opt(["Never", "60 days", "90 days", "180 days"])} defaultValue="90 days" /></div></SettingRow>
              </SettingsCard>

              <SettingsCard icon="shield-check" title="Two-factor authentication">
                <SettingRow title="Require 2FA for privileged roles" desc="Chairman, SVCF / Finance, GM Land, Admin."><Switch defaultChecked /></SettingRow>
                <SettingRow title="Enforcement status" desc="39 of 48 users have 2FA enabled (81%)."><K.Pill tone="warning">Partial</K.Pill></SettingRow>
                <SettingRow title="Recovery options"><div style={{ width: 200 }}><Select options={opt(["Email + Backup codes", "Authenticator app", "SMS"])} defaultValue="Email + Backup codes" /></div></SettingRow>
              </SettingsCard>

              <SettingsCard icon="clock" title="Session settings">
                <SettingRow title="Idle timeout"><div style={{ width: 160 }}><Select options={opt(["10 min", "20 min", "30 min", "60 min"])} defaultValue="20 min" /></div></SettingRow>
                <SettingRow title="Max session duration"><div style={{ width: 160 }}><Select options={opt(["4 hours", "8 hours", "12 hours"])} defaultValue="8 hours" /></div></SettingRow>
                <SettingRow title="Force logout on password change"><Switch defaultChecked /></SettingRow>
              </SettingsCard>

              <SettingsCard icon="eye" title="Access control">
                <SettingRow title="Sensitive data visibility" desc="Restrict valuation & party details to privileged roles."><Switch defaultChecked /></SettingRow>
                <SettingRow title="Export permission rule"><div style={{ width: 200 }}><Select options={opt(["Role-based", "Admins only", "All users"])} defaultValue="Role-based" /></div></SettingRow>
                <SettingRow title="Login attempt limit" desc="Lock account after N failed attempts."><div style={{ width: 120 }}><Select options={opt(["3", "5", "10"])} defaultValue="5" /></div></SettingRow>
              </SettingsCard>

              <SettingsCard icon="alert-triangle" title="Security logs">
                <SettingRow title="Last failed login" desc="admin@reliance.com from 45.118.92.7"><span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>30 Jun 2026, 08:33</span></SettingRow>
                <SettingRow title="Locked accounts" desc="Accounts currently locked."><K.Pill tone="danger">3 locked</K.Pill></SettingRow>
                <SettingRow title="Suspicious activity" desc="7 failed logins in the last 24 hours."><Button variant="outline" size="sm">Review</Button></SettingRow>
              </SettingsCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  window.NotificationCenter = NotificationCenter;
  window.SettingsModule = SettingsModule;
})();
