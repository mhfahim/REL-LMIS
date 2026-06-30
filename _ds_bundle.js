/* @ds-bundle: {"format":3,"namespace":"RelianceLIMSDesignSystem_12526c","components":[{"name":"Icon","sourcePath":"assets/icons/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/display/Card.jsx"},{"name":"CardDescription","sourcePath":"components/display/Card.jsx"},{"name":"CardContent","sourcePath":"components/display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/display/Card.jsx"},{"name":"Separator","sourcePath":"components/display/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/display/Skeleton.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"TableHeader","sourcePath":"components/display/Table.jsx"},{"name":"TableBody","sourcePath":"components/display/Table.jsx"},{"name":"TableRow","sourcePath":"components/display/Table.jsx"},{"name":"TableHead","sourcePath":"components/display/Table.jsx"},{"name":"TableCell","sourcePath":"components/display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"RadioGroupItem","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsTrigger","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DialogFooter","sourcePath":"components/overlays/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/overlays/DropdownMenu.jsx"}],"sourceHashes":{"assets/icons/Icon.jsx":"054028e01c6c","assets/icons/icon-data.js":"6028ba75656f","components/brand/Logo.jsx":"646e5207b9ed","components/display/Avatar.jsx":"131a55769d59","components/display/Badge.jsx":"f4f6b6bce0a0","components/display/Card.jsx":"1245b4516780","components/display/Separator.jsx":"3f86ae26568c","components/display/Skeleton.jsx":"b66e11e62d99","components/display/Table.jsx":"f6af6674e969","components/feedback/Alert.jsx":"55d3a89b2f3a","components/feedback/Progress.jsx":"10c8fe24f7a1","components/feedback/Tooltip.jsx":"e67e439763a0","components/forms/Button.jsx":"9a758f4442ff","components/forms/Checkbox.jsx":"fd53535bdf53","components/forms/Input.jsx":"c02ce7a4764f","components/forms/Label.jsx":"b6cb6d1c0961","components/forms/RadioGroup.jsx":"2a60a9f7170e","components/forms/Select.jsx":"609a363797d1","components/forms/Slider.jsx":"493b34c6a7f4","components/forms/Switch.jsx":"90f1e4613a00","components/forms/Textarea.jsx":"0c32d8ce10d7","components/navigation/Accordion.jsx":"e070b2b57912","components/navigation/Breadcrumb.jsx":"b29f55f36983","components/navigation/Tabs.jsx":"29064a657a57","components/overlays/Dialog.jsx":"a7597076ea62","components/overlays/DropdownMenu.jsx":"8fc70b0ee922","ui_kits/lims/AddTransaction.jsx":"c11ba34005f7","ui_kits/lims/AppShell.jsx":"a2c2b5e8a7f9","ui_kits/lims/AuditLog.jsx":"53f313e78140","ui_kits/lims/Auth.jsx":"45aab3d766b4","ui_kits/lims/DagDirectory.jsx":"53409c0009c2","ui_kits/lims/DagProfile.jsx":"656e852d0159","ui_kits/lims/DataMigration.jsx":"5f8cf0d1969a","ui_kits/lims/DisputeManagement.jsx":"7a122fa327b7","ui_kits/lims/InventoryDashboard.jsx":"b0c1fdef29d9","ui_kits/lims/InventoryOverview.jsx":"796f60f5637c","ui_kits/lims/KhajnaManagement.jsx":"ca5a011e00f1","ui_kits/lims/MutationManagement.jsx":"cc3fb89239cf","ui_kits/lims/ReportsManagement.jsx":"94923c968661","ui_kits/lims/Settings.jsx":"1d5eb5d58075","ui_kits/lims/TransactionDetail.jsx":"b0afac0a88a6","ui_kits/lims/TransactionLedger.jsx":"3c85d1d99a8e","ui_kits/lims/UsersRoles.jsx":"73edf8712cfa","ui_kits/lims/data.js":"8bf78ad728b0","ui_kits/lims/kit.jsx":"e5e6f7e82bee"},"inlinedExternals":[],"unexposedExports":[{"name":"iconPaths","sourcePath":"assets/icons/icon-data.js"}]} */

