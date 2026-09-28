import { Navigate, Route, Routes } from "react-router"
import LoginPage from "./pages/Login/LoginPage.jsx"
import EmployeeOverview from "./pages/employee/Overview/EmployeeOverview.jsx"
import AdminDashboard from "./pages/admin/AdminDashboard.jsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
import { getStoredUser } from "./services/apiReader.js"

function LandingPage() {
  const user = getStoredUser()
  const isAdmin = user?.roles?.some((role) => role.toUpperCase() === "ADMIN")
  return isAdmin ? <AdminDashboard /> : <Navigate to="/employee" replace />
}

function AdminRoute() {
  const user = getStoredUser()
  const isAdmin = user?.roles?.some((role) => role.toUpperCase() === "ADMIN")
  return isAdmin ? <AdminDashboard /> : <Navigate to="/employee" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/employee" element={<EmployeeOverview />} />
        <Route path="/admin" element={<AdminRoute />} />
      </Route>
      <Route path="*" element={<Navigate to="/employee" replace />} />
    </Routes>
  )
}