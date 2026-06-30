// AppShell — reusable Reliance LIMS application shell:
// left sidebar nav (main + admin groups), top header (page title, global
// search, notification bell, user profile dropdown), and a main content area.
// Exposes window.AppShell. Uses design-system components from the namespace.
(function () {
  const { Logo, Avatar, Badge, Icon, Input, DropdownMenu, Separator } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;

  function NavItem({ item, active, onClick }) {
    const [hover, setHover] = React.useState(false);
    const highlight = active || hover;
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-current={active ? "page" : undefined}
        style={{
          position: "relative",
          display: "flex", alignItems: "center", gap: 10, width: "100%",
          padding: "8px 10px", borderRadius: "var(--radius-md)", border: "none",
          cursor: "pointer", textAlign: "left",
          background: active ? "var(--sidebar-accent)" : hover ? "rgba(15,23,42,0.045)" : "transparent",
          color: active ? "var(--sidebar-accent-foreground)" : "var(--sidebar-foreground)",
          fontSize: 14, fontWeight: active ? 600 : 500, fontFamily: "var(--font-sans)",
          transition: "background-color .12s ease",
        }}
      >
        {active ? <span style={{ position: "absolute", left: -12, top: 7, bottom: 7, width: 3, borderRadius: 3, background: "var(--sidebar-primary)" }} /> : null}
        <Icon name={item.icon} size={18} style={{ color: active ? "var(--sidebar-primary)" : "var(--muted-foreground)" }} />
        <span style={{ flex: 1 }}>{item.label}</span>
        {item.badge ? <Badge variant="secondary" style={{ fontSize: 11 }}>{item.badge}</Badge> : null}
      </button>
    );
  }

  function SectionLabel({ children }) {
    return <div style={{ padding: "14px 10px 6px", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>{children}</div>;
  }

  function ProfileMenu({ onSignOut, user, onPickUser }) {
    const trigger = (
      <button style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 8px 4px 4px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--background)", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
        <Avatar initials={user.initials} size="sm" />
        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, textAlign: "left" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>{user.name}</span>
          <span style={{ fontSize: 11, color: "var(--muted-foreground)" }}>{user.role}</span>
        </span>
        <Icon name="chevron-down" size={14} style={{ color: "var(--muted-foreground)", marginLeft: 2 }} />
      </button>
    );
    const switchItems = D.sessionUsers.map((u) => ({ label: `Sign in as ${u.role}`, icon: <Icon name={u.role === user.role ? "check" : "user"} size={14} />, onSelect: () => onPickUser(u) }));
    return (
      <DropdownMenu align="end" trigger={trigger}
        items={[
          { label: "View profile", icon: <Icon name="user" size={14} /> },
          { label: "Account settings", icon: <Icon name="settings" size={14} /> },
          { separator: true },
          ...switchItems,
          { separator: true },
          { label: "Sign out", icon: <Icon name="log-out" size={14} />, onSelect: onSignOut },
        ]} />
    );
  }

  function AppShell({ active, pageTitle, onNavigate, onBell, onSignOut, user, onPickUser, children }) {
    const allNav = [...D.navMain, ...D.navAdmin];
    const title = pageTitle || (allNav.find((n) => n.id === active) || {}).label || "Dashboard";
    const allowed = D.roleAccess[user.role] || allNav.map((n) => n.id);
    const mainNav = D.navMain.filter((n) => allowed.includes(n.id));
    const adminNav = D.navAdmin.filter((n) => allowed.includes(n.id));
    return (
      <div style={{ display: "flex", height: "100vh", background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
        {/* Sidebar */}
        <aside style={{ width: 252, flexShrink: 0, background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)", display: "flex", flexDirection: "column", padding: 12, overflowY: "auto" }}>
          <div style={{ padding: "10px 8px 14px" }}><Logo size={26} /></div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {mainNav.map((n) => <NavItem key={n.id} item={n} active={active === n.id} onClick={() => onNavigate(n.id)} />)}
          </nav>
          {adminNav.length ? <SectionLabel>Administration</SectionLabel> : null}
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {adminNav.map((n) => <NavItem key={n.id} item={n} active={active === n.id} onClick={() => onNavigate(n.id)} />)}
          </nav>
          <div style={{ marginTop: "auto", paddingTop: 12 }}>
            <Separator style={{ marginBottom: 10 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px" }}>
              <Avatar initials={user.initials} size="sm" />
              <div style={{ lineHeight: 1.3, flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name}</div>
                <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{user.role}</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {/* Header */}
          <header style={{ height: 64, flexShrink: 0, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 16, padding: "0 24px", background: "var(--background)" }}>
            {/* Page title area */}
            <div style={{ minWidth: 0 }}>
              <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</h1>
            </div>
            <div style={{ flex: 1 }} />
            {/* Global search */}
            <div style={{ position: "relative", width: 320, maxWidth: "38vw" }}>
              <Icon name="search" size={16} style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)" }} />
              <Input placeholder="Search dag, deed, file, mouza, donor…" style={{ paddingLeft: 34, height: 38, background: "var(--muted)" }} />
            </div>
            {/* Notification bell */}
            <button aria-label="Notifications" onClick={onBell} style={{ position: "relative", width: 38, height: 38, borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: active === "notifications" ? "var(--accent)" : "var(--background)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--foreground)" }}>
              <Icon name="bell" size={18} />
              <span style={{ position: "absolute", top: 7, right: 8, width: 7, height: 7, borderRadius: "var(--radius-full)", background: "var(--destructive)", border: "1.5px solid var(--background)" }} />
            </button>
            {/* User profile dropdown */}
            <ProfileMenu onSignOut={onSignOut} user={user} onPickUser={onPickUser} />
          </header>

          {/* Content */}
          <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>
        </div>
      </div>
    );
  }
  window.AppShell = AppShell;
})();
