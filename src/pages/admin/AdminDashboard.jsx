import { useEffect, useState } from "react"
import { AlignLeft, Bell, Calendar, Clock, FileText, LogOut, MapPin, Moon, Package, Plus, Search, Settings, ShieldCheck, SlidersHorizontal, Sun, Users, X } from "lucide-react"
import { useNavigate } from "react-router"
import { activateAssignment, correctAssignmentAttendance, createAssignment, createEconomicCustomer, createEconomicProduct, createProject, createRole, createUser, deactivateAssignment, deleteAssignment, deleteProject, deleteRole, getAssignments, getEconomicCustomers, getEconomicProducts, getProjects, getRolesByTenant, getStoredUser, getUsersByTenant, logout, previewAssignmentOverlaps, toggleUserActivation, updateAssignment, updateProject, updateUser, updateUserCustomRoles } from "../../services/apiReader.js"
import Brand from "../../components/PageUI/Brand.jsx"
import styles from "./AdminDashboard.module.css"

const navItems = [
  ["Overview", AlignLeft], ["Users", Users], ["Roles", ShieldCheck], ["Assignments", Calendar], ["Projects", FileText], ["Customers", Users], ["Products", Package],
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
const emptyAssignmentForm = { name: "", address: "", estimatedMinutes: "", cost: "", assignedEmployeeId: "", startTime: "", estimatedEndTime: "", overrideReason: "", isActive: true, productIds: [] }
const emptyUserForm = { name: "", email: "", phoneNumber: "", primaryCategory: "", role: "USER", customRoleIds: "" }
const emptyProjectForm = { name: "", description: "", status: "DRAFT", assignmentIds: [], customerId: "" }
const emptyCustomerForm = { name: "", email: "", address: "", postalCode: "", city: "", country: "Denmark", currency: "DKK", customerGroupNumber: "1", paymentTermsNumber: "1", vatZoneNumber: "1" }
const emptyProductForm = { productNumber: "", name: "", description: "", salesPrice: "", costPrice: "", recommendedPrice: "", barCode: "", productGroupNumber: "1", unitNumber: "", barred: false }

function normalizeEconomicList(response) {
  if (Array.isArray(response)) return response
  if (Array.isArray(response?.collection)) return response.collection
  if (Array.isArray(response?.items)) return response.items
  if (Array.isArray(response?.data)) return response.data
  return []
}

function textOrNull(value) {
  const text = String(value ?? "").trim()
  return text || null
}

function numberOrNull(value) {
  if (value === "" || value == null) return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

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
  const [showAssignmentModal, setShowAssignmentModal] = useState(false)
  const [assignmentModalMode, setAssignmentModalMode] = useState("create")
  const [editingAssignmentId, setEditingAssignmentId] = useState(null)
  const [assignmentForm, setAssignmentForm] = useState(emptyAssignmentForm)
  const [assignmentFormError, setAssignmentFormError] = useState("")
  const [assignmentOverlapConflicts, setAssignmentOverlapConflicts] = useState([])
  const [showUserModal, setShowUserModal] = useState(false)
  const [userModalMode, setUserModalMode] = useState("create")
  const [editingUser, setEditingUser] = useState(null)
  const [userForm, setUserForm] = useState(emptyUserForm)
  const [userFormError, setUserFormError] = useState("")
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [projectModalMode, setProjectModalMode] = useState("create")
  const [editingProject, setEditingProject] = useState(null)
  const [projectForm, setProjectForm] = useState(emptyProjectForm)
  const [projectFormError, setProjectFormError] = useState("")
  const [customerForm, setCustomerForm] = useState(emptyCustomerForm)
  const [customerFormError, setCustomerFormError] = useState("")
  const [productForm, setProductForm] = useState(emptyProductForm)
  const [productFormError, setProductFormError] = useState("")
  const [theme, setTheme] = useState(() => localStorage.getItem("adminTheme") || "default")
  const [customColors, setCustomColors] = useState(() => {
    try { return JSON.parse(localStorage.getItem("adminCustomColors")) || {} } catch { return {} }
  })
  const [backendData, setBackendData] = useState({ employees: [], roles: [], assignments: [], projects: [], customers: [], products: [], loading: true, error: "" })
  const [reloadKey, setReloadKey] = useState(0)
  const [selectedScheduleItem, setSelectedScheduleItem] = useState(null)
  const [draggedScheduleItem, setDraggedScheduleItem] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadDashboardData() {
      if (!user?.tenantId) {
        setBackendData((current) => ({ ...current, loading: false, error: "Your session has no tenant ID, so company data cannot be loaded." }))
        return
      }

      setBackendData((current) => ({ ...current, loading: true, error: "" }))
      try {
        const [employees, roles, assignments, projects, customers, products] = await Promise.all([
          getUsersByTenant(user.tenantId, { signal: controller.signal }),
          getRolesByTenant(user.tenantId, { signal: controller.signal }),
          getAssignments({ signal: controller.signal }),
          getProjects({ signal: controller.signal }),
          getEconomicCustomers({ signal: controller.signal }),
          getEconomicProducts({ signal: controller.signal }),
        ])
        if (!active) return
        setBackendData({ employees, roles, assignments, projects, customers: normalizeEconomicList(customers), products: normalizeEconomicList(products), loading: false, error: "" })
      } catch (error) {
        if (!active || error.name === "AbortError") return
        setBackendData((current) => ({ ...current, loading: false, error: error.message || "Unable to load company data." }))
      }
    }

    loadDashboardData()
    return () => { active = false; controller.abort() }
  }, [user?.tenantId, reloadKey])

  function selectPage(page) {
    setActivePage(page)
    setNotice("")
  }

  const today = new Date()
  const adminIdentity = user?.email || "Admin account"
  const adminHeaderName = adminIdentity.slice(0, 5)
  const formattedDate = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(today)
  const greeting = today.getHours() < 12 ? "Good morning" : today.getHours() < 18 ? "Good afternoon" : "Good evening"
  const backendEmployees = backendData.employees
  const backendRoles = backendData.roles
  const backendAssignments = backendData.assignments
  const backendProjects = backendData.projects
  const backendCustomers = backendData.customers
  const backendProducts = backendData.products
  const tenantEmployeeIds = new Set(backendEmployees.map((employee) => employee.id))
  const tenantAssignments = backendAssignments.filter((assignment) => assignment.tenantId ? assignment.tenantId === user?.tenantId : !assignment.assignedEmployeeId || tenantEmployeeIds.has(assignment.assignedEmployeeId))
  const activeAssignments = backendAssignments.filter((assignment) => assignment.isActive !== false)
  const inactiveAssignments = backendAssignments.length - activeAssignments.length
  const activeEmployees = backendEmployees.filter((employee) => employee.isActive !== false)
  const activeAdmins = backendEmployees.filter((employee) => employee.isActive !== false && employee.roles?.some((role) => role.toUpperCase() === "ADMIN"))
  const filteredAssignments = activeAssignments.filter((assignment) => screeningFilter === "All" || assignment.name?.toLowerCase().includes(screeningFilter.toLowerCase()))
  const screeningEmptyMessage = screeningTab === "Staff Duty" ? "No staff duty assignments are available." : "No assignments match this filter."
  const entitySearch = search.trim().toLowerCase()
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
  const calendarStart = new Date(monthStart)
  calendarStart.setDate(monthStart.getDate() - ((monthStart.getDay() + 6) % 7))
  const calendarDays = Array.from({ length: 35 }, (_, index) => {
    const date = new Date(calendarStart)
    date.setDate(calendarStart.getDate() + index)
    return date
  })

  const selectedProject = selectedScheduleItem?.project
  const selectedAssignment = selectedScheduleItem?.assignment

  function chooseScreeningTab(tab) { setScreeningTab(tab) }
  function chooseScreeningFilter(filter) { setScreeningFilter(filter) }

  function assignmentDate(assignment) {
    const date = (assignment.startTime || assignment.date) ? new Date(assignment.startTime || assignment.date) : null
    return date && !Number.isNaN(date.getTime()) ? date : null
  }

  function sameDay(first, second) {
    return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate()
  }

  function scheduledProjectItemsForDay(day) {
    return backendAssignments.flatMap((assignment) => {
      const date = assignmentDate(assignment)
      if (!date || !sameDay(date, day)) return []
      const project = backendProjects.find((item) => item.assignmentIds?.includes(assignment.id)) || null
      return [{ project, assignment, date }]
    })
  }

  const scheduledAssignmentCount = backendAssignments.filter((assignment) => assignmentDate(assignment)).length

  function formatLocalDateTime(date) {
    const pad = (value) => String(value).padStart(2, "0")
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:00`
  }

  function normalizeDateTimeInput(value) {
    if (!value) return null
    return value.length === 16 ? `${value}:00` : value
  }

  function assignmentRequestBody(payload) {
    return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== null && value !== undefined && value !== ""))
  }

  function moveAssignmentToDate(item, day) {
    if (!item?.assignment) return
    const currentDate = assignmentDate(item.assignment)
    const nextDate = new Date(day)
    nextDate.setHours(currentDate?.getHours() ?? 9, currentDate?.getMinutes() ?? 0, 0, 0)
    const currentEnd = item.assignment.estimatedEndTime ? new Date(item.assignment.estimatedEndTime) : null
    const currentStart = currentDate
    let nextEndTime = item.assignment.estimatedEndTime
    if (currentStart && currentEnd && !Number.isNaN(currentEnd.getTime())) {
      const nextEnd = new Date(nextDate.getTime() + (currentEnd.getTime() - currentStart.getTime()))
      nextEndTime = formatLocalDateTime(nextEnd)
    }
    runAction("Assignment moved on the calendar.", () => updateAssignment(item.assignment.id, assignmentRequestBody({ ...item.assignment, startTime: formatLocalDateTime(nextDate), estimatedEndTime: nextEndTime, date: undefined })))
    setSelectedScheduleItem({ ...item, assignment: { ...item.assignment, startTime: formatLocalDateTime(nextDate) } })
    setDraggedScheduleItem(null)
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

  async function runAction(successMessage, action) {
    try {
      const actionMessage = await action()
      setNotice(actionMessage || successMessage)
      setReloadKey((key) => key + 1)
    } catch (error) {
      setNotice(error.message || "Action failed")
    }
  }

  function promptNumberList(message, current = []) {
    const value = window.prompt(message, current.join(","))
    if (value === null) return null
    return value.split(",").map((item) => item.trim()).filter(Boolean).map(Number).filter(Number.isFinite)
  }

  function parseNumberList(value) {
    return value.split(",").map((item) => item.trim()).filter(Boolean).map(Number).filter(Number.isFinite)
  }

  function createUserAction() {
    setUserModalMode("create")
    setEditingUser(null)
    setUserForm(emptyUserForm)
    setUserFormError("")
    setShowUserModal(true)
  }

  function updateUserAction(employee) {
    setUserModalMode("edit")
    setEditingUser(employee)
    setUserForm({ name: employee.name || "", email: employee.email || "", phoneNumber: employee.phoneNumber || "", primaryCategory: employee.primaryCategory || "", role: employee.roles?.[0] || "USER", customRoleIds: employee.customRoles?.map((role) => role.id).join(",") || "" })
    setUserFormError("")
    setShowUserModal(true)
  }

  function updateUserForm(event) {
    setUserForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submitUserForm(event) {
    event.preventDefault()
    const name = userForm.name.trim()
    const email = userForm.email.trim()
    const phoneNumber = userForm.phoneNumber.trim()
    const primaryCategory = userForm.primaryCategory.trim() || null
    const role = userForm.role.trim().toUpperCase() || "USER"
    const customRoleIds = parseNumberList(userForm.customRoleIds)
    if (!name || !email) {
      setUserFormError("Name and email are required.")
      return
    }
    if (!["ADMIN", "USER"].includes(role)) {
      setUserFormError("System role must be ADMIN or USER.")
      return
    }
    const successMessage = userModalMode === "create" ? "User created." : "User updated."
    runAction(successMessage, async () => {
      let actionMessage = successMessage
      if (userModalMode === "create") {
        const result = await createUser({ name, email, roles: [role], primaryCategory, customRoleIds })
        actionMessage = result?.temporaryPassword ? `User created. Temporary password for ${result.user?.email || email}: ${result.temporaryPassword}` : "User created."
      } else {
        await updateUser(editingUser.id, { ...editingUser, name, email, phoneNumber, primaryCategory })
      }
      setShowUserModal(false)
      setUserForm(emptyUserForm)
      setEditingUser(null)
      return actionMessage
    })
  }

  function updateUserRolesAction(employee) {
    const customRoleIds = promptNumberList("Company role IDs, comma separated", employee.customRoles?.map((role) => role.id) || [])
    if (customRoleIds === null) return
    runAction("User company roles updated.", () => updateUserCustomRoles(employee.id, customRoleIds))
  }

  function toggleUserAction(employee) {
    if (isLastActiveAdmin(employee)) {
      setNotice("The last active admin cannot be deactivated.")
      return
    }
    const action = employee.isActive === false ? "activate" : "deactivate"
    if (!window.confirm(`This will ${action} ${employee.email}. Continue?`)) return
    runAction(`User ${action}d.`, () => toggleUserActivation(employee.id))
  }

  function isLastActiveAdmin(employee) {
    return employee.isActive !== false && employee.roles?.some((role) => role.toUpperCase() === "ADMIN") && activeAdmins.length <= 1
  }

  function createRoleAction() {
    const roleName = window.prompt("Role name")?.trim()
    if (!roleName) return
    runAction("Role created.", () => createRole(roleName))
  }

  function deleteRoleAction(role) {
    if (!window.confirm(`Delete role ${role.roleName}?`)) return
    runAction("Role deleted.", () => deleteRole(role.id))
  }

  function createAssignmentAction() {
    setAssignmentModalMode("create")
    setEditingAssignmentId(null)
    setAssignmentForm({ ...emptyAssignmentForm, startTime: formatLocalDateTime(new Date()).slice(0, 16) })
    setAssignmentFormError("")
    setAssignmentOverlapConflicts([])
    setShowAssignmentModal(true)
  }

  function updateAssignmentForm(event) {
    const { name, value, type, checked } = event.target
    setAssignmentFormError("")
    setAssignmentForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }))
  }

  function overlapMessage(conflicts) {
    if (!conflicts.length) return ""
    return conflicts.map((conflict) => `${conflict.assignmentName || `Assignment ${conflict.assignmentId}`} (${conflict.startTime?.slice(0, 16) || "unknown"} - ${conflict.estimatedEndTime?.slice(0, 16) || "unknown"})`).join(", ")
  }

  async function submitAssignmentForm(event) {
    event.preventDefault()
    const payload = assignmentRequestBody({
      name: assignmentForm.name.trim(),
      address: assignmentForm.address.trim() || null,
      estimatedMinutes: assignmentForm.estimatedMinutes ? Number(assignmentForm.estimatedMinutes) : null,
      cost: assignmentForm.cost ? Number(assignmentForm.cost) : null,
      assignedEmployeeId: assignmentForm.assignedEmployeeId ? Number(assignmentForm.assignedEmployeeId) : null,
      productIds: assignmentForm.productIds,
      startTime: normalizeDateTimeInput(assignmentForm.startTime),
      estimatedEndTime: normalizeDateTimeInput(assignmentForm.estimatedEndTime),
      overrideReason: assignmentForm.overrideReason.trim() || null,
      isActive: assignmentForm.isActive,
    })
    if (!payload.name) {
      setAssignmentFormError("Assignment name is required.")
      return
    }
    if (backendAssignments.some((assignment) => assignment.id !== editingAssignmentId && assignment.name?.toLowerCase() === payload.name.toLowerCase())) {
      setAssignmentFormError("An assignment with this name already exists.")
      return
    }
    if (payload.estimatedMinutes !== null && (!Number.isFinite(payload.estimatedMinutes) || payload.estimatedMinutes <= 0)) {
      setAssignmentFormError("Estimated minutes must be a positive number.")
      return
    }
    if (payload.cost !== null && (!Number.isFinite(payload.cost) || payload.cost < 0)) {
      setAssignmentFormError("Cost cannot be negative.")
      return
    }
    if (payload.startTime && payload.estimatedEndTime && new Date(payload.estimatedEndTime) <= new Date(payload.startTime)) {
      setAssignmentFormError("End time must be later than start time.")
      return
    }
    if (payload.assignedEmployeeId && payload.startTime && payload.estimatedEndTime) {
      try {
        const conflicts = await previewAssignmentOverlaps(payload, assignmentModalMode === "edit" ? editingAssignmentId : undefined)
        setAssignmentOverlapConflicts(conflicts)
        if (conflicts.length > 0 && !payload.overrideReason) {
          setAssignmentFormError(`Overlaps with ${overlapMessage(conflicts)}. Add an override reason to save anyway.`)
          return
        }
      } catch (error) {
        setAssignmentFormError(error.message || "Could not check assignment overlaps.")
        return
      }
    } else {
      setAssignmentOverlapConflicts([])
    }
    const successMessage = assignmentModalMode === "create" ? "Assignment created." : "Assignment updated."
    runAction(successMessage, async () => {
      try {
        if (assignmentModalMode === "create") await createAssignment(payload)
        else await updateAssignment(editingAssignmentId, payload)
        setShowAssignmentModal(false)
        setAssignmentForm(emptyAssignmentForm)
        setAssignmentOverlapConflicts([])
        setEditingAssignmentId(null)
      } catch (error) {
        setAssignmentFormError(error.message || `Could not ${assignmentModalMode} assignment.`)
        throw error
      }
    })
  }

  function updateAssignmentAction(assignment) {
    setAssignmentModalMode("edit")
    setEditingAssignmentId(assignment.id)
    setAssignmentForm({ name: assignment.name || "", address: assignment.address || "", estimatedMinutes: assignment.estimatedMinutes ?? "", cost: assignment.cost ?? "", assignedEmployeeId: assignment.assignedEmployeeId ?? "", startTime: (assignment.startTime || assignment.date) ? (assignment.startTime || assignment.date).slice(0, 16) : "", estimatedEndTime: assignment.estimatedEndTime ? assignment.estimatedEndTime.slice(0, 16) : "", overrideReason: "", isActive: assignment.isActive !== false, productIds: assignment.productIds || assignment.products?.map((product) => product.id).filter(Boolean) || [] })
    setAssignmentFormError("")
    setAssignmentOverlapConflicts([])
    setShowAssignmentModal(true)
  }

  function correctAttendanceAction(assignment) {
    const checkInAt = window.prompt("Corrected check-in time as ISO instant, blank to keep current", assignment.checkInAt || "")
    if (checkInAt === null) return
    const checkOutAt = window.prompt("Corrected check-out time as ISO instant, blank to keep current", assignment.checkOutAt || "")
    if (checkOutAt === null) return
    const reason = window.prompt("Correction reason")?.trim()
    if (!reason) {
      setNotice("Attendance correction reason is required.")
      return
    }
    const correction = assignmentRequestBody({ checkInAt: checkInAt.trim() || null, checkOutAt: checkOutAt.trim() || null, reason })
    runAction("Attendance corrected.", () => correctAssignmentAttendance(assignment.id, correction))
  }

  function toggleAssignmentAction(assignment) {
    const active = assignment.isActive !== false
    runAction(active ? "Assignment deactivated." : "Assignment activated.", () => active ? deactivateAssignment(assignment.id) : activateAssignment(assignment.id))
  }

  function deleteAssignmentAction(assignment) {
    if (!window.confirm(`Permanently delete ${assignment.name}? If it is in use, SUPAVISOR will refuse and you should deactivate it instead.`)) return
    runAction("Assignment deleted.", () => deleteAssignment(assignment.id))
  }

  function createProjectAction() {
    setProjectModalMode("create")
    setEditingProject(null)
    setProjectForm(emptyProjectForm)
    setProjectFormError("")
    setShowProjectModal(true)
  }

  function updateProjectAction(project) {
    setProjectModalMode("edit")
    setEditingProject(project)
    setProjectForm({ name: project.name || "", description: project.description || "", status: project.status || "DRAFT", assignmentIds: project.assignmentIds || [], customerId: project.customerId ?? project.customer?.id ?? "" })
    setProjectFormError("")
    setShowProjectModal(true)
  }

  function updateProjectForm(event) {
    setProjectForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function toggleProjectAssignment(assignmentId) {
    setProjectForm((current) => ({
      ...current,
      assignmentIds: current.assignmentIds.includes(assignmentId) ? current.assignmentIds.filter((id) => id !== assignmentId) : [...current.assignmentIds, assignmentId],
    }))
  }

  function toggleAssignmentProduct(productId) {
    setAssignmentForm((current) => ({
      ...current,
      productIds: current.productIds.includes(productId) ? current.productIds.filter((id) => id !== productId) : [...current.productIds, productId],
    }))
  }

  function submitProjectForm(event) {
    event.preventDefault()
    const name = projectForm.name.trim()
    const description = projectForm.description.trim()
    const status = projectForm.status.trim().toUpperCase() || "DRAFT"
    const assignmentIds = projectForm.assignmentIds
    const customerId = numberOrNull(projectForm.customerId)
    if (!name) {
      setProjectFormError("Project name is required.")
      return
    }
    if (!["DRAFT", "ONHOLD", "COMPLETED", "ARCHIVED"].includes(status)) {
      setProjectFormError("Choose a valid project status.")
      return
    }
    const payload = { name, description: description || null, status, assignmentIds, customerId }
    runAction(projectModalMode === "create" ? "Project created." : "Project updated.", async () => {
      if (projectModalMode === "create") await createProject(payload)
      else await updateProject(editingProject.id, payload)
      setShowProjectModal(false)
      setProjectForm(emptyProjectForm)
      setEditingProject(null)
    })
  }

  function deleteProjectAction(project) {
    if (!window.confirm(`Delete project ${project.name}?`)) return
    runAction("Project deleted.", () => deleteProject(project.id))
  }

  function updateCustomerForm(event) {
    setCustomerForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submitCustomerForm(event) {
    event.preventDefault()
    const payload = {
      name: customerForm.name.trim(),
      email: textOrNull(customerForm.email),
      address: textOrNull(customerForm.address),
      postalCode: textOrNull(customerForm.postalCode),
      city: textOrNull(customerForm.city),
      country: textOrNull(customerForm.country),
      currency: textOrNull(customerForm.currency),
      customerGroupNumber: numberOrNull(customerForm.customerGroupNumber),
      paymentTermsNumber: numberOrNull(customerForm.paymentTermsNumber),
      vatZoneNumber: numberOrNull(customerForm.vatZoneNumber),
    }
    if (!payload.name) {
      setCustomerFormError("Customer name is required.")
      return
    }
    setCustomerFormError("")
    runAction("Customer created in e-conomic.", async () => {
      await createEconomicCustomer(payload)
      setCustomerForm(emptyCustomerForm)
    })
  }

  function updateProductForm(event) {
    const { name, type, checked, value } = event.target
    setProductForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }))
  }

  function submitProductForm(event) {
    event.preventDefault()
    const payload = {
      productNumber: productForm.productNumber.trim(),
      name: productForm.name.trim(),
      description: textOrNull(productForm.description),
      salesPrice: numberOrNull(productForm.salesPrice),
      costPrice: numberOrNull(productForm.costPrice),
      recommendedPrice: numberOrNull(productForm.recommendedPrice),
      barCode: textOrNull(productForm.barCode),
      barred: productForm.barred,
      productGroupNumber: numberOrNull(productForm.productGroupNumber),
      unitNumber: numberOrNull(productForm.unitNumber),
    }
    if (!payload.productNumber || !payload.name) {
      setProductFormError("Product number and name are required.")
      return
    }
    setProductFormError("")
    runAction("Product created in e-conomic.", async () => {
      await createEconomicProduct(payload)
      setProductForm(emptyProductForm)
    })
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
    if (!selectedAssignment) {
      return <aside className="admin-controls-panel" aria-label="Schedule controls"><div><p className="admin-eyebrow">Quick actions</p><h2>Schedule Controls</h2><p>Create work, group it into projects, or select an event on the calendar to edit it.</p></div><section><h3>Create</h3><div className="admin-quick-action-grid"><button className="admin-quick-action-card is-primary" onClick={createAssignmentAction}><Plus size={18} /><strong>New assignment</strong><span>Schedule work with start time, employee, cost, and duration.</span></button><button className="admin-quick-action-card" onClick={createProjectAction}><FileText size={18} /><strong>New project</strong><span>Group assignment IDs and track project status.</span></button></div></section><section><h3>Calendar selection</h3><div className="admin-selected-empty"><Search size={22} /><p>Select an assignment on the calendar to edit, deactivate, delete, or adjust its project membership.</p></div></section></aside>
    }

    return <aside className="admin-controls-panel" aria-label="Schedule controls"><div><p className="admin-eyebrow">Selected work</p><h2>{selectedProject?.name || "No project"}</h2><p>{selectedProject ? `${selectedProject.status || "DRAFT"} · ` : "Standalone · "}Assignment #{selectedAssignment.id}</p></div><section><h3>Assignment Info</h3><div className="admin-selected-empty"><strong>{selectedAssignment.name}</strong><p>{selectedAssignment.startTime ? new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(selectedAssignment.startTime)) : "No scheduled start"}</p><p>{selectedAssignment.estimatedEndTime ? `Ends ${new Intl.DateTimeFormat("en-GB", { timeStyle: "short" }).format(new Date(selectedAssignment.estimatedEndTime))}` : "No estimated end"}</p><p>{selectedAssignment.address || "No address"}</p><p>{selectedAssignment.estimatedMinutes ? `${selectedAssignment.estimatedMinutes} minutes` : "No time estimate"} · {selectedAssignment.cost ?? "No cost"}</p><p>{selectedAssignment.assignedEmployeeId ? `Assigned user ${selectedAssignment.assignedEmployeeId}` : "No assigned user"}</p></div></section><section><h3>Actions</h3><div className="admin-quick-action-grid"><button className="admin-quick-action-card is-primary" onClick={() => updateAssignmentAction(selectedAssignment)}><Calendar size={18} /><strong>Edit assignment</strong><span>Change schedule, employee, address, cost, or duration.</span></button><button className="admin-quick-action-card" onClick={() => correctAttendanceAction(selectedAssignment)}><Clock size={18} /><strong>Correct attendance</strong><span>Record a check-in or check-out correction with a reason.</span></button><button className="admin-quick-action-card" onClick={() => toggleAssignmentAction(selectedAssignment)}><ShieldCheck size={18} /><strong>{selectedAssignment.isActive === false ? "Activate" : "Deactivate"}</strong><span>{selectedAssignment.isActive === false ? "Make this assignment selectable again." : "Keep history but hide it from active work."}</span></button><button className="admin-quick-action-card" onClick={() => deleteAssignmentAction(selectedAssignment)}><X size={18} /><strong>Delete</strong><span>Only succeeds if the backend says it is not in use.</span></button>{selectedProject && <button className="admin-quick-action-card" onClick={() => updateProjectAction(selectedProject)}><FileText size={18} /><strong>Edit project</strong><span>Adjust status or assignment IDs.</span></button>}</div></section></aside>
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
            {backendEmployees.length === 0 ? <div className="admin-hub-empty"><Users size={24} /><p>{backendData.loading ? "Loading employees from SUPAVISOR..." : "No employees were returned by the backend."}</p></div> : <div className="admin-employee-list">{backendEmployees.map((employee) => {
              const systemRoles = Array.isArray(employee.roles) ? employee.roles : []
              const workRoles = employee.customRoles?.map((role) => role.roleName).filter(Boolean) || []
              const displayName = employee.name || employee.email || "Unnamed employee"
              return <article key={employee.id} className="admin-employee-row"><span className="admin-employee-avatar">{displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</span><div><strong>{displayName}</strong><span>{employee.email}</span><span>{employee.phoneNumber || "No phone number"}</span></div><span className="admin-employee-team">{workRoles.join(" · ") || "No company roles"}</span><span className="admin-employee-role">{systemRoles.join(" · ") || "USER"}</span></article>
            })}</div>}
          </div>}
          {adminHubTab === "Roles & Permissions" && <div className="admin-hub-card"><h3>Roles &amp; Permissions</h3><p>System permissions remain controlled by backend account roles. Company roles are loaded from SUPAVISOR.</p><div className="admin-role-info"><strong>ADMIN</strong><span>Full access to the Admin dashboard and Admin Hub.</span></div><div className="admin-role-info"><strong>USER / EMPLOYEE</strong><span>Employee workspace access only.</span></div>{backendRoles.map((role) => <div className="admin-role-info" key={role.id}><strong>{role.roleName}</strong><span>Company role for tenant {role.tenantId}.</span></div>)}</div>}
          {adminHubTab === "Locations & Venues" && <div className="admin-hub-card"><h3>Locations &amp; Venues</h3><p>Location management will appear when location APIs are available.</p><div className="admin-hub-empty"><MapPin size={24} /><p>No location data is available from the backend yet.</p></div></div>}
          {adminHubTab === "Appearance" && <div className="admin-hub-appearance">{renderSettings()}</div>}
        </div>
      </div>
    </section>
  }

  function renderEntityPage() {
    const matchesSearch = (...values) => {
      if (!entitySearch) return true
      return values.some((value) => String(value ?? "").toLowerCase().includes(entitySearch))
    }

    if (activePage === "Users") {
      const users = backendEmployees.filter((employee) => matchesSearch(employee.name, employee.email, employee.phoneNumber, employee.roles?.join(" "), employee.customRoles?.map((role) => role.roleName).join(" ")))
      return <section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Users</h3><p>Manage company users. Users are deactivated/reactivated instead of removed.</p></div><button type="button" className="admin-control-primary" onClick={createUserAction}><Plus size={15} /> Create user</button></div>{users.length === 0 ? <div className="admin-hub-empty"><Users size={24} /><p>No users match the current search.</p></div> : <div className="admin-employee-list">{users.map((employee) => {
        const displayName = employee.name || employee.email || `User ${employee.id}`
        const systemRoles = Array.isArray(employee.roles) ? employee.roles : []
        const companyRoles = employee.customRoles?.map((role) => role.roleName).filter(Boolean) || []
        const lastActiveAdmin = isLastActiveAdmin(employee)
        return <article key={employee.id} className="admin-employee-row"><span className="admin-employee-avatar">{displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase()}</span><div><strong>{displayName}</strong><span>{employee.email}</span><span>{employee.phoneNumber || "No phone number"}</span><div className="admin-modal-actions"><button type="button" onClick={() => updateUserAction(employee)}>Edit</button><button type="button" onClick={() => updateUserRolesAction(employee)}>Roles</button><button type="button" onClick={() => toggleUserAction(employee)} disabled={lastActiveAdmin} title={lastActiveAdmin ? "The last active admin cannot be deactivated" : undefined}>{employee.isActive === false ? "Reactivate" : "Deactivate"}</button></div>{lastActiveAdmin && <span>The last active admin cannot be deactivated.</span>}</div><span className="admin-employee-team">{companyRoles.join(" · ") || "No company roles"}</span><span className="admin-employee-role">{systemRoles.join(" · ") || "USER"} · {employee.isActive === false ? "Inactive" : "Active"}</span></article>
      })}</div>}</section>
    }

    if (activePage === "Roles") {
      const roles = backendRoles.filter((role) => matchesSearch(role.roleName, role.id, role.tenantId))
      return <section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Roles</h3><p>Manage company roles and permissions.</p></div><button type="button" className="admin-control-primary" onClick={createRoleAction}><Plus size={15} /> Create role</button></div>{roles.length === 0 ? <div className="admin-hub-empty"><ShieldCheck size={24} /><p>No roles match the current search.</p></div> : roles.map((role) => <div className="admin-role-info" key={role.id}><strong>{role.roleName}</strong><span>ID {role.id} · tenant {role.tenantId}</span><button type="button" onClick={() => deleteRoleAction(role)}>Delete</button></div>)}</section>
    }

    if (activePage === "Assignments") {
      const assignments = backendAssignments.filter((assignment) => matchesSearch(assignment.name, assignment.address, assignment.id, assignment.assignedEmployeeId))
      return <section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Assignments</h3><p>Create and manage assignment templates. Deactivate assignments that are in use.</p></div><button type="button" className="admin-control-primary" onClick={createAssignmentAction}><Plus size={15} /> Create assignment</button></div>{assignments.length === 0 ? <div className="admin-hub-empty"><Calendar size={24} /><p>No assignments match the current search.</p></div> : <div className="admin-assignment-list">{assignments.map((assignment) => <article className="admin-assignment-card" key={assignment.id}><strong>{assignment.name}</strong><small>{assignment.address || "No address"} · {assignment.estimatedMinutes ? `${assignment.estimatedMinutes} min` : "No estimate"} · {assignment.cost ?? "No cost"} · {(assignment.productIds?.length ?? assignment.products?.length ?? 0)} products</small><div className="admin-modal-actions"><button type="button" onClick={() => updateAssignmentAction(assignment)}>Edit</button><button type="button" onClick={() => toggleAssignmentAction(assignment)}>{assignment.isActive === false ? "Activate" : "Deactivate"}</button><button type="button" onClick={() => deleteAssignmentAction(assignment)}>Delete</button></div><em className={assignment.isActive === false ? "is-needed" : "is-staffed"}>{assignment.isActive === false ? "Inactive" : assignment.assignedEmployeeId ? `User ${assignment.assignedEmployeeId}` : "Active"}</em></article>)}</div>}</section>
    }

    if (activePage === "Projects") {
      const projects = backendProjects.filter((project) => matchesSearch(project.name, project.description, project.status, project.createdBy, project.updatedBy))
      const statuses = ["DRAFT", "ONHOLD", "COMPLETED", "ARCHIVED"]
      return <section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Projects</h3><p>Manage customer work and track project status.</p></div><button type="button" className="admin-control-primary" onClick={createProjectAction}><Plus size={15} /> Create project</button></div>{projects.length === 0 ? <div className="admin-hub-empty"><FileText size={24} /><p>No projects match the current search.</p></div> : <div className="admin-project-board">{statuses.map((status) => {
        const laneProjects = projects.filter((project) => (project.status || "DRAFT") === status)
        return <section className="admin-project-lane" key={status} aria-labelledby={`project-lane-${status}`}><div className="admin-project-lane-heading"><h4 id={`project-lane-${status}`}>{status}</h4><span>{laneProjects.length}</span></div>{laneProjects.length === 0 ? <p className="admin-project-empty">No projects</p> : laneProjects.map((project) => <article className="admin-project-card" key={project.id}><strong>{project.name}</strong><small>{project.description || "No description"}</small><span>{project.assignmentIds?.length ?? 0} assignments · Customer {project.customerId ?? project.customer?.id ?? "none"}</span><div className="admin-modal-actions"><button type="button" onClick={() => updateProjectAction(project)}>Edit</button><button type="button" onClick={() => deleteProjectAction(project)}>Delete</button></div></article>)}</section>
      })}</div>}</section>
    }

    if (activePage === "Customers") {
      const customers = backendCustomers.filter((customer) => matchesSearch(customer.name, customer.email, customer.address, customer.city, customer.economicCustomerNumber, customer.customerNumber))
      return <div className="admin-economic-layout"><section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Customers</h3><p>Customers synced through e-conomic.</p></div><span className="admin-week-badge">{customers.length} customers</span></div>{customers.length === 0 ? <div className="admin-hub-empty"><Users size={24} /><p>No customers match the current search.</p></div> : <div className="admin-employee-list">{customers.map((customer) => <article key={customer.id ?? customer.economicCustomerNumber ?? customer.customerNumber ?? customer.name} className="admin-employee-row admin-economic-row"><span className="admin-employee-avatar">{String(customer.name || "C").slice(0, 2).toUpperCase()}</span><div><strong>{customer.name || "Unnamed customer"}</strong><span>{customer.email || "No email"}</span><span>{[customer.address, customer.postalCode, customer.city].filter(Boolean).join(", ") || "No address"}</span></div><span className="admin-employee-team">{customer.currency || "DKK"}</span><span className="admin-employee-role">No. {customer.economicCustomerNumber ?? customer.customerNumber ?? "pending"}</span></article>)}</div>}</section><section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Create customer</h3><p>Create a customer in e-conomic.</p></div></div><form className="admin-employee-form" onSubmit={submitCustomerForm}><div className="admin-assignment-form-grid"><label><span>Name</span><input name="name" value={customerForm.name} onChange={updateCustomerForm} placeholder="Acme ApS" required /></label><label><span>Email</span><input name="email" type="email" value={customerForm.email} onChange={updateCustomerForm} placeholder="finance@example.com" /></label><label><span>Address</span><input name="address" value={customerForm.address} onChange={updateCustomerForm} placeholder="Main Street 1" /></label><label><span>Postal code</span><input name="postalCode" value={customerForm.postalCode} onChange={updateCustomerForm} placeholder="2100" /></label><label><span>City</span><input name="city" value={customerForm.city} onChange={updateCustomerForm} placeholder="Copenhagen" /></label><label><span>Country</span><input name="country" value={customerForm.country} onChange={updateCustomerForm} placeholder="Denmark" /></label><label><span>Currency</span><input name="currency" value={customerForm.currency} onChange={updateCustomerForm} placeholder="DKK" /></label><label><span>Customer group</span><input name="customerGroupNumber" type="number" value={customerForm.customerGroupNumber} onChange={updateCustomerForm} /></label><label><span>Payment terms</span><input name="paymentTermsNumber" type="number" value={customerForm.paymentTermsNumber} onChange={updateCustomerForm} /></label><label><span>VAT zone</span><input name="vatZoneNumber" type="number" value={customerForm.vatZoneNumber} onChange={updateCustomerForm} /></label></div>{customerFormError && <span className="admin-form-error" role="alert">{customerFormError}</span>}<div className="admin-modal-actions"><button className="admin-control-primary" type="submit"><Plus size={15} /> Create customer</button></div></form></section></div>
    }

    if (activePage === "Products") {
      const products = backendProducts.filter((product) => matchesSearch(product.productNumber, product.name, product.description, product.productGroupName, product.barCode))
      return <div className="admin-economic-layout"><section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Products</h3><p>Products synced through e-conomic.</p></div><span className="admin-week-badge">{products.length} products</span></div>{products.length === 0 ? <div className="admin-hub-empty"><Package size={24} /><p>No products match the current search.</p></div> : <div className="admin-employee-list">{products.map((product) => <article key={product.id ?? product.productNumber} className="admin-employee-row admin-economic-row"><span className="admin-employee-avatar">{String(product.productNumber || "P").slice(0, 2).toUpperCase()}</span><div><strong>{product.name || "Unnamed product"}</strong><span>{product.description || product.productGroupName || "No description"}</span><span>Product no. {product.productNumber || "missing"}</span></div><span className="admin-employee-team">{product.salesPrice ?? "No price"}</span><span className="admin-employee-role">{product.barred ? "Barred" : "Active"}</span></article>)}</div>}</section><section className="admin-hub-card"><div className="admin-hub-card-heading"><div><h3>Create product</h3><p>Create a product in e-conomic.</p></div></div><form className="admin-employee-form" onSubmit={submitProductForm}><div className="admin-assignment-form-grid"><label><span>Product number</span><input name="productNumber" value={productForm.productNumber} onChange={updateProductForm} placeholder="SUP-001" required /></label><label><span>Name</span><input name="name" value={productForm.name} onChange={updateProductForm} placeholder="Service package" required /></label><label><span>Description</span><input name="description" value={productForm.description} onChange={updateProductForm} placeholder="Product description" /></label><label><span>Sales price</span><input name="salesPrice" type="number" step="0.01" value={productForm.salesPrice} onChange={updateProductForm} /></label><label><span>Cost price</span><input name="costPrice" type="number" step="0.01" value={productForm.costPrice} onChange={updateProductForm} /></label><label><span>Recommended price</span><input name="recommendedPrice" type="number" step="0.01" value={productForm.recommendedPrice} onChange={updateProductForm} /></label><label><span>Barcode</span><input name="barCode" value={productForm.barCode} onChange={updateProductForm} /></label><label><span>Product group</span><input name="productGroupNumber" type="number" value={productForm.productGroupNumber} onChange={updateProductForm} /></label><label><span>Unit number</span><input name="unitNumber" type="number" value={productForm.unitNumber} onChange={updateProductForm} /></label><label className="admin-assignment-active"><input name="barred" type="checkbox" checked={productForm.barred} onChange={updateProductForm} /><span>Barred product</span></label></div>{productFormError && <span className="admin-form-error" role="alert">{productFormError}</span>}<div className="admin-modal-actions"><button className="admin-control-primary" type="submit"><Plus size={15} /> Create product</button></div></form></section></div>
    }

    return null
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
        {(notice || backendData.error || backendData.loading) && <div className="admin-notice" role="status">{backendData.loading ? "Loading live SUPAVISOR data..." : backendData.error || notice}</div>}
        {activePage === "Admin Hub" ? renderAdminHub() : activePage === "Settings" ? renderAdminHub() : activePage === "Overview" ? <>
          <section className="admin-calendar-workspace" aria-label="Project assignment calendar">
            <div className="admin-calendar-panel">
              <div className="admin-section-heading"><div><h2>{new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(today)}</h2><p>{scheduledAssignmentCount} scheduled assignments</p></div><button onClick={createAssignmentAction}>Add assignment →</button></div>
              <div className="admin-calendar-weekdays">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div>
              <div className="admin-calendar-grid">{calendarDays.map((day) => {
                const items = scheduledProjectItemsForDay(day)
                const isToday = sameDay(day, today)
                const inMonth = day.getMonth() === today.getMonth()
                return <div className={`admin-calendar-day${inMonth ? "" : " is-muted"}${isToday ? " is-today" : ""}`} key={day.toISOString()} onDragOver={(event) => event.preventDefault()} onDrop={() => moveAssignmentToDate(draggedScheduleItem, day)}><div className="admin-calendar-date"><span>{day.getDate()}</span></div>{items.length === 0 ? <p className="admin-calendar-empty">No work</p> : items.map((item) => <button type="button" draggable className="admin-calendar-event" key={`${item.project?.id || "standalone"}-${item.assignment.id}`} onClick={() => setSelectedScheduleItem(item)} onDragStart={() => setDraggedScheduleItem(item)}><strong>{item.project?.name || "No project"}</strong><span>{item.assignment.name}</span><small>{new Intl.DateTimeFormat("en-GB", { timeStyle: "short" }).format(item.date)}</small></button>)}</div>
              })}</div>
            </div>
          </section>
          <section className="admin-kpis" aria-label="Operations summary"><button onClick={() => selectPage("Assignments")}><span>Active Assignments</span><strong>{activeAssignments.length}</strong><small>{inactiveAssignments} inactive</small></button><button onClick={() => selectPage("Users")}><span>Active Users</span><strong>{activeEmployees.length}</strong><small>{backendEmployees.length} total users</small></button><button className="admin-kpi-alert" onClick={() => selectPage("Projects")}><span>Projects</span><strong>{backendProjects.length}</strong><small>From SUPAVISOR</small></button><button onClick={() => selectPage("Roles")}><span>Company Roles</span><strong>{backendRoles.length}</strong><small>Tenant scoped</small></button></section>
          <section className="admin-overview-workspace"><div className="admin-overview-main"><div className="admin-section-heading"><h2>Projects</h2><button onClick={() => selectPage("Assignments")}>View assignments →</button></div>{backendProjects.length === 0 ? <div className="admin-schedule-placeholder"><Calendar size={24} /><h3>No projects returned</h3><p>Create projects in SUPAVISOR to show live operational work here.</p></div> : <div className="admin-assignment-list">{backendProjects.slice(0, 6).map((project) => <article className="admin-assignment-card" key={project.id}><strong>{project.name}</strong><small>{project.description || "No description"}</small><em className="is-staffed">{project.status || "DRAFT"}</em></article>)}</div>}</div><aside className="admin-screening"><div className="admin-screening-heading"><h2>Screening Details</h2><button onClick={() => setNotice("Use the tabs and team filters below to screen assignments.")} aria-label="Screening options"><SlidersHorizontal size={15} /></button></div><div className="admin-tabs">{["Today's", "Staff Duty"].map((tab) => <button key={tab} className={screeningTab === tab ? "is-active" : ""} onClick={() => chooseScreeningTab(tab)} aria-pressed={screeningTab === tab}>{tab}</button>)}</div><div className="admin-screening-summary"><strong>{screeningTab === "Staff Duty" ? "Staff duty" : "Assignments"}</strong><span>{screeningFilter} · Backend filter</span></div><div className="admin-filter-pills">{["All", "Kitchen", "Cleaning"].map((filter) => <button key={filter} className={screeningFilter === filter ? "is-active" : ""} onClick={() => chooseScreeningFilter(filter)} aria-pressed={screeningFilter === filter}>{filter}</button>)}</div><div className="admin-assignment-list">{filteredAssignments.length === 0 ? <div className="admin-assignment-empty" aria-live="polite">{screeningEmptyMessage}</div> : filteredAssignments.slice(0, 5).map((assignment) => <article className="admin-assignment-card" key={assignment.id}><strong>{assignment.name}</strong><small>{assignment.address || "No address"}</small><em className={assignment.assignedEmployeeId ? "is-staffed" : "is-needed"}>{assignment.assignedEmployeeId ? "Assigned" : "Open"}</em></article>)}</div></aside></section>
          {renderScheduleControls()}
        </> : renderEntityPage()}
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
    {showUserModal && <div className="admin-modal-overlay" onClick={() => setShowUserModal(false)}><section className="admin-employee-modal" role="dialog" aria-modal="true" aria-labelledby="user-modal-title" onClick={(event) => event.stopPropagation()}>
      <div className="admin-modal-heading"><div><p className="admin-eyebrow">Users</p><h2 id="user-modal-title">{userModalMode === "create" ? "Create user" : "Edit user"}</h2><p>{userModalMode === "create" ? "Create a tenant user without browser prompts." : "Update user details without browser prompts."}</p></div><button type="button" onClick={() => setShowUserModal(false)} aria-label="Close user form"><X size={18} /></button></div>
      <form className="admin-employee-form" onSubmit={submitUserForm}>
        <label><span>Name</span><input name="name" value={userForm.name} onChange={updateUserForm} placeholder="Anna Jensen" autoFocus required /></label>
        <label><span>Email</span><input name="email" type="email" value={userForm.email} onChange={updateUserForm} placeholder="anna@example.com" required /></label>
        <label><span>Primary category</span><input name="primaryCategory" value={userForm.primaryCategory} onChange={updateUserForm} placeholder="Kitchen" /></label>
        {userModalMode === "edit" && <label><span>Phone number</span><input name="phoneNumber" type="tel" value={userForm.phoneNumber} onChange={updateUserForm} placeholder="+45 12 34 56 78" /></label>}
        {userModalMode === "create" && <><label><span>System role</span><select name="role" value={userForm.role} onChange={updateUserForm}><option value="USER">USER</option><option value="ADMIN">ADMIN</option></select></label><label><span>Company role IDs</span><input name="customRoleIds" value={userForm.customRoleIds} onChange={updateUserForm} placeholder="1,2,3" /></label></>}
        {userFormError && <span className="admin-form-error" role="alert">{userFormError}</span>}
        <div className="admin-modal-actions"><button type="button" onClick={() => setShowUserModal(false)}>Cancel</button><button className="admin-control-primary" type="submit"><Plus size={15} /> {userModalMode === "create" ? "Create user" : "Save user"}</button></div>
      </form>
    </section></div>}
    {showProjectModal && <div className="admin-modal-overlay" onClick={() => setShowProjectModal(false)}><section className="admin-employee-modal admin-assignment-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
      <div className="admin-modal-heading"><div><p className="admin-eyebrow">Projects</p><h2 id="project-modal-title">{projectModalMode === "create" ? "Create project" : "Edit project"}</h2><p>Set project details and assignment membership in the dashboard.</p></div><button type="button" onClick={() => setShowProjectModal(false)} aria-label="Close project form"><X size={18} /></button></div>
      <form className="admin-employee-form" onSubmit={submitProjectForm}>
        <div className="admin-assignment-form-grid">
          <label><span>Name</span><input name="name" value={projectForm.name} onChange={updateProjectForm} placeholder="September launch" autoFocus required /></label>
          <label><span>Status</span><select name="status" value={projectForm.status} onChange={updateProjectForm}><option value="DRAFT">DRAFT</option><option value="ONHOLD">ONHOLD</option><option value="COMPLETED">COMPLETED</option><option value="ARCHIVED">ARCHIVED</option></select></label>
          <label><span>Description</span><input name="description" value={projectForm.description} onChange={updateProjectForm} placeholder="Project description" /></label>
          <label><span>Customer</span><select name="customerId" value={projectForm.customerId} onChange={updateProjectForm}><option value="">No customer</option>{backendCustomers.map((customer) => <option key={customer.id} value={customer.id}>{customer.name || `Customer ${customer.id}`} {customer.economicCustomerNumber ? `(${customer.economicCustomerNumber})` : ""}</option>)}</select></label>
        </div>
        <section className="admin-project-assignment-picker" aria-labelledby="project-assignments-title">
          <div><h3 id="project-assignments-title">Assignments</h3><p>Select assignments from your tenant to link to this project.</p></div>
          {tenantAssignments.length === 0 ? <div className="admin-assignment-empty">No assignments are available for this tenant yet.</div> : <div className="admin-project-assignment-list">{tenantAssignments.map((assignment) => {
            const selected = projectForm.assignmentIds.includes(assignment.id)
            const assignedEmployee = backendEmployees.find((employee) => employee.id === assignment.assignedEmployeeId)
            return <label className={`admin-project-assignment-option${selected ? " is-selected" : ""}`} key={assignment.id}><input type="checkbox" checked={selected} onChange={() => toggleProjectAssignment(assignment.id)} /><span><strong>{assignment.name || `Assignment ${assignment.id}`}</strong><small>{assignment.address || "No address"} · {assignment.estimatedMinutes ? `${assignment.estimatedMinutes} min` : "No estimate"} · {assignedEmployee?.name || assignedEmployee?.email || "Unassigned"}</small></span></label>
          })}</div>}
        </section>
        {projectFormError && <span className="admin-form-error" role="alert">{projectFormError}</span>}
        <div className="admin-modal-actions"><button type="button" onClick={() => setShowProjectModal(false)}>Cancel</button><button className="admin-control-primary" type="submit"><Plus size={15} /> {projectModalMode === "create" ? "Create project" : "Save project"}</button></div>
      </form>
    </section></div>}
    {showAssignmentModal && <div className="admin-modal-overlay" onClick={() => setShowAssignmentModal(false)}><section className="admin-employee-modal admin-assignment-modal" role="dialog" aria-modal="true" aria-labelledby="assignment-modal-title" onClick={(event) => event.stopPropagation()}>
      <div className="admin-modal-heading"><div><p className="admin-eyebrow">Schedule</p><h2 id="assignment-modal-title">{assignmentModalMode === "create" ? "Create assignment" : "Edit assignment"}</h2><p>Schedule work with the backend assignment datetime.</p></div><button type="button" onClick={() => setShowAssignmentModal(false)} aria-label="Close assignment form"><X size={18} /></button></div>
      <form className="admin-employee-form admin-assignment-form" onSubmit={submitAssignmentForm}>
        <div className="admin-assignment-form-grid">
          <label><span>Name</span><input name="name" value={assignmentForm.name} onChange={updateAssignmentForm} placeholder="Kitchen prep" autoFocus required /></label>
          <label><span>Address</span><input name="address" value={assignmentForm.address} onChange={updateAssignmentForm} placeholder="Main Street 1" /></label>
          <label><span>Estimated minutes</span><input name="estimatedMinutes" type="number" min="1" value={assignmentForm.estimatedMinutes} onChange={updateAssignmentForm} placeholder="90" /></label>
          <label><span>Cost</span><input name="cost" type="number" min="0" step="0.01" value={assignmentForm.cost} onChange={updateAssignmentForm} placeholder="1200.00" /></label>
          <label><span>Assigned employee</span><select name="assignedEmployeeId" value={assignmentForm.assignedEmployeeId} onChange={updateAssignmentForm}><option value="">Unassigned</option>{backendEmployees.filter((employee) => employee.isActive !== false).map((employee) => <option key={employee.id} value={employee.id}>{employee.name || employee.email}</option>)}</select></label>
          <label className="admin-assignment-active"><input name="isActive" type="checkbox" checked={assignmentForm.isActive} onChange={updateAssignmentForm} /><span>Active assignment</span></label>
        </div>
        <section className="admin-assignment-date-card"><div><Calendar size={20} /><div><h3>Schedule window</h3><p>Overlapping employee assignments require an explicit override reason.</p></div></div><div className="admin-assignment-time-fields"><input name="startTime" type="datetime-local" value={assignmentForm.startTime} onChange={updateAssignmentForm} aria-label="Start time" /><input name="estimatedEndTime" type="datetime-local" value={assignmentForm.estimatedEndTime} onChange={updateAssignmentForm} aria-label="Estimated end time" /></div></section>
        {assignmentOverlapConflicts.length > 0 && <section className="admin-overlap-warning" role="alert"><strong>Overlap warning</strong><p>{overlapMessage(assignmentOverlapConflicts)}</p></section>}
        <label className="admin-assignment-override"><span>Override reason</span><textarea name="overrideReason" value={assignmentForm.overrideReason} onChange={updateAssignmentForm} placeholder="Required when saving an overlapping assignment." rows={3} /></label>
        <section className="admin-project-assignment-picker" aria-labelledby="assignment-products-title"><div><h3 id="assignment-products-title">Products</h3><p>Select tenant products to link to this assignment.</p></div>{backendProducts.length === 0 ? <div className="admin-assignment-empty">No products are available for this tenant yet.</div> : <div className="admin-project-assignment-list">{backendProducts.map((product) => { const selected = assignmentForm.productIds.includes(product.id); return <label className={`admin-project-assignment-option${selected ? " is-selected" : ""}`} key={product.id}><input type="checkbox" checked={selected} onChange={() => toggleAssignmentProduct(product.id)} /><span><strong>{product.productNumber || `Product ${product.id}`} · {product.name || "Unnamed product"}</strong><small>{product.salesPrice != null ? `Sales price ${product.salesPrice}` : "No sales price"} · {product.productGroupName || product.productGroupNumber || "No product group"}</small></span></label> })}</div>}</section>
        {assignmentFormError && <span className="admin-form-error" role="alert">{assignmentFormError}</span>}
        <div className="admin-modal-actions"><button type="button" onClick={() => setShowAssignmentModal(false)}>Cancel</button><button className="admin-control-primary" type="submit"><Plus size={15} /> {assignmentModalMode === "create" ? "Create assignment" : "Save assignment"}</button></div>
      </form>
    </section></div>}
  </div>
}
