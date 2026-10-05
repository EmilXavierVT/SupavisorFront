import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Brand from "../../../components/PageUI/Brand.jsx"
import Icon from "../../../components/PageUI/Icon.jsx"
import useEmployeeProfile from "../../../hooks/useEmployeeProfile.js"
import { getAssignments, logout } from "../../../services/apiReader.js"
import styles from "./EmployeeOverview.module.css"

function storedContactInfo() {
  try { return JSON.parse(localStorage.getItem("employeeContactInfo")) || { email: "", phone: "" } } catch { return { email: "", phone: "" } }
}

function formatAssignmentDate(value, options = { dateStyle: "medium", timeStyle: "short" }) {
  if (!value) return "Not provided"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Not provided"
  return new Intl.DateTimeFormat("en-GB", options).format(date)
}

function assignmentStartDate(assignment) {
  const date = assignment?.startTime ? new Date(assignment.startTime) : null
  return date && !Number.isNaN(date.getTime()) ? date : null
}

function startOfLocalDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date, days) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

function dateKey(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function localTimeZoneLabel() {
  return new Intl.DateTimeFormat().resolvedOptions().timeZone || "local time"
}

function buildUpcomingCalendar(assignments, anchorDate) {
  const start = startOfLocalDay(anchorDate)
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(start, index)
    return { date, key: dateKey(date), assignments: [] }
  })
  const daysByKey = new Map(days.map((day) => [day.key, day]))
  const later = []
  const unscheduled = []

  assignments.forEach((assignment) => {
    const startDate = assignmentStartDate(assignment)
    if (!startDate) {
      unscheduled.push(assignment)
      return
    }
    if (startDate < start) return
    const day = daysByKey.get(dateKey(startDate))
    if (day) day.assignments.push(assignment)
    else later.push(assignment)
  })

  days.forEach((day) => day.assignments.sort((a, b) => assignmentStartDate(a) - assignmentStartDate(b)))
  later.sort((a, b) => assignmentStartDate(a) - assignmentStartDate(b))
  return { days, later, unscheduled }
}

function assignmentStatus(assignment) {
  return String(assignment?.state || (assignment?.isActive === false ? "inactive" : "planned")).replace(/_/g, " ").toLowerCase()
}

function assignmentResources(assignment) {
  if (Array.isArray(assignment?.resources)) return assignment.resources
  if (Array.isArray(assignment?.products)) return assignment.products
  if (Array.isArray(assignment?.productIds)) return assignment.productIds.map((id) => ({ id, name: `Resource ${id}` }))
  return []
}

function assignmentNotes(assignment) {
  return assignment?.notes || assignment?.note || assignment?.description || assignment?.taskDescription || ""
}

