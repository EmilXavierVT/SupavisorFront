const BACKEND_URL = (import.meta.env?.VITE_API_URL || import.meta.env?.VITE_LOCAL_API_URL || "https://supaapi.project-ice.dk/api").replace(/\/$/, "")

export async function fetchFromServer(url, options = {}) {
  const { includeAuth: includeAuthOption, method: optionMethod, headers: optionHeaders, body: optionBody, ...restOptions } = options
  const method = (optionMethod ?? "GET").toUpperCase()
  const headers = { ...(optionHeaders ?? {}) }
  const shouldIncludeAuth = includeAuthOption ?? true

  if (shouldIncludeAuth) {
    const token = localStorage.getItem("jwtToken")
    if (!token) throw new Error("No JWT token available. Login first.")
    headers.Authorization = `Bearer ${token}`
  }

  const hasBody = optionBody !== undefined && optionBody !== null && method !== "GET" && method !== "HEAD"
  const body = hasBody && typeof optionBody !== "string" ? JSON.stringify(optionBody) : optionBody
  if (hasBody && typeof optionBody !== "string") headers["Content-Type"] ??= "application/json"

  const response = await fetch(
    /^https?:\/\//.test(url) ? url : `${BACKEND_URL}${url.startsWith("/") ? "" : "/"}${url}`,
    { ...restOptions, method, headers, ...(hasBody ? { body } : {}) },
  )

  if (response.headers.has("X-Refresh-Token")) localStorage.setItem("jwtToken", response.headers.get("X-Refresh-Token"))
  if (!response.ok) {
    const errorText = (await response.text().catch(() => "")).trim()
    const error = new Error(extractServerMessage(errorText) || `Request failed (${method}): ${response.status} ${errorText}`.trim())
    error.status = response.status
    throw error
  }
  return (response.headers.get("content-type") ?? "").includes("application/json") ? response.json() : response.text()
}

function extractServerMessage(errorText) {
  try {
    const body = JSON.parse(errorText)
    return body?.msg || body?.message || null
  } catch {
    return errorText || null
  }
}

export async function login(email, password) {
  const data = await fetchFromServer("/auth/login", { method: "POST", body: { email, password }, includeAuth: false })
  if (!data?.token) throw new Error("The server did not return a session token.")
  const tokenUser = decodeTokenPayload(data.token)
  const backendRoles = Array.isArray(data.roles) ? data.roles : Array.isArray(data.role) ? data.role : String(data.role ?? "").split(",")
  const user = {
    id: data.id ?? tokenUser?.userId ?? tokenUser?.id,
    email: data.username ?? data.email ?? tokenUser?.email ?? email,
    roles: backendRoles.map((role) => String(role).trim()).filter(Boolean),
    tenantId: tokenUser?.tenantId,
    isActive: data.activity ?? tokenUser?.isActive,
  }
  localStorage.setItem("jwtToken", data.token)
  localStorage.setItem("user", JSON.stringify(user))
  return data
}

export function logout() {
  localStorage.removeItem("jwtToken")
  localStorage.removeItem("user")
}

export function getStoredUser() {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    const tokenUser = decodeTokenPayload(localStorage.getItem("jwtToken"))
    if (!user || typeof user !== "object" || Array.isArray(user)) return tokenUser
    return { ...user, tenantId: user.tenantId ?? tokenUser?.tenantId, isActive: user.isActive ?? tokenUser?.isActive }
  } catch { return null }
}

function decodeTokenPayload(token) {
  try {
    if (!token) return null
    const [, payload] = token.split(".")
    if (!payload) return null
    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/")
    return JSON.parse(atob(normalizedPayload))
  } catch { return null }
}

export function getUser(id, options = {}) {
  return fetchFromServer(`/user/${encodeURIComponent(id)}`, options)
}

export function getUsersByTenant(tenantId, options = {}) {
  return fetchFromServer(`/user/tenant/${encodeURIComponent(tenantId)}`, options)
}

export function createUser(user) {
  return fetchFromServer("/user/create", { method: "POST", body: user })
}

export function updateUser(id, user) {
  return fetchFromServer(`/user/${encodeURIComponent(id)}`, { method: "PUT", body: user })
}

