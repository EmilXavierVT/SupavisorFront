# Staged Login + Employee Structure

This folder is the portable staging implementation. It intentionally contains only the Login and Employee Overview flow described by the recovery manual.

| Responsibility | Location | Notes |
| --- | --- | --- |
| Route composition | `src/App.jsx` | `/auth/login`, protected `/`, protected `/employee`, and role-guarded `/admin` |
| Browser entrypoint | `src/main.jsx` | React root, `BrowserRouter`, global CSS |
| Backend/session service | `src/services/apiReader.js` | Login, token validation, profile request, refresh-token handling, logout |
| Protected boundary | `src/components/ProtectedRoute/ProtectedRoute.jsx` | Validates the stored bearer token before rendering protected routes |
| Login page | `src/pages/Login/LoginPage.jsx` | Presentation-only role choice; backend response controls stored roles |
| Employee page | `src/pages/employee/Overview/EmployeeOverview.jsx` | Real identity/profile data with unsupported schedule features disabled |
| Admin page | `src/pages/admin/AdminDashboard.jsx` | Reference-style operations dashboard for backend-provided `ADMIN` accounts |
| Profile hook | `src/hooks/useEmployeeProfile.js` | Loading, retry, cancellation, 401/403/error handling |
| Shared presentation | `src/components/PageUI/` | Local logos and Lucide icon primitives |
| Page styling | `src/index.css` | Scoped Login and Employee styles, responsive layouts |

The source Figma export, unrelated mockup pages, unsupported leave data, and demo credentials are not part of the active Employee flow. No backend repository or production credentials are included here.

The staged Admin dashboard was later added as a visual/interaction parity surface based on the supplied `sas_convert` reference. Its KPI and assignment records are presentation placeholders until corresponding backend APIs are connected; the route remains protected by the stored server role.