export default function EmployeeOverview() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [activeView, setActiveView] = useState("overview")
  const [notice, setNotice] = useState("")
  const [theme, setTheme] = useState(() => localStorage.getItem("employeeTheme") || "default")
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationsRead, setNotificationsRead] = useState(false)
  const [assignmentsState, setAssignmentsState] = useState({ items: [], loading: false, error: "" })
  const [assignmentLoadAttempt, setAssignmentLoadAttempt] = useState(0)
  const [selectedAssignment, setSelectedAssignment] = useState(null)
  const [contactInfo, setContactInfo] = useState(storedContactInfo)
  const [contactDraft, setContactDraft] = useState(storedContactInfo)
  const [customColors, setCustomColors] = useState(() => {
    try { return JSON.parse(localStorage.getItem("employeeCustomColors")) || {} } catch { return {} }
  })
  const { user, loading, error, retry } = useEmployeeProfile()
  const identity = contactInfo.email || user?.email || "Your account"
  const headerName = identity.slice(0, 5)
  const phoneNumber = contactInfo.phone || user?.phoneNumber || "Not provided"
  const avatar = identity === "Your account" ? "?" : identity.slice(0, 2).toUpperCase()
  const today = new Date()
  const date = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(today)
  const greeting = today.getHours() < 12 ? "Good morning" : today.getHours() < 18 ? "Good afternoon" : "Good evening"

  useEffect(() => {
    if (!user) return
    setContactDraft((current) => ({ email: current.email || user.email || "", phone: current.phone || user.phoneNumber || "" }))
  }, [user])

  useEffect(() => {
    if (!user?.id) return
    const controller = new AbortController()
    let active = true

    async function loadAssignments() {
      setAssignmentsState((current) => ({ ...current, loading: true, error: "" }))
      try {
        const data = await getAssignments({ activeOnly: true, signal: controller.signal })
        const items = Array.isArray(data) ? data : []
        const permittedItems = items
          .sort((a, b) => new Date(a.startTime || 0) - new Date(b.startTime || 0))
        if (active) setAssignmentsState({ items: permittedItems, loading: false, error: "" })
      } catch (error) {
        if (!active || error.name === "AbortError") return
        const message = error.status === 401
          ? "Your session has expired. Please sign in again."
          : error.status === 403 ? "The server did not permit access to your assignments." : error.message || "Unable to load your assignments."
        setAssignmentsState({ items: [], loading: false, error: message })
      }
    }

    loadAssignments()
    return () => { active = false; controller.abort() }
  }, [user?.id, assignmentLoadAttempt])

  function signOut() { logout(); navigate("/auth/login", { replace: true }) }
  function changeView(view) { setNotice(""); setActiveView(view) }
  function chooseTheme(nextTheme) { setTheme(nextTheme); localStorage.setItem("employeeTheme", nextTheme) }
  function chooseCustomColor(name, value) {
    const nextColors = { ...customColors, [name]: value }
    setCustomColors(nextColors)
    localStorage.setItem("employeeCustomColors", JSON.stringify(nextColors))
    setTheme("custom")
    localStorage.setItem("employeeTheme", "custom")
  }
  function unavailable(feature) { setNotice(`${feature} is not connected to the backend yet.`) }
  function markAllNotificationsRead() {
    setNotificationsRead(true)
    setNotice("All notifications are marked as read.")
  }
  function retryAssignments() {
    setAssignmentsState((current) => ({ ...current, loading: true, error: "" }))
    setAssignmentLoadAttempt((value) => value + 1)
  }
  function openAssignmentDetails(assignment) {
    setSelectedAssignment(assignment)
  }
  function closeAssignmentDetails() {
    setSelectedAssignment(null)
  }
  function updateContactDraft(event) { setContactDraft((current) => ({ ...current, [event.target.name]: event.target.value })) }
  function saveContactInfo(event) {
    event.preventDefault()
    const nextContact = { email: contactDraft.email.trim(), phone: contactDraft.phone.trim() }
    if (!nextContact.email || !nextContact.phone) return
    setContactInfo(nextContact)
    setContactDraft(nextContact)
    localStorage.setItem("employeeContactInfo", JSON.stringify(nextContact))
    setNotice("Your contact information was saved on this device.")
  }

  const themeStyles = {
    default: { "--page-primary": "#343432", "--page-background": "#f9f9f7", "--page-sidebar": "#f2f2ef", "--page-card": "#ffffff", "--page-muted": "#e8e8e5", "--page-border": "#e0e0db" },
    ocean: { "--page-primary": "#075985", "--page-background": "#f0f9ff", "--page-sidebar": "#e0f2fe", "--page-card": "#ffffff", "--page-muted": "#bae6fd", "--page-border": "#7dd3fc" },
    forest: { "--page-primary": "#166534", "--page-background": "#f0fdf4", "--page-sidebar": "#dcfce7", "--page-card": "#ffffff", "--page-muted": "#bbf7d0", "--page-border": "#86efac" },
    sunset: { "--page-primary": "#9a3412", "--page-background": "#fff7ed", "--page-sidebar": "#ffedd5", "--page-card": "#ffffff", "--page-muted": "#fed7aa", "--page-border": "#fdba74" },
    custom: { "--page-primary": customColors.primary || "#343432", "--page-background": customColors.background || "#f9f9f7", "--page-sidebar": customColors.sidebar || "#f2f2ef", "--page-card": customColors.card || "#ffffff", "--page-muted": customColors.muted || "#e8e8e5", "--page-border": customColors.border || "#e0e0db" },
  }

  function renderSchedule() {
    const assignments = assignmentsState.items
    const calendar = buildUpcomingCalendar(assignments, today)
    const visibleCalendarCount = calendar.days.reduce((count, day) => count + day.assignments.length, 0)
    return <section className="employee-page-view employee-schedule-view" aria-labelledby="schedule-title">
      <div className="employee-view-heading"><div><p className="employee-eyebrow">Planning</p><h2 id="schedule-title">My Schedule</h2><p>Open an assignment to review the permitted details before work starts.</p></div><button className="employee-secondary-button" onClick={() => changeView("overview")}><Icon name="chevron-left" size={16} /> Overview</button></div>
      {assignmentsState.error && <div className="page-error employee-profile-error" role="alert"><span>{assignmentsState.error}</span><button onClick={retryAssignments}>Try again</button></div>}
      <div className="employee-week-toolbar"><button aria-label="Previous period" onClick={() => unavailable("Calendar navigation")}><Icon name="chevron-left" /></button><strong>Upcoming 7 days</strong><button aria-label="Next period" onClick={() => unavailable("Calendar navigation")}><Icon name="chevron-right" /></button></div>
      <div className="employee-schedule-grid">
        {assignmentsState.loading ? <div className="employee-schedule-empty" role="status"><span className="employee-empty-icon"><Icon name="calendar" size={28} /></span><h3>Loading assignments</h3><p>Fetching the work the server permits you to view.</p></div>
          : assignments.length === 0 ? <div className="employee-schedule-empty"><span className="employee-empty-icon"><Icon name="calendar" size={28} /></span><h3>No assignment details available</h3><p>Your assigned work will appear here when the backend returns permitted assignments for your account.</p><button className="employee-outline-button" onClick={retryAssignments}><Icon name="calendar" size={15} /> Check for updates</button></div>
            : <>
              <div className="employee-calendar-meta"><span>{visibleCalendarCount} assignment{visibleCalendarCount === 1 ? "" : "s"} in this window</span><span>Times shown in {localTimeZoneLabel()}</span></div>
              <div className="employee-calendar-grid" aria-label="Upcoming assignment calendar">{calendar.days.map((day) => <section className="employee-calendar-day" key={day.key} aria-labelledby={`employee-calendar-day-${day.key}`}><header><span>{formatAssignmentDate(day.date, { weekday: "short" })}</span><strong id={`employee-calendar-day-${day.key}`}>{formatAssignmentDate(day.date, { day: "numeric" })}</strong><small>{formatAssignmentDate(day.date, { month: "short" })}</small></header>{day.assignments.length === 0 ? <p>No work</p> : <div>{day.assignments.map((assignment) => <button className="employee-calendar-event" key={assignment.id} type="button" onClick={() => openAssignmentDetails(assignment)}><time dateTime={assignment.startTime}>{formatAssignmentDate(assignment.startTime, { timeStyle: "short" })}</time><span>{assignment.name || `Assignment ${assignment.id}`}</span><small>{assignment.address || "No location provided"}</small></button>)}</div>}</section>)}</div>
              {(calendar.later.length > 0 || calendar.unscheduled.length > 0) && <section className="employee-calendar-extra" aria-label="Additional assignments"><h3>More assigned work</h3><div className="employee-assignment-list">{[...calendar.later, ...calendar.unscheduled].map((assignment) => <button className="employee-assignment-card" key={assignment.id} type="button" onClick={() => openAssignmentDetails(assignment)}><span><strong>{assignment.name || `Assignment ${assignment.id}`}</strong><small>{formatAssignmentDate(assignment.startTime)} · {assignment.address || "No location provided"}</small></span><em>{assignmentStatus(assignment)}</em><Icon name="chevron-right" size={16} /></button>)}</div></section>}
            </>}
      </div>
    </section>
  }

  function renderAssignmentDetails() {
    if (!selectedAssignment) return null
    const resources = assignmentResources(selectedAssignment)
    const notes = assignmentNotes(selectedAssignment)
    return <div className="employee-overlay" role="presentation" onClick={closeAssignmentDetails}>
      <section className="employee-assignment-details-panel" role="dialog" aria-modal="true" aria-labelledby="assignment-details-title" onClick={(event) => event.stopPropagation()}>
        <div className="employee-overlay-heading"><div><p className="employee-eyebrow">Assignment details</p><h2 id="assignment-details-title">{selectedAssignment.name || `Assignment ${selectedAssignment.id}`}</h2></div><button onClick={closeAssignmentDetails} aria-label="Close assignment details">×</button></div>
        <dl className="employee-detail-grid">
          <div><dt>Task</dt><dd>{selectedAssignment.name || "Not provided"}</dd></div>
          <div><dt>Status</dt><dd className="employee-detail-status-pill">{assignmentStatus(selectedAssignment)}</dd></div>
          <div><dt>Starts</dt><dd>{formatAssignmentDate(selectedAssignment.startTime)}</dd></div>
          <div><dt>Ends</dt><dd>{formatAssignmentDate(selectedAssignment.estimatedEndTime)}</dd></div>
          <div><dt>Location</dt><dd>{selectedAssignment.address || "No location provided"}</dd></div>
          <div><dt>Estimated time</dt><dd>{selectedAssignment.estimatedMinutes ? `${selectedAssignment.estimatedMinutes} minutes` : "Not provided"}</dd></div>
        </dl>
        <section className="employee-detail-section"><h3>Notes</h3><p>{notes || "No permitted notes have been added for this assignment."}</p></section>
        <section className="employee-detail-section"><h3>Resources</h3>{resources.length === 0 ? <p>No required, recommended, or informational resources are available for this assignment.</p> : <ul>{resources.map((resource) => <li key={resource.id ?? resource.productNumber ?? resource.name}>{resource.name || resource.productNumber || `Resource ${resource.id}`}</li>)}</ul>}</section>
      </section>
    </div>
  }

  function renderSettings() {
    return <section className="employee-page-view employee-settings-view" aria-labelledby="settings-title">
      <div className="employee-view-heading"><div><p className="employee-eyebrow">Preferences</p><h2 id="settings-title">Settings</h2><p>Personalize the appearance of your workspace.</p></div><button className="employee-secondary-button" onClick={() => changeView("overview")}><Icon name="chevron-left" size={16} /> Overview</button></div>
      <section className="employee-settings-panel" aria-labelledby="appearance-title"><div><h3 id="appearance-title">Appearance</h3><p>Choose a color theme or customize the workspace colors. Changes are saved on this device.</p></div><div className="employee-theme-options">{Object.entries({ default: "Neutral", ocean: "Ocean", forest: "Forest", sunset: "Sunset", custom: "Custom" }).map(([value, label]) => <button key={value} className={`employee-theme-option employee-theme-${value}${theme === value ? " is-selected" : ""}`} onClick={() => chooseTheme(value)} aria-pressed={theme === value}><span className="employee-theme-swatch" /><span>{label}</span>{theme === value && <Icon name="circle-check" size={16} />}</button>)}</div>{theme === "custom" && <div className="employee-custom-colors">{[{ key: "primary", label: "Primary and buttons", fallback: "#343432" }, { key: "background", label: "Page background", fallback: "#f9f9f7" }, { key: "sidebar", label: "Sidebar", fallback: "#f2f2ef" }, { key: "card", label: "Header and cards", fallback: "#ffffff" }, { key: "muted", label: "Muted surfaces", fallback: "#e8e8e5" }, { key: "border", label: "Borders", fallback: "#e0e0db" }].map((color) => <label className="employee-color-control" key={color.key}><input type="color" value={customColors[color.key] || color.fallback} onChange={(event) => chooseCustomColor(color.key, event.target.value)} /><span>{color.label}<small>{(customColors[color.key] || color.fallback).toUpperCase()}</small></span></label>)}</div>}</section>
      <section className="employee-settings-panel"><div><h3>Contact information</h3><p>Edit the email address and phone number shown in your workspace.</p></div><form className="employee-contact-form" onSubmit={saveContactInfo}><label><span>Email address</span><input name="email" type="email" value={contactDraft.email} onChange={updateContactDraft} placeholder="your@email.com" autoComplete="email" required /></label><label><span>Phone number</span><input name="phone" type="tel" value={contactDraft.phone} onChange={updateContactDraft} placeholder="+45 12 34 56 78" autoComplete="tel" required /></label><div className="employee-contact-actions"><button type="submit">Save contact info</button></div></form><p className="employee-contact-note">Changes are stored locally until account editing is connected to the backend.</p></section>
    </section>
  }

  function renderOverview() {
    const nextAssignment = assignmentsState.items[0]
    const upcomingAssignments = assignmentsState.items.slice(0, 4)
    return <>
      {loading && <div className="employee-profile-status" role="status">Loading your account details…</div>}
      {error && <div className="page-error employee-profile-error" role="alert"><span>{error}</span><button onClick={retry}>Try again</button></div>}
      <section className="employee-stats" aria-label="Shift and leave summary">
        <article className="employee-stat-card is-clickable" role="button" tabIndex={0} onClick={() => nextAssignment ? openAssignmentDetails(nextAssignment) : changeView("schedule")} onKeyDown={(event) => event.key === "Enter" && (nextAssignment ? openAssignmentDetails(nextAssignment) : changeView("schedule"))}><div className="employee-stat-heading"><h2>Next Shift</h2><span><Icon name="calendar-check" size={16} /></span></div><p className="employee-stat-value">{nextAssignment ? formatAssignmentDate(nextAssignment.startTime, { weekday: "short", day: "numeric", month: "short" }) : "Unavailable"}</p><p className="employee-stat-caption"><Icon name="map-pin" size={12} /> {nextAssignment?.address || nextAssignment?.name || "Shift details are not available yet."}</p></article>
        <article className="employee-stat-card is-clickable" role="button" tabIndex={0} onClick={() => changeView("schedule")} onKeyDown={(event) => event.key === "Enter" && changeView("schedule")}><div className="employee-stat-heading"><h2>Hours this week</h2><span><Icon name="clock" size={16} /></span></div><p className="employee-stat-value">— <span>hours</span></p><p className="employee-stat-caption">Weekly hours are not available yet.</p><div className="employee-hours-track" aria-hidden="true" /></article>
        <article className="employee-stat-card is-clickable" role="button" tabIndex={0} onClick={() => unavailable("Time off requests")} onKeyDown={(event) => event.key === "Enter" && unavailable("Time off requests")}><div className="employee-stat-heading"><h2>Time Off Balance</h2><span><Icon name="circle-check" size={16} /></span></div><p className="employee-stat-value">— <span>days</span></p><span className="employee-time-off-link">Request Time Off →</span><p className="employee-stat-caption">Leave balances are not available yet.</p></article>
      </section>
      <section className="employee-upcoming" aria-labelledby="employee-shifts-title"><h2 id="employee-shifts-title">My Upcoming Shifts</h2>{assignmentsState.loading ? <div className="employee-empty-shifts" role="status"><span className="employee-empty-icon"><Icon name="calendar" size={28} /></span><h3>Loading shifts</h3><p>Fetching permitted assignment details from the backend.</p></div> : upcomingAssignments.length === 0 ? <div className="employee-empty-shifts"><span className="employee-empty-icon"><Icon name="calendar" size={28} /></span><h3>Shift information is unavailable</h3><p>Your upcoming shifts will appear here when scheduling is available.</p><button className="employee-outline-button" onClick={() => changeView("schedule")}>View Schedule <Icon name="chevron-right" size={14} /></button></div> : <div className="employee-assignment-list" aria-label="Upcoming permitted assignments">{upcomingAssignments.map((assignment) => <button className="employee-assignment-card" key={assignment.id} type="button" onClick={() => openAssignmentDetails(assignment)}><span><strong>{assignment.name || `Assignment ${assignment.id}`}</strong><small>{formatAssignmentDate(assignment.startTime)} · {assignment.address || "No location provided"}</small></span><em>{assignmentStatus(assignment)}</em><Icon name="chevron-right" size={16} /></button>)}</div>}</section>
    </>
  }

  return (
    <div className={`${styles.shell} app-page employee-page${collapsed ? " employee-page-collapsed" : ""}`} style={themeStyles[theme]}>
      <a className="employee-skip-link" href="#employee-content">Skip to overview</a>
      <aside className="employee-sidebar" aria-label="Employee sidebar">
        <Brand compact={collapsed} />
        <button className="employee-collapse" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} aria-expanded={!collapsed} onClick={() => setCollapsed((value) => !value)}><Icon name={collapsed ? "chevron-right" : "chevron-left"} size={12} /></button>
        <nav className="employee-navigation" aria-label="Employee navigation"><button className={`employee-nav-item${activeView === "overview" ? " employee-nav-active" : ""}`} onClick={() => changeView("overview")} title="My Overview"><Icon name="align-left" /><span>My Overview</span></button><button className={`employee-nav-item${activeView === "schedule" ? " employee-nav-active" : ""}`} onClick={() => changeView("schedule")} title="My Schedule"><Icon name="calendar" /><span>My Schedule</span></button></nav>
        <div className="employee-sidebar-footer"><button className="employee-nav-item" onClick={signOut} title="Log out"><Icon name="log-out" /><span>Log out</span></button></div>
      </aside>

      <main className="employee-main" id="employee-content" tabIndex={-1}>
        <header className="employee-header"><div className="employee-header-title"><h1>{activeView === "schedule" ? "My Schedule" : activeView === "settings" ? "Settings" : "My Overview"}</h1><p>{date} · {greeting}, <span title={identity}>{headerName}</span>.</p></div><div className="employee-header-controls"><button className="employee-icon-button" onClick={() => setShowNotifications(true)} aria-label="Notifications"><Icon name="bell" /></button><span className="employee-avatar" aria-label={identity} title={identity}>{avatar}</span><button className="employee-icon-button employee-settings" onClick={() => changeView("settings")} aria-label="Open settings" title="Open settings"><Icon name="settings" size={16} /></button></div></header>
        <div className="employee-body"><div className="employee-overview"><div className="employee-overview-inner">{notice && <div className="employee-notice" role="status">{notice}</div>}{activeView === "overview" ? renderOverview() : activeView === "schedule" ? renderSchedule() : renderSettings()}</div></div>{activeView === "overview" && <aside className="employee-actions" aria-label="Employee actions"><div className="employee-actions-intro"><h2>Employee Actions</h2><p>Manage your schedule and requests</p></div><section className="employee-action-section"><h3>Quick Actions</h3><div className="employee-quick-actions"><button onClick={() => unavailable("Shift change requests")}><Icon name="clock" size={16} /> Request shift change</button><button className="employee-sick-button" onClick={() => unavailable("Sick reports")}><Icon name="triangle-alert" size={16} /> Report sick</button><button onClick={() => unavailable("Time off requests")}><Icon name="calendar" size={16} /> Request time off</button></div><p className="employee-unavailable-note">Actions will submit once the backend supports them.</p></section><section className="employee-action-section"><h3>Messages &amp; Updates</h3><button className="employee-update-card" onClick={() => setNotice("Notifications are not connected to the backend yet.")}><span><Icon name="bell" size={14} /></span><span><strong>Updates unavailable</strong><small>Schedule updates are not available yet.</small></span></button></section><section className="employee-action-section employee-account"><h3>Your Account</h3><dl><div><dt>Email</dt><dd>{identity}</dd></div><div><dt>Phone</dt><dd>{loading ? "Loading…" : error && phoneNumber === "Not provided" ? "Unavailable" : phoneNumber}</dd></div></dl></section></aside>}</div>
      </main>
      {renderAssignmentDetails()}
      {showNotifications && <div className="employee-overlay" role="presentation" onClick={() => setShowNotifications(false)}><section className="employee-notifications-panel" role="dialog" aria-modal="true" aria-labelledby="notifications-title" onClick={(event) => event.stopPropagation()}><div className="employee-overlay-heading"><div><p className="employee-eyebrow">Inbox</p><h2 id="notifications-title">Notifications</h2></div><button onClick={() => setShowNotifications(false)} aria-label="Close notifications">×</button></div><div className="employee-notifications-empty"><Icon name="bell" size={24} /><h3>{notificationsRead ? "You're all caught up" : "No notifications yet"}</h3><p>New schedule and account updates will appear here when the backend provides them.</p></div><div className="employee-notifications-footer"><button className="employee-mark-read" onClick={markAllNotificationsRead}>Mark all as read</button></div></section></div>}
      <nav className="employee-mobile-nav" aria-label="Employee mobile navigation"><button onClick={() => changeView("overview")} aria-current={activeView === "overview" ? "page" : undefined}><Icon name="align-left" size={22} /><span>Overview</span></button><button onClick={() => changeView("schedule")} aria-current={activeView === "schedule" ? "page" : undefined}><Icon name="calendar" size={22} /><span>Schedule</span></button><button onClick={() => changeView("settings")} aria-current={activeView === "settings" ? "page" : undefined}><Icon name="settings" size={22} /><span>Settings</span></button><button onClick={signOut}><Icon name="log-out" size={22} /><span>Log out</span></button></nav>
    </div>
  )
}
