// UsersRolesModule — User management + Role & permission matrix.
// Exposes window.UsersModule.
(function () {
  const { Card, CardContent, CardHeader, CardTitle, Icon, Button, Input, Select, Label, Avatar, Breadcrumb, Alert, Dialog, DialogFooter, DropdownMenu, Switch, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } = window.RelianceLIMSDesignSystem_12526c;
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
  function initials(name) { return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase(); }

  // ---------------- Invite modal ----------------
  function InviteModal({ open, onClose, onDone }) {
    return (
      <Dialog open={open} onClose={onClose} title="Invite user" description="Send an invitation to create a Reliance LIMS account." width={520}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Name</Label><Input placeholder="Full name" /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Email</Label><Input type="email" placeholder="name@reliance.com" /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Phone</Label><Input placeholder="+880 …" /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><Label>Role</Label><Select placeholder="Select role" options={opt(D.roles)} /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: "1 / -1" }}><Label>Department</Label><Input placeholder="e.g. Land Administration" /></div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="default" onClick={() => onDone({ tone: "success", title: "Invitation sent", detail: "The user will receive an email to set up their account and 2FA." })}><Icon name="mail" size={15} />Send invite</Button>
        </DialogFooter>
      </Dialog>
    );
  }

  // ---------------- 9A: User management ----------------
  function UserManagement({ onMatrix }) {
    const blank = { q: "", role: "", status: "", twofa: "" };
    const [f, setF] = React.useState(blank);
    const [invite, setInvite] = React.useState(false);
    const [flash, setFlash] = React.useState(null);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

    const rows = D.users.filter((u) => {
      if (f.q) { const h = [u.name, u.email, u.phone].join(" ").toLowerCase(); if (!h.includes(f.q.toLowerCase())) return false; }
      if (f.role && u.role !== f.role) return false;
      if (f.status && u.status !== f.status) return false;
      if (f.twofa === "Enabled" && !u.twofa) return false;
      if (f.twofa === "Disabled" && u.twofa) return false;
      return true;
    });

    const chips = [];
    [["q", "Search"], ["role", "Role"], ["status", "Status"], ["twofa", "2FA"]].forEach(([k, l]) => { if (f[k]) chips.push({ k, label: l, value: f[k] }); });
    const clearAll = () => setF(blank);

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Users & Roles" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>User management</h2>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Manage system users, roles, and account security.</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Button variant="outline" size="sm" onClick={onMatrix}><Icon name="sliders-horizontal" size={15} />Role & Permissions</Button>
              <Button variant="default" size="sm" onClick={() => setInvite(true)}><Icon name="user-plus" size={15} />Invite User</Button>
            </div>
          </div>
        </div>

        {flash ? <Alert variant={flash.tone} title={flash.title} icon={<Icon name="check-circle" size={18} />}>{flash.detail}</Alert> : null}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
          {loading ? Array.from({ length: 5 }).map((_, i) => <K.KpiSkeleton key={i} />) : D.userKpis.map((k) => <Kpi key={k.label} k={k} />)}
        </div>

        {/* Filters */}
        <Card><CardContent style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 240px", minWidth: 200 }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search by name, email, phone…" value={f.q} onChange={(e) => set("q", e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <div style={{ width: 170 }}><Select placeholder="All roles" options={opt(D.roles)} value={f.role} onChange={(v) => set("role", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All statuses" options={opt(["Active", "Pending", "Locked"])} value={f.status} onChange={(v) => set("status", v)} /></div>
            <div style={{ width: 150 }}><Select placeholder="All 2FA" options={opt(["Enabled", "Disabled"])} value={f.twofa} onChange={(v) => set("twofa", v)} /></div>
          </div>
          {chips.length ? (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12 }}>
              <span style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontWeight: 500 }}>Active filters</span>
              {chips.map((c) => (
                <span key={c.k} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 6px 4px 10px", borderRadius: "var(--radius-full)", background: "var(--secondary)", border: "1px solid var(--border)", fontSize: 12.5, fontWeight: 500 }}>
                  <span style={{ color: "var(--muted-foreground)" }}>{c.label}:</span><span style={{ fontWeight: 600 }}>{c.value}</span>
                  <button onClick={() => set(c.k, "")} aria-label="Clear" style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", color: "var(--muted-foreground)", padding: 1 }}><Icon name="x" size={13} /></button>
                </span>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAll} style={{ height: 28 }}>Clear all</Button>
            </div>
          ) : null}
        </CardContent></Card>

        {/* Table */}
        <Card><CardContent style={{ padding: 0 }}>
          {loading ? <K.TableSkeleton rows={6} cols={7} /> : rows.length === 0 ? (
            <K.EmptyState icon="users" title="No users match" detail="Adjust or clear your filters to see more users." actionLabel="Clear filters" onAction={clearAll} />
          ) : (
            <Table className="lims-table">
              <TableHeader><TableRow>
                <TableHead>Name</TableHead><TableHead>Email / phone</TableHead><TableHead>Role</TableHead>
                <TableHead>Department</TableHead><TableHead>Status</TableHead><TableHead>2FA</TableHead>
                <TableHead>Last login</TableHead><TableHead style={{ width: 48, textAlign: "right" }}>Action</TableHead>
              </TableRow></TableHeader>
              <TableBody>
                {rows.map((u) => (
                  <TableRow key={u.email}>
                    <TableCell>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                        <Avatar initials={initials(u.name)} size="sm" />
                        <span style={{ fontWeight: 600 }}>{u.name}</span>
                      </span>
                    </TableCell>
                    <TableCell>
                      <div style={{ fontSize: 13 }}>{u.email}</div>
                      <div style={{ fontSize: 12, color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{u.phone}</div>
                    </TableCell>
                    <TableCell><span style={{ fontWeight: 500 }}>{u.role}</span></TableCell>
                    <TableCell style={{ color: "var(--muted-foreground)" }}>{u.dept}</TableCell>
                    <TableCell><K.StatusBadge status={u.status} /></TableCell>
                    <TableCell>
                      {u.twofa
                        ? <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--success)", fontSize: 12.5, fontWeight: 600 }}><Icon name="shield-check" size={14} />On</span>
                        : <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--muted-foreground)", fontSize: 12.5, fontWeight: 600 }}><Icon name="x-circle" size={14} />Off</span>}
                    </TableCell>
                    <TableCell style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{u.lastLogin}</TableCell>
                    <TableCell style={{ textAlign: "right" }}>
                      <DropdownMenu align="end" trigger={<Button variant="ghost" size="icon" style={{ height: 30, width: 30 }}><Icon name="more-horizontal" size={16} /></Button>}
                        items={[
                          { label: "Edit user", icon: <Icon name="edit" size={14} /> },
                          { label: "Reset password", icon: <Icon name="refresh-cw" size={14} /> },
                          { label: u.twofa ? "2FA enabled" : "Require 2FA", icon: <Icon name="shield-check" size={14} /> },
                          { separator: true },
                          { label: u.status === "Locked" ? "Unlock account" : "Deactivate user", icon: <Icon name={u.status === "Locked" ? "lock" : "ban"} size={14} /> },
                        ]} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent></Card>

        <InviteModal open={invite} onClose={() => setInvite(false)} onDone={(fl) => { setInvite(false); setFlash(fl); }} />
      </div>
    );
  }

  // ---------------- 9B: Permission matrix ----------------
  function PermissionMatrix({ onBack }) {
    const matrixRoles = D.roles.filter((r) => r !== "Admin");
    const [role, setRole] = React.useState(matrixRoles[2]); // GM Land
    const [matrix, setMatrix] = React.useState(() => JSON.parse(JSON.stringify(D.permissionMatrix)));
    const [dirty, setDirty] = React.useState(false);
    const [flash, setFlash] = React.useState(null);

    const grid = matrix[role];
    function toggle(mod, ci) {
      setMatrix((m) => {
        const next = JSON.parse(JSON.stringify(m));
        next[role][mod][ci] = next[role][mod][ci] ? 0 : 1;
        return next;
      });
      setDirty(true); setFlash(null);
    }
    function reset() { setMatrix(JSON.parse(JSON.stringify(D.permissionMatrix))); setDirty(false); setFlash(null); }
    function save() { setDirty(false); setFlash({ tone: "success", title: "Permissions saved", detail: `Changes to the ${role} role were saved and recorded in the audit log.` }); }

    return (
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20, fontFamily: "var(--font-sans)" }}>
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "#" }, { label: "Users & Roles", href: "#" }, { label: "Role & Permissions" }]} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 8, gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Button variant="ghost" size="icon" onClick={onBack}><Icon name="arrow-left" size={18} /></Button>
              <div>
                <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Role & permission matrix</h2>
                <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted-foreground)" }}>Define what each role can see and do across modules.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Button variant="outline" size="sm" onClick={reset} disabled={!dirty}><Icon name="refresh-cw" size={15} />Reset changes</Button>
              <Button variant="default" size="sm" onClick={save} disabled={!dirty}><Icon name="save" size={15} />Save changes</Button>
            </div>
          </div>
        </div>

        {/* Audit note */}
        <Alert variant="default" title="Permission changes are controlled" icon={<Icon name="shield-check" size={18} />}>
          Permission changes will be recorded in the audit log with your name and a timestamp. Apply changes carefully — they take effect immediately on save.
        </Alert>

        {flash ? <Alert variant={flash.tone} title={flash.title} icon={<Icon name="check-circle" size={18} />}>{flash.detail}</Alert> : null}
        {dirty ? <Alert variant="warning" title="Unsaved changes" icon={<Icon name="alert-triangle" size={18} />}>You have changed permissions for the {role} role. Save or reset before leaving this screen.</Alert> : null}

        {/* Role tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {matrixRoles.map((r) => {
            const on = role === r;
            return (
              <button key={r} onClick={() => setRole(r)} style={{ padding: "8px 14px", borderRadius: "var(--radius-full)", border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`, background: on ? "var(--primary)" : "var(--background)", color: on ? "var(--primary-foreground)" : "var(--foreground)", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)" }}>{r}</button>
            );
          })}
        </div>

        {/* Matrix table */}
        <Card><CardContent style={{ padding: 0, overflowX: "auto" }}>
          <Table className="lims-table" style={{ minWidth: 920 }}>
            <TableHeader><TableRow>
              <TableHead style={{ position: "sticky", left: 0, background: "var(--muted)", zIndex: 1, minWidth: 180 }}>Module</TableHead>
              {D.permissionCols.map((c) => (
                <TableHead key={c} style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                  {c === "Sensitive Data Access"
                    ? <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--destructive)" }}><Icon name="lock" size={13} />Sensitive</span>
                    : c}
                </TableHead>
              ))}
            </TableRow></TableHeader>
            <TableBody>
              {D.permissionModules.map((mod) => (
                <TableRow key={mod}>
                  <TableCell style={{ position: "sticky", left: 0, background: "var(--card)", fontWeight: 600 }}>{mod}</TableCell>
                  {D.permissionCols.map((c, ci) => {
                    const on = grid[mod][ci] === 1;
                    const sensitive = ci === D.permissionCols.length - 1;
                    return (
                      <TableCell key={c} style={{ textAlign: "center" }}>
                        <button onClick={() => toggle(mod, ci)} aria-pressed={on} aria-label={`${c} for ${mod}`}
                          style={{ width: 24, height: 24, borderRadius: "var(--radius-sm)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
                            border: on ? "none" : "1.5px solid var(--border)",
                            background: on ? (sensitive ? "var(--destructive)" : "var(--primary)") : "transparent",
                            color: on ? "#fff" : "transparent" }}>
                          <Icon name="check" size={14} />
                        </button>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, paddingBottom: 8 }}>
          <Button variant="outline" onClick={reset} disabled={!dirty}><Icon name="refresh-cw" size={15} />Reset changes</Button>
          <Button variant="default" onClick={save} disabled={!dirty}><Icon name="save" size={15} />Save changes</Button>
        </div>
      </div>
    );
  }

  // ---------------- Coordinator ----------------
  function UsersModule() {
    const [view, setView] = React.useState("users");
    return view === "users"
      ? <UserManagement onMatrix={() => setView("matrix")} />
      : <PermissionMatrix onBack={() => setView("users")} />;
  }

  window.UsersModule = UsersModule;
})();
