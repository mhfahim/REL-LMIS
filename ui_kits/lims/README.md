# Reliance LIMS — Application Kit

A complete, connected recreation of **Reliance LIMS** (Land Inventory Management
System): an enterprise web app for managing land records — dag inventory, purchase/sale
ledger, Awaz, disputes, kharij/mutation, khajna, reports, users, and audit. Built entirely
from the design-system components in the navy/slate enterprise style.

Open **`index.html`** — the app boots at the **login** screen → 2FA → dashboard, with a
consistent sidebar + header wrapping every module. The whole product is connected:
overview → list → detail → action → confirmation.

## Modules (sidebar)
- **Dashboard** (`InventoryDashboard.jsx`) — **Executive Dashboard**: management KPIs, holding
  breakdown, alert center (alerts link to their module), recent transactions, quick actions.
- **Inventory** (`InventoryOverview.jsx`) — **Inventory Overview**: land stock hub. Holding
  breakdown, by-project & by-mouza tables, risk & attention panel, quick actions. "View dags"
  opens the Dag Directory pre-filtered by project/mouza. Distinct from Dag Directory.
- **Dag Directory** (`DagDirectory.jsx`) — searchable, filterable registry of all dags (table
  + card view, summary cards, filter chips). **Selecting a dag opens its profile.**
- **Dag Profile** (`DagProfile.jsx`) — one selected dag: summary, survey mapping, balances,
  tabbed ledger / documents / dispute & legal. Back to directory + prev/next dag. Actions
  (Add Transaction, Flag/Resolve Dispute, Export, Print) route correctly; Resolve is disabled
  unless the dag is disputed.
- **Transaction Ledger** (`TransactionLedger.jsx`) — all transactions, filters, chips,
  pagination, export. **Dag No.** → Dag Profile; **Deed No.** and **View** → Transaction Detail.
- **Transaction Detail** (`TransactionDetail.jsx`) — full deed/transaction record: details,
  notes, attached documents, history; Open Dag Profile + Export + Edit.
- **Add Transaction** (`AddTransaction.jsx`) — multi-dag form, validation, confirm dialog.
- **Dispute Management** (`DisputeManagement.jsx`) — list → case detail → update/resolve modal.
- **Kharij / Mutation** (`MutationManagement.jsx`) — pipeline dashboard → file detail (stage stepper) → update modal.
- **Khajna** (`KhajnaManagement.jsx`) — dashboard → dag tax detail → add-payment modal.
- **Reports** (`ReportsManagement.jsx`) — library → viewer (Dag-wise Ledger) → export preview.
- **Administration** — **Users & Roles** (`UsersRoles.jsx`), **Audit Log** (`AuditLog.jsx`),
  **Settings** (`Settings.jsx`), and **admin-only Data Migration & Import** (`DataMigration.jsx`).
- **Notification center** (`Settings.jsx`) — opened from the header bell.
- **Auth** (`Auth.jsx`) — login, 2FA, forgot password.
- **System states** (`states.html`) — reusable empty / loading / error / permission states.

## Connected behavior
- Every sidebar item routes to its module; table rows and cards open the related detail;
  quick actions, exports, uploads, and approvals all reach a real destination, modal, or
  confirmation. Destructive/approval actions confirm; disabled actions explain why.
- **Role-based navigation:** the sidebar filters by the signed-in role (switch roles from
  the profile menu — demo). Advocates see legal/dispute pages; Accounts see financial pages;
  Data Migration is admin-only. Restricted modules show an "Access restricted" state.

## Shared building blocks
- **`AppShell.jsx`** (`window.AppShell`) — sidebar (role-filtered) + header (page title,
  global search, notification bell, profile menu with role switcher + sign out) + content.
- **`kit.jsx`** (`window.LIMSKit`) — shared `StatusBadge` / `TypeBadge` / `Pill`, empty /
  error / loading states, table & KPI skeletons.
- **`data.js`** (`window.LIMS_DATA`) — all mock data, nav, role access map, option lists.

## Components used
Logo, Avatar, Badge, Input, Select, Textarea, Label, Switch, Checkbox, Progress, Tabs,
DropdownMenu, Dialog, Alert, Separator, Card, Button, Breadcrumb, Table, Icon — all from
`window.RelianceLIMSDesignSystem_12526c`.
