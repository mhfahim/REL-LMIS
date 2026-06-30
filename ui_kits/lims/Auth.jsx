// AuthFlow — Login, Two-factor, Forgot-password screens for Reliance LIMS.
// Exposes window.AuthFlow({ onAuthenticated }).
(function () {
  const { Card, CardContent, Icon, Button, Input, Label, Logo, Alert, Separator } = window.RelianceLIMSDesignSystem_12526c;

  function Shell({ children, footer }) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--muted)", padding: 24, fontFamily: "var(--font-sans)" }}>
        <div style={{ width: "100%", maxWidth: 408, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", justifyContent: "center" }}><Logo size={30} /></div>
          <Card style={{ boxShadow: "var(--shadow-lg)" }}>{children}</Card>
          <div style={{ textAlign: "center", fontSize: 12, color: "var(--muted-foreground)", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Icon name="lock" size={13} />Authorized users only · access is monitored and logged</span>
            {footer}
          </div>
        </div>
      </div>
    );
  }

  function Header({ title, sub }) {
    return (
      <div style={{ padding: "24px 24px 0", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>{title}</h1>
        <p style={{ margin: "6px 0 0", fontSize: 13.5, color: "var(--muted-foreground)", lineHeight: "var(--leading-normal)" }}>{sub}</p>
      </div>
    );
  }

  // ---------------- Login ----------------
  function Login({ onForgot, onLogin }) {
    const [id, setId] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [err, setErr] = React.useState(false);
    function submit(e) {
      e && e.preventDefault();
      if (!id.trim() || !pw.trim()) { setErr(true); return; }
      setErr(false); onLogin();
    }
    return (
      <Shell>
        <Header title="Sign in to Reliance LIMS" sub="Land Inventory Management System" />
        <CardContent style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {err ? <Alert variant="destructive" title="Enter your credentials" icon={<Icon name="alert-circle" size={17} />}>Both fields are required to continue.</Alert> : null}
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Label>Email or phone</Label>
              <Input placeholder="name@reliance.com" value={id} invalid={err && !id.trim()} onChange={(e) => setId(e.target.value)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Label>Password</Label>
                <button type="button" onClick={onForgot} style={{ border: "none", background: "transparent", color: "var(--brand)", fontSize: 12.5, fontWeight: 600, cursor: "pointer", padding: 0, whiteSpace: "nowrap", flexShrink: 0 }}>Forgot password?</button>
              </div>
              <Input type="password" placeholder="••••••••" value={pw} invalid={err && !pw.trim()} onChange={(e) => setPw(e.target.value)} />
            </div>
            <Button type="submit" variant="default" style={{ width: "100%", height: 40 }}>Sign in<Icon name="arrow-right" size={15} /></Button>
          </form>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Separator style={{ flex: 1 }} /><span style={{ fontSize: 12, color: "var(--muted-foreground)" }}>or</span><Separator style={{ flex: 1 }} />
          </div>
          <Button variant="outline" style={{ width: "100%", height: 40 }} onClick={onLogin}>
            <span style={{ display: "inline-flex", width: 16, height: 16, borderRadius: "50%", background: "conic-gradient(#ea4335 0 25%, #fbbc05 25% 50%, #34a853 50% 75%, #4285f4 75% 100%)", flexShrink: 0 }} />
            Continue with Google Workspace
          </Button>
        </CardContent>
      </Shell>
    );
  }

  // ---------------- Two-factor ----------------
  function TwoFactor({ onVerify, onBack }) {
    const [code, setCode] = React.useState(["", "", "", "", "", ""]);
    const [backup, setBackup] = React.useState(false);
    const refs = React.useRef([]);
    function setDigit(i, v) {
      const d = v.replace(/\D/g, "").slice(-1);
      setCode((c) => { const n = [...c]; n[i] = d; return n; });
      if (d && i < 5 && refs.current[i + 1]) refs.current[i + 1].focus();
    }
    const full = code.join("").length === 6;
    return (
      <Shell footer={<span>Didn't get a code? Check your authenticator app or backup codes.</span>}>
        <Header title="Two-factor authentication" sub="Enter the 6-digit code from your authenticator app. 2FA is required for privileged roles." />
        <CardContent style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {!backup ? (
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              {code.map((d, i) => (
                <input key={i} ref={(el) => (refs.current[i] = el)} value={d} inputMode="numeric" maxLength={1}
                  onChange={(e) => setDigit(i, e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Backspace" && !d && i > 0) refs.current[i - 1].focus(); }}
                  style={{ width: 46, height: 54, textAlign: "center", fontSize: 22, fontWeight: 700, fontFamily: "var(--font-mono)", borderRadius: "var(--radius-md)", border: "1px solid var(--input)", background: "var(--background)", color: "var(--foreground)", outline: "none" }} />
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Label>Backup code</Label>
              <Input placeholder="XXXX-XXXX-XXXX" style={{ textAlign: "center", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }} />
            </div>
          )}
          <Button variant="default" style={{ width: "100%", height: 40 }} disabled={!backup && !full} onClick={onVerify}><Icon name="shield-check" size={15} />Verify &amp; continue</Button>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5 }}>
            <button onClick={() => setBackup(!backup)} style={{ border: "none", background: "transparent", color: "var(--brand)", fontWeight: 600, cursor: "pointer", padding: 0 }}>{backup ? "Use authenticator code" : "Use a backup code"}</button>
            <button style={{ border: "none", background: "transparent", color: "var(--muted-foreground)", fontWeight: 500, cursor: "pointer", padding: 0 }}>Resend code</button>
          </div>
          <Separator />
          <button onClick={onBack} style={{ border: "none", background: "transparent", color: "var(--muted-foreground)", fontSize: 13, fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Icon name="arrow-left" size={14} />Back to login</button>
        </CardContent>
      </Shell>
    );
  }

  // ---------------- Forgot password ----------------
  function ForgotPassword({ onBack }) {
    const [sent, setSent] = React.useState(false);
    return (
      <Shell>
        <Header title="Reset your password" sub={sent ? "If an account exists, we've sent reset instructions." : "Enter your email or phone and we'll send a reset link or code."} />
        <CardContent style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {sent ? (
            <Alert variant="success" title="Reset link sent" icon={<Icon name="mail" size={17} />}>Check your inbox or SMS for instructions. The link expires in 30 minutes.</Alert>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Label>Email or phone</Label>
              <Input placeholder="name@reliance.com" />
            </div>
          )}
          {!sent ? <Button variant="default" style={{ width: "100%", height: 40 }} onClick={() => setSent(true)}><Icon name="mail" size={15} />Send reset link</Button> : null}
          <button onClick={onBack} style={{ border: "none", background: "transparent", color: "var(--muted-foreground)", fontSize: 13, fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }}><Icon name="arrow-left" size={14} />Back to login</button>
        </CardContent>
      </Shell>
    );
  }

  function AuthFlow({ onAuthenticated }) {
    const [view, setView] = React.useState("login");
    if (view === "login") return <Login onForgot={() => setView("forgot")} onLogin={() => setView("2fa")} />;
    if (view === "2fa") return <TwoFactor onVerify={onAuthenticated} onBack={() => setView("login")} />;
    return <ForgotPassword onBack={() => setView("login")} />;
  }

  window.AuthFlow = AuthFlow;
})();
