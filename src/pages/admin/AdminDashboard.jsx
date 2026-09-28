import { useState } from "react"
import { AlignLeft, AlertTriangle, Bell, Calendar, CheckCircle2, Clock, FileText, LogOut, MapPin, Moon, Plus, Search, Settings, ShieldCheck, SlidersHorizontal, Sun, UserPlus, Users, X } from "lucide-react"
import { useNavigate } from "react-router"
import { getStoredUser, logout } from "../../services/apiReader.js"
import Brand from "../../components/PageUI/Brand.jsx"
import styles from "./AdminDashboard.module.css"

const navItems = [
  ["Overview", AlignLeft], ["Schedule", Calendar], ["Employees", Users], ["Assignments", FileText], ["Locations", MapPin], ["Availability", SlidersHorizontal], ["Time Off", Calendar], ["Reports", FileText],
]

const themePalettes = {
  light: {
    default: { "--admin-bg": "#f9f9f7", "--admin-sidebar": "#f2f2ef", "--admin-card": "#ffffff", "--admin-muted": "#e8e8e5", "--admin-border": "#e0e0db", "--admin-text": "#2c2c2a", "--admin-subtle": "#73736e", "--admin-primary-contrast": "#ffffff" },
    ocean: { "--admin-bg": "#f0f9ff", "--admin-sidebar": "#e0f2fe", "--admin-card": "#ffffff", "--admin-muted": "#bae6fd", "--admin-border": "#7dd3fc", "--admin-text": "#164e63", "--admin-subtle": "#0e7490", "--admin-primary-contrast": "#ffffff" },
    forest: { "--admin-bg": "#f0fdf4", "--admin-sidebar": "#dcfce7", "--admin-card": "#ffffff", "--admin-muted": "#bbf7d0", "--admin-border": "#86efac", "--admin-text": "#14532d", "--admin-subtle": "#15803d", "--admin-primary-contrast": "#ffffff" },
    sunset: { "--admin-bg": "#fff7ed", "--admin-sidebar": "#ffedd5", "--admin-card": "#ffffff", "--admin-muted": "#fed7aa", "--admin-border": "#fdba74", "--admin-text": "#7c2d12", "--admin-subtle": "#c2410c", "--admin-primary-contrast": "#ffffff" },
  },
  dark: {
    default: { "--admin-bg": "#111110", "--admin-sidebar": "#161614", "--admin-card": "#1c1c1a", "--admin-muted": "#252523", "--admin-border": "#343432", "--admin-text": "#f0f0ec", "--admin-subtle": "#a3a39c", "--admin-primary-contrast": "#111110" },
    ocean: { "--admin-bg": "#071820", "--admin-sidebar": "#0b2530", "--admin-card": "#102f3d", "--admin-muted": "#16465a", "--admin-border": "#23627a", "--admin-text": "#e0f2fe", "--admin-subtle": "#7dd3fc", "--admin-primary-contrast": "#071820" },
    forest: { "--admin-bg": "#07170d", "--admin-sidebar": "#0d2414", "--admin-card": "#14331e", "--admin-muted": "#1b4d2a", "--admin-border": "#2d6a3d", "--admin-text": "#dcfce7", "--admin-subtle": "#86efac", "--admin-primary-contrast": "#07170d" },
    sunset: { "--admin-bg": "#1c0d07", "--admin-sidebar": "#2a140b", "--admin-card": "#3a1b0e", "--admin-muted": "#572914", "--admin-border": "#7c3f20", "--admin-text": "#ffedd5", "--admin-subtle": "#fdba74", "--admin-primary-contrast": "#1c0d07" },
  },
}

const customColorFallbacks = {
  light: { primary: "#2c2c2a", background: "#f9f9f7", sidebar: "#f2f2ef", card: "#ffffff", muted: "#73736e", surface: "#e8e8e5", border: "#e0e0db" },
  dark: { primary: "#f0f0ec", background: "#111110", sidebar: "#161614", card: "#1c1c1a", muted: "#a3a39c", surface: "#252523", border: "#343432" },
}

