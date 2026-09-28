import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router"
import { isTokenValid } from "../../services/apiReader.js"

export default function ProtectedRoute() {
  const [token] = useState(() => localStorage.getItem("jwtToken"))
  const [valid, setValid] = useState(null)

  useEffect(() => {
    if (!token) return
    isTokenValid(token).then(setValid)
  }, [token])

  if (!token || valid === false) return <Navigate to="/auth/login" replace />
  if (valid === null) return <div className="route-loading" role="status">Checking your session…</div>
  return <Outlet />
}