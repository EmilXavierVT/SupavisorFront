import { after, beforeEach, test } from "node:test"
import assert from "node:assert/strict"
import { fetchFromServer, getStoredUser, login, logout } from "../src/services/apiReader.js"

const originalFetch = globalThis.fetch
const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage")
let values

beforeEach(() => {
  values = new Map()
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, String(value)),
      removeItem: (key) => values.delete(key),
    },
  })
})

after(() => {
  globalThis.fetch = originalFetch
  if (originalStorage) Object.defineProperty(globalThis, "localStorage", originalStorage)
  else delete globalThis.localStorage
})

test("login stores the backend identity and roles without using the UI selector", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify({ token: "jwt", username: "person@example.com", id: 7, role: "USER, EMPLOYEE" }), { headers: { "content-type": "application/json" } })
  await login("person@example.com", "secret")
  assert.equal(values.get("jwtToken"), "jwt")
  assert.deepEqual(JSON.parse(values.get("user")), { id: 7, email: "person@example.com", roles: ["USER", "EMPLOYEE"] })
})

test("former mock admin credentials are sent to the backend", async () => {
  let request
  globalThis.fetch = async (url, options) => {
    request = { url, options }
    return new Response("Unauthorized", { status: 401 })
  }
  await assert.rejects(() => login("admin.test@example.com", "1234"), (error) => error.status === 401)
  assert.equal(request.url, "https://supaapi.project-ice.dk/api/auth/login")
  assert.deepEqual(JSON.parse(request.options.body), { email: "admin.test@example.com", password: "1234" })
  assert.equal(values.get("jwtToken"), undefined)
  assert.equal(values.get("user"), undefined)
})

test("refresh tokens are saved before JSON is parsed", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify({ ok: true }), { headers: { "content-type": "application/json", "X-Refresh-Token": "refreshed" } })
  values.set("jwtToken", "old")
  await fetchFromServer("/user/7")
  assert.equal(values.get("jwtToken"), "refreshed")
})

test("logout clears only the session keys", () => {
  values.set("jwtToken", "jwt")
  values.set("user", JSON.stringify({ id: 7 }))
  values.set("unrelated", "keep")
  logout()
  assert.equal(values.get("jwtToken"), undefined)
  assert.equal(values.get("user"), undefined)
  assert.equal(values.get("unrelated"), "keep")
})

test("malformed stored users are ignored", () => {
  values.set("user", "not-json")
  assert.equal(getStoredUser(), null)
})