const emptyEmployeeForm = { name: "", email: "", phone: "", roles: ["Kitchen"], accessLevel: "Employee" }

export default function AdminDashboard() {
  const navigate = useNavigate()
  const user = getStoredUser()
  const [activePage, setActivePage] = useState("Overview")
  const [collapsed, setCollapsed] = useState(false)
  const [search, setSearch] = useState("")
  const [notice, setNotice] = useState("")
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationsRead, setNotificationsRead] = useState(false)
  const [screeningTab, setScreeningTab] = useState("Today's")
  const [screeningFilter, setScreeningFilter] = useState("All")
  const [adminHubTab, setAdminHubTab] = useState("Employee Management")
  const [displayMode, setDisplayMode] = useState(() => localStorage.getItem("adminDisplayMode") || "light")
  const [employees, setEmployees] = useState(() => {
    try {
      const storedEmployees = JSON.parse(localStorage.getItem("adminEmployees")) || []
      return storedEmployees.map((employee) => ({ ...employee, roles: (employee.roles || [employee.team]).filter((role) => role === "Kitchen" || role === "Cleaning"), accessLevel: employee.accessLevel || employee.role || "Employee" }))
    } catch { return [] }
  })
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [employeeForm, setEmployeeForm] = useState(emptyEmployeeForm)
  const [employeeFormError, setEmployeeFormError] = useState("")
  const [theme, setTheme] = useState(() => localStorage.getItem("adminTheme") || "default")
  const [customColors, setCustomColors] = useState(() => {
    try { return JSON.parse(localStorage.getItem("adminCustomColors")) || {} } catch { return {} }
  })

  function selectPage(page) {
    setActivePage(page)
    setNotice(page === "Overview" ? "" : `${page} workspace is ready for backend data.`)
  }

  const today = new Date()
  const adminIdentity = user?.email || "Admin account"
  const adminHeaderName = adminIdentity.slice(0, 5)
  const formattedDate = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(today)
  const greeting = today.getHours() < 12 ? "Good morning" : today.getHours() < 18 ? "Good afternoon" : "Good evening"
  const unavailableAction = (action) => setNotice(`${action} is ready for backend integration.`)
  const screeningEmptyMessage = screeningTab === "Staff Duty"
    ? `No ${screeningFilter === "All" ? "staff duty" : screeningFilter.toLowerCase()} assignments are available yet.`
    : `No ${screeningFilter === "All" ? "assignment" : screeningFilter.toLowerCase()} data is available from the backend yet.`

  function chooseScreeningTab(tab) {
    setScreeningTab(tab)
    setNotice(`${tab} screening selected. Results will appear when assignment data is available.`)
  }

  function chooseScreeningFilter(filter) {
    setScreeningFilter(filter)
    setNotice(`${filter} screening filter selected.`)
  }

  function markAllNotificationsRead() {
    setNotificationsRead(true)
    setNotice("All notifications are marked as read.")
  }

  function signOut() { logout(); navigate("/auth/login", { replace: true }) }
  function chooseTheme(nextTheme) { setTheme(nextTheme); localStorage.setItem("adminTheme", nextTheme) }
  function chooseDisplayMode(nextMode) { setDisplayMode(nextMode); localStorage.setItem("adminDisplayMode", nextMode) }
  function customColorKey(name) { return `${displayMode}${name[0].toUpperCase()}${name.slice(1)}` }
  function customColorValue(name) { return customColors[customColorKey(name)] || (displayMode === "light" ? customColors[name] : undefined) || customColorFallbacks[displayMode][name] }
  function chooseColor(name, value) {
    const nextColors = { ...customColors, [customColorKey(name)]: value }
    setCustomColors(nextColors)
    localStorage.setItem("adminCustomColors", JSON.stringify(nextColors))
    chooseTheme("custom")
  }

  function updateEmployeeForm(event) {
    setEmployeeForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function toggleEmployeeRole(role) {
    setEmployeeFormError("")
    setEmployeeForm((current) => ({ ...current, roles: current.roles.includes(role) ? current.roles.filter((item) => item !== role) : [...current.roles, role] }))
  }

  function addEmployee(event) {
    event.preventDefault()
    const name = employeeForm.name.trim()
    const email = employeeForm.email.trim()
    const phone = employeeForm.phone.trim()
    if (!name || !email || !phone) return
    if (employeeForm.roles.length === 0) {
      setEmployeeFormError("Select at least one work role.")
      return
    }
    setEmployees((current) => {
      const nextEmployees = [...current, { ...employeeForm, id: globalThis.crypto?.randomUUID?.() || String(Date.now()), name, email, phone }]
      localStorage.setItem("adminEmployees", JSON.stringify(nextEmployees))
      return nextEmployees
    })
    setEmployeeForm(emptyEmployeeForm)
    setEmployeeFormError("")
    setShowAddEmployee(false)
    setNotice(`${name} was added to the local employee list.`)
  }

  const themeStyles = theme === "custom"
    ? { "--admin-bg": customColorValue("background"), "--admin-sidebar": customColorValue("sidebar"), "--admin-card": customColorValue("card"), "--admin-muted": customColorValue("surface"), "--admin-border": customColorValue("border"), "--admin-text": customColorValue("primary"), "--admin-subtle": customColorValue("muted"), "--admin-primary-contrast": displayMode === "dark" ? customColorValue("background") : "#ffffff" }
    : themePalettes[displayMode][theme]

  function renderSettings() {
    const colors = [
      { key: "primary", label: "Primary and text" },
      { key: "background", label: "Page background" },
      { key: "sidebar", label: "Sidebar" },
      { key: "card", label: "Header and cards" },
      { key: "surface", label: "Muted surfaces" },
      { key: "muted", label: "Muted text" },
      { key: "border", label: "Borders" },
    ]
    return <section className="admin-settings-page" aria-labelledby="admin-settings-title">
      <div className="admin-settings-heading"><div><p className="admin-eyebrow">Preferences</p><h2 id="admin-settings-title">Settings</h2><p>Customize the admin workspace independently in light and dark mode.</p></div><button className="admin-settings-back" onClick={() => selectPage("Overview")}>Overview</button></div>
      <section className="admin-settings-card">
        <h3>Appearance</h3>
        <p>Choose a display mode and palette. Custom colors are saved separately for light and dark mode.</p>
        <div className="admin-mode-options" aria-label="Display mode">
          <button className={displayMode === "light" ? "is-selected" : ""} onClick={() => chooseDisplayMode("light")} aria-pressed={displayMode === "light"}><Sun size={17} /><span><strong>Light</strong><small>Bright workspace</small></span></button>
          <button className={displayMode === "dark" ? "is-selected" : ""} onClick={() => chooseDisplayMode("dark")} aria-pressed={displayMode === "dark"}><Moon size={17} /><span><strong>Dark</strong><small>Low-light workspace</small></span></button>
        </div>
        <div className="admin-theme-options">{Object.entries({ default: "Neutral", ocean: "Ocean", forest: "Forest", sunset: "Sunset", custom: "Custom" }).map(([value, label]) => <button key={value} className={`admin-theme-option${theme === value ? " is-selected" : ""}`} onClick={() => chooseTheme(value)} aria-pressed={theme === value}><span className={`admin-theme-swatch admin-theme-${value}`} />{label}</button>)}</div>
        {theme === "custom" && <div className="admin-custom-colors">{colors.map((color) => <label className="admin-color-control" key={`${displayMode}-${color.key}`}><input type="color" value={customColorValue(color.key)} onChange={(event) => chooseColor(color.key, event.target.value)} /><span>{color.label}<small>{customColorValue(color.key).toUpperCase()}</small></span></label>)}</div>}
      </section>
      <section className="admin-settings-card"><h3>Admin workspace</h3><p>Admin-only controls for staffing, locations, and operational reporting will appear here when their backend services are connected.</p></section>
    </section>
  }

  function renderScheduleControls() {
    return <aside className="admin-controls-panel" aria-label="Schedule controls"><div><h2>Schedule Controls</h2><p>Actions for operational schedule</p></div><section><h3>Quick Actions</h3><div className="admin-control-actions"><button className="admin-control-primary" onClick={() => unavailableAction("Create Assignment")}><Plus size={16} /> Create Assignment</button><button onClick={() => unavailableAction("Assign Employee")}><UserPlus size={16} /> Assign Employee</button><button onClick={() => unavailableAction("Replace Employee")}><Users size={16} /> Replace Employee</button><button onClick={() => unavailableAction("Change Time")}><Clock size={16} /> Change Time</button><button onClick={() => unavailableAction("Change Location")}><MapPin size={16} /> Change Location</button></div></section><section><h3>Staffing Actions</h3><div className="admin-staffing-alert"><div><AlertTriangle size={16} /><strong>Live staffing data unavailable</strong></div><button onClick={() => unavailableAction("Resolve staffing conflicts")}>Resolve staffing conflicts</button></div></section><section><h3>Selected Assignment</h3><div className="admin-selected-empty"><Search size={22} /><p>Select an assignment from the schedule to view contextual controls.</p></div></section></aside>
  }

  function renderAdminHub() {
    const tabs = ["Employee Management", "Roles & Permissions", "Locations & Venues", "Appearance"]
    return <section className="admin-hub-page" aria-labelledby="admin-hub-title">
      <div className="admin-hub-heading"><div><p className="admin-eyebrow">Administration</p><h2 id="admin-hub-title">Admin Hub</h2><p>Workspace management and configuration.</p></div><button className="admin-settings-back" onClick={() => selectPage("Overview")}>Overview</button></div>
      <div className="admin-hub-layout">
        <nav className="admin-hub-tabs" aria-label="Admin Hub sections">{tabs.map((tab) => <button key={tab} className={adminHubTab === tab ? "is-active" : ""} onClick={() => setAdminHubTab(tab)}>{tab}</button>)}</nav>
        <div className="admin-hub-content">
          {adminHubTab === "Employee Management" && <div className="admin-hub-card">
            <div className="admin-hub-card-heading"><div><h3>Employee Management</h3><p>Add and review employees in this local dashboard prototype.</p></div><button className="admin-control-primary" onClick={() => { setEmployeeFormError(""); setShowAddEmployee(true) }}><Plus size={15} /> Add Employee</button></div>
            {employees.length === 0 ? <div className="admin-hub-empty"><Users size={24} /><p>No employees added yet. Use Add Employee to test the workflow.</p></div> : <div className="admin-employee-list">{employees.map((employee) => {
              const workRoles = employee.roles?.length ? employee.roles : [employee.team].filter(Boolean)
              return <article key={employee.id} className="admin-employee-row"><span className="admin-employee-avatar">{employee.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</span><div><strong>{employee.name}</strong><span>{employee.email}</span><span>{employee.phone || "No phone number"}</span></div><span className="admin-employee-team">{workRoles.join(" · ") || "No roles"}</span><span className="admin-employee-role">{employee.accessLevel || employee.role || "Employee"}</span></article>
            })}</div>}
          </div>}
          {adminHubTab === "Roles & Permissions" && <div className="admin-hub-card"><h3>Roles &amp; Permissions</h3><p>Permissions remain controlled by the backend account role.</p><div className="admin-role-info"><strong>ADMIN</strong><span>Full access to the Admin dashboard and Admin Hub.</span></div><div className="admin-role-info"><strong>USER / EMPLOYEE</strong><span>Employee workspace access only.</span></div></div>}
          {adminHubTab === "Locations & Venues" && <div className="admin-hub-card"><h3>Locations &amp; Venues</h3><p>Location management will appear when location APIs are available.</p><div className="admin-hub-empty"><MapPin size={24} /><p>No location data is available from the backend yet.</p></div></div>}
          {adminHubTab === "Appearance" && <div className="admin-hub-appearance">{renderSettings()}</div>}
        </div>
      </div>
    </section>
  }

  return <div className={`${styles.shell} admin-shell${collapsed ? " admin-shell-collapsed" : ""}`} style={themeStyles} data-color-scheme={displayMode}>
    <aside className="admin-sidebar" aria-label="Admin sidebar">
      <Brand compact={collapsed} />
      <button className="admin-collapse" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}><span>{collapsed ? "›" : "‹"}</span></button>
      <nav className="admin-nav" aria-label="Admin navigation">{navItems.map(([label, Icon]) => <button key={label} className={`admin-nav-item${activePage === label ? " is-active" : ""}`} onClick={() => selectPage(label)} title={collapsed ? label : undefined}><Icon size={17} /><span>{label}</span></button>)}</nav>
      <div className="admin-sidebar-footer"><button className={`admin-nav-item${activePage === "Admin Hub" ? " is-active" : ""}`} onClick={() => selectPage("Admin Hub")} title={collapsed ? "Admin Hub" : undefined}><ShieldCheck size={17} /><span>Admin Hub</span></button><button className="admin-nav-item" onClick={signOut} title={collapsed ? "Log out" : undefined}><LogOut size={17} /><span>Log out</span></button></div>
    </aside>
    <main className="admin-main">
      <header className="admin-header"><div className="admin-header-title"><h1>{activePage === "Overview" ? "Overview" : activePage}</h1><p>{formattedDate} · {greeting}</p></div><div className="admin-header-actions">{activePage !== "Overview" && activePage !== "Admin Hub" && <div className="admin-search"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search anything..." aria-label="Search assignment or staff" /></div>}<span className="admin-user-avatar" aria-label={adminIdentity}>{adminIdentity.slice(0, 2).toUpperCase()}</span><span className="admin-user-name" title={adminIdentity}>{adminHeaderName}</span><button className="admin-header-icon" onClick={() => setShowNotifications(true)} aria-label="Notifications"><Bell size={17} /></button><button className="admin-header-icon admin-settings-button" onClick={() => selectPage("Admin Hub")} aria-label="Open settings"><Settings size={17} /></button></div></header>
      <div className="admin-content">
        <div className="admin-content-heading"><div><h1>{activePage === "Overview" ? "Today, Tuesday 16 September" : activePage}</h1><p>{activePage === "Overview" ? "Week 38" : "Workspace tools and operational controls"}</p></div>{activePage === "Overview" && <span className="admin-week-badge">Week 38</span>}</div>
        {notice && <div className="admin-notice" role="status">{notice}</div>}
        {activePage === "Admin Hub" ? renderAdminHub() : activePage === "Settings" ? renderAdminHub() : activePage === "Overview" ? <>
          <section className="admin-kpis" aria-label="Operations summary"><button onClick={() => selectPage("Schedule")}><span>Today's Assignments</span><strong>—</strong><small>Live data unavailable</small></button><button onClick={() => selectPage("Employees")}><span>Staff on Duty</span><strong>—</strong><small>Live data unavailable</small></button><button className="admin-kpi-alert" onClick={() => selectPage("Reports")}><span>Action Needed</span><strong>—</strong><small>Live data unavailable</small></button><button onClick={() => selectPage("Time Off")}><span>Pending Requests</span><strong>—</strong><small>Live data unavailable</small></button></section>
          <section className="admin-overview-workspace"><div className="admin-overview-main"><div className="admin-section-heading"><h2>Today's Schedule</h2><button onClick={() => selectPage("Schedule")}>View full week →</button></div><div className="admin-schedule-placeholder"><Calendar size={24} /><h3>Schedule data unavailable</h3><p>Connect the scheduling API to show live assignments and staffing coverage.</p></div></div><aside className="admin-screening"><div className="admin-screening-heading"><h2>Screening Details</h2><button onClick={() => setNotice("Use the tabs and team filters below to screen assignments.")} aria-label="Screening options"><SlidersHorizontal size={15} /></button></div><div className="admin-tabs">{["Today's", "Staff Duty"].map((tab) => <button key={tab} className={screeningTab === tab ? "is-active" : ""} onClick={() => chooseScreeningTab(tab)} aria-pressed={screeningTab === tab}>{tab}</button>)}</div><div className="admin-screening-summary"><strong>{screeningTab === "Staff Duty" ? "Staff duty unavailable" : "Assignments unavailable"}</strong><span>{screeningFilter} · Local filter</span></div><div className="admin-filter-pills">{["All", "Kitchen", "Cleaning"].map((filter) => <button key={filter} className={screeningFilter === filter ? "is-active" : ""} onClick={() => chooseScreeningFilter(filter)} aria-pressed={screeningFilter === filter}>{filter}</button>)}</div><div className="admin-assignment-list"><div className="admin-assignment-empty" aria-live="polite">{screeningEmptyMessage}</div></div></aside></section>
          {renderScheduleControls()}
        </> : <section className="admin-placeholder"><div className="admin-placeholder-icon"><CheckCircle2 size={26} /></div><h2>{activePage} is ready</h2><p>The reference layout is in place. Connect this workspace to its backend data when the corresponding API is available.</p><button onClick={() => selectPage("Overview")}>Return to overview</button></section>}
      </div>
    </main>
    {showNotifications && <div className="admin-overlay" onClick={() => setShowNotifications(false)}><section className="admin-notifications-panel" role="dialog" aria-modal="true" aria-labelledby="admin-notifications-title" onClick={(event) => event.stopPropagation()}><div className="admin-overlay-heading"><div><p className="admin-eyebrow">Inbox</p><h2 id="admin-notifications-title">Notifications</h2></div><button onClick={() => setShowNotifications(false)} aria-label="Close notifications">×</button></div><div className="admin-notifications-empty"><Bell size={24} /><h3>{notificationsRead ? "You're all caught up" : "No notifications yet"}</h3><p>Assignment and staffing updates will appear here when the backend provides them.</p></div><div className="admin-notifications-footer"><button className="admin-mark-read" onClick={markAllNotificationsRead}>Mark all as read</button></div></section></div>}
    {showAddEmployee && <div className="admin-modal-overlay" onClick={() => setShowAddEmployee(false)}><section className="admin-employee-modal" role="dialog" aria-modal="true" aria-labelledby="add-employee-title" onClick={(event) => event.stopPropagation()}>
      <div className="admin-modal-heading"><div><p className="admin-eyebrow">Employee Management</p><h2 id="add-employee-title">Add employee</h2><p>Create a local employee record to test the Admin Hub workflow.</p></div><button type="button" onClick={() => setShowAddEmployee(false)} aria-label="Close add employee"><X size={18} /></button></div>
      <form className="admin-employee-form" onSubmit={addEmployee}>
        <label><span>Full name</span><input name="name" value={employeeForm.name} onChange={updateEmployeeForm} placeholder="Anna Jensen" autoFocus required /></label>
        <label><span>Email address</span><input name="email" type="email" value={employeeForm.email} onChange={updateEmployeeForm} placeholder="anna@example.com" required /></label>
        <label><span>Phone number</span><input name="phone" type="tel" value={employeeForm.phone} onChange={updateEmployeeForm} placeholder="+45 12 34 56 78" autoComplete="tel" required /></label>
        <fieldset className="admin-role-fieldset"><legend>Work roles</legend><p>Select one or more roles.</p><div className="admin-role-options">{["Kitchen", "Cleaning"].map((role) => <label key={role}><input type="checkbox" checked={employeeForm.roles.includes(role)} onChange={() => toggleEmployeeRole(role)} /><span>{role}</span></label>)}</div>{employeeFormError && <span className="admin-form-error" role="alert">{employeeFormError}</span>}</fieldset>
        <label><span>Access level</span><select name="accessLevel" value={employeeForm.accessLevel} onChange={updateEmployeeForm}><option>Employee</option><option>Team Lead</option><option>Manager</option></select></label>
        <div className="admin-modal-actions"><button type="button" onClick={() => setShowAddEmployee(false)}>Cancel</button><button className="admin-control-primary" type="submit"><Plus size={15} /> Add employee</button></div>
      </form>
    </section></div>}
  </div>
}