(() => {

const __ds_ns = (window.RelianceLIMSDesignSystem_12526c = window.RelianceLIMSDesignSystem_12526c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a Lucide glyph from the curated icon set (inlined below).
 * Stroke-based, inherits color via currentColor, sized via `size`.
 *
 *   <Icon name="map" size={16} />
 *   <Icon name="gavel" className="text-brand" />
 *
 * Lucide (https://lucide.dev) is the design system's icon library — the exact
 * set used in the source Figma file (~1500 glyphs). This curates the glyphs the
 * components & UI kits use. For the FULL set in plain HTML, link Lucide from CDN
 * (https://unpkg.com/lucide@latest). Paths are 24×24, stroke-based.
 */
const ICON_PATHS = {
  // ---- Navigation / chrome ----
  "menu": "M4 12h16M4 6h16M4 18h16",
  "x": "M18 6 6 18M6 6l12 12",
  "search": "M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
  "chevron-down": "m6 9 6 6 6-6",
  "chevron-up": "m18 15-6-6-6 6",
  "chevron-right": "m9 18 6-6-6-6",
  "chevron-left": "m15 18-6-6 6-6",
  "chevrons-up-down": "m7 15 5 5 5-5M7 9l5-5 5 5",
  "arrow-right": "M5 12h14M12 5l7 7-7 7",
  "arrow-left": "M19 12H5M12 19l-7-7 7-7",
  "arrow-up": "M12 19V5M5 12l7-7 7 7",
  "arrow-down": "M12 5v14M19 12l-7 7-7-7",
  "external-link": "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  "more-horizontal": "M5 12h.01M12 12h.01M19 12h.01",
  "more-vertical": "M12 5h.01M12 12h.01M12 19h.01",
  "panel-left": "M3 3h18v18H3zM9 3v18",
  // ---- Status / feedback ----
  "check": "M20 6 9 17l-5-5",
  "check-circle": "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
  "circle-check": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9 12l2 2 4-4",
  "alert-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 8v4M12 16h.01",
  "alert-triangle": "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17h.01",
  "info": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 16v-4M12 8h.01",
  "x-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM15 9l-6 6M9 9l6 6",
  "ban": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM4.93 4.93l14.14 14.14",
  "loader": "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  // ---- Objects / lab (legacy) ----
  "flask-conical": "M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0M5.58 16.5h12.85",
  "test-tube": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2M8.5 2h7M14.5 16h-5",
  "test-tubes": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V2M3 2h7M14 2h7M9 16H4M20 16h-5",
  "microscope": "M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  "package": "M16.5 9.4 7.5 4.21M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12",
  "activity": "M22 12h-4l-3 9L9 3l-3 9H2",
  "clipboard-list": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM12 11h4M12 16h4M8 11h.01M8 16h.01",
  "clipboard-check": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9 14l2 2 4-4",
  // ---- Files / data ----
  "file": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  "folder": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  "download": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  "upload": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  "database": "M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3ZM3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  "table": "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18",
  "filter": "M22 3H2l8 9.46V19l4 2v-8.54L22 3Z",
  "list-filter": "M3 6h18M7 12h10M10 18h4",
  "copy": "M14 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M20 6H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z",
  // ---- Actions ----
  "plus": "M5 12h14M12 5v14",
  "minus": "M5 12h14",
  "edit": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z",
  "trash": "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6",
  "settings": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "sliders-horizontal": "M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4",
  "refresh-cw": "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5",
  "save": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM17 21v-8H7v8M7 3v5h8",
  "printer": "M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z",
  "share": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",
  "eye": "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "eye-off": "M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61M2 2l20 20",
  // ---- People / org / time ----
  "user": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  "users": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  "user-plus": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6",
  "building": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4",
  "log-out": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  "bell": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
  "calendar": "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  "clock": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2",
  "mail": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM22 6l-10 7L2 6",
  "home": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
  "layout-dashboard": "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 15h7v6H3z",
  "bar-chart": "M12 20V10M18 20V4M6 20v-4",
  "trending-up": "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  "star": "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z",
  "lock": "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM7 11V7a5 5 0 0 1 10 0v4",
  "help-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
  "map-pin": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "qr-code": "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3M21 14v3M14 21h7M21 17v4",
  // ---- Land Inventory (LIMS) domain ----
  "map": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 21.382V8.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0ZM15 5.764v15M9 3.236v15",
  "landmark": "M10 18v-7M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7M18 18v-7M3 22h18M6 18v-7",
  "scale": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
  "gavel": "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8",
  "receipt": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1ZM16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11",
  "layers": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83ZM2 12l8.58 3.91a2 2 0 0 0 1.66 0L22 12M2 17l8.58 3.91a2 2 0 0 0 1.66 0L22 17",
  "repeat": "m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3",
  "history": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M12 7v5l4 2",
  "file-signature": "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.5L20 7.5M14 2v6h6M10 18a2 2 0 0 0-2-2H4M16 15l3 3-3 3",
  "banknote": "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9h.01M18 15h.01",
  "shield-check": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1ZM9 12l2 2 4-4"
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  className = "",
  style = {},
  ...rest
}) {
  const d = (ICON_PATHS || {})[name];
  if (!d) {
    if (typeof console !== "undefined") console.warn(`Icon "${name}" not found`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: "inline-block",
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// assets/icons/icon-data.js
try { (() => {
/* ============================================================
   Reliance LIMS — Icon data (Lucide subset)
   Lucide (https://lucide.dev) is the design system's icon library —
   the exact set used in the source Figma file (~1500 glyphs).
   This file curates the glyphs the components & UI kits use, so the
   React bundle is self-contained. For the FULL set in plain HTML,
   link Lucide from CDN: https://unpkg.com/lucide@latest
   All paths are 24×24, stroke-based (stroke-width 2, no fill).
   ============================================================ */
const iconPaths = {
  // ---- Navigation / chrome ----
  "menu": "M4 12h16M4 6h16M4 18h16",
  "x": "M18 6 6 18M6 6l12 12",
  "search": "M21 21l-4.34-4.34M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
  "chevron-down": "m6 9 6 6 6-6",
  "chevron-up": "m18 15-6-6-6 6",
  "chevron-right": "m9 18 6-6-6-6",
  "chevron-left": "m15 18-6-6 6-6",
  "chevrons-up-down": "m7 15 5 5 5-5M7 9l5-5 5 5",
  "arrow-right": "M5 12h14M12 5l7 7-7 7",
  "arrow-left": "M19 12H5M12 19l-7-7 7-7",
  "arrow-up": "M12 19V5M5 12l7-7 7 7",
  "arrow-down": "M12 5v14M19 12l-7 7-7-7",
  "external-link": "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  "more-horizontal": "M5 12h.01M12 12h.01M19 12h.01",
  "more-vertical": "M12 5h.01M12 12h.01M12 19h.01",
  "panel-left": "M3 3h18v18H3zM9 3v18",
  // ---- Status / feedback ----
  "check": "M20 6 9 17l-5-5",
  "check-circle": "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
  "circle-check": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9 12l2 2 4-4",
  "alert-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 8v4M12 16h.01",
  "alert-triangle": "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17h.01",
  "info": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 16v-4M12 8h.01",
  "x-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM15 9l-6 6M9 9l6 6",
  "ban": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM4.93 4.93l14.14 14.14",
  "loader": "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  // ---- Objects / lab / LIMS ----
  "flask-conical": "M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0M5.58 16.5h12.85",
  "test-tube": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2M8.5 2h7M14.5 16h-5",
  "test-tubes": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V2M3 2h7M14 2h7M9 16H4M20 16h-5",
  "microscope": "M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  "dna": "M2 15c6.667-6 13.333 0 20-6M9 22c1.798-1.998 2.518-3.995 2.807-5.993M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M17 6l-2.5-2.5M14 8l-1-1M7 18l2.5 2.5M12 16l-1.5-1.5M22 9c-4.298 5.745-11.5 6-16 2",
  "beaker": "M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12",
  "atom": "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5ZM15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
  "clipboard-list": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM12 11h4M12 16h4M8 11h.01M8 16h.01",
  "clipboard-check": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9 14l2 2 4-4",
  "package": "M16.5 9.4 7.5 4.21M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16ZM3.27 6.96 12 12.01l8.73-5.05M12 22.08V12",
  "thermometer": "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  "activity": "M22 12h-4l-3 9L9 3l-3 9H2",
  "pill": "M10.5 20.5 3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7ZM8.5 8.5l7 7",
  // ---- Files / data ----
  "file": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  "folder": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  "download": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  "upload": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  "database": "M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3ZM3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  "table": "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18",
  "filter": "M22 3H2l8 9.46V19l4 2v-8.54L22 3Z",
  "list-filter": "M3 6h18M7 12h10M10 18h4",
  "copy": "M14 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M20 6H10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z",
  // ---- Actions ----
  "plus": "M5 12h14M12 5v14",
  "minus": "M5 12h14",
  "edit": "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z",
  "trash": "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6",
  "settings": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "sliders-horizontal": "M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4",
  "refresh-cw": "M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M8 16H3v5",
  "save": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM17 21v-8H7v8M7 3v5h8",
  "printer": "M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z",
  "share": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",
  // ---- People / org ----
  "user": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  "users": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  "user-plus": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6",
  "building": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4",
  "log-out": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  "bell": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
  "calendar": "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  "clock": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 6v6l4 2",
  "mail": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM22 6l-10 7L2 6",
  "home": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
  "layout-dashboard": "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 15h7v6H3z",
  "bar-chart": "M12 20V10M18 20V4M6 20v-4",
  "trending-up": "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  "eye": "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "eye-off": "M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61M2 2l20 20",
  "star": "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z",
  "lock": "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM7 11V7a5 5 0 0 1 10 0v4",
  "help-circle": "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
  "map-pin": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "qr-code": "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3M21 14v3M14 21h7M21 17v4",
  // ---- Land Inventory (LIMS) domain ----
  "map": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 21.382V8.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0ZM15 5.764v15M9 3.236v15",
  "map-plus": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12M15 5.764V12M9 3.236v15l4.106-2.053a2 2 0 0 1 1.788 0M3 8.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0M3 8.618v12.764A1 1 0 0 0 4.447 22.276L9 20M18 15v6M15 18h6",
  "landmark": "M10 18v-7M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7M18 18v-7M3 22h18M6 18v-7",
  "scale": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
  "gavel": "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8M21 11l-8-8",
  "receipt": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1ZM16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11",
  "layers": "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83ZM2 12l8.58 3.91a2 2 0 0 0 1.66 0L22 12M2 17l8.58 3.91a2 2 0 0 0 1.66 0L22 17",
  "repeat": "m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3",
  "history": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M12 7v5l4 2",
  "file-signature": "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.5L20 7.5M14 2v6h6M10 18a2 2 0 0 0-2-2H4M16 15l3 3-3 3",
  "banknote": "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 9h.01M18 15h.01",
  "shield-check": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1ZM9 12l2 2 4-4"
};
Object.assign(__ds_scope, { iconPaths });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/icon-data.js", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/**
 * Logo — the Reliance LIMS lockup: a land/map mark in a rounded tile
 * plus the wordmark. Use `markOnly` for compact placements.
 */
function Logo({
  size = 28,
  markOnly = false,
  color = "var(--primary)",
  className = "",
  style = {}
}) {
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.28,
      background: color,
      color: "var(--primary-foreground)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map",
    size: size * 0.6,
    strokeWidth: 2.2
  }));
  if (markOnly) return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.34,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.62,
      letterSpacing: "-0.02em",
      color: "var(--foreground)"
    }
  }, "Reliance", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, " LIMS"))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 28,
  default: 36,
  lg: 48
};

/**
 * Avatar — user/entity image with initials fallback.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = "default",
  className = "",
  style = {},
  ...rest
}) {
  const px = typeof size === "number" ? size : sizes[size] || sizes.default;
  const [err, setErr] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      width: px,
      height: px,
      borderRadius: "var(--radius-full)",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--muted)",
      color: "var(--muted-foreground)",
      fontSize: px * 0.4,
      fontWeight: "var(--weight-medium)",
      fontFamily: "var(--font-sans)",
      flexShrink: 0,
      userSelect: "none",
      ...style
    }
  }, rest), src && !err ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || alt.slice(0, 2).toUpperCase());
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    border: "1px solid transparent"
  },
  outline: {
    background: "transparent",
    color: "var(--foreground)",
    border: "1px solid var(--border)"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)",
    border: "1px solid transparent"
  },
  success: {
    background: "rgba(22,163,74,0.12)",
    color: "rgb(21,128,61)",
    border: "1px solid rgba(22,163,74,0.3)"
  },
  warning: {
    background: "rgba(217,119,6,0.12)",
    color: "rgb(180,83,9)",
    border: "1px solid rgba(217,119,6,0.3)"
  },
  brand: {
    background: "var(--brand-subtle)",
    color: "var(--brand)",
    border: "1px solid rgba(30,41,59,0.2)"
  }
};

/**
 * Badge — compact status/label pill.
 */
function Badge({
  variant = "default",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "2px 8px",
      borderRadius: "var(--radius-full)",
      fontSize: "12px",
      fontWeight: "var(--weight-medium)",
      fontFamily: "var(--font-sans)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container with optional sub-parts.
 * Compose: Card > CardHeader > CardTitle/CardDescription, CardContent, CardFooter.
 */
function Card({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      background: "var(--card)",
      color: "var(--card-foreground)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      padding: "24px 24px 0",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, rest), children);
}
function CardTitle({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      ...style
    }
  }, rest), children);
}
function CardDescription({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-normal)",
      ...style
    }
  }, rest), children);
}
function CardContent({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      padding: "24px",
      ...style
    }
  }, rest), children);
}
function CardFooter({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      padding: "0 24px 24px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Separator — thin divider line, horizontal or vertical.
 */
function Separator({
  orientation = "horizontal",
  className = "",
  style = {},
  ...rest
}) {
  const isH = orientation === "horizontal";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: className,
    style: {
      background: "var(--border)",
      flexShrink: 0,
      ...(isH ? {
        width: "100%",
        height: "1px"
      } : {
        width: "1px",
        alignSelf: "stretch",
        height: "auto"
      }),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/display/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton — animated loading placeholder block.
 */
function Skeleton({
  width = "100%",
  height = "16px",
  radius = "var(--radius-md)",
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      width,
      height,
      borderRadius: radius,
      background: "var(--muted)",
      animation: "rl-skeleton-pulse 1.6s ease-in-out infinite",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes rl-skeleton-pulse{0%,100%{opacity:1}50%{opacity:.5}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — data table primitives styled to the system.
 * Compose: Table > TableHeader > TableRow > TableHead; TableBody > TableRow > TableCell.
 */
function Table({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: className,
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      ...style
    }
  }, rest), children));
}
function TableHeader({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("thead", rest, children);
}
function TableBody({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tbody", rest, children);
}
function TableRow({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: className,
    style: {
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, rest), children);
}
function TableHead({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("th", _extends({
    className: className,
    style: {
      textAlign: "left",
      padding: "10px 16px",
      height: "44px",
      color: "var(--muted-foreground)",
      fontWeight: "var(--weight-medium)",
      fontSize: "13px",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
function TableCell({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    className: className,
    style: {
      padding: "12px 16px",
      color: "var(--foreground)",
      verticalAlign: "middle",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Table, TableHeader, TableBody, TableRow, TableHead, TableCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  default: {
    border: "var(--border)",
    bg: "var(--background)",
    fg: "var(--foreground)",
    icon: "var(--foreground)"
  },
  info: {
    border: "rgba(51,138,243,0.3)",
    bg: "rgba(51,138,243,0.08)",
    fg: "var(--foreground)",
    icon: "rgb(51,138,243)"
  },
  success: {
    border: "rgba(22,163,74,0.3)",
    bg: "rgba(22,163,74,0.08)",
    fg: "var(--foreground)",
    icon: "rgb(22,163,74)"
  },
  warning: {
    border: "rgba(217,119,6,0.3)",
    bg: "rgba(217,119,6,0.08)",
    fg: "var(--foreground)",
    icon: "rgb(217,119,6)"
  },
  destructive: {
    border: "rgba(220,38,38,0.3)",
    bg: "rgba(220,38,38,0.06)",
    fg: "var(--destructive)",
    icon: "var(--destructive)"
  }
};

/**
 * Alert — inline contextual message. Pass `icon` (Icon element) + children.
 */
function Alert({
  variant = "default",
  title,
  icon,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: className,
    style: {
      display: "flex",
      gap: "12px",
      padding: "14px 16px",
      borderRadius: "var(--radius-lg)",
      border: `1px solid ${v.border}`,
      background: v.bg,
      color: v.fg,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: v.icon,
      flexShrink: 0,
      marginTop: "1px"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.4
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-normal)"
    }
  }, children) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Progress — horizontal determinate progress bar (0–100).
 */
function Progress({
  value = 0,
  className = "",
  style = {},
  color = "var(--primary)",
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    className: className,
    style: {
      width: "100%",
      height: "8px",
      borderRadius: "var(--radius-full)",
      background: "var(--secondary)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: color,
      borderRadius: "var(--radius-full)",
      transition: "width .3s ease"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover label. Wraps a trigger; shows `content` on hover/focus.
 */
function Tooltip({
  content,
  side = "top",
  className = "",
  style = {},
  children
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--primary)",
      color: "var(--primary-foreground)",
      fontSize: "12px",
      fontWeight: "var(--weight-medium)",
      fontFamily: "var(--font-sans)",
      padding: "6px 10px",
      borderRadius: "var(--radius-md)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      zIndex: 50,
      pointerEvents: "none"
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  whiteSpace: "nowrap",
  borderRadius: "var(--radius-md)",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-medium)",
  fontSize: "var(--text-sm)",
  lineHeight: 1,
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "background-color .15s ease, color .15s ease, border-color .15s ease, box-shadow .15s ease, opacity .15s ease",
  userSelect: "none",
  textDecoration: "none"
};
const sizes = {
  sm: {
    height: "32px",
    padding: "0 12px",
    fontSize: "13px",
    borderRadius: "var(--radius-md)"
  },
  default: {
    height: "36px",
    padding: "0 16px"
  },
  lg: {
    height: "40px",
    padding: "0 24px",
    fontSize: "15px"
  },
  icon: {
    height: "36px",
    width: "36px",
    padding: "0"
  }
};
const variants = {
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)"
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)"
  },
  outline: {
    background: "var(--background)",
    color: "var(--foreground)",
    borderColor: "var(--border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)"
  },
  link: {
    background: "transparent",
    color: "var(--primary)",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
    height: "auto",
    padding: "0"
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--destructive-foreground)"
  },
  brand: {
    background: "var(--brand)",
    color: "var(--brand-foreground)"
  }
};
const hoverBg = {
  default: "rgba(15,23,42,0.92)",
  secondary: "rgba(226,232,240,0.7)",
  outline: "var(--accent)",
  ghost: "var(--accent)",
  link: "transparent",
  destructive: "rgba(220,38,38,0.9)",
  brand: "var(--brand)"
};

/**
 * Button — primary action control. shadcn variants + sizes.
 */
function Button({
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.default;
  const composed = {
    ...base,
    ...s,
    ...v,
    ...(hover && !disabled ? {
      background: hoverBg[variant],
      ...(variant === "brand" ? {
        filter: "brightness(0.92)"
      } : {}),
      ...(variant === "link" ? {
        textDecorationColor: "currentColor"
      } : {})
    } : {}),
    ...(disabled ? {
      opacity: 0.5,
      cursor: "not-allowed",
      pointerEvents: "none"
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: className,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — controlled or uncontrolled boolean toggle (square).
 */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  id,
  className = "",
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const active = on || indeterminate;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    id: id,
    "aria-checked": indeterminate ? "mixed" : on,
    disabled: disabled,
    onClick: toggle,
    className: className,
    style: {
      width: "16px",
      height: "16px",
      flexShrink: 0,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${active ? "var(--primary)" : "var(--input)"}`,
      background: active ? "var(--primary)" : "var(--background)",
      color: "var(--primary-foreground)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      transition: "background-color .15s ease, border-color .15s ease",
      ...style
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 12,
    strokeWidth: 3
  }) : on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 3
  }) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field.
 */
function Input({
  className = "",
  style = {},
  disabled = false,
  invalid = false,
  type = "text",
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    className: className,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      display: "flex",
      height: "36px",
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${invalid ? "var(--destructive)" : "var(--input)"}`,
      background: "var(--background)",
      padding: "0 12px",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)",
      color: "var(--foreground)",
      outline: "none",
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...(focus ? {
        borderColor: invalid ? "var(--destructive)" : "var(--ring)",
        boxShadow: `0 0 0 3px ${invalid ? "rgba(220,38,38,0.15)" : "rgba(30,41,59,0.15)"}`
      } : {}),
      ...(disabled ? {
        opacity: 0.5,
        cursor: "not-allowed",
        background: "var(--muted)"
      } : {}),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Label — form field label. Pair with Input/Select/Checkbox via htmlFor.
 */
function Label({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      fontFamily: "var(--font-sans)",
      color: "var(--foreground)",
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
const RadioContext = React.createContext(null);

/**
 * RadioGroup — single-select group. Wrap RadioGroupItem children.
 */
function RadioGroup({
  value,
  defaultValue,
  onChange,
  disabled = false,
  className = "",
  style = {},
  children
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const select = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement(RadioContext.Provider, {
    value: {
      current,
      select,
      disabled
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, children));
}

/**
 * RadioGroupItem — a single option within a RadioGroup.
 */
function RadioGroupItem({
  value,
  id,
  disabled: itemDisabled = false,
  className = "",
  style = {}
}) {
  const ctx = React.useContext(RadioContext);
  const checked = ctx?.current === value;
  const disabled = itemDisabled || ctx?.disabled;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    id: id,
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => ctx?.select(value),
    className: className,
    style: {
      width: "16px",
      height: "16px",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: `1px solid ${checked ? "var(--primary)" : "var(--input)"}`,
      background: "var(--background)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      ...style
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "var(--radius-full)",
      background: "var(--primary)"
    }
  }) : null);
}
Object.assign(__ds_scope, { RadioGroup, RadioGroupItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — native-backed dropdown styled to match the system.
 * Pass options=[{value,label}] or children <option>.
 */
function Select({
  value,
  defaultValue,
  onChange,
  options,
  disabled = false,
  placeholder,
  id,
  className = "",
  style = {},
  children
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: e => onChange?.(e.target.value, e),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: className,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      height: "36px",
      width: "100%",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--input)",
      background: "var(--background)",
      padding: "0 32px 0 12px",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)",
      color: "var(--foreground)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...(focus ? {
        borderColor: "var(--ring)",
        boxShadow: "0 0 0 3px rgba(30,41,59,0.15)"
      } : {})
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder) : null, options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--muted-foreground)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/**
 * Slider — single-thumb range input styled to the system.
 */
function Slider({
  value,
  defaultValue = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  id,
  className = "",
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = isControlled ? value : internal;
  const pct = (v - min) / (max - min) * 100;
  const set = nv => {
    if (!isControlled) setInternal(nv);
    onChange?.(nv);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "20px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: "4px",
      borderRadius: "var(--radius-full)",
      background: "var(--secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: "4px",
      borderRadius: "var(--radius-full)",
      background: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 8px)`,
      width: "16px",
      height: "16px",
      borderRadius: "var(--radius-full)",
      background: "var(--background)",
      border: "2px solid var(--primary)",
      boxShadow: "var(--shadow-sm)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    style: {
      position: "absolute",
      left: 0,
      width: "100%",
      height: "20px",
      margin: 0,
      opacity: 0,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — on/off toggle (pill).
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  id,
  className = "",
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    id: id,
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    className: className,
    style: {
      width: "36px",
      height: "20px",
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: "1px solid transparent",
      background: on ? "var(--primary)" : "var(--input)",
      position: "relative",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      padding: 0,
      transition: "background-color .2s ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "1px",
      left: on ? "17px" : "1px",
      width: "16px",
      height: "16px",
      borderRadius: "var(--radius-full)",
      background: "var(--background)",
      boxShadow: "var(--shadow-sm)",
      transition: "left .2s ease"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text field.
 */
function Textarea({
  className = "",
  style = {},
  disabled = false,
  invalid = false,
  rows = 4,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    className: className,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      display: "flex",
      width: "100%",
      minHeight: "72px",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${invalid ? "var(--destructive)" : "var(--input)"}`,
      background: "var(--background)",
      padding: "8px 12px",
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)",
      lineHeight: "var(--leading-normal)",
      color: "var(--foreground)",
      outline: "none",
      resize: "vertical",
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...(focus ? {
        borderColor: invalid ? "var(--destructive)" : "var(--ring)",
        boxShadow: `0 0 0 3px ${invalid ? "rgba(220,38,38,0.15)" : "rgba(30,41,59,0.15)"}`
      } : {}),
      ...(disabled ? {
        opacity: 0.5,
        cursor: "not-allowed",
        background: "var(--muted)"
      } : {}),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/**
 * Accordion — vertically stacked, collapsible sections.
 * items=[{ value, title, content }]. allowMultiple optional.
 */
function Accordion({
  items = [],
  defaultValue,
  allowMultiple = false,
  className = "",
  style = {}
}) {
  const init = defaultValue == null ? [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const [open, setOpen] = React.useState(init);
  const toggle = v => {
    setOpen(prev => {
      const has = prev.includes(v);
      if (allowMultiple) return has ? prev.filter(x => x !== v) : [...prev, v];
      return has ? [] : [v];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      style: {
        borderTop: i === 0 ? "none" : "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(it.value),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "16px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        color: "var(--foreground)",
        textAlign: "left"
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform .2s ease",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 16
    }))), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 16px",
        fontSize: "var(--text-sm)",
        color: "var(--muted-foreground)",
        lineHeight: "var(--leading-normal)"
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/**
 * Breadcrumb — hierarchical navigation trail.
 * items=[{ label, href? }] — last item is the current page.
 */
function Breadcrumb({
  items = [],
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: className,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
      margin: 0,
      padding: 0,
      listStyle: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)"
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--foreground)",
        fontWeight: "var(--weight-medium)"
      },
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        color: "var(--muted-foreground)",
        textDecoration: "none"
      }
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14
    })) : null);
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const TabsContext = React.createContext(null);

/**
 * Tabs — segmented content switcher. Compose TabsList>TabsTrigger + TabsContent.
 */
function Tabs({
  value,
  defaultValue,
  onChange,
  className = "",
  style = {},
  children
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement(TabsContext.Provider, {
    value: {
      current,
      select
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      ...style
    }
  }, children));
}
function TabsList({
  className = "",
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "inline-flex",
      gap: "2px",
      padding: "3px",
      background: "var(--muted)",
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, children);
}
function TabsTrigger({
  value,
  className = "",
  style = {},
  children
}) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.current === value;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": active,
    onClick: () => ctx?.select(value),
    className: className,
    style: {
      appearance: "none",
      border: "none",
      cursor: "pointer",
      padding: "6px 14px",
      borderRadius: "var(--radius-md)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      fontFamily: "var(--font-sans)",
      background: active ? "var(--background)" : "transparent",
      color: active ? "var(--foreground)" : "var(--muted-foreground)",
      boxShadow: active ? "var(--shadow-sm)" : "none",
      transition: "background-color .15s ease, color .15s ease",
      ...style
    }
  }, children);
}
function TabsContent({
  value,
  className = "",
  style = {},
  children
}) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.current !== value) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    className: className,
    style: style
  }, children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsTrigger, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
/**
 * Dialog — modal overlay. Controlled via `open` / `onClose`.
 * Compose children freely; pass `title` + `description` for the header.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  className = "",
  style = {},
  width = 440,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(15,23,42,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      animation: "rl-dialog-fade .15s ease"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rl-dialog-fade{from{opacity:0}to{opacity:1}}@keyframes rl-dialog-pop{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}`), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    className: className,
    style: {
      width,
      maxWidth: "100%",
      background: "var(--popover)",
      color: "var(--popover-foreground)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xl)",
      fontFamily: "var(--font-sans)",
      animation: "rl-dialog-pop .15s ease",
      position: "relative",
      ...style
    }
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "var(--muted-foreground)",
      display: "inline-flex",
      padding: "4px",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })) : null, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 0",
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "-0.01em"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      lineHeight: "var(--leading-normal)"
    }
  }, description) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 24px"
    }
  }, children)));
}
function DialogFooter({
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      marginTop: "20px",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Dialog, DialogFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/DropdownMenu.jsx
try { (() => {
/**
 * DropdownMenu — click-triggered menu.
 * trigger = element; items = [{ label, icon?, onSelect?, danger?, disabled?, separator? }].
 */
function DropdownMenu({
  trigger,
  items = [],
  align = "start",
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex"
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      [align === "end" ? "right" : "left"]: 0,
      minWidth: "180px",
      background: "var(--popover)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "4px",
      zIndex: 80,
      fontFamily: "var(--font-sans)",
      animation: "rl-dd-pop .12s ease"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rl-dd-pop{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}`), items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: "1px",
      background: "var(--border)",
      margin: "4px 0"
    }
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    key: i,
    item: it,
    onClose: () => setOpen(false)
  }))) : null);
}
function MenuItem({
  item,
  onClose
}) {
  const [hover, setHover] = React.useState(false);
  const disabled = !!item.disabled;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    disabled: disabled,
    "aria-disabled": disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => {
      if (disabled) return;
      item.onSelect?.();
      onClose();
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: "100%",
      padding: "7px 8px",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: hover && !disabled ? item.danger ? "rgba(220,38,38,0.1)" : "var(--accent)" : "transparent",
      color: disabled ? "var(--muted-foreground)" : item.danger ? "var(--destructive)" : "var(--foreground)",
      opacity: disabled ? 0.55 : 1,
      fontSize: "var(--text-sm)",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      textAlign: "left"
    }
  }, item.icon, item.label);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/AddTransaction.jsx
try { (() => {
// AddTransaction — form for entering land transactions. Multi-dag entry,
// validation, confirmation dialog. Exposes window.AddTransaction.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Textarea,
    Label,
    Breadcrumb,
    Alert,
    Dialog,
    DialogFooter,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  function Field({
    label,
    required,
    error,
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minWidth: 0,
        ...style
      }
    }, /*#__PURE__*/React.createElement(Label, null, label, required ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--destructive)",
        marginLeft: 2
      }
    }, "*") : null), children, error ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--destructive)"
      }
    }, error) : null);
  }
  function AddTransaction({
    onNavigate
  }) {
    const [form, setForm] = React.useState({
      type: "",
      deed: "",
      deedDate: "",
      deedType: "",
      party: "",
      file: "",
      project: "",
      mouza: "",
      amount: "",
      notes: ""
    });
    const [dags, setDags] = React.useState([{
      dag: "",
      area: "",
      bucket: ""
    }]);
    const [errors, setErrors] = React.useState({});
    const [showConfirm, setShowConfirm] = React.useState(false);
    const [flash, setFlash] = React.useState(null); // {tone,title,detail}

    const set = (k, v) => setForm(f => ({
      ...f,
      [k]: v
    }));
    const setDag = (i, k, v) => setDags(d => d.map((row, idx) => idx === i ? {
      ...row,
      [k]: v
    } : row));
    const addDag = () => setDags(d => [...d, {
      dag: "",
      area: "",
      bucket: ""
    }]);
    const removeDag = i => setDags(d => d.length > 1 ? d.filter((_, idx) => idx !== i) : d);
    function validate() {
      const e = {};
      if (!form.type) e.type = "Select a transaction type.";
      if (!form.deed.trim()) e.deed = "Deed number is required.";
      if (!form.deedDate) e.deedDate = "Deed date is required.";
      if (!form.party.trim()) e.party = "Counterparty is required.";
      if (!form.mouza) e.mouza = "Select a mouza.";
      if (!dags.some(r => r.dag.trim())) e.dags = "Add at least one dag with a dag number.";
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    function onSubmitClick() {
      if (validate()) {
        setFlash(null);
        setShowConfirm(true);
      } else setFlash({
        tone: "destructive",
        title: "Please fix the highlighted fields",
        detail: "Some required information is missing or incomplete."
      });
    }
    function confirmSubmit() {
      setShowConfirm(false);
      setFlash({
        tone: "success",
        title: "Transaction submitted",
        detail: "The entry has been recorded in the ledger and the audit log."
      });
    }
    function saveDraft() {
      setFlash({
        tone: "info",
        title: "Draft saved",
        detail: "You can resume this transaction from your drafts."
      });
    }
    const validDags = dags.filter(r => r.dag.trim()).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1080
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Transactions",
        href: "#"
      }, {
        label: "Add Transaction"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Add Transaction"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Record a purchase, sale, Awaz, or status change against one or more dags.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: saveDraft
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save draft"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onSubmitClick
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Submit transaction")))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: flash.tone === "success" ? "check-circle" : flash.tone === "destructive" ? "alert-triangle" : "info",
        size: 18
      })
    }, flash.detail) : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Transaction details")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Transaction type",
      required: true,
      error: errors.type
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select type",
      options: opt(D.options.transactionTypes),
      value: form.type,
      onChange: v => set("type", v)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Deed No.",
      required: true,
      error: errors.deed
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. DEED-7749",
      value: form.deed,
      invalid: !!errors.deed,
      onChange: e => set("deed", e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Deed date",
      required: true,
      error: errors.deedDate
    }, /*#__PURE__*/React.createElement(Input, {
      type: "date",
      value: form.deedDate,
      invalid: !!errors.deedDate,
      onChange: e => set("deedDate", e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Deed type"
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select deed type",
      options: opt(D.options.deedTypes),
      value: form.deedType,
      onChange: v => set("deedType", v)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Party / Counterparty",
      required: true,
      error: errors.party
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Donor / buyer / counterparty",
      value: form.party,
      invalid: !!errors.party,
      onChange: e => set("party", e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "File No."
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. F-2025-124",
      value: form.file,
      onChange: e => set("file", e.target.value)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Project"
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select project",
      options: opt(D.options.projects),
      value: form.project,
      onChange: v => set("project", v)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      required: true,
      error: errors.mouza
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select mouza",
      options: opt(D.options.mouzas),
      value: form.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Consideration amount"
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "\u09F3 0",
      value: form.amount,
      onChange: e => set("amount", e.target.value)
    })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Dag entries"), errors.dags ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--destructive)",
        marginTop: 4
      }
    }, errors.dags) : null), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: addDag
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add another dag")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 36
      }
    }, "#"), /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Area"), /*#__PURE__*/React.createElement(TableHead, null, "Bucket"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 48
      }
    }))), /*#__PURE__*/React.createElement(TableBody, null, dags.map((row, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, i + 1), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Input, {
      placeholder: "DAG-0000",
      value: row.dag,
      onChange: e => setDag(i, "dag", e.target.value),
      style: {
        height: 34
      }
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Input, {
      placeholder: "0.00 bigha",
      value: row.area,
      onChange: e => setDag(i, "area", e.target.value),
      style: {
        height: 34
      }
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select",
      options: opt(D.options.buckets),
      value: row.bucket,
      onChange: v => setDag(i, "bucket", v)
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      style: {
        height: 32,
        width: 32
      },
      onClick: () => removeDag(i),
      disabled: dags.length === 1
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 15
    }))))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Documents")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textAlign: "center",
        background: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-md)",
        background: "var(--background)",
        border: "1px solid var(--border)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted-foreground)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600
      }
    }, "Drag deed scans & receipts here"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)"
      }
    }, "PDF, JPG or PNG up to 20 MB"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        marginTop: 4
      }
    }, "Browse files")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Notes")), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(Textarea, {
      rows: 6,
      placeholder: "Add any context for officers reviewing this transaction\u2026",
      value: form.notes,
      onChange: e => set("notes", e.target.value)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 8,
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onNavigate && onNavigate("ledger")
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: saveDraft
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save draft"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: onSubmitClick
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Submit transaction")), /*#__PURE__*/React.createElement(Dialog, {
      open: showConfirm,
      onClose: () => setShowConfirm(false),
      title: "Submit this transaction?",
      description: "Once submitted, it is recorded in the ledger and the audit log. You can correct it later with a Correction entry."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        fontSize: 13.5
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "Transaction type",
      v: form.type || "—"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Deed No.",
      v: form.deed || "—",
      mono: true
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Counterparty",
      v: form.party || "—"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Dags",
      v: `${validDags} dag${validDags === 1 ? "" : "s"}`
    })), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setShowConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: confirmSubmit
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Confirm & submit"))));
  }
  function Row({
    k,
    v,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, v));
  }
  window.AddTransaction = AddTransaction;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/AddTransaction.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/AppShell.jsx
try { (() => {
// AppShell — reusable Reliance LIMS application shell:
// left sidebar nav (main + admin groups), top header (page title, global
// search, notification bell, user profile dropdown), and a main content area.
// Exposes window.AppShell. Uses design-system components from the namespace.
(function () {
  const {
    Logo,
    Avatar,
    Badge,
    Icon,
    Input,
    DropdownMenu,
    Separator
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  function NavItem({
    item,
    active,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    const highlight = active || hover;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      "aria-current": active ? "page" : undefined,
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "8px 10px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: active ? "var(--sidebar-accent)" : hover ? "rgba(15,23,42,0.045)" : "transparent",
        color: active ? "var(--sidebar-accent-foreground)" : "var(--sidebar-foreground)",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        fontFamily: "var(--font-sans)",
        transition: "background-color .12s ease"
      }
    }, active ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -12,
        top: 7,
        bottom: 7,
        width: 3,
        borderRadius: 3,
        background: "var(--sidebar-primary)"
      }
    }) : null, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 18,
      style: {
        color: active ? "var(--sidebar-primary)" : "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.badge ? /*#__PURE__*/React.createElement(Badge, {
      variant: "secondary",
      style: {
        fontSize: 11
      }
    }, item.badge) : null);
  }
  function SectionLabel({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 10px 6px",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--muted-foreground)"
      }
    }, children);
  }
  function ProfileMenu({
    onSignOut,
    user,
    onPickUser
  }) {
    const trigger = /*#__PURE__*/React.createElement("button", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 8px 4px 4px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        background: "var(--background)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: user.initials,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.25,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, user.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--muted-foreground)"
      }
    }, user.role)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14,
      style: {
        color: "var(--muted-foreground)",
        marginLeft: 2
      }
    }));
    const switchItems = D.sessionUsers.map(u => ({
      label: `Sign in as ${u.role}`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: u.role === user.role ? "check" : "user",
        size: 14
      }),
      onSelect: () => onPickUser(u)
    }));
    return /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: trigger,
      items: [{
        label: "View profile",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "user",
          size: 14
        })
      }, {
        label: "Account settings",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "settings",
          size: 14
        })
      }, {
        separator: true
      }, ...switchItems, {
        separator: true
      }, {
        label: "Sign out",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "log-out",
          size: 14
        }),
        onSelect: onSignOut
      }]
    });
  }
  function AppShell({
    active,
    pageTitle,
    onNavigate,
    onBell,
    onSignOut,
    user,
    onPickUser,
    children
  }) {
    const allNav = [...D.navMain, ...D.navAdmin];
    const title = pageTitle || (allNav.find(n => n.id === active) || {}).label || "Dashboard";
    const allowed = D.roleAccess[user.role] || allNav.map(n => n.id);
    const mainNav = D.navMain.filter(n => allowed.includes(n.id));
    const adminNav = D.navAdmin.filter(n => allowed.includes(n.id));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 252,
        flexShrink: 0,
        background: "var(--sidebar)",
        borderRight: "1px solid var(--sidebar-border)",
        display: "flex",
        flexDirection: "column",
        padding: 12,
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 8px 14px"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 26
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, mainNav.map(n => /*#__PURE__*/React.createElement(NavItem, {
      key: n.id,
      item: n,
      active: active === n.id,
      onClick: () => onNavigate(n.id)
    }))), adminNav.length ? /*#__PURE__*/React.createElement(SectionLabel, null, "Administration") : null, /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, adminNav.map(n => /*#__PURE__*/React.createElement(NavItem, {
      key: n.id,
      item: n,
      active: active === n.id,
      onClick: () => onNavigate(n.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement(Separator, {
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "4px 8px"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: user.initials,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)"
      }
    }, user.role))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        height: 64,
        flexShrink: 0,
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 24px",
        background: "var(--background)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 320,
        maxWidth: "38vw"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search dag, deed, file, mouza, donor\u2026",
      style: {
        paddingLeft: 34,
        height: 38,
        background: "var(--muted)"
      }
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Notifications",
      onClick: onBell,
      style: {
        position: "relative",
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        background: active === "notifications" ? "var(--accent)" : "var(--background)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--foreground)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 7,
        right: 8,
        width: 7,
        height: 7,
        borderRadius: "var(--radius-full)",
        background: "var(--destructive)",
        border: "1.5px solid var(--background)"
      }
    })), /*#__PURE__*/React.createElement(ProfileMenu, {
      onSignOut: onSignOut,
      user: user,
      onPickUser: onPickUser
    })), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflowY: "auto"
      }
    }, children)));
  }
  window.AppShell = AppShell;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/AuditLog.jsx
try { (() => {
// AuditModule — Audit log list + audit event detail (forensic view).
// Exposes window.AuditModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Breadcrumb,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  function RiskBadge({
    risk
  }) {
    const tone = risk === "High" ? "danger" : risk === "Permission" ? "warning" : "success";
    const label = risk === "Normal" ? "Normal" : risk;
    return /*#__PURE__*/React.createElement(K.Pill, {
      tone: tone
    }, label);
  }
  const ACTION_TONE = {
    "Delete": "danger",
    "Dispute Lock": "danger",
    "Role Change": "warning",
    "Approval": "navy",
    "Dispute Resolve": "navy",
    "Login": "neutral",
    "Export": "neutral",
    "Create": "neutral",
    "Update": "neutral"
  };
  function ActionBadge({
    action
  }) {
    const t = {
      danger: {
        bg: "rgba(220,38,38,0.10)",
        fg: "rgb(185,28,28)"
      },
      warning: {
        bg: "rgba(217,119,6,0.12)",
        fg: "rgb(180,83,9)"
      },
      navy: {
        bg: "var(--brand-subtle)",
        fg: "var(--brand)"
      },
      neutral: {
        bg: "var(--muted)",
        fg: "var(--muted-foreground)"
      }
    }[ACTION_TONE[action] || "neutral"];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 9px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        color: t.fg,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, action);
  }
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }
  function Field({
    label,
    value,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }

  // ---------------- 10A: List ----------------
  function AuditList({
    onOpen
  }) {
    const blank = {
      q: "",
      user: "",
      action: "",
      module: "",
      range: "Last 7 days",
      sensitive: false,
      ip: ""
    };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const users = Array.from(new Set(D.auditEvents.map(e => e.user)));
    const rows = D.auditEvents.filter(e => {
      if (f.q) {
        const h = [e.id, e.user, e.record, e.action, e.module].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.user && e.user !== f.user) return false;
      if (f.action && e.action !== f.action) return false;
      if (f.module && e.module !== f.module) return false;
      if (f.sensitive && !e.sensitive) return false;
      if (f.ip && !e.ip.includes(f.ip)) return false;
      return true;
    });
    const chips = [];
    [["q", "Search"], ["user", "User"], ["action", "Action"], ["module", "Module"], ["ip", "IP"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    if (f.range !== "Last 7 days") chips.push({
      k: "range",
      label: "Period",
      value: f.range
    });
    if (f.sensitive) chips.push({
      k: "sensitive",
      label: "View",
      value: "Sensitive only"
    });
    const clearOne = k => set(k, k === "range" ? "Last 7 days" : k === "sensitive" ? false : "");
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Audit Log"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Audit log"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "An immutable record of who changed what, and when.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: f.sensitive ? "default" : "outline",
      size: "sm",
      onClick: () => set("sensitive", !f.sensitive)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 15
    }), "Sensitive only"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Audit Log")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 14
      }
    }, loading ? Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.auditKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 220px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search event, user, record\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All users",
      options: opt(users),
      value: f.user,
      onChange: v => set("user", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All actions",
      options: opt(D.auditActions),
      value: f.action,
      onChange: v => set("action", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All modules",
      options: opt(D.auditModules),
      value: f.module,
      onChange: v => set("module", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Date range",
      options: opt(["Today", "Last 7 days", "Last 30 days", "This year"]),
      value: f.range,
      onChange: v => set("range", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "IP address",
      value: f.ip,
      onChange: e => set("ip", e.target.value)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => clearOne(c.k),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 8
    }) : rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No audit events match",
      detail: "Adjust or clear your filters to see more events.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 1180
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Timestamp"), /*#__PURE__*/React.createElement(TableHead, null, "User"), /*#__PURE__*/React.createElement(TableHead, null, "Module"), /*#__PURE__*/React.createElement(TableHead, null, "Action"), /*#__PURE__*/React.createElement(TableHead, null, "Record ID"), /*#__PURE__*/React.createElement(TableHead, null, "Old value"), /*#__PURE__*/React.createElement(TableHead, null, "New value"), /*#__PURE__*/React.createElement(TableHead, null, "IP address"), /*#__PURE__*/React.createElement(TableHead, null, "Risk"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "View"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(e => /*#__PURE__*/React.createElement(TableRow, {
      key: e.id,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpen(e)
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, e.ts), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, e.sensitive ? /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13,
      style: {
        color: "var(--destructive)"
      }
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, e.user))), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, e.module), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(ActionBadge, {
      action: e.action
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, e.record), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        maxWidth: 160,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, e.old), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontSize: 13,
        maxWidth: 160,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, e.new), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--muted-foreground)"
      }
    }, e.ip), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(RiskBadge, {
      risk: e.risk
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: ev => ev.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpen(e)
    }, "View")))))))));
  }

  // ---------------- 10B: Event detail ----------------
  function AuditDetail({
    onBack
  }) {
    const d = D.auditDetail;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1000
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Audit Log",
        href: "#"
      }, {
        label: d.id
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily: "var(--font-mono)"
      }
    }, d.id), /*#__PURE__*/React.createElement(RiskBadge, {
      risk: d.risk
    }), d.sensitive ? /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, "Sensitive") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Event"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }), "Back to Audit Log")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Event summary")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Event ID",
      value: d.id,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Timestamp",
      value: d.ts,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Action type",
      value: /*#__PURE__*/React.createElement(ActionBadge, {
        action: d.action
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Module",
      value: d.module
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Affected record",
      value: d.record,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Risk",
      value: /*#__PURE__*/React.createElement(RiskBadge, {
        risk: d.risk
      })
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Actor & session")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "User name",
      value: d.user
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Role",
      value: d.role
    }), /*#__PURE__*/React.createElement(Field, {
      label: "IP address",
      value: d.ip,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Device / browser",
      value: d.device
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Session ID",
      value: d.session,
      mono: true
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginBottom: 12
      }
    }, "Change comparison"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: 0,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        borderColor: "rgba(220,38,38,0.4)"
      }
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "var(--radius-sm)",
        background: "rgba(220,38,38,0.10)",
        color: "var(--destructive)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)"
      }
    }, "Previous value")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: "var(--font-mono)",
        color: "var(--destructive)"
      }
    }, d.old))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        color: "var(--muted-foreground)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        borderColor: "rgba(22,163,74,0.4)"
      }
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "var(--radius-sm)",
        background: "rgba(22,163,74,0.12)",
        color: "var(--success)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)"
      }
    }, "New value")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        fontFamily: "var(--font-mono)",
        color: "var(--success)"
      }
    }, d.new))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Reason / comment"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: "var(--leading-relaxed)"
      }
    }, d.reason)), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border)",
        paddingTop: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Related record"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500
      }
    }, d.related)), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 15
    }), "Open related record")))));
  }

  // ---------------- Coordinator ----------------
  function AuditModule() {
    const [view, setView] = React.useState("list");
    return view === "list" ? /*#__PURE__*/React.createElement(AuditList, {
      onOpen: () => setView("detail")
    }) : /*#__PURE__*/React.createElement(AuditDetail, {
      onBack: () => setView("list")
    });
  }
  window.AuditModule = AuditModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/AuditLog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/Auth.jsx
try { (() => {
// AuthFlow — Login, Two-factor, Forgot-password screens for Reliance LIMS.
// Exposes window.AuthFlow({ onAuthenticated }).
(function () {
  const {
    Card,
    CardContent,
    Icon,
    Button,
    Input,
    Label,
    Logo,
    Alert,
    Separator
  } = window.RelianceLIMSDesignSystem_12526c;
  function Shell({
    children,
    footer
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--muted)",
        padding: 24,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 408,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 30
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        boxShadow: "var(--shadow-lg)"
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 12,
        color: "var(--muted-foreground)",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13
    }), "Authorized users only \xB7 access is monitored and logged"), footer)));
  }
  function Header({
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 24px 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: "-0.01em"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)",
        lineHeight: "var(--leading-normal)"
      }
    }, sub));
  }

  // ---------------- Login ----------------
  function Login({
    onForgot,
    onLogin
  }) {
    const [id, setId] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [err, setErr] = React.useState(false);
    function submit(e) {
      e && e.preventDefault();
      if (!id.trim() || !pw.trim()) {
        setErr(true);
        return;
      }
      setErr(false);
      onLogin();
    }
    return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Header, {
      title: "Sign in to Reliance LIMS",
      sub: "Land Inventory Management System"
    }), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, err ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: "Enter your credentials",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-circle",
        size: 17
      })
    }, "Both fields are required to continue.") : null, /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Email or phone"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "name@reliance.com",
      value: id,
      invalid: err && !id.trim(),
      onChange: e => setId(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Password"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onForgot,
      style: {
        border: "none",
        background: "transparent",
        color: "var(--brand)",
        fontSize: 12.5,
        fontWeight: 600,
        cursor: "pointer",
        padding: 0,
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement(Input, {
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: pw,
      invalid: err && !pw.trim(),
      onChange: e => setPw(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "default",
      style: {
        width: "100%",
        height: 40
      }
    }, "Sign in", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Separator, {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)"
      }
    }, "or"), /*#__PURE__*/React.createElement(Separator, {
      style: {
        flex: 1
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        width: "100%",
        height: 40
      },
      onClick: onLogin
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "conic-gradient(#ea4335 0 25%, #fbbc05 25% 50%, #34a853 50% 75%, #4285f4 75% 100%)",
        flexShrink: 0
      }
    }), "Continue with Google Workspace")));
  }

  // ---------------- Two-factor ----------------
  function TwoFactor({
    onVerify,
    onBack
  }) {
    const [code, setCode] = React.useState(["", "", "", "", "", ""]);
    const [backup, setBackup] = React.useState(false);
    const refs = React.useRef([]);
    function setDigit(i, v) {
      const d = v.replace(/\D/g, "").slice(-1);
      setCode(c => {
        const n = [...c];
        n[i] = d;
        return n;
      });
      if (d && i < 5 && refs.current[i + 1]) refs.current[i + 1].focus();
    }
    const full = code.join("").length === 6;
    return /*#__PURE__*/React.createElement(Shell, {
      footer: /*#__PURE__*/React.createElement("span", null, "Didn't get a code? Check your authenticator app or backup codes.")
    }, /*#__PURE__*/React.createElement(Header, {
      title: "Two-factor authentication",
      sub: "Enter the 6-digit code from your authenticator app. 2FA is required for privileged roles."
    }), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, !backup ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        justifyContent: "center"
      }
    }, code.map((d, i) => /*#__PURE__*/React.createElement("input", {
      key: i,
      ref: el => refs.current[i] = el,
      value: d,
      inputMode: "numeric",
      maxLength: 1,
      onChange: e => setDigit(i, e.target.value),
      onKeyDown: e => {
        if (e.key === "Backspace" && !d && i > 0) refs.current[i - 1].focus();
      },
      style: {
        width: 46,
        height: 54,
        textAlign: "center",
        fontSize: 22,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--input)",
        background: "var(--background)",
        color: "var(--foreground)",
        outline: "none"
      }
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Backup code"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "XXXX-XXXX-XXXX",
      style: {
        textAlign: "center",
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.1em"
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      style: {
        width: "100%",
        height: 40
      },
      disabled: !backup && !full,
      onClick: onVerify
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15
    }), "Verify & continue"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setBackup(!backup),
      style: {
        border: "none",
        background: "transparent",
        color: "var(--brand)",
        fontWeight: 600,
        cursor: "pointer",
        padding: 0
      }
    }, backup ? "Use authenticator code" : "Use a backup code"), /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        color: "var(--muted-foreground)",
        fontWeight: 500,
        cursor: "pointer",
        padding: 0
      }
    }, "Resend code")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        border: "none",
        background: "transparent",
        color: "var(--muted-foreground)",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }), "Back to login")));
  }

  // ---------------- Forgot password ----------------
  function ForgotPassword({
    onBack
  }) {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(Header, {
      title: "Reset your password",
      sub: sent ? "If an account exists, we've sent reset instructions." : "Enter your email or phone and we'll send a reset link or code."
    }), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, sent ? /*#__PURE__*/React.createElement(Alert, {
      variant: "success",
      title: "Reset link sent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 17
      })
    }, "Check your inbox or SMS for instructions. The link expires in 30 minutes.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Email or phone"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "name@reliance.com"
    })), !sent ? /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      style: {
        width: "100%",
        height: 40
      },
      onClick: () => setSent(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    }), "Send reset link") : null, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        border: "none",
        background: "transparent",
        color: "var(--muted-foreground)",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }), "Back to login")));
  }
  function AuthFlow({
    onAuthenticated
  }) {
    const [view, setView] = React.useState("login");
    if (view === "login") return /*#__PURE__*/React.createElement(Login, {
      onForgot: () => setView("forgot"),
      onLogin: () => setView("2fa")
    });
    if (view === "2fa") return /*#__PURE__*/React.createElement(TwoFactor, {
      onVerify: onAuthenticated,
      onBack: () => setView("login")
    });
    return /*#__PURE__*/React.createElement(ForgotPassword, {
      onBack: () => setView("login")
    });
  }
  window.AuthFlow = AuthFlow;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/Auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/DagDirectory.jsx
try { (() => {
// DagDirectory — searchable/filterable registry of all dags; entry point to
// the Dag Profile detail page. Exposes window.DagDirectory.
(function () {
  const {
    Card,
    CardContent,
    Icon,
    Button,
    Input,
    Select,
    Breadcrumb,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 23,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 8,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 3
      }
    }, k.sub)));
  }
  function DagDirectory({
    onOpenDag,
    initialFilter
  }) {
    const blank = {
      q: "",
      mouza: "",
      project: "",
      status: "",
      khajna: "",
      mutation: ""
    };
    const [f, setF] = React.useState({
      ...blank,
      ...(initialFilter || {})
    });
    React.useEffect(() => {
      if (initialFilter) setF(p => ({
        ...blank,
        ...initialFilter
      }));
    }, [initialFilter]);
    const [view, setView] = React.useState("table"); // table | cards
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.dags.filter(r => {
      if (f.q) {
        const h = [r.dag, r.mouza, r.khatian, r.project].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.project && r.project !== f.project) return false;
      if (f.status && r.status !== f.status) return false;
      if (f.khajna && r.khajna !== f.khajna) return false;
      if (f.mutation && r.mutation !== f.mutation) return false;
      return true;
    });
    const chips = [];
    [["q", "Search"], ["mouza", "Mouza"], ["project", "Project"], ["status", "Status"], ["khajna", "Khajna"], ["mutation", "Mutation"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Inventory",
        href: "#"
      }, {
        label: "Dag Directory"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Dag Directory"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Search and select a dag to open its full profile.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setView("table"),
      "aria-label": "Table view",
      style: {
        width: 34,
        height: 34,
        border: "none",
        cursor: "pointer",
        background: view === "table" ? "var(--secondary)" : "var(--background)",
        color: view === "table" ? "var(--foreground)" : "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "table",
      size: 16
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => setView("cards"),
      "aria-label": "Card view",
      style: {
        width: 34,
        height: 34,
        border: "none",
        borderLeft: "1px solid var(--border)",
        cursor: "pointer",
        background: view === "cards" ? "var(--secondary)" : "var(--background)",
        color: view === "cards" ? "var(--foreground)" : "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-dashboard",
      size: 16
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 12
      }
    }, loading ? Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.dagDirectoryKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 220px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search dag no., mouza, khatian, project, file no\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All mouzas",
      options: opt(D.options.mouzas),
      value: f.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All projects",
      options: opt(D.options.projects),
      value: f.project,
      onChange: v => set("project", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(["Clean", "Disputed", "Under Negotiation"]),
      value: f.status,
      onChange: v => set("status", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Khajna status",
      options: opt(["Paid", "Due", "Due Soon", "Overdue"]),
      value: f.khajna,
      onChange: v => set("khajna", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Mutation status",
      options: opt(["Submitted", "Under Review", "Hearing", "Approved", "Rejected"]),
      value: f.mutation,
      onChange: v => set("mutation", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => set(c.k, ""),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), loading ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }))) : rows.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No dags match",
      detail: "Adjust or clear your filters to see more of the registry.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }))) : view === "cards" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.dag
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: "var(--font-mono)"
      }
    }, r.dag), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 2
      }
    }, r.mouza, " \xB7 ", r.khatian)), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)"
      }
    }, r.project), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, [["Clean", r.clean, "var(--success)"], ["Disputed", r.disputed, "var(--destructive)"], ["Under neg.", r.neg, "var(--warning)"]].map(([lbl, val, col]) => /*#__PURE__*/React.createElement("div", {
      key: lbl,
      style: {
        flex: 1,
        padding: "8px 10px",
        borderRadius: "var(--radius-md)",
        background: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        color: parseFloat(val) ? col : "var(--muted-foreground)"
      }
    }, val)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        fontSize: 12.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, "Khajna"), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.khajna
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)",
        marginLeft: 4
      }
    }, "Mutation"), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.mutation
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      style: {
        width: "100%"
      },
      onClick: () => onOpenDag(r)
    }, "View profile", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })))))) : /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 1100
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, null, "Project"), /*#__PURE__*/React.createElement(TableHead, null, "Khatian"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Clean"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Disputed"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Under neg."), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Khajna"), /*#__PURE__*/React.createElement(TableHead, null, "Mutation"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 110,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.dag,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenDag(r)
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.dag)), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        maxWidth: 180,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, r.project), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.khatian), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: parseFloat(r.clean) ? "var(--success)" : "var(--muted-foreground)",
        fontWeight: parseFloat(r.clean) ? 600 : 400
      }
    }, r.clean), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: parseFloat(r.disputed) ? "var(--destructive)" : "var(--muted-foreground)",
        fontWeight: parseFloat(r.disputed) ? 600 : 400
      }
    }, r.disputed), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: parseFloat(r.neg) ? "var(--warning)" : "var(--muted-foreground)",
        fontWeight: parseFloat(r.neg) ? 600 : 400
      }
    }, r.neg), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.khajna
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.mutation
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenDag(r)
    }, "View profile")))))))));
  }
  window.DagDirectory = DagDirectory;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/DagDirectory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/DagProfile.jsx
try { (() => {
// DagProfile — complete profile of one dag/land parcel: summary, balances,
// survey info, transaction ledger, documents, dispute & legal.
// Exposes window.DagProfile.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    Button,
    Breadcrumb,
    Alert,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Separator,
    DropdownMenu,
    Skeleton
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  function Field({
    label,
    value,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }
  function BalanceCard({
    label,
    area,
    tone,
    icon
  }) {
    const tones = {
      success: {
        fg: "var(--success)",
        bg: "rgba(22,163,74,0.10)"
      },
      destructive: {
        fg: "var(--destructive)",
        bg: "rgba(220,38,38,0.09)"
      },
      warning: {
        fg: "var(--warning)",
        bg: "rgba(217,119,6,0.10)"
      }
    };
    const t = tones[tone];
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18,
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily: "var(--font-mono)",
        marginTop: 2
      }
    }, area))));
  }
  function SurveyChips({
    values,
    labels
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        flexWrap: "wrap"
      }
    }, values.map((v, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: v
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px 11px",
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        border: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9.5,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, labels[i]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        fontFamily: "var(--font-mono)"
      }
    }, v)), i < values.length - 1 ? /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        color: "var(--muted-foreground)"
      }
    }) : null)));
  }
  function DocCard({
    doc
  }) {
    const pending = doc.state === "pending";
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: pending ? "var(--muted-foreground)" : "var(--foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: doc.icon,
      size: 18
    })), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: pending ? "Pending" : "Available"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, doc.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 2
      }
    }, doc.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto"
      }
    }, pending ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 14
    }), "Upload") : /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), "View / download"))));
  }
  function LoadingSkeleton() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 22,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 18
      }
    }, Array.from({
      length: 4
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: 70,
      height: 11
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: 120,
      height: 15,
      style: {
        marginTop: 8
      }
    })))), /*#__PURE__*/React.createElement(Skeleton, {
      width: "60%",
      height: 34
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16
      }
    }, Array.from({
      length: 3
    }).map((_, i) => /*#__PURE__*/React.createElement(Card, {
      key: i
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "80%",
      height: 40
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 5,
      cols: 5
    }))));
  }
  function DagProfile({
    onNavigate,
    selectedDag,
    onBack,
    onPrev,
    onNext
  }) {
    const base = D.dagProfile;
    const sel = selectedDag || {};
    const d = {
      ...base,
      dagNo: sel.dag || base.dagNo,
      mouza: sel.mouza || base.mouza,
      project: sel.project || base.project,
      khatian: sel.khatian || base.khatian,
      status: sel.status || base.status,
      areas: sel.dag ? {
        clean: (sel.clean || "0.00") + " bigha",
        disputed: (sel.disputed || "0.00") + " bigha",
        negotiation: (sel.neg || "0.00") + " bigha"
      } : base.areas
    };
    const loading = K.useFakeLoad(650);
    const [tab, setTab] = React.useState("survey");
    const disputed = d.status === "Disputed" || d.status === "Locked";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1180
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Inventory",
        href: "#"
      }, {
        label: "Dag Directory",
        href: "#"
      }, {
        label: d.dagNo
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }), "Dag Directory"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily: "var(--font-mono)"
      }
    }, d.dagNo), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: d.status
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onPrev,
      "aria-label": "Previous dag",
      style: {
        width: 32,
        height: 32,
        border: "none",
        borderRight: "1px solid var(--border)",
        background: "var(--background)",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 16
    })), /*#__PURE__*/React.createElement("button", {
      onClick: onNext,
      "aria-label": "Next dag",
      style: {
        width: 32,
        height: 32,
        border: "none",
        background: "var(--background)",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onNavigate && onNavigate("add-transaction")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Transaction"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      disabled: disputed,
      title: disputed ? "This dag is already flagged as disputed" : undefined,
      onClick: () => onNavigate && onNavigate("disputes")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "gavel",
      size: 15
    }), "Flag Dispute"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("reports")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Report"), /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      })),
      items: [{
        label: "Resolve Dispute",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "shield-check",
          size: 14
        }),
        disabled: !disputed,
        onSelect: () => disputed && onNavigate && onNavigate("disputes")
      }, {
        label: "View Full Ledger",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "receipt",
          size: 14
        }),
        onSelect: () => onNavigate && onNavigate("ledger")
      }, {
        separator: true
      }, {
        label: "Print Khatian",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "printer",
          size: 14
        }),
        onSelect: () => window.print()
      }]
    })))), disputed ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: "This dag is locked due to dispute",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 18
      })
    }, "Sale or Awaz booking is restricted until the dispute is resolved.") : null, loading ? /*#__PURE__*/React.createElement(LoadingSkeleton, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 22,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Dag No.",
      value: d.dagNo,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      value: d.mouza
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Project",
      value: d.project
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Khatian No.",
      value: d.khatian,
      mono: true
    })), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Survey mapping"), /*#__PURE__*/React.createElement(SurveyChips, {
      values: d.survey,
      labels: d.surveyLabels
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(BalanceCard, {
      label: "Clean area",
      area: d.areas.clean,
      tone: "success",
      icon: "shield-check"
    }), /*#__PURE__*/React.createElement(BalanceCard, {
      label: "Disputed area",
      area: d.areas.disputed,
      tone: "destructive",
      icon: "gavel"
    }), /*#__PURE__*/React.createElement(BalanceCard, {
      label: "Under negotiation",
      area: d.areas.negotiation,
      tone: "warning",
      icon: "repeat"
    })), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab
    }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "survey"
    }, "Survey information"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "ledger"
    }, "Transaction ledger"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "documents"
    }, "Documents"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "legal"
    }, "Dispute & legal")), /*#__PURE__*/React.createElement(TabsContent, {
      value: "survey"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: "40%"
      }
    }, "Field"), /*#__PURE__*/React.createElement(TableHead, null, "Value"))), /*#__PURE__*/React.createElement(TableBody, null, d.surveyInfo.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.field
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontWeight: 500
      }
    }, r.field), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.value)))))))), /*#__PURE__*/React.createElement(TabsContent, {
      value: "ledger"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, d.ledger.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "receipt",
      title: "No transactions yet",
      detail: "This dag has no recorded purchase, sale, or Awaz entries.",
      actionLabel: "Add Transaction",
      onAction: () => onNavigate && onNavigate("add-transaction")
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Date"), /*#__PURE__*/React.createElement(TableHead, null, "Type"), /*#__PURE__*/React.createElement(TableHead, null, "Deed No."), /*#__PURE__*/React.createElement(TableHead, null, "Party"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Area"), /*#__PURE__*/React.createElement(TableHead, null, "Bucket"), /*#__PURE__*/React.createElement(TableHead, null, "File No."), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, d.ledger.map((l, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        whiteSpace: "nowrap"
      }
    }, l.date), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.TypeBadge, {
      type: l.type
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, l.deed), /*#__PURE__*/React.createElement(TableCell, null, l.party), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right"
      }
    }, l.area), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: l.bucket
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, l.file), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: l.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      }
    }, "Open"))))))))), /*#__PURE__*/React.createElement(TabsContent, {
      value: "documents"
    }, d.documents.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "file-text",
      title: "No documents uploaded",
      detail: "Deed scans, khajna receipts, and mutation papers will appear here.",
      actionLabel: "Upload document"
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, d.documents.map(doc => /*#__PURE__*/React.createElement(DocCard, {
      key: doc.name,
      doc: doc
    })))), /*#__PURE__*/React.createElement(TabsContent, {
      value: "legal"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Dispute & legal status")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Dispute status",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: d.legal.status
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Advocate",
      value: d.legal.advocate
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Court",
      value: d.legal.court
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Next hearing",
      value: d.legal.hearing,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Resolution",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: d.legal.resolution
      })
    })), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Case notes"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: "var(--leading-relaxed)",
        color: "var(--foreground)"
      }
    }, d.legal.notes)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("disputes")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15
    }), "Resolve Dispute"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("disputes")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 15
    }), "View Case Document"))))))));
  }
  window.DagProfile = DagProfile;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/DagProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/DataMigration.jsx
try { (() => {
// DataMigrationModule — migration dashboard, Excel import wizard, and
// validation exceptions. Exposes window.MigrationModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Progress,
    Breadcrumb,
    Alert,
    Badge,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }

  // ---------------- 11A: Dashboard ----------------
  function MigrationDashboard({
    onImport,
    onErrors
  }) {
    const loading = K.useFakeLoad(550);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Data Migration"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Data migration"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Import legacy Excel and register data into LIMS \u2014 safely and reversibly.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onErrors
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 15
    }), "View Errors"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 15
    }), "Reconciliation Report"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onImport
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    }), "Upload Excel")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, loading ? Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.migrationKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Migration progress")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 20
      }
    }, D.migrationProgress.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.label,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 500
      }
    }, p.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "var(--font-mono)"
      }
    }, p.pct, "%")), /*#__PURE__*/React.createElement(Progress, {
      value: p.pct,
      color: p.color
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Source files"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onImport
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    }), "Upload Excel")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "File name"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Sheets"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Rows"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Last updated"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 100,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, D.migrationFiles.map(f => /*#__PURE__*/React.createElement(TableRow, {
      key: f.name
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "table",
      size: 15,
      style: {
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, f.name))), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, f.sheets), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, f.rows.toLocaleString()), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: f.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, f.updated), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: f.status === "Errors" ? onErrors : onImport
    }, f.status === "Errors" ? "Fix errors" : f.status === "Mapping" ? "Start mapping" : "Open")))))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Recent import batches")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Batch ID"), /*#__PURE__*/React.createElement(TableHead, null, "Source file"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Rows imported"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Errors"), /*#__PURE__*/React.createElement(TableHead, null, "Imported by"), /*#__PURE__*/React.createElement(TableHead, null, "Date"), /*#__PURE__*/React.createElement(TableHead, null, "Status"))), /*#__PURE__*/React.createElement(TableBody, null, D.migrationBatches.map(b => /*#__PURE__*/React.createElement(TableRow, {
      key: b.id
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, b.id), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        maxWidth: 220,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, b.file), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, b.rows.toLocaleString()), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: b.errors > 0 ? "var(--destructive)" : "var(--muted-foreground)",
        fontWeight: b.errors > 0 ? 700 : 400
      }
    }, b.errors), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)"
      }
    }, b.by), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, b.date), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: b.status
    })))))))));
  }

  // ---------------- 11B: Import wizard ----------------
  const STEPS = ["Upload File", "Map Columns", "Validate Rows", "Preview Import", "Confirm Import"];
  function Stepper({
    step
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start"
      }
    }, STEPS.map((s, i) => {
      const done = i < step,
        cur = i === step;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: s
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          width: 120,
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "var(--radius-full)",
          background: done || cur ? "var(--primary)" : "var(--muted)",
          color: done || cur ? "#fff" : "var(--muted-foreground)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
          border: done || cur ? "none" : "1px dashed var(--border)"
        }
      }, done ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15
      }) : i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: cur ? 700 : 500,
          color: cur ? "var(--foreground)" : "var(--muted-foreground)",
          textAlign: "center"
        }
      }, s)), i < STEPS.length - 1 ? /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 2,
          background: i < step ? "var(--primary)" : "var(--border)",
          marginTop: 15,
          minWidth: 16
        }
      }) : null);
    }));
  }
  function ImportWizard({
    onBack,
    onDone
  }) {
    const [step, setStep] = React.useState(0);
    const next = () => setStep(s => Math.min(STEPS.length - 1, s + 1));
    const prev = () => step === 0 ? onBack() : setStep(s => s - 1);
    const vs = D.validationSummary;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1000
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Data Migration",
        href: "#"
      }, {
        label: "Excel Import Wizard"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Excel import wizard"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "24px 28px",
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Stepper, {
      step: step
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 24
      }
    }, step === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        textAlign: "center",
        background: "var(--muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--radius-md)",
        background: "var(--background)",
        border: "1px solid var(--border)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted-foreground)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600
      }
    }, "Drag an Excel or CSV file here"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, ".xlsx, .xls or .csv up to 50 MB"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        marginTop: 4
      }
    }, "Browse files")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Download template"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, "Use the template to ensure columns map correctly. Bengali (Bijoy) text is converted to Unicode automatically."))) : step === 1 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 12
      }
    }, "Map columns to LIMS fields"), /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Source column"), /*#__PURE__*/React.createElement(TableHead, null, "LIMS field"), /*#__PURE__*/React.createElement(TableHead, null, "Required"), /*#__PURE__*/React.createElement(TableHead, null, "Sample value"))), /*#__PURE__*/React.createElement(TableBody, null, D.columnMapping.map(m => /*#__PURE__*/React.createElement(TableRow, {
      key: m.source
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        fontWeight: 600
      }
    }, m.source), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        width: 220
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt([m.field, "— Ignore column —"]),
      value: m.field,
      onChange: () => {}
    })), /*#__PURE__*/React.createElement(TableCell, null, m.required ? /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, "Required") : /*#__PURE__*/React.createElement(K.Pill, {
      tone: "neutral"
    }, "Optional")), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, m.sample)))))) : step === 2 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "Validation result"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        borderRadius: "var(--radius-md)",
        border: "1px solid rgba(22,163,74,0.35)",
        background: "rgba(22,163,74,0.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--success)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Valid rows")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        marginTop: 8
      }
    }, vs.valid.toLocaleString())), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        borderRadius: "var(--radius-md)",
        border: "1px solid rgba(217,119,6,0.35)",
        background: "rgba(217,119,6,0.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--warning)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Warning rows")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        marginTop: 8
      }
    }, vs.warning.toLocaleString())), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        borderRadius: "var(--radius-md)",
        border: "1px solid rgba(220,38,38,0.35)",
        background: "rgba(220,38,38,0.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--destructive)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x-circle",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Error rows")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        marginTop: 8
      }
    }, vs.error.toLocaleString()))), /*#__PURE__*/React.createElement(Alert, {
      variant: "warning",
      title: "Errors will be skipped",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "info",
        size: 18
      })
    }, "Only valid and warning rows are imported. Error rows are sent to Validation Exceptions for review \u2014 nothing is lost.")) : step === 3 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "Preview import (first rows)"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12.5,
        color: "var(--success)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), "Bijoy \u2192 Unicode conversion applied")), /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, null, "Khatian"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Area"), /*#__PURE__*/React.createElement(TableHead, null, "Type"), /*#__PURE__*/React.createElement(TableHead, null, "Notes (Bengali)"))), /*#__PURE__*/React.createElement(TableBody, null, D.importPreview.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.dag
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.dag), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.khatian), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.area), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.TypeBadge, {
      type: r.type
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)"
      }
    }, r.note)))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        textAlign: "center",
        padding: "12px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 56,
        borderRadius: "var(--radius-lg)",
        background: "rgba(22,163,74,0.12)",
        color: "var(--success)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "database",
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700
      }
    }, "Ready to import ", vs.valid.toLocaleString(), " rows"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted-foreground)",
        maxWidth: 460,
        lineHeight: "var(--leading-normal)"
      }
    }, "This creates a new import batch. ", vs.error.toLocaleString(), " error rows will be skipped and available for review."), /*#__PURE__*/React.createElement(Alert, {
      variant: "default",
      title: "Reversible import",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat",
        size: 18
      })
    }, "This batch can be rolled back from the migration dashboard within 7 days without affecting existing records.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: prev
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }), step === 0 ? "Cancel" : "Back"), step < STEPS.length - 1 ? /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: next
    }, "Continue", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })) : /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: () => onDone()
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Confirm import")));
  }

  // ---------------- 11C: Validation exceptions ----------------
  function ValidationExceptions({
    onBack
  }) {
    const blank = {
      type: "",
      file: "",
      status: ""
    };
    const [f, setF] = React.useState(blank);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const types = Array.from(new Set(D.validationExceptions.map(e => e.type)));
    const files = Array.from(new Set(D.validationExceptions.map(e => e.file)));
    const rows = D.validationExceptions.filter(e => (!f.type || e.type === f.type) && (!f.file || e.file === f.file) && (!f.status || e.status === f.status));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Data Migration",
        href: "#"
      }, {
        label: "Validation Exceptions"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Validation exceptions"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Rows that failed validation. Fix and re-import without losing data."))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export error list"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All error types",
      options: opt(types),
      value: f.type,
      onChange: v => set("type", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 260
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All source files",
      options: opt(files),
      value: f.file,
      onChange: v => set("file", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(["Open", "Warning", "Fixed"]),
      value: f.status,
      onChange: v => set("status", v)
    })), f.type || f.file || f.status ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setF(blank)
    }, "Clear") : null))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "check-circle",
      title: "No exceptions",
      detail: "No rows match these filters \u2014 all clear."
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 1080
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Row no."), /*#__PURE__*/React.createElement(TableHead, null, "Source file"), /*#__PURE__*/React.createElement(TableHead, null, "Field"), /*#__PURE__*/React.createElement(TableHead, null, "Issue"), /*#__PURE__*/React.createElement(TableHead, null, "Current value"), /*#__PURE__*/React.createElement(TableHead, null, "Suggested fix"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 150,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map((e, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, e.row), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        maxWidth: 200,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, e.file), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontWeight: 500
      }
    }, e.field), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: e.status === "Warning" ? "var(--warning)" : e.status === "Fixed" ? "var(--success)" : "var(--destructive)",
        fontWeight: 500
      }
    }, e.issue)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, e.current), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontSize: 13,
        color: "var(--success)",
        fontWeight: 500
      }
    }, e.suggested), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: e.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, e.status === "Fixed" ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      disabled: true
    }, "Fixed") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 4,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 13
    }), "Edit"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13
    }), "Fix"))))))))));
  }

  // ---------------- Coordinator ----------------
  function MigrationModule() {
    const [view, setView] = React.useState("dashboard");
    return view === "dashboard" ? /*#__PURE__*/React.createElement(MigrationDashboard, {
      onImport: () => setView("wizard"),
      onErrors: () => setView("errors")
    }) : view === "wizard" ? /*#__PURE__*/React.createElement(ImportWizard, {
      onBack: () => setView("dashboard"),
      onDone: () => setView("dashboard")
    }) : /*#__PURE__*/React.createElement(ValidationExceptions, {
      onBack: () => setView("dashboard")
    });
  }
  window.MigrationModule = MigrationModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/DataMigration.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/DisputeManagement.jsx
try { (() => {
// DisputeManagement — list, case detail, and update/resolution modal.
// Exposes window.DisputeModule (coordinates the three views).
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Textarea,
    Label,
    Breadcrumb,
    Alert,
    Dialog,
    DialogFooter,
    Separator,
    DropdownMenu,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const O = () => D.disputeOptions;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  function RiskBadge({
    risk
  }) {
    const tone = risk === "High" ? "danger" : risk === "Medium" ? "warning" : "neutral";
    return /*#__PURE__*/React.createElement(K.Pill, {
      tone: tone
    }, risk, " risk");
  }
  function Field({
    label,
    value,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }
  function DocCard({
    doc
  }) {
    const pending = doc.state === "pending";
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: pending ? "var(--muted-foreground)" : "var(--foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: doc.icon,
      size: 18
    })), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: pending ? "Pending" : "Available"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, doc.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 2
      }
    }, doc.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto"
      }
    }, pending ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 14
    }), "Upload") : /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), "View"))));
  }

  // ---------------- 5A: List ----------------
  function DisputeList({
    onOpenCase,
    onCreate
  }) {
    const blank = {
      q: "",
      status: "",
      mouza: "",
      advocate: "",
      court: "",
      risk: "",
      range: "Any time",
      locked: false
    };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.disputes.filter(r => {
      if (f.q) {
        const h = [r.caseNo, r.dag, r.mouza, r.parties].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.status && r.status !== f.status) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.advocate && r.advocate !== f.advocate) return false;
      if (f.court && r.court !== f.court) return false;
      if (f.risk && r.risk !== f.risk) return false;
      if (f.locked && !r.locked) return false;
      return true;
    });
    const chips = [];
    [["q", "Search"], ["status", "Status"], ["mouza", "Mouza"], ["advocate", "Advocate"], ["court", "Court"], ["risk", "Risk"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    if (f.range !== "Any time") chips.push({
      k: "range",
      label: "Date",
      value: f.range
    });
    if (f.locked) chips.push({
      k: "locked",
      label: "View",
      value: "Locked dags only"
    });
    const clearOne = k => set(k, k === "range" ? "Any time" : k === "locked" ? false : "");
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Dispute Management"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Dispute Management"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Track disputed land, court progress, and locked dags.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => set("locked", !f.locked)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 15
    }), "View Locked Dags"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Dispute List"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onCreate
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Create Dispute Case")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, loading ? Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.disputeKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 220px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search dag, mouza, file, case no\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(O().statuses),
      value: f.status,
      onChange: v => set("status", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All mouzas",
      options: opt(D.options.mouzas),
      value: f.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 180
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All advocates",
      options: opt(O().advocates),
      value: f.advocate,
      onChange: v => set("advocate", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Date range",
      options: opt(["Any time", "This month", "Next 30 days", "This year"]),
      value: f.range,
      onChange: v => set("range", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 140
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All risk",
      options: opt(O().risks),
      value: f.risk,
      onChange: v => set("risk", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => clearOne(c.k),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }) : rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No dispute cases match",
      detail: "Adjust or clear your filters to see more cases.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Case No."), /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, null, "Dispute type"), /*#__PURE__*/React.createElement(TableHead, null, "Parties"), /*#__PURE__*/React.createElement(TableHead, null, "Advocate"), /*#__PURE__*/React.createElement(TableHead, null, "Court"), /*#__PURE__*/React.createElement(TableHead, null, "Next hearing"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Risk"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.caseNo,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenCase(r)
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, r.locked ? /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13,
      style: {
        color: "var(--destructive)"
      }
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.caseNo))), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.dag), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, r.type), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, r.parties), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, r.advocate), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap",
        maxWidth: 180,
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, r.court), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        whiteSpace: "nowrap"
      }
    }, r.hearing), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(RiskBadge, {
      risk: r.risk
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenCase(r)
    }, "View")))))))));
  }

  // ---------------- 5B: Case Detail ----------------
  function TimelineItem({
    it,
    last
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-full)",
        background: it.done ? "var(--primary)" : "var(--muted)",
        color: it.done ? "var(--primary-foreground)" : "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        border: it.done ? "none" : "1px dashed var(--border)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 14
    })), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: "var(--border)",
        marginTop: 2,
        minHeight: 18
      }
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, it.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        marginTop: 1
      }
    }, it.detail), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 3,
        fontFamily: "var(--font-mono)"
      }
    }, it.time)));
  }
  function DisputeDetail({
    onBack,
    onUpdate,
    flash
  }) {
    const d = D.disputeDetail;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1180
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Dispute Management",
        href: "#"
      }, {
        label: "Case Detail"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Dispute Case #", d.caseNo), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: d.status
    }), /*#__PURE__*/React.createElement(RiskBadge, {
      risk: d.risk
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onUpdate("update")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "history",
      size: 15
    }), "Update Status"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onUpdate("resolve")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15
    }), "Resolve Dispute"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Case Report"), /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      })),
      items: [{
        label: "Add Hearing Date",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "calendar",
          size: 14
        }),
        onSelect: () => onUpdate("update")
      }, {
        label: "Upload Document",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "upload",
          size: 14
        }),
        onSelect: () => onUpdate("update")
      }]
    })))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: flash.tone === "success" ? "check-circle" : "info",
        size: 18
      })
    }, flash.detail) : null, d.locked ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: "Dag locked due to dispute",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 18
      })
    }, d.dag, " is restricted from sale and Awaz booking until this case is resolved.") : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Case summary")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Case No.",
      value: d.caseNo,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Dag No.",
      value: d.dag,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      value: d.mouza
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Project",
      value: d.project
    }), /*#__PURE__*/React.createElement(Field, {
      label: "File No.",
      value: d.file,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Dispute type",
      value: d.type
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Current status",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: d.status
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Created date",
      value: d.created,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Last updated",
      value: d.updated,
      mono: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Case parties")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Claimant / opponent",
      value: d.parties.claimant
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Donor / seller",
      value: d.parties.donor
    }), /*#__PURE__*/React.createElement(Field, {
      label: "LT / plot holder",
      value: d.parties.holder
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Responsible officer",
      value: d.parties.officer
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Legal details")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Advocate",
      value: d.legal.advocate
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Court",
      value: d.legal.court
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Case number",
      value: d.legal.caseNumber,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Next hearing",
      value: d.legal.nextHearing,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Previous hearing",
      value: d.legal.prevHearing,
      mono: true
    }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Legal notes"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: "var(--leading-relaxed)"
      }
    }, d.legal.notes))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginBottom: 12
      }
    }, "Documents"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, d.documents.map(doc => /*#__PURE__*/React.createElement(DocCard, {
      key: doc.name,
      doc: doc
    })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Case timeline")), /*#__PURE__*/React.createElement(CardContent, null, d.timeline.map((it, i) => /*#__PURE__*/React.createElement(TimelineItem, {
      key: i,
      it: it,
      last: i === d.timeline.length - 1
    })))));
  }

  // ---------------- 5C: Update / Resolution Modal ----------------
  function UpdateModal({
    open,
    mode,
    onClose,
    onDone
  }) {
    const resolve = mode === "resolve";
    const create = mode === "create";
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const title = create ? "Create dispute case" : resolve ? "Resolve dispute" : "Update dispute status";
    const desc = create ? "Open a new dispute case and lock the affected dag." : resolve ? "Record the resolution and request approval to unlock the dag." : "Record a status change, hearing, or document on this case.";
    function primaryClick() {
      if (resolve) setConfirmOpen(true);else onDone({
        tone: "success",
        title: create ? "Dispute case created" : "Case updated",
        detail: create ? "A new case was opened and the dag was locked." : "The status change has been saved to the case file."
      });
    }
    function confirmResolve() {
      setConfirmOpen(false);
      onDone({
        tone: "success",
        title: "Dispute resolved",
        detail: "Resolution submitted for approval; the dag will be unlocked once approved."
      });
    }
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: title,
      description: desc,
      width: 560
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "New status"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select status",
      options: opt(O().statuses)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Hearing date"), /*#__PURE__*/React.createElement(Input, {
      type: "date"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Advocate"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Assign advocate",
      options: opt(O().advocates)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Court"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select court",
      options: opt(O().courts)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Case note"), /*#__PURE__*/React.createElement(Textarea, {
      rows: 3,
      placeholder: "Describe the update or hearing outcome\u2026"
    })), resolve ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        height: 1,
        background: "var(--border)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Resolution type"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select resolution",
      options: opt(O().resolutionTypes)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Approved by"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. GM Land"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Final remarks"), /*#__PURE__*/React.createElement(Textarea, {
      rows: 2,
      placeholder: "Closing remarks for the case record\u2026"
    }))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Supporting document"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 16
    }), "Drag a file here or ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--foreground)",
        fontWeight: 600
      }
    }, "browse")))), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), !resolve ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onDone({
        tone: "success",
        title: "Update saved",
        detail: "Your changes were saved to the case file."
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save update") : null, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: primaryClick
    }, /*#__PURE__*/React.createElement(Icon, {
      name: resolve ? "shield-check" : "check",
      size: 15
    }), resolve ? "Resolve dispute" : create ? "Create case" : "Submit for approval")), /*#__PURE__*/React.createElement(Dialog, {
      open: confirmOpen,
      onClose: () => setConfirmOpen(false),
      title: "Resolve this dispute?",
      description: "This submits the resolution for approval. Once approved, the dag is unlocked and sale/Awaz restrictions are lifted.",
      width: 420
    }, /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setConfirmOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: confirmResolve
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Confirm & resolve"))));
  }

  // ---------------- Coordinator ----------------
  function DisputeModule() {
    const [view, setView] = React.useState("list"); // list | detail
    const [modalMode, setModalMode] = React.useState(null); // null | update | resolve | create
    const [flash, setFlash] = React.useState(null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, view === "list" ? /*#__PURE__*/React.createElement(DisputeList, {
      onOpenCase: () => {
        setFlash(null);
        setView("detail");
      },
      onCreate: () => setModalMode("create")
    }) : /*#__PURE__*/React.createElement(DisputeDetail, {
      onBack: () => setView("list"),
      onUpdate: m => setModalMode(m),
      flash: flash
    }), /*#__PURE__*/React.createElement(UpdateModal, {
      open: !!modalMode,
      mode: modalMode,
      onClose: () => setModalMode(null),
      onDone: f => {
        setModalMode(null);
        setFlash(f);
        if (view === "list") setView("detail");
      }
    }));
  }
  window.DisputeModule = DisputeModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/DisputeManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/InventoryDashboard.jsx
try { (() => {
// InventoryDashboard — KPIs, holding breakdown, alert center, recent
// transactions, quick actions. Exposes window.InventoryDashboard.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    Button,
    Breadcrumb
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  const alertTone = {
    destructive: {
      bg: "rgba(220,38,38,0.07)",
      bd: "rgba(220,38,38,0.22)",
      fg: "var(--destructive)"
    },
    warning: {
      bg: "rgba(217,119,6,0.07)",
      bd: "rgba(217,119,6,0.25)",
      fg: "var(--warning)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }
  function HoldingBreakdown() {
    const segs = D.holdingBreakdown;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Holding breakdown")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: 14,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        background: "var(--muted)",
        gap: 2
      }
    }, segs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      title: `${s.label} ${s.pct}%`,
      style: {
        width: `${s.pct}%`,
        background: s.color
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 18
      }
    }, segs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 3,
        background: s.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 500
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)"
      }
    }, s.area), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        width: 52,
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, s.pct, "%"))))));
  }
  function AlertCenter({
    onNavigate
  }) {
    const alerts = D.alerts;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Alert center"), alerts.length ? /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, alerts.length, " active") : null), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: alerts.length ? "8px 12px 12px" : "0 12px 4px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, alerts.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      compact: true,
      icon: "shield-check",
      title: "All clear",
      detail: "No active alerts on the portfolio right now."
    }) : alerts.map((a, i) => {
      const t = alertTone[a.sev];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        role: "button",
        tabIndex: 0,
        onClick: () => a.go && onNavigate && onNavigate(a.go),
        title: "View details",
        style: {
          display: "flex",
          gap: 11,
          padding: "10px 12px",
          borderRadius: "var(--radius-md)",
          background: t.bg,
          border: `1px solid ${t.bd}`,
          cursor: a.go ? "pointer" : "default"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: t.fg,
          flexShrink: 0,
          marginTop: 1
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: a.icon,
        size: 17
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: 600
        }
      }, a.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: "var(--muted-foreground)",
          marginTop: 1
        }
      }, a.detail)), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11.5,
          color: "var(--muted-foreground)",
          whiteSpace: "nowrap"
        }
      }, a.time), a.go ? /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 15,
        style: {
          color: "var(--muted-foreground)"
        }
      }) : null));
    })));
  }
  function QuickActions({
    onNavigate
  }) {
    const actions = [{
      label: "Add Transaction",
      icon: "plus",
      variant: "default",
      go: "add-transaction"
    }, {
      label: "View Dag Ledger",
      icon: "receipt",
      variant: "outline",
      go: "ledger"
    }, {
      label: "Upload Excel Data",
      icon: "upload",
      variant: "outline",
      go: "migration"
    }, {
      label: "Generate Report",
      icon: "bar-chart",
      variant: "outline",
      go: "reports"
    }];
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Quick actions")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, actions.map(a => /*#__PURE__*/React.createElement(Button, {
      key: a.label,
      variant: a.variant,
      onClick: () => a.go && onNavigate && onNavigate(a.go),
      style: {
        width: "100%",
        justifyContent: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 16
    }), a.label))));
  }
  function RecentTransactions({
    onOpenDag,
    onNavigate,
    loading
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Recent transactions"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => onNavigate && onNavigate("ledger")
    }, "View all ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 14
    }))), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Date"), /*#__PURE__*/React.createElement(TableHead, null, "Type"), /*#__PURE__*/React.createElement(TableHead, null, "Dag no."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Area"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 64,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, D.recentTransactions.map((t, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenDag && onOpenDag(t.dag)
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        whiteSpace: "nowrap"
      }
    }, t.date), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.TypeBadge, {
      type: t.type
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, t.dag)), /*#__PURE__*/React.createElement(TableCell, null, t.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right"
      }
    }, t.area), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: t.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenDag && onOpenDag(t.dag)
    }, "Open"))))))));
  }
  function InventoryDashboard({
    onOpenDag,
    onNavigate
  }) {
    const loading = K.useFakeLoad(650);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Executive Dashboard"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Executive Dashboard"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Portfolio overview as of 12 Jun 2025, 09:20")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("dag-directory")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list-filter",
      size: 15
    }), "Browse dags"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onNavigate && onNavigate("add-transaction")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Transaction")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, loading ? Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.kpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 20,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(HoldingBreakdown, null), /*#__PURE__*/React.createElement(RecentTransactions, {
      onOpenDag: onOpenDag,
      onNavigate: onNavigate,
      loading: loading
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(AlertCenter, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(QuickActions, {
      onNavigate: onNavigate
    }))));
  }
  window.InventoryDashboard = InventoryDashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/InventoryDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/InventoryOverview.jsx
try { (() => {
// InventoryOverview — land stock control hub: holding breakdown, by-project &
// by-mouza tables, risk panel, quick actions. Distinct from Dag Directory
// (which is the searchable dag list). Exposes window.InventoryOverview.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Breadcrumb,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    Tabs,
    TabsList,
    TabsTrigger
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 8,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 3
      }
    }, k.sub)));
  }
  function HoldingBreakdown() {
    const segs = D.holdingBreakdown;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Holding breakdown")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: 14,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        background: "var(--muted)",
        gap: 2
      }
    }, segs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      title: `${s.label} ${s.pct}%`,
      style: {
        width: `${s.pct}%`,
        background: s.color
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 18
      }
    }, segs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 3,
        background: s.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 500
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)"
      }
    }, s.area), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        width: 52,
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, s.pct, "%"))))));
  }
  function RiskPanel({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Risk & attention")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 12px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, D.inventoryRisk.map((r, i) => {
      const t = toneTile[r.tone] || toneTile.neutral;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        role: "button",
        tabIndex: 0,
        onClick: () => r.go && onNavigate && onNavigate(r.go),
        className: "lims-rowlink",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          padding: "9px 10px",
          borderRadius: "var(--radius-md)",
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 30,
          height: 30,
          borderRadius: "var(--radius-md)",
          background: t.bg,
          color: t.fg,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: r.icon,
        size: 15
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13.5,
          fontWeight: 600
        }
      }, r.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--muted-foreground)"
        }
      }, r.detail)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "var(--font-mono)",
          color: t.fg
        }
      }, r.value), /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 15,
        style: {
          color: "var(--muted-foreground)"
        }
      }));
    })));
  }
  function QuickActions({
    onNavigate
  }) {
    const actions = [{
      label: "Open Dag Directory",
      icon: "map-pin",
      variant: "default",
      go: "dag-directory"
    }, {
      label: "Add Transaction",
      icon: "plus",
      variant: "outline",
      go: "add-transaction"
    }, {
      label: "Upload Excel Data",
      icon: "upload",
      variant: "outline",
      go: "migration"
    }, {
      label: "Generate Inventory Report",
      icon: "bar-chart",
      variant: "outline",
      go: "reports"
    }, {
      label: "View Disputed Land",
      icon: "gavel",
      variant: "outline",
      go: "disputes"
    }];
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Quick actions")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, actions.map(a => /*#__PURE__*/React.createElement(Button, {
      key: a.label,
      variant: a.variant,
      onClick: () => a.go && onNavigate && onNavigate(a.go),
      style: {
        width: "100%",
        justifyContent: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 16
    }), a.label))));
  }
  const ar = {
    textAlign: "right",
    fontFamily: "var(--font-mono)",
    fontSize: 13
  };
  function colorCell(v, color) {
    return {
      ...ar,
      color: parseFloat(v) ? color : "var(--muted-foreground)",
      fontWeight: parseFloat(v) ? 600 : 400
    };
  }
  function ByProject({
    onOpenFiltered
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 920
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Project"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Dags"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Total area"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Clean"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Disputed"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Under neg."), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Mutation"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Khajna due"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 130,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, D.inventoryByProject.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.project
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontWeight: 600
      }
    }, r.project), /*#__PURE__*/React.createElement(TableCell, {
      style: ar
    }, r.dags), /*#__PURE__*/React.createElement(TableCell, {
      style: ar
    }, r.area), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.clean, "var(--success)")
    }, r.clean), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.disputed, "var(--destructive)")
    }, r.disputed), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.neg, "var(--warning)")
    }, r.neg), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        ...ar,
        color: r.mutation ? "var(--warning)" : "var(--muted-foreground)"
      }
    }, r.mutation), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        ...ar,
        color: "var(--muted-foreground)"
      }
    }, r.khajna), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenFiltered({
        project: r.project
      })
    }, "View dags"))))))));
  }
  function ByMouza({
    onOpenFiltered
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 760
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Dags"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Total area"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Clean"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Disputed"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Under neg."), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 130,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, D.inventoryByMouza.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.mouza
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontWeight: 600
      }
    }, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: ar
    }, r.dags), /*#__PURE__*/React.createElement(TableCell, {
      style: ar
    }, r.area), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.clean, "var(--success)")
    }, r.clean), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.disputed, "var(--destructive)")
    }, r.disputed), /*#__PURE__*/React.createElement(TableCell, {
      style: colorCell(r.neg, "var(--warning)")
    }, r.neg), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenFiltered({
        mouza: r.mouza
      })
    }, "View dags"))))))));
  }
  function InventoryOverview({
    onNavigate,
    onOpenFiltered
  }) {
    const loading = K.useFakeLoad(550);
    const [tab, setTab] = React.useState("project");
    const goFiltered = onOpenFiltered || (() => onNavigate && onNavigate("dag-directory"));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Inventory Overview"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Inventory Overview"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Land stock position by project, mouza, and bucket. Drill into Dag Directory for individual dags.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("reports")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Inventory report"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onNavigate && onNavigate("dag-directory")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), "Open Dag Directory")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 12
      }
    }, loading ? Array.from({
      length: 7
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.inventoryKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 20,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(HoldingBreakdown, null), /*#__PURE__*/React.createElement(RiskPanel, {
      onNavigate: onNavigate
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 20,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab
    }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "project"
    }, "By project"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "mouza"
    }, "By mouza"))), loading ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 4,
      cols: 8
    }))) : tab === "project" ? /*#__PURE__*/React.createElement(ByProject, {
      onOpenFiltered: goFiltered
    }) : /*#__PURE__*/React.createElement(ByMouza, {
      onOpenFiltered: goFiltered
    })), /*#__PURE__*/React.createElement(QuickActions, {
      onNavigate: onNavigate
    })));
  }
  window.InventoryOverview = InventoryOverview;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/InventoryOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/KhajnaManagement.jsx
try { (() => {
// KhajnaManagement — Khajna/land-tax dashboard, dag tax detail, and
// add-payment modal. Exposes window.KhajnaModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Textarea,
    Label,
    Breadcrumb,
    Alert,
    Dialog,
    DialogFooter,
    DropdownMenu,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const KO = () => D.khajnaOptions;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  function Field({
    label,
    value,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }
  function ReceiptCell({
    has
  }) {
    return has ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--success)",
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }), "On file") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--destructive)",
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-circle",
      size: 14
    }), "Missing");
  }

  // ---------------- Add payment modal ----------------
  function PaymentModal({
    open,
    onClose,
    onDone
  }) {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: "Add khajna payment",
      description: "Record a land-tax payment against this dag for a Bengali year.",
      width: 540
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Bengali year"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "e.g. 1432",
      options: opt(KO().years)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "English date"), /*#__PURE__*/React.createElement(Input, {
      type: "date"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Amount"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "\u09F3 0"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Receipt number"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. RCP-32-1184"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Upload receipt"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 16
    }), "Drag receipt scan here or ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--foreground)",
        fontWeight: 600
      }
    }, "browse"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Notes"), /*#__PURE__*/React.createElement(Textarea, {
      rows: 2,
      placeholder: "Optional notes for this payment\u2026"
    }))), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: () => onDone({
        tone: "success",
        title: "Payment recorded",
        detail: "The khajna payment and receipt were saved to the dag record."
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Save payment")));
  }

  // ---------------- 7A: Dashboard ----------------
  function KhajnaList({
    onOpenDag,
    onAdd
  }) {
    const blank = {
      q: "",
      year: "",
      status: "",
      mouza: "",
      project: "",
      range: "Any time"
    };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.khajnaRows.filter(r => {
      if (f.q) {
        const h = [r.dag, r.mouza, r.khatian].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.status && r.status !== f.status) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      return true;
    });
    const overdue = D.khajnaRows.filter(r => r.status === "Overdue").length;
    const missing = D.khajnaRows.filter(r => r.status !== "Due" && !r.receipt && r.status === "Paid").length;
    const chips = [];
    [["q", "Search"], ["year", "Year"], ["status", "Status"], ["mouza", "Mouza"], ["project", "Project"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    if (f.range !== "Any time") chips.push({
      k: "range",
      label: "Due",
      value: f.range
    });
    const clearOne = k => set(k, k === "range" ? "Any time" : "");
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Khajna"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Khajna / land tax"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Land-tax payment status by dag and Bengali year. Current year: 1432 BS.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Khajna Due Report"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onAdd
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Payment")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, loading ? Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.khajnaKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), overdue > 0 ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: `${overdue} dags have khajna overdue past 1st Boishakh`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 18
      })
    }, "Clear these before further sale or Awaz booking. Overdue khajna blocks mutation processing.") : null, missing > 0 ? /*#__PURE__*/React.createElement(Alert, {
      variant: "warning",
      title: `${missing} paid dags are missing a receipt on file`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 18
      })
    }, "Upload the scanned khajna receipt to complete these records.") : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 220px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search dag, mouza, khatian, file no\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 140
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Bengali year",
      options: opt(KO().years),
      value: f.year,
      onChange: v => set("year", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(KO().statuses),
      value: f.status,
      onChange: v => set("status", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All mouzas",
      options: opt(D.options.mouzas),
      value: f.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All projects",
      options: opt(D.options.projects),
      value: f.project,
      onChange: v => set("project", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => clearOne(c.k),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }) : rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No khajna records match",
      detail: "Adjust or clear your filters to see more dags.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, null, "Khatian"), /*#__PURE__*/React.createElement(TableHead, null, "Paid up to"), /*#__PURE__*/React.createElement(TableHead, null, "Current year"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Due amount"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Receipt"), /*#__PURE__*/React.createElement(TableHead, null, "Last payment"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.dag,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenDag(r)
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.dag)), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.khatian), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.paidUpTo, " BS"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.curYear, " BS"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right",
        fontWeight: r.due !== "৳ 0" ? 700 : 400,
        color: r.status === "Overdue" ? "var(--destructive)" : "var(--foreground)"
      }
    }, r.due), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(ReceiptCell, {
      has: r.receipt
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, r.lastPaid), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenDag(r)
    }, "View")))))))));
  }

  // ---------------- 7B: Dag tax detail ----------------
  function KhajnaDetail({
    onBack,
    onAdd,
    flash
  }) {
    const d = D.khajnaDetail;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1180
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Khajna",
        href: "#"
      }, {
        label: "Dag Tax Detail"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Khajna Detail"), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: d.status
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onAdd
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Payment"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Mark as Paid"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Khajna Report"), /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      })),
      items: [{
        label: "Upload Receipt",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "upload",
          size: 14
        }),
        onSelect: onAdd
      }]
    })))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle",
        size: 18
      })
    }, flash.detail) : null, d.status === "Overdue" ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: `Khajna overdue — paid only up to ${d.paidUpTo} BS`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 18
      })
    }, d.totalDue, " is outstanding for this dag. Clear before further transactions or mutation.") : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Dag summary")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Dag No.",
      value: d.dag,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      value: d.mouza
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Khatian",
      value: d.khatian,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Project",
      value: d.project
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Paid up to (BS)",
      value: `${d.paidUpTo} BS`,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Current status",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: d.status
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Total due",
      value: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--destructive)",
          fontWeight: 700,
          fontFamily: "var(--font-mono)"
        }
      }, d.totalDue)
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Last payment",
      value: d.lastPaid,
      mono: true
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Payment history"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onAdd
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Payment")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: "4px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Bengali year"), /*#__PURE__*/React.createElement(TableHead, null, "English date"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Amount paid"), /*#__PURE__*/React.createElement(TableHead, null, "Receipt No."), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "Uploaded by"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, d.history.map((h, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, h.year, " BS")), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, h.date), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right"
      }
    }, h.amount), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, h.receipt), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: h.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)"
      }
    }, h.by), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, h.status === "Paid" ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })) : /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: onAdd
    }, "Pay")))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginBottom: 12
      }
    }, "Receipts on file"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, d.receipts.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.no
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "receipt",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        fontFamily: "var(--font-mono)"
      }
    }, r.no), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)"
      }
    }, r.year, " \xB7 uploaded ", r.uploaded)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      style: {
        height: 32,
        width: 32
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }))))))));
  }

  // ---------------- Coordinator ----------------
  function KhajnaModule() {
    const [view, setView] = React.useState("list");
    const [modal, setModal] = React.useState(false);
    const [flash, setFlash] = React.useState(null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, view === "list" ? /*#__PURE__*/React.createElement(KhajnaList, {
      onOpenDag: () => {
        setFlash(null);
        setView("detail");
      },
      onAdd: () => setModal(true)
    }) : /*#__PURE__*/React.createElement(KhajnaDetail, {
      onBack: () => setView("list"),
      onAdd: () => setModal(true),
      flash: flash
    }), /*#__PURE__*/React.createElement(PaymentModal, {
      open: modal,
      onClose: () => setModal(false),
      onDone: f => {
        setModal(false);
        setFlash(f);
        if (view === "list") setView("detail");
      }
    }));
  }
  window.KhajnaModule = KhajnaModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/KhajnaManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/MutationManagement.jsx
try { (() => {
// MutationManagement — Kharij/Mutation pipeline dashboard, case detail, and
// stage-update modal. Exposes window.MutationModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Textarea,
    Label,
    Breadcrumb,
    Alert,
    Dialog,
    DialogFooter,
    DropdownMenu,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const MO = () => D.mutationOptions;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const HAPPY = ["Not Started", "Submitted", "Under Review", "Hearing", "Approved"];
  function RiskBadge({
    risk
  }) {
    const tone = risk === "High" ? "danger" : risk === "Medium" ? "warning" : "neutral";
    return /*#__PURE__*/React.createElement(K.Pill, {
      tone: tone
    }, risk);
  }
  function PendingCell({
    days
  }) {
    const color = days > 30 ? "var(--destructive)" : days > 20 ? "var(--warning)" : "var(--muted-foreground)";
    const weight = days > 20 ? 700 : 500;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color,
        fontWeight: weight
      }
    }, days, " d");
  }
  function slaBadge(days) {
    if (days > 30) return /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, "SLA breached");
    if (days > 20) return /*#__PURE__*/React.createElement(K.Pill, {
      tone: "warning"
    }, "Due soon");
    return /*#__PURE__*/React.createElement(K.Pill, {
      tone: "success"
    }, "Within SLA");
  }
  function Field({
    label,
    value,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 15
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 8,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 3
      }
    }, k.sub)));
  }
  function DocCard({
    doc
  }) {
    const pending = doc.state === "pending";
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: pending ? "var(--muted-foreground)" : "var(--foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: doc.icon,
      size: 18
    })), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: pending ? "Pending" : "Available"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, doc.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        marginTop: 2
      }
    }, doc.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto"
      }
    }, pending ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 14
    }), "Upload") : /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), "View"))));
  }
  function StageStepper({
    stage
  }) {
    const rejected = stage === "Rejected";
    const steps = rejected ? ["Not Started", "Submitted", "Under Review", "Hearing", "Rejected"] : HAPPY;
    const curIdx = rejected ? steps.length - 1 : HAPPY.indexOf(stage);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start"
      }
    }, steps.map((s, i) => {
      const done = i <= curIdx;
      const isRej = rejected && i === steps.length - 1;
      const bg = isRej ? "var(--destructive)" : done ? "var(--primary)" : "var(--muted)";
      const fg = isRej || done ? "#fff" : "var(--muted-foreground)";
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: s
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
          width: 110
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 32,
          height: 32,
          borderRadius: "var(--radius-full)",
          background: bg,
          color: fg,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
          border: done || isRej ? "none" : "1px dashed var(--border)"
        }
      }, isRej ? /*#__PURE__*/React.createElement(Icon, {
        name: "x",
        size: 15
      }) : done ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15
      }) : i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: i === curIdx ? 700 : 500,
          color: i === curIdx ? "var(--foreground)" : "var(--muted-foreground)",
          textAlign: "center",
          lineHeight: 1.3
        }
      }, s)), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 2,
          background: i < curIdx ? "var(--primary)" : "var(--border)",
          marginTop: 15,
          minWidth: 16
        }
      }) : null);
    }));
  }

  // ---------------- 6A: Pipeline dashboard ----------------
  function MutationList({
    onOpenFile,
    onAdd
  }) {
    const blank = {
      q: "",
      stage: "",
      status: "",
      advocate: "",
      pending: "Any",
      risk: ""
    };
    const [f, setF] = React.useState(blank);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.mutations.filter(r => {
      if (f.q) {
        const h = [r.file, r.dag, r.khatian, r.mouza].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.stage && r.stage !== f.stage) return false;
      if (f.status && r.status !== f.status) return false;
      if (f.advocate && r.advocate !== f.advocate) return false;
      if (f.risk && r.risk !== f.risk) return false;
      if (f.pending === "0–15 days" && r.pending > 15) return false;
      if (f.pending === "16–30 days" && (r.pending < 16 || r.pending > 30)) return false;
      if (f.pending === "30+ days" && r.pending <= 30) return false;
      return true;
    });
    const raceCount = D.mutations.filter(r => r.race).length;
    const priority = [...D.mutations].filter(r => r.stage !== "Approved" && r.stage !== "Rejected").sort((a, b) => b.pending - a.pending).slice(0, 3);
    const chips = [];
    [["q", "Search"], ["stage", "Stage"], ["status", "Status"], ["advocate", "Advocate"], ["risk", "Risk"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    if (f.pending !== "Any") chips.push({
      k: "pending",
      label: "Pending",
      value: f.pending
    });
    const clearOne = k => set(k, k === "pending" ? "Any" : "");
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Kharij / Mutation"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Kharij / Mutation pipeline"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Track namjari applications, stages, and SLA across AC Land offices.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-signature",
      size: 15
    }), "Generate Forwarding Letter"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Pipeline Report"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: onAdd
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Mutation File")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 14
      }
    }, loading ? Array.from({
      length: 8
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.mutationKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), raceCount > 0 ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: `${raceCount} files have a competing mutation (race warning)`,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 18
      })
    }, "Another party has applied to mutate the same dag. Prioritise these files and notify the AC Land office.") : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(CardTitle, null, "Priority pending"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)"
      }
    }, "Longest-waiting open files")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12
      }
    }, priority.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.file,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 12,
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        cursor: "pointer"
      },
      onClick: () => onOpenFile(r)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "var(--radius-md)",
        background: r.pending > 30 ? "rgba(220,38,38,0.10)" : "rgba(217,119,6,0.12)",
        color: r.pending > 30 ? "var(--destructive)" : "var(--warning)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "var(--font-mono)"
      }
    }, r.file), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)"
      }
    }, r.dag, " \xB7 ", r.mouza)), /*#__PURE__*/React.createElement(PendingCell, {
      days: r.pending
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 220px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search dag, file no., khatian, mouza\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 156
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All stages",
      options: opt(MO().stages),
      value: f.stage,
      onChange: v => set("stage", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(MO().statuses),
      value: f.status,
      onChange: v => set("status", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Pending days",
      options: opt(MO().pendingBuckets),
      value: f.pending,
      onChange: v => set("pending", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 140
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All risk",
      options: opt(["High", "Medium", "Low"]),
      value: f.risk,
      onChange: v => set("risk", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => clearOne(c.k),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }) : rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No mutation files match",
      detail: "Adjust or clear your filters to see more files.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "File No."), /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, null, "Khatian"), /*#__PURE__*/React.createElement(TableHead, null, "Batch"), /*#__PURE__*/React.createElement(TableHead, null, "Stage"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Pending"), /*#__PURE__*/React.createElement(TableHead, null, "Advocate"), /*#__PURE__*/React.createElement(TableHead, null, "AC Land office"), /*#__PURE__*/React.createElement(TableHead, null, "Risk"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.file,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenFile(r)
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, r.race ? /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 13,
      style: {
        color: "var(--destructive)"
      }
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.file))), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.dag), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.khatian), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.batch), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.stage
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(PendingCell, {
      days: r.pending
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, r.advocate), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, r.ac), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(RiskBadge, {
      risk: r.risk
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenFile(r)
    }, "View")))))))));
  }

  // ---------------- 6B: File detail ----------------
  function MutationDetail({
    onBack,
    onUpdate,
    flash
  }) {
    const d = D.mutationDetail;
    const rejected = d.stage === "Rejected";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1180
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Kharij / Mutation",
        href: "#"
      }, {
        label: "File Detail"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Mutation File Detail"), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: d.stage
    }), slaBadge(d.pending)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onUpdate("stage")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "history",
      size: 15
    }), "Update Stage"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-signature",
      size: 15
    }), "Generate Forwarding Letter"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Mutation Report"), /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      })),
      items: [{
        label: "Add Hearing Date",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "calendar",
          size: 14
        }),
        onSelect: () => onUpdate("stage")
      }, {
        label: "Capture Rejection Reason",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "x-circle",
          size: 14
        }),
        onSelect: () => onUpdate("rejection")
      }, {
        label: "Upload Document",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "upload",
          size: 14
        }),
        onSelect: () => onUpdate("stage")
      }]
    })))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: flash.tone === "success" ? "check-circle" : "info",
        size: 18
      })
    }, flash.detail) : null, d.race ? /*#__PURE__*/React.createElement(Alert, {
      variant: "destructive",
      title: "Race warning \u2014 competing mutation detected",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 18
      })
    }, "Another party has filed to mutate ", d.dag, ". Prioritise this file and flag it to the AC Land office before the hearing.") : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "File summary")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "File No.",
      value: d.file,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Dag No.",
      value: d.dag,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      value: d.mouza
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Khatian",
      value: d.khatian,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Project",
      value: d.project
    }), /*#__PURE__*/React.createElement(Field, {
      label: "AC Land office",
      value: d.ac
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Current stage",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: d.stage
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Pending days",
      value: /*#__PURE__*/React.createElement(PendingCell, {
        days: d.pending
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Submission batch",
      value: d.batch,
      mono: true
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Workflow stage")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        paddingTop: 8,
        paddingBottom: 20,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(StageStepper, {
      stage: d.stage
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Application details")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Submission date",
      value: d.submission,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Hearing date",
      value: d.hearing,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Assigned advocate",
      value: d.advocate
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Next action",
      value: d.nextAction
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, "Notes"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: "var(--leading-relaxed)"
      }
    }, d.notes)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Rejection reason")), /*#__PURE__*/React.createElement(CardContent, null, rejected && d.rejectionReason ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, d.rejectionReason), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        color: "var(--muted-foreground)",
        lineHeight: "var(--leading-relaxed)"
      }
    }, "Resolve the issue above and resubmit the file to the AC Land office.")) : /*#__PURE__*/React.createElement(K.EmptyState, {
      compact: true,
      icon: "shield-check",
      title: "No rejection recorded",
      detail: "This file has not been rejected. Capture a reason here if it is returned.",
      actionLabel: "Capture rejection reason",
      onAction: () => onUpdate("rejection")
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginBottom: 12
      }
    }, "Documents"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, d.documents.map(doc => /*#__PURE__*/React.createElement(DocCard, {
      key: doc.name,
      doc: doc
    })))));
  }

  // ---------------- Stage / rejection modal ----------------
  function StageModal({
    open,
    mode,
    onClose,
    onDone
  }) {
    const [stage, setStage] = React.useState("");
    const showReject = mode === "rejection" || stage === "Rejected";
    React.useEffect(() => {
      if (open) setStage(mode === "rejection" ? "Rejected" : "");
    }, [open, mode]);
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: mode === "rejection" ? "Capture rejection reason" : "Update mutation stage",
      description: mode === "rejection" ? "Record why the AC Land office returned this file." : "Move the file to its next workflow stage and log the update.",
      width: 540
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "New stage"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select stage",
      options: opt(MO().stages),
      value: stage,
      onChange: setStage
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Hearing date"), /*#__PURE__*/React.createElement(Input, {
      type: "date"
    })), showReject ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Rejection reason"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select reason",
      options: opt(MO().rejectionReasons)
    })) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Notes"), /*#__PURE__*/React.createElement(Textarea, {
      rows: 3,
      placeholder: "Add context for this stage change\u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Supporting document"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 16
    }), "Drag a file here or ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--foreground)",
        fontWeight: 600
      }
    }, "browse")))), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: () => onDone({
        tone: "success",
        title: mode === "rejection" ? "Rejection recorded" : "Stage updated",
        detail: mode === "rejection" ? "The rejection reason was saved to the file." : "The mutation stage change has been logged."
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Save update")));
  }

  // ---------------- Coordinator ----------------
  function MutationModule() {
    const [view, setView] = React.useState("list");
    const [modalMode, setModalMode] = React.useState(null);
    const [flash, setFlash] = React.useState(null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, view === "list" ? /*#__PURE__*/React.createElement(MutationList, {
      onOpenFile: () => {
        setFlash(null);
        setView("detail");
      },
      onAdd: () => setModalMode("stage")
    }) : /*#__PURE__*/React.createElement(MutationDetail, {
      onBack: () => setView("list"),
      onUpdate: m => setModalMode(m),
      flash: flash
    }), /*#__PURE__*/React.createElement(StageModal, {
      open: !!modalMode,
      mode: modalMode,
      onClose: () => setModalMode(null),
      onDone: f => {
        setModalMode(null);
        setFlash(f);
        if (view === "list") setView("detail");
      }
    }));
  }
  window.MutationModule = MutationModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/MutationManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/ReportsManagement.jsx
try { (() => {
// ReportsModule — Reports library, report viewer (Dag-wise Ledger), and
// export preview dialog. Exposes window.ReportsModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Breadcrumb,
    Logo,
    Dialog,
    DialogFooter,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const CAT_ICON = {
    "Inventory & Ledger": "layers",
    "Legal & Dispute": "gavel",
    "Khajna & Mutation": "banknote",
    "Operational": "bar-chart",
    "Audit": "history"
  };

  // ---------------- 8A: Library ----------------
  function ReportsLibrary({
    onOpen
  }) {
    const [q, setQ] = React.useState("");
    const [cat, setCat] = React.useState("All");
    const cats = ["All", ...D.reportCategories];
    const rows = D.reports.filter(r => {
      if (cat !== "All" && r.cat !== cat) return false;
      if (q && !`${r.name} ${r.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Reports"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Reports"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Generate, preview, and export land-record reports.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 300,
        maxWidth: "40vw"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search reports\u2026",
      value: q,
      onChange: e => setQ(e.target.value),
      style: {
        paddingLeft: 34
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, cats.map(c => {
      const on = cat === c;
      return /*#__PURE__*/React.createElement("button", {
        key: c,
        onClick: () => setCat(c),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          padding: "7px 13px",
          borderRadius: "var(--radius-full)",
          border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`,
          background: on ? "var(--primary)" : "var(--background)",
          color: on ? "var(--primary-foreground)" : "var(--foreground)",
          fontSize: 13,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: "var(--font-sans)"
        }
      }, c !== "All" ? /*#__PURE__*/React.createElement(Icon, {
        name: CAT_ICON[c],
        size: 14
      }) : null, c);
    })), rows.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No reports match",
      detail: "Try another search term or category.",
      actionLabel: "Clear search",
      onAction: () => {
        setQ("");
        setCat("All");
      }
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.name
    }, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: "var(--primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: CAT_ICON[r.cat],
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 600,
        lineHeight: 1.3
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--muted-foreground)",
        marginTop: 3,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        fontWeight: 600
      }
    }, r.cat))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "var(--muted-foreground)",
        lineHeight: "var(--leading-normal)",
        flex: 1
      }
    }, r.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      style: {
        flex: 1
      },
      onClick: () => onOpen(r)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 14
    }), "View"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onOpen(r, true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    }), "Export")))))));
  }

  // ---------------- 8B: Viewer (Dag-wise Ledger) ----------------
  function num(v) {
    return parseFloat(v) || 0;
  }
  function ReportViewer({
    report,
    onBack,
    onExport
  }) {
    const [f, setF] = React.useState({
      range: "FY 2024–25",
      project: "",
      mouza: "",
      dag: "",
      file: "",
      deedType: "",
      bucket: "",
      status: ""
    });
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.dagLedgerReport.filter(r => (!f.mouza || r.mouza === f.mouza) && (!f.dag || r.dag.toLowerCase().includes(f.dag.toLowerCase())));
    const totals = rows.reduce((a, r) => {
      ["govArea", "pSaf", "sSaf", "awazIn", "awazOut", "clean", "disputed", "neg"].forEach(k => {
        a[k] = (a[k] || 0) + num(r[k]);
      });
      return a;
    }, {});
    const fmt = n => n.toFixed(2);
    const chips = [];
    chips.push({
      k: "range",
      label: "Period",
      value: f.range
    });
    [["mouza", "Mouza"], ["dag", "Dag"], ["project", "Project"], ["bucket", "Bucket"], ["status", "Status"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    const clearOne = k => set(k, k === "range" ? "FY 2024–25" : "");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Reports",
        href: "#"
      }, {
        label: report.name
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, report.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 12.5,
        color: "var(--muted-foreground)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(K.Pill, {
      tone: "success"
    }, "Ready")), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8
      }
    }, "Last generated 30 Jun 2026, 10:14 \xB7 ", rows.length, " dags")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onExport
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 15
    }), "Export PDF"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onExport
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onExport
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "printer",
      size: 15
    }), "Print")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Date range"), /*#__PURE__*/React.createElement(Select, {
      options: opt(["FY 2024–25", "FY 2023–24", "Last 90 days", "All time"]),
      value: f.range,
      onChange: v => set("range", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Project"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All projects",
      options: opt(D.options.projects),
      value: f.project,
      onChange: v => set("project", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Mouza"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All mouzas",
      options: opt(D.options.mouzas),
      value: f.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Dag No."), /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. DAG-1184",
      value: f.dag,
      onChange: e => set("dag", e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "File No."), /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. F-2025-118",
      value: f.file,
      onChange: e => set("file", e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Deed type"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All deed types",
      options: opt(D.options.deedTypes),
      value: f.deedType,
      onChange: v => set("deedType", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Bucket"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All buckets",
      options: opt(D.options.buckets),
      value: f.bucket,
      onChange: v => set("bucket", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--muted-foreground)"
      }
    }, "Status"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(D.options.statuses),
      value: f.status,
      onChange: v => set("status", v)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Applied filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), c.k !== "range" ? /*#__PURE__*/React.createElement("button", {
      onClick: () => clearOne(c.k),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })) : null))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "table",
      title: "No rows for these filters",
      detail: "Adjust the filter panel to populate the report."
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 1280
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, {
      style: {
        position: "sticky",
        left: 0,
        background: "var(--muted)",
        zIndex: 1
      }
    }, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Govt. area"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Purch. Saf Kobla"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Purch. Power"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Sale Saf Kobla"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Sale Power"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Awaz in"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Awaz out"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Clean bal."), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Disputed bal."), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Under neg."), /*#__PURE__*/React.createElement(TableHead, null, "Khajna"), /*#__PURE__*/React.createElement(TableHead, null, "Mutation"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(r => /*#__PURE__*/React.createElement(TableRow, {
      key: r.dag
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        position: "sticky",
        left: 0,
        background: "var(--card)",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13
      }
    }, r.dag), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.govArea), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.pSaf), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.pPower), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.sSaf), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.sPower), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.awazIn), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13
      }
    }, r.awazOut), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--success)",
        fontWeight: 600
      }
    }, r.clean), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: num(r.disputed) ? "var(--destructive)" : "var(--muted-foreground)",
        fontWeight: num(r.disputed) ? 600 : 400
      }
    }, r.disputed), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: num(r.neg) ? "var(--warning)" : "var(--muted-foreground)",
        fontWeight: num(r.neg) ? 600 : 400
      }
    }, r.neg), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.khajna
    })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.mutation
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      }
    }, "Open")))), /*#__PURE__*/React.createElement(TableRow, {
      style: {
        background: "var(--muted)",
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        position: "sticky",
        left: 0,
        background: "var(--muted)",
        fontWeight: 700
      }
    }, "Total"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)"
      }
    }, rows.length, " dags"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, fmt(totals.govArea)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, fmt(totals.pSaf)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, "0.00"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, fmt(totals.sSaf)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, "0.00"), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, fmt(totals.awazIn)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700
      }
    }, fmt(totals.awazOut)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        color: "var(--success)"
      }
    }, fmt(totals.clean)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        color: "var(--destructive)"
      }
    }, fmt(totals.disputed)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        color: "var(--warning)"
      }
    }, fmt(totals.neg)), /*#__PURE__*/React.createElement(TableCell, {
      colSpan: 3
    })))))));
  }

  // ---------------- 8C: Export preview ----------------
  function ExportPreview({
    open,
    report,
    onClose
  }) {
    if (!report) return null;
    const rows = D.dagLedgerReport.slice(0, 6);
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: "Export preview",
      description: "Review the document before downloading or printing.",
      width: 860
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 28,
        maxHeight: "56vh",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "2px solid var(--primary)",
        paddingBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--muted-foreground)",
        marginTop: 8
      }
    }, "Land Inventory Management System")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        fontSize: 11.5,
        color: "var(--muted-foreground)",
        lineHeight: 1.6
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Ref:"), " RPT-2026-0412"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Generated:"), " 30 Jun 2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "20px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: "-0.01em"
      }
    }, report.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, "Period: FY 2024\u201325 \xB7 All mouzas \xB7 All projects")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11.5,
        color: "var(--muted-foreground)",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Prepared by:"), " S. Rahman, GM Land"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--foreground)"
      }
    }, "Office:"), " Reliance Land Cell, Dhaka")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: 11.5
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: "var(--muted)"
      }
    }, ["Dag No.", "Mouza", "Govt. area", "Clean", "Disputed", "Under neg.", "Khajna", "Mutation"].map(h => /*#__PURE__*/React.createElement("th", {
      key: h,
      style: {
        textAlign: h === "Dag No." || h === "Mouza" || h === "Khajna" || h === "Mutation" ? "left" : "right",
        padding: "7px 9px",
        borderBottom: "1px solid var(--border)",
        fontWeight: 600
      }
    }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
      key: r.dag
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontWeight: 600
      }
    }, r.dag), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)"
      }
    }, r.mouza), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)",
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, r.govArea), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)",
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, r.clean), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)",
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, r.disputed), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)",
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, r.neg), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)"
      }
    }, r.khajna), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 9px",
        borderBottom: "1px solid var(--border)"
      }
    }, r.mutation))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 48,
        gap: 24
      }
    }, ["Prepared by", "Checked by", "Approved by"].map(s => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        flex: 1,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--foreground)",
        paddingTop: 6,
        fontSize: 11.5,
        color: "var(--muted-foreground)"
      }
    }, s))))), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 15
    }), "Export PDF")));
  }

  // ---------------- Coordinator ----------------
  function ReportsModule() {
    const [report, setReport] = React.useState(null); // selected for viewer
    const [exportFor, setExportFor] = React.useState(null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, report ? /*#__PURE__*/React.createElement(ReportViewer, {
      report: report,
      onBack: () => setReport(null),
      onExport: () => setExportFor(report)
    }) : /*#__PURE__*/React.createElement(ReportsLibrary, {
      onOpen: (r, exp) => {
        if (exp) setExportFor(r);else setReport(r);
      }
    }), /*#__PURE__*/React.createElement(ExportPreview, {
      open: !!exportFor,
      report: exportFor,
      onClose: () => setExportFor(null)
    }));
  }
  window.ReportsModule = ReportsModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/ReportsManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/Settings.jsx
try { (() => {
// SettingsModule — Notification center, System settings, Security settings.
// Exposes window.NotificationCenter and window.SettingsModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Label,
    Switch,
    Breadcrumb,
    Alert,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Separator
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const CAT_ICON = {
    Dispute: "gavel",
    Mutation: "file-signature",
    Khajna: "banknote",
    Approval: "check-circle",
    Audit: "history",
    "Data Import": "database",
    System: "settings"
  };

  // ---------------- 12A: Notification center ----------------
  function NotificationCenter() {
    const [filter, setFilter] = React.useState("All");
    const [items, setItems] = React.useState(D.notifications);
    const filters = ["All", "Unread", "High Priority", "Dispute", "Mutation", "Khajna"];
    const rows = items.filter(n => {
      if (filter === "All") return true;
      if (filter === "Unread") return n.unread;
      if (filter === "High Priority") return n.priority === "High";
      return n.cat === filter;
    });
    const unread = items.filter(n => n.unread).length;
    const markAll = () => setItems(it => it.map(n => ({
      ...n,
      unread: false
    })));
    const toggleRead = id => setItems(it => it.map(n => n.id === id ? {
      ...n,
      unread: false
    } : n));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 920
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Notifications"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Notification center"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, unread, " unread \xB7 system alerts and reminders.")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: markAll,
      disabled: unread === 0
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }), "Mark all as read"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, filters.map(c => {
      const on = filter === c;
      return /*#__PURE__*/React.createElement("button", {
        key: c,
        onClick: () => setFilter(c),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          padding: "7px 13px",
          borderRadius: "var(--radius-full)",
          border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`,
          background: on ? "var(--primary)" : "var(--background)",
          color: on ? "var(--primary-foreground)" : "var(--foreground)",
          fontSize: 13,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: "var(--font-sans)"
        }
      }, c, c === "Unread" && unread ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 18,
          height: 18,
          padding: "0 5px",
          borderRadius: "var(--radius-full)",
          background: on ? "rgba(255,255,255,0.25)" : "var(--destructive)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700
        }
      }, unread) : null);
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "bell",
      title: "Nothing here",
      detail: "No notifications match this filter."
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, rows.map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        display: "flex",
        gap: 14,
        padding: "16px 18px",
        borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
        background: n.unread ? "rgba(30,41,59,0.025)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: n.priority === "High" ? "var(--destructive)" : "var(--foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, n.unread ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--brand)",
        flexShrink: 0
      }
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        fontWeight: 600
      }
    }, n.title), /*#__PURE__*/React.createElement(K.Pill, {
      tone: "neutral"
    }, n.cat), n.priority === "High" ? /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, "High") : n.priority === "Medium" ? /*#__PURE__*/React.createElement(K.Pill, {
      tone: "warning"
    }, "Medium") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        marginTop: 3
      }
    }, n.msg), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)"
      }
    }, n.time), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 26,
        padding: "0 8px"
      }
    }, "View related record", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 13
    })), n.unread ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 26,
        padding: "0 8px"
      },
      onClick: () => toggleRead(n.id)
    }, "Mark read") : null))))))));
  }

  // ---------------- Settings shared bits ----------------
  function SettingRow({
    title,
    desc,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "14px 0",
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 500
      }
    }, title), desc ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 2
      }
    }, desc) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0
      }
    }, children));
  }
  function SettingsCard({
    icon,
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        color: "var(--primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 16
    })), /*#__PURE__*/React.createElement(CardTitle, null, title)), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        paddingTop: 0
      }
    }, children));
  }

  // ---------------- 12B + 12C: Settings ----------------
  function SettingsModule() {
    const [tab, setTab] = React.useState("system");
    const [flash, setFlash] = React.useState(false);
    const save = () => {
      setFlash(true);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 900
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Settings"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Settings"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "System configuration and security policy.")), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: save
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save changes"))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: "success",
      title: "Settings saved",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle",
        size: 18
      })
    }, "Your changes have been applied and recorded in the audit log.") : null, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab
    }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "system"
    }, "System settings"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "security"
    }, "Security settings")), /*#__PURE__*/React.createElement(TabsContent, {
      value: "system"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "building",
      title: "Company information"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Company name"), /*#__PURE__*/React.createElement(Input, {
      defaultValue: "Reliance Land Holdings Ltd."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Address"), /*#__PURE__*/React.createElement(Input, {
      defaultValue: "Reliance Land Cell, Dhaka"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Logo"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    }), "Upload logo")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Signature image"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1.5px dashed var(--border)",
        borderRadius: "var(--radius-md)",
        padding: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    }), "Upload signature")))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "file-text",
      title: "Report settings"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Default export format",
      desc: "Format used when exporting a report."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["PDF", "Excel", "Both"]),
      defaultValue: "PDF"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "PDF header",
      desc: "Show company letterhead on every report."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Signature panel",
      desc: "Prepared / Checked / Approved signature blocks."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Report footer text"), /*#__PURE__*/React.createElement(Input, {
      defaultValue: "Confidential \u2014 Reliance Land Records"
    }))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "map",
      title: "Land data settings"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Default area unit"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["Bigha", "Katha", "Decimal", "Acre"]),
      defaultValue: "Bigha"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Decimal precision"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["1", "2", "3"]),
      defaultValue: "2"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Bengali numerals",
      desc: "Display numbers in Bengali script where applicable."
    }, /*#__PURE__*/React.createElement(Switch, null)), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Default project type"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(D.options.projects),
      defaultValue: D.options.projects[1]
    })))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "bell",
      title: "Notification settings"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Email alerts",
      desc: "Send important alerts by email."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "In-app alerts",
      desc: "Show alerts in the notification center."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Khajna reminder (days before due)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120
      }
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "30"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Mutation SLA (days)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120
      }
    }, /*#__PURE__*/React.createElement(Input, {
      defaultValue: "30"
    })))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "database",
      title: "Backup settings"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Backup frequency"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["Hourly", "Daily", "Weekly"]),
      defaultValue: "Daily"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Retention period"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["30 days", "90 days", "1 year", "5 years"]),
      defaultValue: "1 year"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Last backup status",
      desc: "Completed 30 Jun 2026, 02:00."
    }, /*#__PURE__*/React.createElement(K.Pill, {
      tone: "success"
    }, "Healthy"))))), /*#__PURE__*/React.createElement(TabsContent, {
      value: "security"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "default",
      title: "Security changes are audited",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "shield-check",
        size: 18
      })
    }, "Every change on this tab is recorded in the audit log with your name and a timestamp."), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "lock",
      title: "Password policy"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Minimum length"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["8", "10", "12", "14"]),
      defaultValue: "12"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Complexity rule",
      desc: "Require upper, lower, number, and symbol."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Expiry rule"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["Never", "60 days", "90 days", "180 days"]),
      defaultValue: "90 days"
    })))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "shield-check",
      title: "Two-factor authentication"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Require 2FA for privileged roles",
      desc: "Chairman, SVCF / Finance, GM Land, Admin."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Enforcement status",
      desc: "39 of 48 users have 2FA enabled (81%)."
    }, /*#__PURE__*/React.createElement(K.Pill, {
      tone: "warning"
    }, "Partial")), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Recovery options"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["Email + Backup codes", "Authenticator app", "SMS"]),
      defaultValue: "Email + Backup codes"
    })))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "clock",
      title: "Session settings"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Idle timeout"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["10 min", "20 min", "30 min", "60 min"]),
      defaultValue: "20 min"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Max session duration"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["4 hours", "8 hours", "12 hours"]),
      defaultValue: "8 hours"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Force logout on password change"
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    }))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "eye",
      title: "Access control"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Sensitive data visibility",
      desc: "Restrict valuation & party details to privileged roles."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Export permission rule"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["Role-based", "Admins only", "All users"]),
      defaultValue: "Role-based"
    }))), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Login attempt limit",
      desc: "Lock account after N failed attempts."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: opt(["3", "5", "10"]),
      defaultValue: "5"
    })))), /*#__PURE__*/React.createElement(SettingsCard, {
      icon: "alert-triangle",
      title: "Security logs"
    }, /*#__PURE__*/React.createElement(SettingRow, {
      title: "Last failed login",
      desc: "admin@reliance.com from 45.118.92.7"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)"
      }
    }, "30 Jun 2026, 08:33")), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Locked accounts",
      desc: "Accounts currently locked."
    }, /*#__PURE__*/React.createElement(K.Pill, {
      tone: "danger"
    }, "3 locked")), /*#__PURE__*/React.createElement(SettingRow, {
      title: "Suspicious activity",
      desc: "7 failed logins in the last 24 hours."
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Review")))))));
  }
  window.NotificationCenter = NotificationCenter;
  window.SettingsModule = SettingsModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/TransactionDetail.jsx
try { (() => {
// TransactionDetail — full detail of one transaction / deed, opened from the
// Transaction Ledger (Deed No. or View). Exposes window.TransactionDetail.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Breadcrumb,
    Separator
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  function Field({
    label,
    value,
    mono,
    link,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: "var(--muted-foreground)",
        fontWeight: 600
      }
    }, label), link ? /*#__PURE__*/React.createElement("button", {
      className: "lims-link",
      onClick: onClick,
      style: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--brand)",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)"
      }
    }, value));
  }
  function TransactionDetail({
    tx,
    onBack,
    onOpenDag,
    onNavigate
  }) {
    const r = tx || D.ledgerAll[0];
    const loading = K.useFakeLoad(450);
    const docs = [{
      name: "Deed scan",
      meta: `${r.deed} · PDF`,
      icon: "file-text"
    }, {
      name: "Mutation reference",
      meta: "namjari ref · PDF",
      icon: "file-signature"
    }, {
      name: "Payment voucher",
      meta: "voucher · PDF",
      icon: "receipt"
    }];
    const history = [{
      icon: "plus",
      title: "Transaction recorded",
      by: r.by,
      time: r.date
    }, {
      icon: "upload",
      title: "Deed scan attached",
      by: r.by,
      time: r.date
    }, {
      icon: "check-circle",
      title: `Status set to ${r.status}`,
      by: "GM Land",
      time: r.date
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)",
        maxWidth: 1120
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Transaction Ledger",
        href: "#"
      }, {
        label: r.deed
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }), "Transaction Ledger"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontFamily: "var(--font-mono)"
      }
    }, r.deed), /*#__PURE__*/React.createElement(K.TypeBadge, {
      type: r.type
    }), /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onOpenDag && onOpenDag(r.dag)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), "Open Dag Profile"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => onNavigate && onNavigate("reports")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onNavigate && onNavigate("add-transaction")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: 15
    }), "Edit")))), loading ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 4
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 20,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Transaction details")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Transaction type",
      value: r.type
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Deed No.",
      value: r.deed,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Deed date",
      value: r.date,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Deed type",
      value: r.deedType || "Saf Kobla"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "File No.",
      value: r.file,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Party / Counterparty",
      value: r.party
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Dag No.",
      value: r.dag,
      mono: true,
      link: true,
      onClick: () => onOpenDag && onOpenDag(r.dag)
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Mouza",
      value: r.mouza
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Project",
      value: r.project || "Padma Riverfront — Phase I"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Area",
      value: r.area,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Bucket",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: r.bucket
      })
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Amount",
      value: r.amount,
      mono: true
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Created by",
      value: r.by
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Status",
      value: /*#__PURE__*/React.createElement(K.StatusBadge, {
        status: r.status
      })
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Notes")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        fontSize: 13.5,
        color: "var(--muted-foreground)",
        lineHeight: "var(--leading-relaxed)"
      }
    }, r.notes || "Registered at sub-registry office. Deed scan verified against khatian record. No outstanding objection at time of entry."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "Attached documents")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, docs.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.name,
      className: "lims-rowlink",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 10px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--radius-md)",
        background: "var(--muted)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: d.icon,
      size: 15
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--muted-foreground)"
      }
    }, d.meta)), /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15,
      style: {
        color: "var(--muted-foreground)"
      }
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, "History")), /*#__PURE__*/React.createElement(CardContent, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 0
      }
    }, history.map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 11
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: h.icon,
      size: 13
    })), i < history.length - 1 ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        flex: 1,
        minHeight: 18,
        background: "var(--border)"
      }
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: i < history.length - 1 ? 16 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, h.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--muted-foreground)"
      }
    }, h.by, " \xB7 ", h.time)))))))));
  }
  window.TransactionDetail = TransactionDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/TransactionDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/TransactionLedger.jsx
