const BACKEND_URL = (import.meta.env?.VITE_API_URL || "https://supaapi.project-ice.dk/api").replace(/\/$/, "")

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
    const error = new Error(`Request failed (${method}): ${response.status} ${(await response.text().catch(() => "")).trim()}`.trim())
    error.status = response.status
    throw error
  }
  return (response.headers.get("content-type") ?? "").includes("application/json") ? response.json() : response.text()
}

export async function login(email, password) {
  const data = await fetchFromServer("/auth/login", { method: "POST", body: { email, password }, includeAuth: false })
  if (!data?.token) throw new Error("The server did not return a session token.")
  const backendRoles = Array.isArray(data.roles) ? data.roles : Array.isArray(data.role) ? data.role : String(data.role ?? "").split(",")
  const user = { id: data.id, email: data.username ?? data.email ?? email, roles: backendRoles.map((role) => String(role).trim()).filter(Boolean) }
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
    return user && typeof user === "object" && !Array.isArray(user) ? user : null
  } catch { return null }
}

export function getUser(id, options = {}) {
  return fetchFromServer(`/user/${encodeURIComponent(id)}`, options)
}

export function isTokenValid(token) {
  if (!token) return Promise.resolve(false)
  return fetchFromServer("/auth/token-validation", { method: "POST", headers: { Authorization: `Bearer ${token}` }, includeAuth: false }).then(() => true).catch(() => false)
}