export function toggleUserActivation(id) {
  return fetchFromServer(`/user/reversActivtion/${encodeURIComponent(id)}`, { method: "PUT" })
}

export function updateUserCustomRoles(id, customRoleIds) {
  return fetchFromServer(`/user/${encodeURIComponent(id)}/roles`, { method: "PUT", body: { customRoleIds } })
}

export function getRolesByTenant(tenantId, options = {}) {
  return fetchFromServer(`/role/tenant/${encodeURIComponent(tenantId)}`, options)
}

export function createRole(roleName) {
  return fetchFromServer("/role/", { method: "POST", body: { roleName } })
}

export function deleteRole(id) {
  return fetchFromServer(`/role/${encodeURIComponent(id)}`, { method: "DELETE" })
}

export function getAssignments(options = {}) {
  const { activeOnly = false, ...requestOptions } = options
  return fetchFromServer(`/assignment/all${activeOnly ? "?activeOnly=true" : ""}`, requestOptions)
}

export function getAssignment(id, options = {}) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}`, options)
}

export function createAssignment(assignment) {
  return fetchFromServer("/assignment", { method: "POST", body: assignment })
}

export function updateAssignment(id, assignment) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}`, { method: "PUT", body: assignment })
}

export function activateAssignment(id) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}/activate`, { method: "PATCH" })
}

export function deactivateAssignment(id) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}/deactivate`, { method: "PATCH" })
}

export function deleteAssignment(id) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}`, { method: "DELETE" })
}

export function setAssignmentResponsible(id, assignedEmployeeId) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}/responsible`, { method: "PUT", body: { assignedEmployeeId } })
}

export function clearAssignmentResponsible(id) {
  return fetchFromServer(`/assignment/${encodeURIComponent(id)}/responsible`, { method: "DELETE" })
}

export function getProjects(options = {}) {
  return fetchFromServer("/project/all", options)
}

export function createProject(project) {
  return fetchFromServer("/project", { method: "POST", body: project })
}

export function updateProject(id, project) {
  return fetchFromServer(`/project/${encodeURIComponent(id)}`, { method: "PUT", body: project })
}

export function deleteProject(id) {
  return fetchFromServer(`/project/${encodeURIComponent(id)}`, { method: "DELETE" })
}

export function getEconomicCustomers(options = {}) {
  const { pageSize = 20, skipPages = 0, ...requestOptions } = options
  return fetchFromServer(`/economic/customers/?pagesize=${encodeURIComponent(pageSize)}&skippages=${encodeURIComponent(skipPages)}`, requestOptions)
}

export function createEconomicCustomer(customer) {
  return fetchFromServer("/economic/customers/", { method: "POST", body: customer })
}

export function getEconomicProducts(options = {}) {
  const { pageSize = 100, skipPages = 0, ...requestOptions } = options
  return fetchFromServer(`/economic/products/?pagesize=${encodeURIComponent(pageSize)}&skippages=${encodeURIComponent(skipPages)}`, requestOptions)
}

export function createEconomicProduct(product) {
  return fetchFromServer("/economic/products/", { method: "POST", body: product })
}

export function updateEconomicProduct(productNumber, product) {
  return fetchFromServer(`/economic/products/${encodeURIComponent(productNumber)}`, { method: "PUT", body: product })
}

export function getTenants(options = {}) {
  return fetchFromServer("/tenant/all", options)
}

export function createTenant(tenant) {
  return fetchFromServer("/tenant/", { method: "POST", body: tenant })
}

export function updateTenant(id, tenant) {
  return fetchFromServer(`/tenant/${encodeURIComponent(id)}`, { method: "PUT", body: tenant })
}

export function deleteTenant(id) {
  return fetchFromServer(`/tenant/${encodeURIComponent(id)}`, { method: "DELETE" })
}

export function isTokenValid(token) {
  if (!token) return Promise.resolve(false)
  return fetchFromServer("/auth/token-validation", { method: "POST", headers: { Authorization: `Bearer ${token}` }, includeAuth: false }).then(() => true).catch(() => false)
}