try { (() => {
// TransactionLedger — full transaction list with filters, summary chips,
// pagination, and export actions. Exposes window.TransactionLedger.
(function () {
  const {
    Card,
    CardContent,
    Icon,
    Button,
    Input,
    Select,
    Breadcrumb,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const PAGE = 8;
  const RANGES = ["Any time", "Last 7 days", "Last 30 days", "This year"];
  function FilterChip({
    label,
    value,
    onClear
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, value), /*#__PURE__*/React.createElement("button", {
      onClick: onClear,
      "aria-label": `Clear ${label}`,
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1,
        borderRadius: "var(--radius-full)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })));
  }
  function TransactionLedger({
    onNavigate,
    onOpenDag,
    onOpenTransaction
  }) {
    const blank = {
      q: "",
      type: "",
      mouza: "",
      project: "",
      bucket: "",
      status: "",
      range: "Any time"
    };
    const [f, setF] = React.useState(blank);
    const [page, setPage] = React.useState(0);
    const set = (k, v) => {
      setF(p => ({
        ...p,
        [k]: v
      }));
      setPage(0);
    };
    const filtered = D.ledgerAll.filter(r => {
      if (f.q) {
        const q = f.q.toLowerCase();
        const hay = [r.deed, r.file, r.party, r.dag, r.mouza].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (f.type && r.type !== f.type) return false;
      if (f.mouza && r.mouza !== f.mouza) return false;
      if (f.bucket && r.bucket !== f.bucket) return false;
      if (f.status && r.status !== f.status) return false;
      // (project is an illustrative filter — not stored on rows)
      return true;
    });
    const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
    const cur = Math.min(page, pages - 1);
    const rows = filtered.slice(cur * PAGE, cur * PAGE + PAGE);
    const chips = [];
    if (f.q) chips.push({
      k: "q",
      label: "Search",
      value: f.q
    });
    if (f.type) chips.push({
      k: "type",
      label: "Type",
      value: f.type
    });
    if (f.mouza) chips.push({
      k: "mouza",
      label: "Mouza",
      value: f.mouza
    });
    if (f.project) chips.push({
      k: "project",
      label: "Project",
      value: f.project
    });
    if (f.bucket) chips.push({
      k: "bucket",
      label: "Bucket",
      value: f.bucket
    });
    if (f.status) chips.push({
      k: "status",
      label: "Status",
      value: f.status
    });
    if (f.range !== "Any time") chips.push({
      k: "range",
      label: "Date",
      value: f.range
    });
    const clearOne = k => set(k, k === "range" ? "Any time" : "");
    const clearAll = () => {
      setF(blank);
      setPage(0);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Home",
        href: "#"
      }, {
        label: "Transaction Ledger"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Transaction Ledger"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "All purchase, sale, Awaz, and status entries across the portfolio.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 15
    }), "Export PDF"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }), "Export Excel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => onNavigate && onNavigate("add-transaction")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }), "Add Transaction")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 240px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search deed, file, party, dag, mouza\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All types",
      options: opt(D.options.transactionTypes),
      value: f.type,
      onChange: v => set("type", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All mouzas",
      options: opt(D.options.mouzas),
      value: f.mouza,
      onChange: v => set("mouza", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All projects",
      options: opt(D.options.projects),
      value: f.project,
      onChange: v => set("project", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Date range",
      options: opt(RANGES),
      value: f.range,
      onChange: v => set("range", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All buckets",
      options: opt(D.options.buckets),
      value: f.bucket,
      onChange: v => set("bucket", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 168
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(D.options.statuses),
      value: f.status,
      onChange: v => set("status", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement(FilterChip, {
      key: c.k,
      label: c.label,
      value: c.value,
      onClear: () => clearOne(c.k)
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "search",
      title: "No transactions match",
      detail: "Try adjusting or clearing your filters to see more results.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Date"), /*#__PURE__*/React.createElement(TableHead, null, "Type"), /*#__PURE__*/React.createElement(TableHead, null, "Deed No."), /*#__PURE__*/React.createElement(TableHead, null, "File No."), /*#__PURE__*/React.createElement(TableHead, null, "Party"), /*#__PURE__*/React.createElement(TableHead, null, "Dag No."), /*#__PURE__*/React.createElement(TableHead, null, "Mouza"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Area"), /*#__PURE__*/React.createElement(TableHead, null, "Bucket"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        textAlign: "right"
      }
    }, "Amount"), /*#__PURE__*/React.createElement(TableHead, null, "Created by"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 56,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map((r, i) => /*#__PURE__*/React.createElement(TableRow, {
      key: i,
      style: {
        cursor: "pointer"
      },
      onClick: () => onOpenTransaction ? onOpenTransaction(r) : onNavigate && onNavigate("transaction-detail")
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        whiteSpace: "nowrap"
      }
    }, r.date), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.TypeBadge, {
      type: r.type
    })), /*#__PURE__*/React.createElement(TableCell, {
      onClick: e => {
        e.stopPropagation();
        onOpenTransaction && onOpenTransaction(r);
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "lims-link",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--brand)",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }
    }, r.deed)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, r.file), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        whiteSpace: "nowrap"
      }
    }, r.party), /*#__PURE__*/React.createElement(TableCell, {
      onClick: e => {
        e.stopPropagation();
        onOpenDag && onOpenDag(r.dag);
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "lims-link",
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--brand)",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer"
      }
    }, r.dag)), /*#__PURE__*/React.createElement(TableCell, null, r.mouza), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, r.area), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.bucket
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, r.amount), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, r.by), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: r.status
    })), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      style: {
        height: 28,
        padding: "0 8px"
      },
      onClick: () => onOpenTransaction ? onOpenTransaction(r) : onNavigate && onNavigate("transaction-detail")
    }, "View")))))))), filtered.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 13,
        color: "var(--muted-foreground)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Showing ", cur * PAGE + 1, "\u2013", Math.min(filtered.length, cur * PAGE + PAGE), " of ", filtered.length, " transactions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      disabled: cur === 0,
      onClick: () => setPage(cur - 1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 15
    }), "Previous"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--foreground)"
      }
    }, cur + 1, " / ", pages), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      disabled: cur >= pages - 1,
      onClick: () => setPage(cur + 1)
    }, "Next", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15
    })))) : null);
  }
  window.TransactionLedger = TransactionLedger;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/TransactionLedger.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/UsersRoles.jsx
try { (() => {
// UsersRolesModule — User management + Role & permission matrix.
// Exposes window.UsersModule.
(function () {
  const {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Icon,
    Button,
    Input,
    Select,
    Label,
    Avatar,
    Breadcrumb,
    Alert,
    Dialog,
    DialogFooter,
    DropdownMenu,
    Switch,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell
  } = window.RelianceLIMSDesignSystem_12526c;
  const D = window.LIMS_DATA;
  const K = window.LIMSKit;
  const opt = arr => arr.map(v => ({
    value: v,
    label: v
  }));
  const toneTile = {
    neutral: {
      bg: "var(--muted)",
      fg: "var(--foreground)"
    },
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "var(--warning)"
    },
    destructive: {
      bg: "rgba(220,38,38,0.10)",
      fg: "var(--destructive)"
    }
  };
  function Kpi({
    k
  }) {
    const t = toneTile[k.tone] || toneTile.neutral;
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.icon,
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginTop: 10,
        fontFamily: "var(--font-mono)"
      }
    }, k.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        marginTop: 4
      }
    }, k.sub)));
  }
  function initials(name) {
    return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  }

  // ---------------- Invite modal ----------------
  function InviteModal({
    open,
    onClose,
    onDone
  }) {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: "Invite user",
      description: "Send an invitation to create a Reliance LIMS account.",
      width: 520
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Name"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Full name"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Email"), /*#__PURE__*/React.createElement(Input, {
      type: "email",
      placeholder: "name@reliance.com"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Phone"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "+880 \u2026"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Role"), /*#__PURE__*/React.createElement(Select, {
      placeholder: "Select role",
      options: opt(D.roles)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Department"), /*#__PURE__*/React.createElement(Input, {
      placeholder: "e.g. Land Administration"
    }))), /*#__PURE__*/React.createElement(DialogFooter, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: () => onDone({
        tone: "success",
        title: "Invitation sent",
        detail: "The user will receive an email to set up their account and 2FA."
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    }), "Send invite")));
  }

  // ---------------- 9A: User management ----------------
  function UserManagement({
    onMatrix
  }) {
    const blank = {
      q: "",
      role: "",
      status: "",
      twofa: ""
    };
    const [f, setF] = React.useState(blank);
    const [invite, setInvite] = React.useState(false);
    const [flash, setFlash] = React.useState(null);
    const loading = K.useFakeLoad(550);
    const set = (k, v) => setF(p => ({
      ...p,
      [k]: v
    }));
    const rows = D.users.filter(u => {
      if (f.q) {
        const h = [u.name, u.email, u.phone].join(" ").toLowerCase();
        if (!h.includes(f.q.toLowerCase())) return false;
      }
      if (f.role && u.role !== f.role) return false;
      if (f.status && u.status !== f.status) return false;
      if (f.twofa === "Enabled" && !u.twofa) return false;
      if (f.twofa === "Disabled" && u.twofa) return false;
      return true;
    });
    const chips = [];
    [["q", "Search"], ["role", "Role"], ["status", "Status"], ["twofa", "2FA"]].forEach(([k, l]) => {
      if (f[k]) chips.push({
        k,
        label: l,
        value: f[k]
      });
    });
    const clearAll = () => setF(blank);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Users & Roles"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "User management"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Manage system users, roles, and account security.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onMatrix
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 15
    }), "Role & Permissions"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: () => setInvite(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-plus",
      size: 15
    }), "Invite User")))), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle",
        size: 18
      })
    }, flash.detail) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 14
      }
    }, loading ? Array.from({
      length: 5
    }).map((_, i) => /*#__PURE__*/React.createElement(K.KpiSkeleton, {
      key: i
    })) : D.userKpis.map(k => /*#__PURE__*/React.createElement(Kpi, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: "1 1 240px",
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16,
      style: {
        position: "absolute",
        left: 11,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--muted-foreground)"
      }
    }), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search by name, email, phone\u2026",
      value: f.q,
      onChange: e => set("q", e.target.value),
      style: {
        paddingLeft: 34
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 170
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All roles",
      options: opt(D.roles),
      value: f.role,
      onChange: v => set("role", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All statuses",
      options: opt(["Active", "Pending", "Locked"]),
      value: f.status,
      onChange: v => set("status", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 150
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "All 2FA",
      options: opt(["Enabled", "Disabled"]),
      value: f.twofa,
      onChange: v => set("twofa", v)
    }))), chips.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center",
        borderTop: "1px solid var(--border)",
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        fontWeight: 500
      }
    }, "Active filters"), chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.k,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 6px 4px 10px",
        borderRadius: "var(--radius-full)",
        background: "var(--secondary)",
        border: "1px solid var(--border)",
        fontSize: 12.5,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--muted-foreground)"
      }
    }, c.label, ":"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, c.value), /*#__PURE__*/React.createElement("button", {
      onClick: () => set(c.k, ""),
      "aria-label": "Clear",
      style: {
        display: "inline-flex",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        padding: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 13
    })))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: clearAll,
      style: {
        height: 28
      }
    }, "Clear all")) : null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0
      }
    }, loading ? /*#__PURE__*/React.createElement(K.TableSkeleton, {
      rows: 6,
      cols: 7
    }) : rows.length === 0 ? /*#__PURE__*/React.createElement(K.EmptyState, {
      icon: "users",
      title: "No users match",
      detail: "Adjust or clear your filters to see more users.",
      actionLabel: "Clear filters",
      onAction: clearAll
    }) : /*#__PURE__*/React.createElement(Table, {
      className: "lims-table"
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, null, "Name"), /*#__PURE__*/React.createElement(TableHead, null, "Email / phone"), /*#__PURE__*/React.createElement(TableHead, null, "Role"), /*#__PURE__*/React.createElement(TableHead, null, "Department"), /*#__PURE__*/React.createElement(TableHead, null, "Status"), /*#__PURE__*/React.createElement(TableHead, null, "2FA"), /*#__PURE__*/React.createElement(TableHead, null, "Last login"), /*#__PURE__*/React.createElement(TableHead, {
      style: {
        width: 48,
        textAlign: "right"
      }
    }, "Action"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(u => /*#__PURE__*/React.createElement(TableRow, {
      key: u.email
    }, /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: initials(u.name),
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, u.name))), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13
      }
    }, u.email), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--muted-foreground)",
        fontFamily: "var(--font-mono)"
      }
    }, u.phone)), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, u.role)), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        color: "var(--muted-foreground)"
      }
    }, u.dept), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(K.StatusBadge, {
      status: u.status
    })), /*#__PURE__*/React.createElement(TableCell, null, u.twofa ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--success)",
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14
    }), "On") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--muted-foreground)",
        fontSize: 12.5,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x-circle",
      size: 14
    }), "Off")), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12.5,
        color: "var(--muted-foreground)",
        whiteSpace: "nowrap"
      }
    }, u.lastLogin), /*#__PURE__*/React.createElement(TableCell, {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(DropdownMenu, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "icon",
        style: {
          height: 30,
          width: 30
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      })),
      items: [{
        label: "Edit user",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "edit",
          size: 14
        })
      }, {
        label: "Reset password",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "refresh-cw",
          size: 14
        })
      }, {
        label: u.twofa ? "2FA enabled" : "Require 2FA",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "shield-check",
          size: 14
        })
      }, {
        separator: true
      }, {
        label: u.status === "Locked" ? "Unlock account" : "Deactivate user",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: u.status === "Locked" ? "lock" : "ban",
          size: 14
        })
      }]
    })))))))), /*#__PURE__*/React.createElement(InviteModal, {
      open: invite,
      onClose: () => setInvite(false),
      onDone: fl => {
        setInvite(false);
        setFlash(fl);
      }
    }));
  }

  // ---------------- 9B: Permission matrix ----------------
  function PermissionMatrix({
    onBack
  }) {
    const matrixRoles = D.roles.filter(r => r !== "Admin");
    const [role, setRole] = React.useState(matrixRoles[2]); // GM Land
    const [matrix, setMatrix] = React.useState(() => JSON.parse(JSON.stringify(D.permissionMatrix)));
    const [dirty, setDirty] = React.useState(false);
    const [flash, setFlash] = React.useState(null);
    const grid = matrix[role];
    function toggle(mod, ci) {
      setMatrix(m => {
        const next = JSON.parse(JSON.stringify(m));
        next[role][mod][ci] = next[role][mod][ci] ? 0 : 1;
        return next;
      });
      setDirty(true);
      setFlash(null);
    }
    function reset() {
      setMatrix(JSON.parse(JSON.stringify(D.permissionMatrix)));
      setDirty(false);
      setFlash(null);
    }
    function save() {
      setDirty(false);
      setFlash({
        tone: "success",
        title: "Permissions saved",
        detail: `Changes to the ${role} role were saved and recorded in the audit log.`
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: [{
        label: "Dashboard",
        href: "#"
      }, {
        label: "Users & Roles",
        href: "#"
      }, {
        label: "Role & Permissions"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginTop: 8,
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "icon",
      onClick: onBack
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, "Role & permission matrix"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        color: "var(--muted-foreground)"
      }
    }, "Define what each role can see and do across modules."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: reset,
      disabled: !dirty
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 15
    }), "Reset changes"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "sm",
      onClick: save,
      disabled: !dirty
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save changes")))), /*#__PURE__*/React.createElement(Alert, {
      variant: "default",
      title: "Permission changes are controlled",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "shield-check",
        size: 18
      })
    }, "Permission changes will be recorded in the audit log with your name and a timestamp. Apply changes carefully \u2014 they take effect immediately on save."), flash ? /*#__PURE__*/React.createElement(Alert, {
      variant: flash.tone,
      title: flash.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check-circle",
        size: 18
      })
    }, flash.detail) : null, dirty ? /*#__PURE__*/React.createElement(Alert, {
      variant: "warning",
      title: "Unsaved changes",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "alert-triangle",
        size: 18
      })
    }, "You have changed permissions for the ", role, " role. Save or reset before leaving this screen.") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, matrixRoles.map(r => {
      const on = role === r;
      return /*#__PURE__*/React.createElement("button", {
        key: r,
        onClick: () => setRole(r),
        style: {
          padding: "8px 14px",
          borderRadius: "var(--radius-full)",
          border: `1px solid ${on ? "var(--primary)" : "var(--border)"}`,
          background: on ? "var(--primary)" : "var(--background)",
          color: on ? "var(--primary-foreground)" : "var(--foreground)",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "var(--font-sans)"
        }
      }, r);
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      className: "lims-table",
      style: {
        minWidth: 920
      }
    }, /*#__PURE__*/React.createElement(TableHeader, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableHead, {
      style: {
        position: "sticky",
        left: 0,
        background: "var(--muted)",
        zIndex: 1,
        minWidth: 180
      }
    }, "Module"), D.permissionCols.map(c => /*#__PURE__*/React.createElement(TableHead, {
      key: c,
      style: {
        textAlign: "center",
        whiteSpace: "nowrap"
      }
    }, c === "Sensitive Data Access" ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--destructive)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13
    }), "Sensitive") : c)))), /*#__PURE__*/React.createElement(TableBody, null, D.permissionModules.map(mod => /*#__PURE__*/React.createElement(TableRow, {
      key: mod
    }, /*#__PURE__*/React.createElement(TableCell, {
      style: {
        position: "sticky",
        left: 0,
        background: "var(--card)",
        fontWeight: 600
      }
    }, mod), D.permissionCols.map((c, ci) => {
      const on = grid[mod][ci] === 1;
      const sensitive = ci === D.permissionCols.length - 1;
      return /*#__PURE__*/React.createElement(TableCell, {
        key: c,
        style: {
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => toggle(mod, ci),
        "aria-pressed": on,
        "aria-label": `${c} for ${mod}`,
        style: {
          width: 24,
          height: 24,
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: on ? "none" : "1.5px solid var(--border)",
          background: on ? sensitive ? "var(--destructive)" : "var(--primary)" : "transparent",
          color: on ? "#fff" : "transparent"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14
      })));
    }))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 8,
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: reset,
      disabled: !dirty
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 15
    }), "Reset changes"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      onClick: save,
      disabled: !dirty
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "save",
      size: 15
    }), "Save changes")));
  }

  // ---------------- Coordinator ----------------
  function UsersModule() {
    const [view, setView] = React.useState("users");
    return view === "users" ? /*#__PURE__*/React.createElement(UserManagement, {
      onMatrix: () => setView("matrix")
    }) : /*#__PURE__*/React.createElement(PermissionMatrix, {
      onBack: () => setView("users")
    });
  }
  window.UsersModule = UsersModule;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/UsersRoles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lims/data.js
try { (() => {
// Mock Reliance LIMS (Land Inventory Management System) data. No real records.
window.LIMS_DATA = {
  // ---------- Navigation ----------
  navMain: [{
    id: "dashboard",
    label: "Dashboard",
    icon: "layout-dashboard"
  }, {
    id: "inventory",
    label: "Inventory",
    icon: "map",
    badge: "1,284"
  }, {
    id: "dag-directory",
    label: "Dag Directory",
    icon: "map-pin"
  }, {
    id: "ledger",
    label: "Transaction Ledger",
    icon: "receipt"
  }, {
    id: "add-transaction",
    label: "Add Transaction",
    icon: "plus"
  }, {
    id: "disputes",
    label: "Dispute Management",
    icon: "gavel",
    badge: "12"
  }, {
    id: "mutation",
    label: "Kharij / Mutation",
    icon: "file-signature"
  }, {
    id: "khajna",
    label: "Khajna",
    icon: "banknote"
  }, {
    id: "reports",
    label: "Reports",
    icon: "bar-chart"
  }],
  navAdmin: [{
    id: "users",
    label: "Users & Roles",
    icon: "users"
  }, {
    id: "audit",
    label: "Audit Log",
    icon: "history"
  }, {
    id: "settings",
    label: "Settings",
    icon: "settings"
  }, {
    id: "migration",
    label: "Data Migration & Import",
    icon: "database"
  }],
  // Role-based navigation: which nav ids each role may see.
  roleAccess: {
    "Admin": ["dashboard", "inventory", "dag-directory", "ledger", "add-transaction", "disputes", "mutation", "khajna", "reports", "users", "audit", "settings", "migration"],
    "Chairman": ["dashboard", "inventory", "dag-directory", "ledger", "disputes", "mutation", "khajna", "reports", "audit"],
    "SVCF / Finance": ["dashboard", "inventory", "dag-directory", "ledger", "add-transaction", "khajna", "reports", "audit"],
    "GM Land": ["dashboard", "inventory", "dag-directory", "ledger", "add-transaction", "disputes", "mutation", "khajna", "reports", "users", "audit", "settings"],
    "Land Officer": ["dashboard", "inventory", "dag-directory", "ledger", "add-transaction", "disputes", "mutation", "khajna", "reports"],
    "Advocate": ["dashboard", "dag-directory", "disputes", "mutation", "reports"],
    "Accounts": ["dashboard", "dag-directory", "ledger", "khajna", "reports", "audit"]
  },
  // Signed-in users available in the role switcher (prototype).
  sessionUsers: [{
    name: "S. Rahman",
    role: "GM Land",
    initials: "SR"
  }, {
    name: "Chairman Office",
    role: "Chairman",
    initials: "CO"
  }, {
    name: "F. Ahmed",
    role: "SVCF / Finance",
    initials: "FA"
  }, {
    name: "A. Karim",
    role: "Land Officer",
    initials: "AK"
  }, {
    name: "N. Chowdhury",
    role: "Advocate",
    initials: "NC"
  }, {
    name: "M. Hasan",
    role: "Accounts",
    initials: "MH"
  }, {
    name: "IT Admin",
    role: "Admin",
    initials: "IT"
  }],
  // ---------- Inventory Dashboard ----------
  kpis: [{
    label: "Total Land Holding",
    value: "642.50 bigha",
    sub: "across 1,284 dags",
    icon: "layers",
    tone: "neutral"
  }, {
    label: "Clean Land",
    value: "498.20 bigha",
    sub: "77.5% of holding",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "Disputed Land",
    value: "86.40 bigha",
    sub: "12 active disputes",
    icon: "gavel",
    tone: "destructive"
  }, {
    label: "Under Negotiation",
    value: "57.90 bigha",
    sub: "9 deals in progress",
    icon: "repeat",
    tone: "warning"
  }, {
    label: "Pending Mutation",
    value: "37 files",
    sub: "8 over 30 days",
    icon: "file-signature",
    tone: "warning"
  }, {
    label: "Khajna Due",
    value: "৳ 3,42,000",
    sub: "due within 30 days",
    icon: "banknote",
    tone: "destructive"
  }],
  holdingBreakdown: [{
    label: "Clean",
    area: "498.20 bigha",
    pct: 77.5,
    color: "var(--success)"
  }, {
    label: "Disputed",
    area: "86.40 bigha",
    pct: 13.4,
    color: "var(--destructive)"
  }, {
    label: "Under negotiation",
    area: "57.90 bigha",
    pct: 9.1,
    color: "var(--warning)"
  }],
  alerts: [{
    sev: "destructive",
    icon: "lock",
    title: "Disputed land locked",
    detail: "DAG-1184 · Char Bhadrasan — sale & Awaz restricted",
    time: "2h ago",
    go: "disputes"
  }, {
    sev: "warning",
    icon: "file-signature",
    title: "Mutation pending over 30 days",
    detail: "8 files awaiting AC Land office — oldest 47 days",
    time: "Today",
    go: "mutation"
  }, {
    sev: "warning",
    icon: "banknote",
    title: "Khajna due soon",
    detail: "৳ 3,42,000 across 14 dags due within 30 days",
    time: "Today",
    go: "khajna"
  }, {
    sev: "destructive",
    icon: "copy",
    title: "Possible duplicate deed found",
    detail: "DEED-7741 matches DEED-7716 on khatian KH-204",
    time: "Yesterday",
    go: "ledger"
  }],
  recentTransactions: [{
    date: "12 Jun 2025",
    type: "Purchase",
    dag: "DAG-1182",
    mouza: "Baliadanga",
    area: "1.20 bigha",
    status: "Recorded"
  }, {
    date: "12 Jun 2025",
    type: "Sale",
    dag: "DAG-1183",
    mouza: "Sripur",
    area: "0.75 bigha",
    status: "Pending mutation"
  }, {
    date: "11 Jun 2025",
    type: "Awaz",
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    area: "2.40 bigha",
    status: "Disputed"
  }, {
    date: "11 Jun 2025",
    type: "Purchase",
    dag: "DAG-1185",
    mouza: "Baliadanga",
    area: "0.50 bigha",
    status: "Under negotiation"
  }, {
    date: "10 Jun 2025",
    type: "Purchase",
    dag: "DAG-1186",
    mouza: "Sripur",
    area: "1.05 bigha",
    status: "Recorded"
  }, {
    date: "10 Jun 2025",
    type: "Sale",
    dag: "DAG-1187",
    mouza: "Kalibari",
    area: "3.10 bigha",
    status: "Pending mutation"
  }],
  // ---------- Dag Profile ----------
  dagProfile: {
    dagNo: "DAG-1184",
    mouza: "Char Bhadrasan",
    project: "Padma Riverfront — Phase II",
    khatian: "KH-330",
    status: "Disputed",
    survey: ["CS-441", "SA-512", "RS-1184", "BS-2031", "CTY-7788"],
    surveyLabels: ["CS", "SA", "RS", "BS", "City"],
    areas: {
      clean: "1.10 bigha",
      disputed: "0.90 bigha",
      negotiation: "0.40 bigha"
    },
    surveyInfo: [{
      field: "CS Dag",
      value: "CS-441"
    }, {
      field: "SA Dag",
      value: "SA-512"
    }, {
      field: "RS Dag",
      value: "RS-1184"
    }, {
      field: "BS Dag",
      value: "BS-2031"
    }, {
      field: "City Survey",
      value: "CTY-7788"
    }, {
      field: "Khatian",
      value: "KH-330"
    }, {
      field: "Paper Area",
      value: "2.50 bigha"
    }, {
      field: "Actual Ledger Area",
      value: "2.40 bigha"
    }],
    ledger: [{
      date: "11 Jun 2025",
      type: "Awaz",
      deed: "DEED-7743",
      party: "Hasan Ali",
      area: "0.40 bigha",
      bucket: "Under negotiation",
      file: "F-2025-118",
      status: "Under negotiation"
    }, {
      date: "02 Mar 2024",
      type: "Purchase",
      deed: "DEED-7401",
      party: "Rafiqul Islam",
      area: "1.10 bigha",
      bucket: "Clean",
      file: "F-2024-077",
      status: "Recorded"
    }, {
      date: "18 Nov 2023",
      type: "Purchase",
      deed: "DEED-7188",
      party: "Sultana Begum",
      area: "0.90 bigha",
      bucket: "Disputed",
      file: "F-2023-204",
      status: "Disputed"
    }, {
      date: "05 Sep 2023",
      type: "Khajna",
      deed: "KHJ-5521",
      party: "AC Land Office",
      area: "—",
      bucket: "—",
      file: "F-2023-156",
      status: "Paid"
    }],
    documents: [{
      name: "Deed Scan",
      icon: "file-text",
      meta: "DEED-7743 · PDF · 2.1 MB",
      state: "available"
    }, {
      name: "Khajna Receipt",
      icon: "receipt",
      meta: "FY 2024 · PDF · 0.4 MB",
      state: "available"
    }, {
      name: "Mutation Document",
      icon: "file-signature",
      meta: "Not yet submitted",
      state: "pending"
    }, {
      name: "Court / Dispute Document",
      icon: "gavel",
      meta: "Case 442/2024 · PDF · 5.8 MB",
      state: "available"
    }],
    legal: {
      status: "Pending hearing",
      advocate: "Adv. N. Chowdhury",
      court: "Joint District Judge, Faridpur",
      hearing: "08 Jul 2025",
      notes: "Boundary overlap claim on the pond/water-body share (0.90 bigha). Temporary injunction in effect; sale and Awaz booking restricted until resolved.",
      resolution: "Unresolved"
    }
  },
  // ---------- Inventory Overview ----------
  inventoryKpis: [{
    label: "Total Land Holding",
    value: "642.5",
    sub: "bigha across 4 projects",
    icon: "map",
    tone: "neutral"
  }, {
    label: "Clean Land",
    value: "498.2",
    sub: "77.5% of holding",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "Disputed Land",
    value: "86.4",
    sub: "13.4% · 12 in court",
    icon: "gavel",
    tone: "destructive"
  }, {
    label: "Under Negotiation",
    value: "57.9",
    sub: "9.1% in progress",
    icon: "repeat",
    tone: "warning"
  }, {
    label: "Total Dags",
    value: "1,284",
    sub: "in registry",
    icon: "layers",
    tone: "neutral"
  }, {
    label: "Mutation Pending",
    value: "37",
    sub: "8 over 30 days",
    icon: "file-signature",
    tone: "warning"
  }, {
    label: "Khajna Due",
    value: "176",
    sub: "৳ 3,42,000",
    icon: "banknote",
    tone: "destructive"
  }],
  inventoryByProject: [{
    project: "Padma Riverfront — Phase I",
    dags: 412,
    area: "248.50",
    clean: "212.40",
    disputed: "18.20",
    neg: "17.90",
    mutation: 9,
    khajna: "৳ 84,000"
  }, {
    project: "Padma Riverfront — Phase II",
    dags: 358,
    area: "196.80",
    clean: "150.10",
    disputed: "34.60",
    neg: "12.10",
    mutation: 14,
    khajna: "৳ 1,12,000"
  }, {
    project: "Sripur Industrial Park",
    dags: 286,
    area: "142.30",
    clean: "118.90",
    disputed: "12.40",
    neg: "11.00",
    mutation: 7,
    khajna: "৳ 76,500"
  }, {
    project: "Kalibari Township",
    dags: 228,
    area: "54.50",
    clean: "16.80",
    disputed: "21.20",
    neg: "16.90",
    mutation: 7,
    khajna: "৳ 69,500"
  }],
  inventoryByMouza: [{
    mouza: "Baliadanga",
    dags: 318,
    area: "186.40",
    clean: "152.20",
    disputed: "20.10",
    neg: "14.10"
  }, {
    mouza: "Sripur",
    dags: 296,
    area: "164.80",
    clean: "138.40",
    disputed: "14.30",
    neg: "12.10"
  }, {
    mouza: "Char Bhadrasan",
    dags: 342,
    area: "172.90",
    clean: "118.60",
    disputed: "39.40",
    neg: "14.90"
  }, {
    mouza: "Kalibari",
    dags: 328,
    area: "118.00",
    clean: "88.00",
    disputed: "12.60",
    neg: "17.40"
  }],
  inventoryRisk: [{
    icon: "gavel",
    tone: "destructive",
    label: "Disputed dags",
    value: "86",
    detail: "12 currently in court",
    go: "disputes"
  }, {
    icon: "file-signature",
    tone: "warning",
    label: "Mutation pending > 30 days",
    value: "8",
    detail: "oldest 47 days",
    go: "mutation"
  }, {
    icon: "banknote",
    tone: "destructive",
    label: "Khajna overdue",
    value: "23",
    detail: "৳ 1,18,000 outstanding",
    go: "khajna"
  }, {
    icon: "copy",
    tone: "destructive",
    label: "Possible duplicate deeds",
    value: "2",
    detail: "needs verification",
    go: "ledger"
  }, {
    icon: "alert-triangle",
    tone: "warning",
    label: "Low remaining balance",
    value: "5",
    detail: "dags near zero clean area",
    go: "dag-directory"
  }],
  // ---------- Option lists (forms & filters) ----------
  options: {
    transactionTypes: ["Purchase", "Sale", "Awaz In", "Awaz Out", "Dispute Flag", "Dispute Resolved", "Reclassify", "Correction"],
    deedTypes: ["Saf Kobla", "Power of Attorney", "Bayna"],
    buckets: ["Clean", "Disputed", "Under Negotiation"],
    mouzas: ["Baliadanga", "Sripur", "Char Bhadrasan", "Kalibari"],
    projects: ["Padma Riverfront — Phase I", "Padma Riverfront — Phase II", "Sripur Industrial Park"],
    statuses: ["Recorded", "Pending mutation", "Under negotiation", "Disputed", "Under verification"]
  },
  // ---------- Transaction Ledger (full list) ----------
  ledgerAll: [{
    date: "12 Jun 2025",
    type: "Purchase",
    deed: "DEED-7741",
    file: "F-2025-118",
    party: "Abdul Mannan",
    dag: "DAG-1182",
    mouza: "Baliadanga",
    area: "1.20 bigha",
    bucket: "Clean",
    amount: "৳ 14,50,000",
    by: "A. Karim",
    status: "Recorded"
  }, {
    date: "12 Jun 2025",
    type: "Sale",
    deed: "DEED-7742",
    file: "F-2025-119",
    party: "Nazma Khatun",
    dag: "DAG-1183",
    mouza: "Sripur",
    area: "0.75 bigha",
    bucket: "Clean",
    amount: "৳ 9,80,000",
    by: "M. Hasan",
    status: "Pending mutation"
  }, {
    date: "11 Jun 2025",
    type: "Awaz In",
    deed: "DEED-7743",
    file: "F-2025-118",
    party: "Hasan Ali",
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    area: "0.40 bigha",
    bucket: "Under Negotiation",
    amount: "—",
    by: "A. Karim",
    status: "Disputed"
  }, {
    date: "11 Jun 2025",
    type: "Purchase",
    deed: "DEED-7744",
    file: "F-2025-120",
    party: "Rofiqul Islam",
    dag: "DAG-1185",
    mouza: "Baliadanga",
    area: "0.50 bigha",
    bucket: "Under Negotiation",
    amount: "৳ 6,20,000",
    by: "R. Begum",
    status: "Under negotiation"
  }, {
    date: "10 Jun 2025",
    type: "Purchase",
    deed: "DEED-7745",
    file: "F-2025-121",
    party: "Sultana Begum",
    dag: "DAG-1186",
    mouza: "Sripur",
    area: "1.05 bigha",
    bucket: "Clean",
    amount: "৳ 12,10,000",
    by: "M. Hasan",
    status: "Recorded"
  }, {
    date: "10 Jun 2025",
    type: "Sale",
    deed: "DEED-7746",
    file: "F-2025-122",
    party: "Jahangir Alam",
    dag: "DAG-1187",
    mouza: "Kalibari",
    area: "3.10 bigha",
    bucket: "Clean",
    amount: "৳ 41,00,000",
    by: "L. Nguyen",
    status: "Pending mutation"
  }, {
    date: "09 Jun 2025",
    type: "Awaz Out",
    deed: "DEED-7747",
    file: "F-2025-117",
    party: "Land Exchange Cell",
    dag: "DAG-1188",
    mouza: "Char Bhadrasan",
    area: "0.90 bigha",
    bucket: "Clean",
    amount: "—",
    by: "R. Begum",
    status: "Recorded"
  }, {
    date: "09 Jun 2025",
    type: "Purchase",
    deed: "DEED-7748",
    file: "F-2025-123",
    party: "Kamal Uddin",
    dag: "DAG-1189",
    mouza: "Kalibari",
    area: "1.60 bigha",
    bucket: "Clean",
    amount: "৳ 18,75,000",
    by: "A. Karim",
    status: "Under verification"
  }, {
    date: "06 Jun 2025",
    type: "Dispute Flag",
    deed: "DEED-7716",
    file: "F-2024-204",
    party: "—",
    dag: "DAG-1162",
    mouza: "Char Bhadrasan",
    area: "0.80 bigha",
    bucket: "Disputed",
    amount: "—",
    by: "Land Officer",
    status: "Disputed"
  }, {
    date: "05 Jun 2025",
    type: "Correction",
    deed: "DEED-7702",
    file: "F-2024-188",
    party: "—",
    dag: "DAG-1151",
    mouza: "Sripur",
    area: "0.30 bigha",
    bucket: "Clean",
    amount: "—",
    by: "M. Hasan",
    status: "Recorded"
  }, {
    date: "04 Jun 2025",
    type: "Reclassify",
    deed: "DEED-7690",
    file: "F-2024-176",
    party: "—",
    dag: "DAG-1148",
    mouza: "Baliadanga",
    area: "0.55 bigha",
    bucket: "Under Negotiation",
    amount: "—",
    by: "R. Begum",
    status: "Under negotiation"
  }, {
    date: "03 Jun 2025",
    type: "Purchase",
    deed: "DEED-7688",
    file: "F-2024-175",
    party: "Ferdous Rahman",
    dag: "DAG-1145",
    mouza: "Kalibari",
    area: "2.20 bigha",
    bucket: "Clean",
    amount: "৳ 26,40,000",
    by: "A. Karim",
    status: "Recorded"
  }],
  // ---------- Dispute Management ----------
  disputeOptions: {
    statuses: ["Open", "Under Review", "In Court", "Hearing Pending", "Settled", "Resolved"],
    types: ["Boundary overlap", "Ownership claim", "Inheritance", "Possession", "Mutation objection", "Fraudulent deed"],
    risks: ["High", "Medium", "Low"],
    advocates: ["Adv. N. Chowdhury", "Adv. S. Karim", "Adv. F. Rahman", "Adv. M. Haque"],
    courts: ["Joint District Judge, Faridpur", "Senior Assistant Judge Court", "AC Land Tribunal", "District & Sessions Judge"],
    resolutionTypes: ["Settled out of court", "Court verdict — in favour", "Court verdict — against", "Withdrawn", "Mutual agreement"]
  },
  disputeKpis: [{
    label: "Total Disputes",
    value: "28",
    sub: "all time",
    icon: "gavel",
    tone: "neutral"
  }, {
    label: "Active Disputes",
    value: "12",
    sub: "currently open",
    icon: "scale",
    tone: "warning"
  }, {
    label: "Locked Dags",
    value: "7",
    sub: "sale / Awaz restricted",
    icon: "lock",
    tone: "destructive"
  }, {
    label: "Hearing This Month",
    value: "5",
    sub: "next: 08 Jul",
    icon: "calendar",
    tone: "warning"
  }, {
    label: "Resolved Disputes",
    value: "16",
    sub: "this year",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "High Risk Cases",
    value: "4",
    sub: "need attention",
    icon: "alert-triangle",
    tone: "destructive"
  }],
  disputes: [{
    caseNo: "DC-1024",
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    type: "Boundary overlap",
    parties: "State vs. H. Ali",
    advocate: "Adv. N. Chowdhury",
    court: "Joint District Judge, Faridpur",
    hearing: "08 Jul 2025",
    status: "Hearing Pending",
    risk: "High",
    locked: true
  }, {
    caseNo: "DC-1019",
    dag: "DAG-1162",
    mouza: "Char Bhadrasan",
    type: "Ownership claim",
    parties: "R. Mia vs. State",
    advocate: "Adv. S. Karim",
    court: "Senior Assistant Judge Court",
    hearing: "21 Jul 2025",
    status: "In Court",
    risk: "High",
    locked: true
  }, {
    caseNo: "DC-1015",
    dag: "DAG-1140",
    mouza: "Sripur",
    type: "Inheritance",
    parties: "Heirs of A. Mannan",
    advocate: "Adv. F. Rahman",
    court: "AC Land Tribunal",
    hearing: "30 Jun 2025",
    status: "Under Review",
    risk: "Medium",
    locked: false
  }, {
    caseNo: "DC-1011",
    dag: "DAG-1133",
    mouza: "Baliadanga",
    type: "Possession",
    parties: "State vs. K. Uddin",
    advocate: "Adv. M. Haque",
    court: "District & Sessions Judge",
    hearing: "12 Aug 2025",
    status: "Open",
    risk: "Medium",
    locked: false
  }, {
    caseNo: "DC-1007",
    dag: "DAG-1121",
    mouza: "Kalibari",
    type: "Mutation objection",
    parties: "S. Begum vs. State",
    advocate: "Adv. S. Karim",
    court: "AC Land Tribunal",
    hearing: "—",
    status: "Settled",
    risk: "Low",
    locked: false
  }, {
    caseNo: "DC-1003",
    dag: "DAG-1108",
    mouza: "Sripur",
    type: "Fraudulent deed",
    parties: "State vs. J. Alam",
    advocate: "Adv. N. Chowdhury",
    court: "Joint District Judge, Faridpur",
    hearing: "—",
    status: "Resolved",
    risk: "Low",
    locked: false
  }, {
    caseNo: "DC-0998",
    dag: "DAG-1095",
    mouza: "Baliadanga",
    type: "Boundary overlap",
    parties: "F. Rahman vs. State",
    advocate: "Adv. M. Haque",
    court: "Senior Assistant Judge Court",
    hearing: "18 Aug 2025",
    status: "Open",
    risk: "Medium",
    locked: false
  }, {
    caseNo: "DC-0991",
    dag: "DAG-1080",
    mouza: "Char Bhadrasan",
    type: "Ownership claim",
    parties: "State vs. T. Islam",
    advocate: "Adv. F. Rahman",
    court: "District & Sessions Judge",
    hearing: "05 Jul 2025",
    status: "Hearing Pending",
    risk: "High",
    locked: true
  }],
  disputeDetail: {
    caseNo: "DC-1024",
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    project: "Padma Riverfront — Phase II",
    file: "F-2024-204",
    type: "Boundary overlap",
    status: "Hearing Pending",
    risk: "High",
    locked: true,
    created: "18 Nov 2024",
    updated: "06 Jun 2025",
    parties: {
      claimant: "Hasan Ali (opponent)",
      donor: "Rofiqul Islam (seller)",
      holder: "Land Trust — Plot 12B",
      officer: "A. Karim, Land Officer"
    },
    legal: {
      advocate: "Adv. N. Chowdhury",
      court: "Joint District Judge, Faridpur",
      caseNumber: "Title Suit 442/2024",
      nextHearing: "08 Jul 2025",
      prevHearing: "14 May 2025",
      notes: "Opponent claims 0.90 bigha of the pond/water-body share overlaps an adjacent RS dag. Temporary injunction granted; survey commissioner report pending. Sale and Awaz booking restricted until disposed."
    },
    documents: [{
      name: "Court notice",
      icon: "file-text",
      meta: "442/2024 · PDF · 0.6 MB",
      state: "available"
    }, {
      name: "Petition",
      icon: "file-text",
      meta: "Plaint copy · PDF · 1.2 MB",
      state: "available"
    }, {
      name: "Deed scan",
      icon: "file-text",
      meta: "DEED-7188 · PDF · 2.1 MB",
      state: "available"
    }, {
      name: "Khatian copy",
      icon: "receipt",
      meta: "KH-330 · PDF · 0.4 MB",
      state: "available"
    }, {
      name: "Hearing document",
      icon: "gavel",
      meta: "Order sheet 14 May · PDF",
      state: "available"
    }, {
      name: "Resolution document",
      icon: "shield-check",
      meta: "Not yet issued",
      state: "pending"
    }],
    timeline: [{
      title: "Dispute created",
      detail: "Filed by Land Officer A. Karim",
      time: "18 Nov 2024",
      icon: "plus",
      done: true
    }, {
      title: "Dag locked",
      detail: "DAG-1184 — sale & Awaz restricted",
      time: "18 Nov 2024",
      icon: "lock",
      done: true
    }, {
      title: "Advocate assigned",
      detail: "Adv. N. Chowdhury engaged",
      time: "25 Nov 2024",
      icon: "user",
      done: true
    }, {
      title: "Hearing scheduled",
      detail: "First hearing 14 May 2025",
      time: "02 Apr 2025",
      icon: "calendar",
      done: true
    }, {
      title: "Document uploaded",
      detail: "Order sheet added to case file",
      time: "14 May 2025",
      icon: "upload",
      done: true
    }, {
      title: "Status changed",
      detail: "In Court → Hearing Pending",
      time: "06 Jun 2025",
      icon: "history",
      done: true
    }, {
      title: "Resolution approved",
      detail: "Awaiting next hearing",
      time: "Pending",
      icon: "shield-check",
      done: false
    }]
  },
  // ---------- Kharij / Mutation ----------
  mutationOptions: {
    stages: ["Not Started", "Submitted", "Under Review", "Hearing", "Approved", "Rejected"],
    statuses: ["On track", "At risk", "Overdue", "Approved", "Rejected"],
    acOffices: ["AC Land, Faridpur Sadar", "AC Land, Bhanga", "AC Land, Nagarkanda"],
    rejectionReasons: ["Wrong dag number", "Boundary mismatch", "Khatian mismatch", "Broken ownership chain", "Over-share sale", "Missing partition deed", "Khas / vested issue", "Disputed land"],
    pendingBuckets: ["Any", "0–15 days", "16–30 days", "30+ days"]
  },
  mutationKpis: [{
    label: "Total Mutation Files",
    value: "142",
    sub: "all files",
    icon: "file-signature",
    tone: "neutral"
  }, {
    label: "Submitted",
    value: "34",
    sub: "awaiting review",
    icon: "upload",
    tone: "neutral"
  }, {
    label: "Under Review",
    value: "41",
    sub: "at AC Land office",
    icon: "eye",
    tone: "warning"
  }, {
    label: "Hearing Stage",
    value: "12",
    sub: "scheduled",
    icon: "calendar",
    tone: "warning"
  }, {
    label: "Approved",
    value: "78",
    sub: "this year",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "Rejected",
    value: "9",
    sub: "needs rework",
    icon: "x-circle",
    tone: "destructive"
  }, {
    label: "Pending Over 30 Days",
    value: "18",
    sub: "SLA breached",
    icon: "clock",
    tone: "destructive"
  }, {
    label: "Race Warning",
    value: "3",
    sub: "competing mutation",
    icon: "alert-triangle",
    tone: "destructive"
  }],
  mutations: [{
    file: "MUT-2025-118",
    dag: "DAG-1185",
    mouza: "Baliadanga",
    khatian: "KH-205",
    batch: "2025-06-A",
    stage: "Under Review",
    pending: 22,
    advocate: "Adv. S. Karim",
    ac: "AC Land, Faridpur Sadar",
    risk: "High",
    status: "At risk",
    race: true
  }, {
    file: "MUT-2025-112",
    dag: "DAG-1183",
    mouza: "Sripur",
    khatian: "KH-118",
    batch: "2025-06-A",
    stage: "Hearing",
    pending: 41,
    advocate: "Adv. F. Rahman",
    ac: "AC Land, Bhanga",
    risk: "High",
    status: "Overdue",
    race: false
  }, {
    file: "MUT-2025-104",
    dag: "DAG-1176",
    mouza: "Kalibari",
    khatian: "KH-402",
    batch: "2025-05-B",
    stage: "Submitted",
    pending: 9,
    advocate: "Adv. M. Haque",
    ac: "AC Land, Nagarkanda",
    risk: "Low",
    status: "On track",
    race: false
  }, {
    file: "MUT-2025-098",
    dag: "DAG-1162",
    mouza: "Char Bhadrasan",
    khatian: "KH-330",
    batch: "2025-05-B",
    stage: "Rejected",
    pending: 0,
    advocate: "Adv. N. Chowdhury",
    ac: "AC Land, Faridpur Sadar",
    risk: "Medium",
    status: "Rejected",
    race: false
  }, {
    file: "MUT-2025-090",
    dag: "DAG-1150",
    mouza: "Sripur",
    khatian: "KH-119",
    batch: "2025-05-A",
    stage: "Approved",
    pending: 0,
    advocate: "Adv. S. Karim",
    ac: "AC Land, Bhanga",
    risk: "Low",
    status: "Approved",
    race: false
  }, {
    file: "MUT-2025-085",
    dag: "DAG-1147",
    mouza: "Baliadanga",
    khatian: "KH-201",
    batch: "2025-05-A",
    stage: "Under Review",
    pending: 34,
    advocate: "Adv. M. Haque",
    ac: "AC Land, Faridpur Sadar",
    risk: "Medium",
    status: "Overdue",
    race: true
  }, {
    file: "MUT-2025-079",
    dag: "DAG-1140",
    mouza: "Kalibari",
    khatian: "KH-399",
    batch: "2025-04-B",
    stage: "Hearing",
    pending: 18,
    advocate: "Adv. F. Rahman",
    ac: "AC Land, Nagarkanda",
    risk: "Medium",
    status: "At risk",
    race: false
  }, {
    file: "MUT-2025-070",
    dag: "DAG-1133",
    mouza: "Sripur",
    khatian: "KH-115",
    batch: "2025-04-A",
    stage: "Not Started",
    pending: 3,
    advocate: "—",
    ac: "AC Land, Bhanga",
    risk: "Low",
    status: "On track",
    race: false
  }, {
    file: "MUT-2025-061",
    dag: "DAG-1121",
    mouza: "Char Bhadrasan",
    khatian: "KH-318",
    batch: "2025-04-A",
    stage: "Submitted",
    pending: 27,
    advocate: "Adv. N. Chowdhury",
    ac: "AC Land, Faridpur Sadar",
    risk: "High",
    status: "At risk",
    race: true
  }],
  mutationDetail: {
    file: "MUT-2025-118",
    dag: "DAG-1185",
    mouza: "Baliadanga",
    khatian: "KH-205",
    project: "Padma Riverfront — Phase II",
    ac: "AC Land, Faridpur Sadar",
    stage: "Under Review",
    pending: 22,
    batch: "2025-06-A",
    submission: "20 May 2025",
    hearing: "12 Jul 2025",
    advocate: "Adv. S. Karim",
    rejectionReason: null,
    notes: "Forwarding letter submitted to AC Land Sadar. Survey khatian attached. Awaiting review note from the Kanungo.",
    nextAction: "Follow up with AC Land office after the 30-day SLA window (due 19 Jun 2025).",
    race: true,
    sla: "Due soon",
    documents: [{
      name: "Application copy",
      icon: "file-text",
      meta: "Namjari form · PDF · 0.5 MB",
      state: "available"
    }, {
      name: "Forwarding letter",
      icon: "file-signature",
      meta: "Bengali · PDF · 0.3 MB",
      state: "available"
    }, {
      name: "Hearing notice",
      icon: "calendar",
      meta: "Scheduled 12 Jul · PDF",
      state: "available"
    }, {
      name: "Approval / rejection",
      icon: "shield-check",
      meta: "Not yet issued",
      state: "pending"
    }, {
      name: "Supporting deed / khatian",
      icon: "receipt",
      meta: "DEED-7744, KH-205 · PDF",
      state: "available"
    }]
  },
  // ---------- Khajna / Land Tax ----------
  khajnaOptions: {
    years: ["1432", "1431", "1430", "1429"],
    statuses: ["Paid", "Due", "Overdue", "Due Soon"]
  },
  khajnaKpis: [{
    label: "Total Dags",
    value: "1,284",
    sub: "with khajna records",
    icon: "layers",
    tone: "neutral"
  }, {
    label: "Paid Khajna",
    value: "1,108",
    sub: "up to 1432 BS",
    icon: "check-circle",
    tone: "success"
  }, {
    label: "Due Khajna",
    value: "176",
    sub: "৳ 3,42,000 total",
    icon: "banknote",
    tone: "warning"
  }, {
    label: "Overdue Khajna",
    value: "54",
    sub: "past 1st Boishakh",
    icon: "alert-triangle",
    tone: "destructive"
  }, {
    label: "Due Soon",
    value: "38",
    sub: "within 30 days",
    icon: "clock",
    tone: "warning"
  }, {
    label: "Receipt Missing",
    value: "21",
    sub: "paid, no receipt",
    icon: "file-text",
    tone: "destructive"
  }],
  khajnaRows: [{
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    khatian: "KH-330",
    paidUpTo: "1430",
    curYear: "1432",
    due: "৳ 4,200",
    status: "Overdue",
    receipt: false,
    lastPaid: "12 Apr 2023"
  }, {
    dag: "DAG-1182",
    mouza: "Baliadanga",
    khatian: "KH-205",
    paidUpTo: "1431",
    curYear: "1432",
    due: "৳ 1,800",
    status: "Due",
    receipt: true,
    lastPaid: "10 Apr 2024"
  }, {
    dag: "DAG-1183",
    mouza: "Sripur",
    khatian: "KH-118",
    paidUpTo: "1432",
    curYear: "1432",
    due: "৳ 0",
    status: "Paid",
    receipt: true,
    lastPaid: "08 Apr 2025"
  }, {
    dag: "DAG-1185",
    mouza: "Baliadanga",
    khatian: "KH-205",
    paidUpTo: "1431",
    curYear: "1432",
    due: "৳ 2,100",
    status: "Due Soon",
    receipt: true,
    lastPaid: "11 Apr 2024"
  }, {
    dag: "DAG-1186",
    mouza: "Sripur",
    khatian: "KH-119",
    paidUpTo: "1432",
    curYear: "1432",
    due: "৳ 0",
    status: "Paid",
    receipt: false,
    lastPaid: "09 Apr 2025"
  }, {
    dag: "DAG-1187",
    mouza: "Kalibari",
    khatian: "KH-402",
    paidUpTo: "1429",
    curYear: "1432",
    due: "৳ 8,600",
    status: "Overdue",
    receipt: false,
    lastPaid: "05 Apr 2022"
  }, {
    dag: "DAG-1162",
    mouza: "Char Bhadrasan",
    khatian: "KH-318",
    paidUpTo: "1431",
    curYear: "1432",
    due: "৳ 1,450",
    status: "Due",
    receipt: true,
    lastPaid: "14 Apr 2024"
  }, {
    dag: "DAG-1140",
    mouza: "Sripur",
    khatian: "KH-399",
    paidUpTo: "1432",
    curYear: "1432",
    due: "৳ 0",
    status: "Paid",
    receipt: true,
    lastPaid: "07 Apr 2025"
  }, {
    dag: "DAG-1133",
    mouza: "Baliadanga",
    khatian: "KH-201",
    paidUpTo: "1431",
    curYear: "1432",
    due: "৳ 3,250",
    status: "Due Soon",
    receipt: true,
    lastPaid: "12 Apr 2024"
  }, {
    dag: "DAG-1121",
    mouza: "Kalibari",
    khatian: "KH-399",
    paidUpTo: "1430",
    curYear: "1432",
    due: "৳ 5,900",
    status: "Overdue",
    receipt: false,
    lastPaid: "18 Apr 2023"
  }],
  khajnaDetail: {
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    khatian: "KH-330",
    project: "Padma Riverfront — Phase II",
    paidUpTo: "1430",
    status: "Overdue",
    totalDue: "৳ 4,200",
    lastPaid: "12 Apr 2023",
    history: [{
      year: "1432",
      date: "—",
      amount: "৳ 2,200",
      receipt: "—",
      status: "Due",
      by: "—"
    }, {
      year: "1431",
      date: "—",
      amount: "৳ 2,000",
      receipt: "—",
      status: "Overdue",
      by: "—"
    }, {
      year: "1430",
      date: "12 Apr 2023",
      amount: "৳ 1,900",
      receipt: "RCP-30-1184",
      status: "Paid",
      by: "A. Karim"
    }, {
      year: "1429",
      date: "08 Apr 2022",
      amount: "৳ 1,850",
      receipt: "RCP-29-1184",
      status: "Paid",
      by: "A. Karim"
    }, {
      year: "1428",
      date: "14 Apr 2021",
      amount: "৳ 1,800",
      receipt: "RCP-28-1184",
      status: "Paid",
      by: "M. Hasan"
    }],
    receipts: [{
      no: "RCP-30-1184",
      uploaded: "12 Apr 2023",
      year: "1430 BS"
    }, {
      no: "RCP-29-1184",
      uploaded: "08 Apr 2022",
      year: "1429 BS"
    }, {
      no: "RCP-28-1184",
      uploaded: "14 Apr 2021",
      year: "1428 BS"
    }]
  },
  // ---------- Reports ----------
  reportCategories: ["Inventory & Ledger", "Legal & Dispute", "Khajna & Mutation", "Operational", "Audit"],
  reports: [{
    name: "Purchase / Sale / Remaining Report",
    cat: "Inventory & Ledger",
    desc: "Net land position from purchases and sales with remaining balance."
  }, {
    name: "Awaz Ledger & Sale Report",
    cat: "Inventory & Ledger",
    desc: "Awaz-in and Awaz-out movements alongside sale activity."
  }, {
    name: "Dag-wise Ledger",
    cat: "Inventory & Ledger",
    desc: "Full transaction ledger grouped and balanced per dag."
  }, {
    name: "Donor-wise Ledger",
    cat: "Inventory & Ledger",
    desc: "Acquisitions and balances grouped by donor / seller."
  }, {
    name: "File-wise Ledger",
    cat: "Inventory & Ledger",
    desc: "All transactions and status grouped by case file number."
  }, {
    name: "Deed-wise Purchase/Sale Report",
    cat: "Inventory & Ledger",
    desc: "Purchase and sale activity indexed by registered deed."
  }, {
    name: "LT-wise Report",
    cat: "Inventory & Ledger",
    desc: "Land Trust / plot-holder position across the portfolio."
  }, {
    name: "File Legal Status Report",
    cat: "Legal & Dispute",
    desc: "Dispute and court status for every active case file."
  }, {
    name: "Block Stock Position Report",
    cat: "Operational",
    desc: "Available, disputed, and negotiated stock by project block."
  }, {
    name: "Bashundhara Received/Sent Report",
    cat: "Operational",
    desc: "Inter-entity land received and sent reconciliation."
  }, {
    name: "Asset Valuation Report",
    cat: "Operational",
    desc: "Indicative valuation of holdings by mouza and bucket."
  }, {
    name: "Khatian Cross-Reference Report",
    cat: "Inventory & Ledger",
    desc: "Cross-reference of dags against khatian records."
  }, {
    name: "Dag Detail Report",
    cat: "Inventory & Ledger",
    desc: "Complete printable profile for a single dag."
  }, {
    name: "CS → SA → RS → BS → City Mapping",
    cat: "Inventory & Ledger",
    desc: "Survey lineage mapping across all record generations."
  }, {
    name: "Khatian-wise Profile",
    cat: "Inventory & Ledger",
    desc: "Holdings and parties consolidated by khatian."
  }, {
    name: "Mouza-wise Drill-down",
    cat: "Operational",
    desc: "Drill into holding, status, and tax by mouza."
  }, {
    name: "Khajna Due Report",
    cat: "Khajna & Mutation",
    desc: "Outstanding and overdue land tax by dag and Bengali year."
  }, {
    name: "Mutation Pipeline Report",
    cat: "Khajna & Mutation",
    desc: "Namjari stages, SLA, and pending files across AC Land offices."
  }, {
    name: "Purchase/Sale Stock Register",
    cat: "Inventory & Ledger",
    desc: "Running stock register of purchase and sale entries."
  }, {
    name: "Audit Log Report",
    cat: "Audit",
    desc: "User actions, record changes, and access events with timestamps."
  }],
  // Dag-wise Ledger sample rows for the viewer
  dagLedgerReport: [{
    dag: "DAG-1182",
    mouza: "Baliadanga",
    govArea: "1.20",
    pSaf: "1.20",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "1.20",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1183",
    mouza: "Sripur",
    govArea: "0.75",
    pSaf: "0.75",
    pPower: "0.00",
    sSaf: "0.75",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "0.00",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Paid",
    mutation: "Under Review"
  }, {
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    govArea: "2.50",
    pSaf: "1.10",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.40",
    awazOut: "0.00",
    clean: "1.10",
    disputed: "0.90",
    neg: "0.40",
    khajna: "Overdue",
    mutation: "Hearing"
  }, {
    dag: "DAG-1185",
    mouza: "Baliadanga",
    govArea: "0.50",
    pSaf: "0.50",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "0.10",
    disputed: "0.00",
    neg: "0.40",
    khajna: "Due",
    mutation: "Under Review"
  }, {
    dag: "DAG-1186",
    mouza: "Sripur",
    govArea: "1.05",
    pSaf: "1.05",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "1.05",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1187",
    mouza: "Kalibari",
    govArea: "3.10",
    pSaf: "0.00",
    pPower: "0.00",
    sSaf: "3.10",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "0.00",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Overdue",
    mutation: "Approved"
  }, {
    dag: "DAG-1188",
    mouza: "Char Bhadrasan",
    govArea: "0.90",
    pSaf: "0.90",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.90",
    clean: "0.90",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1189",
    mouza: "Kalibari",
    govArea: "1.60",
    pSaf: "1.60",
    pPower: "0.00",
    sSaf: "0.00",
    sPower: "0.00",
    awazIn: "0.00",
    awazOut: "0.00",
    clean: "1.60",
    disputed: "0.00",
    neg: "0.00",
    khajna: "Due",
    mutation: "Submitted"
  }],
  // ---------- Users & Roles ----------
  roles: ["Chairman", "SVCF / Finance", "GM Land", "Land Officer", "Advocate", "Accounts", "Admin"],
  userKpis: [{
    label: "Total Users",
    value: "48",
    sub: "across all roles",
    icon: "users",
    tone: "neutral"
  }, {
    label: "Active Users",
    value: "41",
    sub: "signed in this month",
    icon: "check-circle",
    tone: "success"
  }, {
    label: "Pending Invites",
    value: "4",
    sub: "awaiting acceptance",
    icon: "mail",
    tone: "warning"
  }, {
    label: "2FA Enabled",
    value: "39",
    sub: "81% of users",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "Locked Accounts",
    value: "3",
    sub: "needs review",
    icon: "lock",
    tone: "destructive"
  }],
  users: [{
    name: "S. Rahman",
    email: "s.rahman@reliance.com",
    phone: "+880 17 1100 2201",
    role: "GM Land",
    dept: "Land Administration",
    status: "Active",
    twofa: true,
    lastLogin: "30 Jun 2026, 09:12"
  }, {
    name: "A. Karim",
    email: "a.karim@reliance.com",
    phone: "+880 17 1100 2244",
    role: "Land Officer",
    dept: "Field Operations",
    status: "Active",
    twofa: true,
    lastLogin: "30 Jun 2026, 08:40"
  }, {
    name: "N. Chowdhury",
    email: "n.chowdhury@reliance.com",
    phone: "+880 18 2200 5512",
    role: "Advocate",
    dept: "Legal",
    status: "Active",
    twofa: false,
    lastLogin: "29 Jun 2026, 17:25"
  }, {
    name: "M. Hasan",
    email: "m.hasan@reliance.com",
    phone: "+880 19 3300 7781",
    role: "Accounts",
    dept: "Finance",
    status: "Active",
    twofa: true,
    lastLogin: "30 Jun 2026, 07:55"
  }, {
    name: "R. Begum",
    email: "r.begum@reliance.com",
    phone: "+880 17 4400 9920",
    role: "Land Officer",
    dept: "Field Operations",
    status: "Active",
    twofa: true,
    lastLogin: "28 Jun 2026, 14:10"
  }, {
    name: "F. Ahmed",
    email: "f.ahmed@reliance.com",
    phone: "+880 18 5500 1133",
    role: "SVCF / Finance",
    dept: "Finance",
    status: "Active",
    twofa: true,
    lastLogin: "30 Jun 2026, 06:30"
  }, {
    name: "T. Islam",
    email: "t.islam@reliance.com",
    phone: "+880 19 6600 4456",
    role: "Accounts",
    dept: "Finance",
    status: "Locked",
    twofa: false,
    lastLogin: "12 Jun 2026, 11:02"
  }, {
    name: "K. Uddin",
    email: "k.uddin@reliance.com",
    phone: "+880 17 7700 8890",
    role: "Land Officer",
    dept: "Field Operations",
    status: "Pending",
    twofa: false,
    lastLogin: "—"
  }, {
    name: "J. Alam",
    email: "j.alam@reliance.com",
    phone: "+880 18 8800 3321",
    role: "Advocate",
    dept: "Legal",
    status: "Active",
    twofa: true,
    lastLogin: "27 Jun 2026, 16:48"
  }, {
    name: "Chairman Office",
    email: "chairman@reliance.com",
    phone: "+880 17 9900 0001",
    role: "Chairman",
    dept: "Executive",
    status: "Active",
    twofa: true,
    lastLogin: "29 Jun 2026, 19:05"
  }, {
    name: "L. Nguyen",
    email: "l.nguyen@reliance.com",
    phone: "+880 19 1010 2020",
    role: "Accounts",
    dept: "Finance",
    status: "Pending",
    twofa: false,
    lastLogin: "—"
  }, {
    name: "IT Admin",
    email: "admin@reliance.com",
    phone: "+880 17 0000 0000",
    role: "Admin",
    dept: "IT & Systems",
    status: "Active",
    twofa: true,
    lastLogin: "30 Jun 2026, 09:50"
  }],
  // Permission matrix: per-role module permissions
  permissionModules: ["Dashboard", "Inventory", "Dag Profile", "Transactions", "Dispute Management", "Kharij / Mutation", "Khajna", "Reports", "Users & Roles", "Audit Log", "Settings"],
  permissionCols: ["View", "Create", "Edit", "Delete", "Approve", "Export", "Sensitive Data Access"],
  permissionMatrix: {
    "Chairman": {
      "Dashboard": [1, 0, 0, 0, 1, 1, 1],
      "Inventory": [1, 0, 0, 0, 1, 1, 1],
      "Dag Profile": [1, 0, 0, 0, 1, 1, 1],
      "Transactions": [1, 0, 0, 0, 1, 1, 1],
      "Dispute Management": [1, 0, 0, 0, 1, 1, 1],
      "Kharij / Mutation": [1, 0, 0, 0, 1, 1, 1],
      "Khajna": [1, 0, 0, 0, 1, 1, 1],
      "Reports": [1, 0, 0, 0, 1, 1, 1],
      "Users & Roles": [1, 0, 0, 0, 1, 0, 1],
      "Audit Log": [1, 0, 0, 0, 0, 1, 1],
      "Settings": [1, 0, 0, 0, 1, 0, 1]
    },
    "SVCF / Finance": {
      "Dashboard": [1, 0, 0, 0, 1, 1, 1],
      "Inventory": [1, 0, 0, 0, 0, 1, 1],
      "Dag Profile": [1, 0, 0, 0, 0, 1, 1],
      "Transactions": [1, 1, 1, 0, 1, 1, 1],
      "Dispute Management": [1, 0, 0, 0, 0, 1, 0],
      "Kharij / Mutation": [1, 0, 0, 0, 0, 1, 0],
      "Khajna": [1, 1, 1, 0, 1, 1, 1],
      "Reports": [1, 0, 0, 0, 0, 1, 1],
      "Users & Roles": [0, 0, 0, 0, 0, 0, 0],
      "Audit Log": [1, 0, 0, 0, 0, 1, 0],
      "Settings": [1, 0, 0, 0, 0, 0, 0]
    },
    "GM Land": {
      "Dashboard": [1, 0, 0, 0, 1, 1, 1],
      "Inventory": [1, 1, 1, 0, 1, 1, 1],
      "Dag Profile": [1, 1, 1, 0, 1, 1, 1],
      "Transactions": [1, 1, 1, 1, 1, 1, 1],
      "Dispute Management": [1, 1, 1, 0, 1, 1, 1],
      "Kharij / Mutation": [1, 1, 1, 0, 1, 1, 1],
      "Khajna": [1, 1, 1, 0, 1, 1, 1],
      "Reports": [1, 1, 0, 0, 1, 1, 1],
      "Users & Roles": [1, 0, 0, 0, 0, 0, 0],
      "Audit Log": [1, 0, 0, 0, 0, 1, 1],
      "Settings": [1, 0, 1, 0, 0, 0, 0]
    },
    "Land Officer": {
      "Dashboard": [1, 0, 0, 0, 0, 1, 0],
      "Inventory": [1, 1, 1, 0, 0, 1, 0],
      "Dag Profile": [1, 1, 1, 0, 0, 1, 0],
      "Transactions": [1, 1, 1, 0, 0, 1, 0],
      "Dispute Management": [1, 1, 1, 0, 0, 1, 0],
      "Kharij / Mutation": [1, 1, 1, 0, 0, 1, 0],
      "Khajna": [1, 1, 1, 0, 0, 1, 0],
      "Reports": [1, 0, 0, 0, 0, 1, 0],
      "Users & Roles": [0, 0, 0, 0, 0, 0, 0],
      "Audit Log": [0, 0, 0, 0, 0, 0, 0],
      "Settings": [0, 0, 0, 0, 0, 0, 0]
    },
    "Advocate": {
      "Dashboard": [1, 0, 0, 0, 0, 0, 0],
      "Inventory": [1, 0, 0, 0, 0, 0, 0],
      "Dag Profile": [1, 0, 0, 0, 0, 1, 0],
      "Transactions": [1, 0, 0, 0, 0, 0, 0],
      "Dispute Management": [1, 1, 1, 0, 0, 1, 1],
      "Kharij / Mutation": [1, 0, 1, 0, 0, 1, 0],
      "Khajna": [0, 0, 0, 0, 0, 0, 0],
      "Reports": [1, 0, 0, 0, 0, 1, 0],
      "Users & Roles": [0, 0, 0, 0, 0, 0, 0],
      "Audit Log": [0, 0, 0, 0, 0, 0, 0],
      "Settings": [0, 0, 0, 0, 0, 0, 0]
    },
    "Accounts": {
      "Dashboard": [1, 0, 0, 0, 0, 1, 0],
      "Inventory": [1, 0, 0, 0, 0, 1, 0],
      "Dag Profile": [1, 0, 0, 0, 0, 1, 0],
      "Transactions": [1, 1, 1, 0, 0, 1, 1],
      "Dispute Management": [1, 0, 0, 0, 0, 0, 0],
      "Kharij / Mutation": [1, 0, 0, 0, 0, 1, 0],
      "Khajna": [1, 1, 1, 0, 1, 1, 1],
      "Reports": [1, 0, 0, 0, 0, 1, 1],
      "Users & Roles": [0, 0, 0, 0, 0, 0, 0],
      "Audit Log": [1, 0, 0, 0, 0, 1, 0],
      "Settings": [0, 0, 0, 0, 0, 0, 0]
    }
  },
  // ---------- Audit Log ----------
  auditActions: ["Create", "Update", "Delete", "Login", "Role Change", "Export", "Approval", "Dispute Lock", "Dispute Resolve"],
  auditModules: ["Inventory", "Dag Profile", "Transactions", "Dispute Management", "Kharij / Mutation", "Khajna", "Reports", "Users & Roles", "Settings"],
  auditKpis: [{
    label: "Total Events",
    value: "12,408",
    sub: "all time",
    icon: "history",
    tone: "neutral"
  }, {
    label: "Changes Today",
    value: "184",
    sub: "since midnight",
    icon: "activity",
    tone: "neutral"
  }, {
    label: "Sensitive Changes",
    value: "9",
    sub: "today",
    icon: "lock",
    tone: "destructive"
  }, {
    label: "Permission Changes",
    value: "3",
    sub: "today",
    icon: "sliders-horizontal",
    tone: "warning"
  }, {
    label: "Failed Login Attempts",
    value: "7",
    sub: "last 24h",
    icon: "alert-triangle",
    tone: "destructive"
  }],
  auditEvents: [{
    id: "EVT-90412",
    ts: "30 Jun 2026, 10:14:02",
    user: "S. Rahman",
    role: "GM Land",
    module: "Dispute Management",
    action: "Dispute Lock",
    record: "DC-1024",
    old: "Open",
    new: "Locked",
    ip: "103.41.12.8",
    risk: "High",
    sensitive: true
  }, {
    id: "EVT-90411",
    ts: "30 Jun 2026, 09:58:41",
    user: "A. Karim",
    role: "Land Officer",
    module: "Transactions",
    action: "Create",
    record: "DEED-7749",
    old: "—",
    new: "Purchase · 1.20 bigha",
    ip: "103.41.12.21",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90410",
    ts: "30 Jun 2026, 09:40:17",
    user: "IT Admin",
    role: "Admin",
    module: "Users & Roles",
    action: "Role Change",
    record: "t.islam@reliance.com",
    old: "Land Officer",
    new: "Accounts",
    ip: "10.0.4.2",
    risk: "Permission",
    sensitive: true
  }, {
    id: "EVT-90409",
    ts: "30 Jun 2026, 09:22:55",
    user: "M. Hasan",
    role: "Accounts",
    module: "Khajna",
    action: "Update",
    record: "DAG-1184",
    old: "Due",
    new: "Paid",
    ip: "103.41.12.44",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90408",
    ts: "30 Jun 2026, 09:05:30",
    user: "Chairman Office",
    role: "Chairman",
    module: "Reports",
    action: "Export",
    record: "RPT-2026-0412",
    old: "—",
    new: "Dag-wise Ledger (PDF)",
    ip: "103.41.12.2",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90407",
    ts: "30 Jun 2026, 08:51:09",
    user: "R. Begum",
    role: "Land Officer",
    module: "Kharij / Mutation",
    action: "Update",
    record: "MUT-2025-118",
    old: "Submitted",
    new: "Under Review",
    ip: "103.41.12.30",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90406",
    ts: "30 Jun 2026, 08:33:48",
    user: "unknown",
    role: "—",
    module: "Settings",
    action: "Login",
    record: "admin@reliance.com",
    old: "—",
    new: "Failed (bad password)",
    ip: "45.118.92.7",
    risk: "High",
    sensitive: true
  }, {
    id: "EVT-90405",
    ts: "30 Jun 2026, 08:20:12",
    user: "N. Chowdhury",
    role: "Advocate",
    module: "Dispute Management",
    action: "Dispute Resolve",
    record: "DC-1003",
    old: "In Court",
    new: "Resolved",
    ip: "103.41.12.61",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90404",
    ts: "29 Jun 2026, 19:48:33",
    user: "GM Land",
    role: "GM Land",
    module: "Transactions",
    action: "Delete",
    record: "DEED-7702",
    old: "Correction draft",
    new: "Deleted",
    ip: "103.41.12.8",
    risk: "High",
    sensitive: true
  }, {
    id: "EVT-90403",
    ts: "29 Jun 2026, 18:30:51",
    user: "F. Ahmed",
    role: "SVCF / Finance",
    module: "Transactions",
    action: "Approval",
    record: "F-2025-118",
    old: "Pending",
    new: "Approved",
    ip: "103.41.12.51",
    risk: "Normal",
    sensitive: false
  }, {
    id: "EVT-90402",
    ts: "29 Jun 2026, 17:12:09",
    user: "IT Admin",
    role: "Admin",
    module: "Settings",
    action: "Update",
    record: "SESSION_TIMEOUT",
    old: "30 min",
    new: "20 min",
    ip: "10.0.4.2",
    risk: "Permission",
    sensitive: true
  }, {
    id: "EVT-90401",
    ts: "29 Jun 2026, 16:05:44",
    user: "A. Karim",
    role: "Land Officer",
    module: "Dag Profile",
    action: "Update",
    record: "DAG-1185",
    old: "Clean 0.50",
    new: "Under negotiation 0.40",
    ip: "103.41.12.21",
    risk: "Normal",
    sensitive: false
  }],
  auditDetail: {
    id: "EVT-90410",
    ts: "30 Jun 2026, 09:40:17 (UTC+6)",
    user: "IT Admin",
    role: "Admin",
    module: "Users & Roles",
    action: "Role Change",
    risk: "Permission",
    sensitive: true,
    ip: "10.0.4.2",
    device: "Chrome 126 · Windows 11 · Desktop",
    session: "SES-7741-AB29C",
    record: "t.islam@reliance.com",
    old: "Land Officer",
    new: "Accounts",
    reason: "Reassigned to Finance department per HR transfer memo HR-2026-118. Approved by GM Land.",
    related: "Users & Roles › t.islam@reliance.com"
  },
  // ---------- Data Migration / Excel Import ----------
  migrationKpis: [{
    label: "Total Files",
    value: "26",
    sub: "uploaded sources",
    icon: "folder",
    tone: "neutral"
  }, {
    label: "Sheets Mapped",
    value: "73",
    sub: "of 84 sheets",
    icon: "table",
    tone: "neutral"
  }, {
    label: "Rows Imported",
    value: "48,210",
    sub: "into LIMS",
    icon: "database",
    tone: "success"
  }, {
    label: "Validation Errors",
    value: "312",
    sub: "need review",
    icon: "alert-triangle",
    tone: "destructive"
  }, {
    label: "Pending Review",
    value: "5 files",
    sub: "awaiting sign-off",
    icon: "clock",
    tone: "warning"
  }, {
    label: "Completed Imports",
    value: "19",
    sub: "signed off",
    icon: "check-circle",
    tone: "success"
  }],
  migrationFiles: [{
    name: "Faridpur_Land_Register_2019.xlsx",
    sheets: 6,
    rows: 12480,
    status: "Imported",
    updated: "28 Jun 2026"
  }, {
    name: "Sripur_Mouza_Khatian.xlsx",
    sheets: 3,
    rows: 5210,
    status: "Validating",
    updated: "29 Jun 2026"
  }, {
    name: "Awaz_Ledger_OldFormat.xls",
    sheets: 4,
    rows: 3104,
    status: "Mapping",
    updated: "30 Jun 2026"
  }, {
    name: "Khajna_Receipts_1428-1431.csv",
    sheets: 1,
    rows: 8890,
    status: "Errors",
    updated: "30 Jun 2026"
  }, {
    name: "Dispute_Cases_Legacy.xlsx",
    sheets: 2,
    rows: 642,
    status: "Pending review",
    updated: "27 Jun 2026"
  }, {
    name: "Kalibari_Purchase_Sale.xlsx",
    sheets: 5,
    rows: 9170,
    status: "Imported",
    updated: "25 Jun 2026"
  }],
  migrationProgress: [{
    label: "File mapping",
    pct: 87,
    color: "var(--primary)"
  }, {
    label: "Validation",
    pct: 64,
    color: "var(--warning)"
  }, {
    label: "Import",
    pct: 58,
    color: "var(--primary)"
  }, {
    label: "Reconciliation",
    pct: 32,
    color: "var(--warning)"
  }, {
    label: "Sign-off",
    pct: 19,
    color: "var(--success)"
  }],
  migrationBatches: [{
    id: "BATCH-0042",
    file: "Faridpur_Land_Register_2019.xlsx",
    rows: 12480,
    errors: 0,
    by: "A. Karim",
    date: "28 Jun 2026",
    status: "Completed"
  }, {
    id: "BATCH-0041",
    file: "Kalibari_Purchase_Sale.xlsx",
    rows: 9170,
    errors: 4,
    by: "R. Begum",
    date: "25 Jun 2026",
    status: "Completed"
  }, {
    id: "BATCH-0040",
    file: "Khajna_Receipts_1428-1431.csv",
    rows: 8890,
    errors: 312,
    by: "M. Hasan",
    date: "30 Jun 2026",
    status: "Errors"
  }, {
    id: "BATCH-0039",
    file: "Sripur_Mouza_Khatian.xlsx",
    rows: 5210,
    errors: 18,
    by: "A. Karim",
    date: "29 Jun 2026",
    status: "Partial"
  }, {
    id: "BATCH-0038",
    file: "Dispute_Cases_Legacy.xlsx",
    rows: 642,
    errors: 2,
    by: "N. Chowdhury",
    date: "27 Jun 2026",
    status: "Pending review"
  }],
  columnMapping: [{
    source: "DAG_NO",
    field: "Dag Number",
    required: true,
    sample: "DAG-1184"
  }, {
    source: "MOUZA_NAME",
    field: "Mouza",
    required: true,
    sample: "Char Bhadrasan"
  }, {
    source: "KHATIAN",
    field: "Khatian No.",
    required: true,
    sample: "KH-330"
  }, {
    source: "AREA_BIGHA",
    field: "Area (bigha)",
    required: true,
    sample: "2.50"
  }, {
    source: "DEED_NO",
    field: "Deed Number",
    required: false,
    sample: "DEED-7188"
  }, {
    source: "PARTY_NAME",
    field: "Counterparty",
    required: false,
    sample: "Hasan Ali"
  }, {
    source: "TX_TYPE",
    field: "Transaction Type",
    required: true,
    sample: "Purchase"
  }, {
    source: "REMARKS_BN",
    field: "Notes (Bengali)",
    required: false,
    sample: "দাগ সীমানা"
  }],
  validationSummary: {
    valid: 8266,
    warning: 312,
    error: 312
  },
  importPreview: [{
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    khatian: "KH-330",
    area: "2.50",
    type: "Purchase",
    note: "দাগ সীমানা যাচাই"
  }, {
    dag: "DAG-1185",
    mouza: "Baliadanga",
    khatian: "KH-205",
    area: "0.50",
    type: "Purchase",
    note: "—"
  }, {
    dag: "DAG-1186",
    mouza: "Sripur",
    khatian: "KH-119",
    area: "1.05",
    type: "Sale",
    note: "খারিজ সম্পন্ন"
  }, {
    dag: "DAG-1187",
    mouza: "Kalibari",
    khatian: "KH-402",
    area: "3.10",
    type: "Awaz In",
    note: "—"
  }],
  validationExceptions: [{
    row: 41,
    file: "Khajna_Receipts_1428-1431.csv",
    field: "Dag No.",
    issue: "Invalid dag format",
    type: "Invalid dag format",
    current: "1184/A",
    suggested: "DAG-1184",
    status: "Open"
  }, {
    row: 88,
    file: "Khajna_Receipts_1428-1431.csv",
    field: "Khatian",
    issue: "Required field missing",
    type: "Required field missing",
    current: "—",
    suggested: "Lookup from dag",
    status: "Open"
  }, {
    row: 102,
    file: "Sripur_Mouza_Khatian.xlsx",
    field: "Deed No.",
    issue: "Duplicate record",
    type: "Duplicate record",
    current: "DEED-7716",
    suggested: "Merge with row 44",
    status: "Warning"
  }, {
    row: 156,
    file: "Khajna_Receipts_1428-1431.csv",
    field: "Amount",
    issue: "Non-numeric value",
    type: "Required field missing",
    current: "৪২০০",
    suggested: "4200 (Bijoy→Unicode)",
    status: "Open"
  }, {
    row: 203,
    file: "Awaz_Ledger_OldFormat.xls",
    field: "Mouza",
    issue: "Unknown mouza",
    type: "Required field missing",
    current: "Char Bhadrason",
    suggested: "Char Bhadrasan",
    status: "Fixed"
  }, {
    row: 271,
    file: "Khajna_Receipts_1428-1431.csv",
    field: "Dag No.",
    issue: "Invalid dag format",
    type: "Invalid dag format",
    current: "DAG 1190",
    suggested: "DAG-1190",
    status: "Open"
  }, {
    row: 318,
    file: "Dispute_Cases_Legacy.xlsx",
    field: "Status",
    issue: "Unrecognized status",
    type: "Duplicate record",
    current: "in-court",
    suggested: "In Court",
    status: "Warning"
  }],
  // ---------- Notifications ----------
  notifications: [{
    id: 1,
    cat: "Mutation",
    icon: "file-signature",
    title: "Mutation pending over 30 days",
    msg: "MUT-2025-112 (DAG-1183) has been at the Hearing stage for 41 days.",
    priority: "High",
    time: "12 min ago",
    unread: true
  }, {
    id: 2,
    cat: "Khajna",
    icon: "banknote",
    title: "Khajna due in 30 days",
    msg: "৳ 3,42,000 across 14 dags is due before 1st Boishakh.",
    priority: "Medium",
    time: "1 hour ago",
    unread: true
  }, {
    id: 3,
    cat: "Dispute",
    icon: "lock",
    title: "Disputed dag locked",
    msg: "DAG-1184 (Char Bhadrasan) locked — sale & Awaz restricted.",
    priority: "High",
    time: "2 hours ago",
    unread: true
  }, {
    id: 4,
    cat: "Audit",
    icon: "history",
    title: "Permission change recorded",
    msg: "IT Admin changed the Accounts role permissions. Logged as EVT-90410.",
    priority: "Medium",
    time: "Today, 09:40",
    unread: false
  }, {
    id: 5,
    cat: "Data Import",
    icon: "database",
    title: "Excel import completed with 12 errors",
    msg: "BATCH-0040 imported 8,890 rows; 312 rows need review.",
    priority: "Medium",
    time: "Today, 08:15",
    unread: true
  }, {
    id: 6,
    cat: "Approval",
    icon: "check-circle",
    title: "Transaction approved",
    msg: "F. Ahmed approved file F-2025-118 for recording.",
    priority: "Low",
    time: "Yesterday",
    unread: false
  }, {
    id: 7,
    cat: "Dispute",
    icon: "gavel",
    title: "Hearing scheduled",
    msg: "DC-1019 (DAG-1162) next hearing set for 21 Jul 2025.",
    priority: "Medium",
    time: "Yesterday",
    unread: false
  }, {
    id: 8,
    cat: "System",
    icon: "refresh-cw",
    title: "Nightly backup completed",
    msg: "Database backup finished successfully at 02:00.",
    priority: "Low",
    time: "Yesterday",
    unread: false
  }],
  notificationCats: ["Dispute", "Mutation", "Khajna", "Approval", "Audit", "Data Import", "System"],
  // ---------- Dag Directory ----------
  dagDirectoryKpis: [{
    label: "Total Dags",
    value: "1,284",
    sub: "in registry",
    icon: "layers",
    tone: "neutral"
  }, {
    label: "Clean Dags",
    value: "1,043",
    sub: "no encumbrance",
    icon: "shield-check",
    tone: "success"
  }, {
    label: "Disputed Dags",
    value: "86",
    sub: "12 in court",
    icon: "gavel",
    tone: "destructive"
  }, {
    label: "Under Negotiation",
    value: "57",
    sub: "deals in progress",
    icon: "repeat",
    tone: "warning"
  }, {
    label: "Mutation Pending",
    value: "37",
    sub: "8 over 30 days",
    icon: "file-signature",
    tone: "warning"
  }, {
    label: "Khajna Due",
    value: "176",
    sub: "৳ 3,42,000",
    icon: "banknote",
    tone: "destructive"
  }],
  dags: [{
    dag: "DAG-1182",
    mouza: "Baliadanga",
    project: "Padma Riverfront — Phase I",
    khatian: "KH-205",
    clean: "1.20",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Due",
    mutation: "Approved"
  }, {
    dag: "DAG-1183",
    mouza: "Sripur",
    project: "Padma Riverfront — Phase I",
    khatian: "KH-118",
    clean: "0.00",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Paid",
    mutation: "Under Review"
  }, {
    dag: "DAG-1184",
    mouza: "Char Bhadrasan",
    project: "Padma Riverfront — Phase II",
    khatian: "KH-330",
    clean: "1.10",
    disputed: "0.90",
    neg: "0.40",
    status: "Disputed",
    khajna: "Overdue",
    mutation: "Hearing"
  }, {
    dag: "DAG-1185",
    mouza: "Baliadanga",
    project: "Padma Riverfront — Phase II",
    khatian: "KH-205",
    clean: "0.10",
    disputed: "0.00",
    neg: "0.40",
    status: "Under Negotiation",
    khajna: "Due Soon",
    mutation: "Under Review"
  }, {
    dag: "DAG-1186",
    mouza: "Sripur",
    project: "Padma Riverfront — Phase I",
    khatian: "KH-119",
    clean: "1.05",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1187",
    mouza: "Kalibari",
    project: "Sripur Industrial Park",
    khatian: "KH-402",
    clean: "0.00",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Overdue",
    mutation: "Approved"
  }, {
    dag: "DAG-1188",
    mouza: "Char Bhadrasan",
    project: "Padma Riverfront — Phase II",
    khatian: "KH-318",
    clean: "0.90",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1189",
    mouza: "Kalibari",
    project: "Sripur Industrial Park",
    khatian: "KH-399",
    clean: "1.60",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Due",
    mutation: "Submitted"
  }, {
    dag: "DAG-1162",
    mouza: "Char Bhadrasan",
    project: "Padma Riverfront — Phase II",
    khatian: "KH-318",
    clean: "0.00",
    disputed: "0.80",
    neg: "0.00",
    status: "Disputed",
    khajna: "Due",
    mutation: "Rejected"
  }, {
    dag: "DAG-1150",
    mouza: "Sripur",
    project: "Padma Riverfront — Phase I",
    khatian: "KH-119",
    clean: "2.30",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Paid",
    mutation: "Approved"
  }, {
    dag: "DAG-1148",
    mouza: "Baliadanga",
    project: "Padma Riverfront — Phase I",
    khatian: "KH-201",
    clean: "0.00",
    disputed: "0.00",
    neg: "0.55",
    status: "Under Negotiation",
    khajna: "Due",
    mutation: "Under Review"
  }, {
    dag: "DAG-1145",
    mouza: "Kalibari",
    project: "Sripur Industrial Park",
    khatian: "KH-399",
    clean: "2.20",
    disputed: "0.00",
    neg: "0.00",
    status: "Clean",
    khajna: "Paid",
    mutation: "Approved"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/data.js", error: String((e && e.message) || e) }); }

// ui_kits/lims/kit.jsx
try { (() => {
// LIMSKit — shared UX patterns for the Reliance LIMS screens:
// consistent status badges, empty / loading / error states.
// Exposes window.LIMSKit.
(function () {
  const {
    Skeleton,
    Button,
    Icon,
    Card,
    CardContent
  } = window.RelianceLIMSDesignSystem_12526c;

  // ---- Status badge: one soft pill style with a leading dot ----
  const TONES = {
    success: {
      bg: "rgba(22,163,74,0.12)",
      fg: "rgb(21,128,61)",
      dot: "var(--success)"
    },
    warning: {
      bg: "rgba(217,119,6,0.12)",
      fg: "rgb(180,83,9)",
      dot: "var(--warning)"
    },
    danger: {
      bg: "rgba(220,38,38,0.10)",
      fg: "rgb(185,28,28)",
      dot: "var(--destructive)"
    },
    neutral: {
      bg: "var(--muted)",
      fg: "var(--muted-foreground)",
      dot: "rgb(100,116,139)"
    },
    navy: {
      bg: "var(--brand-subtle)",
      fg: "var(--brand)",
      dot: "var(--brand)"
    }
  };
  // canonical status -> tone
  const STATUS_TONE = {
    "Clean": "success",
    "Recorded": "success",
    "Paid": "success",
    "Resolved": "success",
    "Available": "success",
    "Settled": "success",
    "Pending mutation": "warning",
    "Under negotiation": "warning",
    "Under Negotiation": "warning",
    "Pending": "warning",
    "Pending hearing": "warning",
    "Unresolved": "warning",
    "Under Review": "warning",
    "In Court": "warning",
    "Hearing Pending": "warning",
    "Hearing": "warning",
    "At risk": "warning",
    "Disputed": "danger",
    "Locked": "danger",
    "Overdue": "danger",
    "High-risk": "danger",
    "High": "danger",
    "Rejected": "danger",
    "Under verification": "neutral",
    "Draft": "neutral",
    "Open": "neutral",
    "Not Started": "neutral",
    "Submitted": "neutral",
    "On track": "success",
    "Approved": "success",
    "Medium": "warning",
    "Low": "neutral",
    "—": "neutral",
    "Due": "warning",
    "Due Soon": "warning",
    "Receipt missing": "warning",
    "Active": "success",
    "Inactive": "neutral",
    "Imported": "success",
    "Completed": "success",
    "Validating": "warning",
    "Mapping": "warning",
    "Partial": "warning",
    "Errors": "danger",
    "Pending review": "warning",
    "Open": "warning",
    "Warning": "warning",
    "Fixed": "success"
  };
  const TYPE_TONE = {
    "Purchase": "neutral",
    "Sale": "navy",
    "Awaz": "navy",
    "Khajna": "neutral"
  };
  function Pill({
    tone,
    children
  }) {
    const t = TONES[tone] || TONES.neutral;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 9px 2px 8px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        color: t.fg,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: t.dot,
        flexShrink: 0
      }
    }), children);
  }
  function StatusBadge({
    status
  }) {
    return /*#__PURE__*/React.createElement(Pill, {
      tone: STATUS_TONE[status] || "neutral"
    }, status);
  }
  function TypeBadge({
    type
  }) {
    const t = TONES[TYPE_TONE[type] || "neutral"];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 9px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        color: t.fg,
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "var(--font-sans)",
        lineHeight: 1.5,
        whiteSpace: "nowrap"
      }
    }, type);
  }

  // ---- Empty state ----
  function EmptyState({
    icon = "folder",
    title,
    detail,
    actionLabel,
    onAction,
    compact
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 10,
        padding: compact ? "28px 24px" : "48px 24px",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--radius-lg)",
        background: "var(--muted)",
        color: "var(--muted-foreground)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600
      }
    }, title), detail ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--muted-foreground)",
        maxWidth: 380,
        lineHeight: "var(--leading-normal)"
      }
    }, detail) : null, actionLabel ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onAction,
      style: {
        marginTop: 4
      }
    }, actionLabel) : null);
  }

  // ---- Error state ----
  function ErrorState({
    title = "Couldn't load data",
    detail = "The registry service did not respond. Check your connection and try again.",
    onRetry
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 10,
        padding: "44px 24px",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--radius-lg)",
        background: "rgba(220,38,38,0.10)",
        color: "var(--destructive)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-circle",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: "var(--muted-foreground)",
        maxWidth: 380,
        lineHeight: "var(--leading-normal)"
      }
    }, detail), onRetry ? /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: onRetry,
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 14
    }), "Retry") : null);
  }

  // ---- Loading skeletons ----
  function KpiSkeleton() {
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: 90,
      height: 12
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: 34,
      height: 34,
      radius: "var(--radius-md)"
    })), /*#__PURE__*/React.createElement(Skeleton, {
      width: 120,
      height: 26,
      style: {
        marginTop: 12
      }
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: 80,
      height: 11,
      style: {
        marginTop: 8
      }
    })));
  }
  function TableSkeleton({
    rows = 5,
    cols = 6
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 16px 16px"
      }
    }, Array.from({
      length: rows
    }).map((_, r) => /*#__PURE__*/React.createElement("div", {
      key: r,
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 16,
        padding: "12px 0",
        borderBottom: "1px solid var(--border)"
      }
    }, Array.from({
      length: cols
    }).map((_, c) => /*#__PURE__*/React.createElement(Skeleton, {
      key: c,
      width: c === 0 ? "70%" : "55%",
      height: 13
    })))));
  }

  // ---- Fake async load hook ----
  function useFakeLoad(ms = 650) {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      setLoading(true);
      const id = setTimeout(() => setLoading(false), ms);
      return () => clearTimeout(id);
    }, []);
    return loading;
  }
  window.LIMSKit = {
    StatusBadge,
    TypeBadge,
    Pill,
    EmptyState,
    ErrorState,
    KpiSkeleton,
    TableSkeleton,
    useFakeLoad
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lims/kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableBody = __ds_scope.TableBody;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.TableHead = __ds_scope.TableHead;

__ds_ns.TableCell = __ds_scope.TableCell;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.RadioGroupItem = __ds_scope.RadioGroupItem;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsTrigger = __ds_scope.TabsTrigger;

__ds_ns.TabsContent = __ds_scope.TabsContent;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DialogFooter = __ds_scope.DialogFooter;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

})();
