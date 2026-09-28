# Supavisor Frontend Handoff

Updated: 18 September 2026

## Integration blockers

The project is ready to use as a frontend prototype, but the following items should be completed before treating it as a production-ready frontend/backend integration:

1. **Employee creation is local-only.** The Admin Hub Add Employee workflow saves records to `localStorage`. It does not create users through a backend endpoint.
2. **Employee contact editing is local-only.** Employees can edit their email and phone number, but those changes are stored only on the current device.
3. **Password reset is local-only.** Forgot-password submissions are recorded in `localStorage`; no reset email or backend request is sent.
4. **Access requests are local-only.** Request-access submissions are recorded in `localStorage`; no administrator workflow or backend request exists yet.
5. **Scheduling and workforce data are placeholders.** Assignments, staffing, availability, time off, locations, reports, notifications, and schedule controls still need their backend services.
6. **Several admin navigation pages are presentation placeholders.** Their layouts and navigation work, but they do not yet load or mutate domain data.
7. **Backend contracts need confirmation.** Authentication is connected, but request and response formats for employee management, contact changes, scheduling, notifications, password reset, and access requests still need to be agreed with the backend project.
8. **Authorization must also be enforced by the backend.** Frontend route guards improve the experience but must not be the security boundary for admin operations.
9. **Test coverage is incomplete.** Authentication utilities have automated coverage, but component, responsive, accessibility, integration, and end-to-end tests have not been added.
10. **Production error handling needs expansion.** Connected features should handle validation errors, expired sessions, conflicts, unavailable services, retries, and offline behavior consistently.

## Current progress

### Authentication

- The login landing page presents separate **Admin login** and **Employee login** buttons.
- Both choices use the same real backend authentication request. The selection changes presentation only and never grants a role.
- Login sends credentials to `POST /auth/login`.
- The backend response determines the user's roles and destination.
- Session validation calls `POST /auth/token-validation`.
- Authenticated requests attach the stored JWT as a Bearer token.
- Refresh tokens returned through the `X-Refresh-Token` response header replace the stored JWT.
- Logout removes only the active session token and stored user identity.
- The former hardcoded admin credentials, mock admin token, and local authentication bypass have been removed.
- The API base URL can be set with `VITE_API_URL`. It currently falls back to `https://supaapi.project-ice.dk/api`.
- Backend roles are normalized from a comma-separated `role`, a role array, or a `roles` array.

### Login assistance

- Forgot Password opens a dedicated form.
- Request Access opens a form for name, email, phone number, and reason for access.
- Both forms are responsive and accessible from either login presentation.
- These submissions are prototypes stored locally until backend endpoints are available.

### Admin dashboard

- Admin and employee workspaces now share a consistent visual system.
- The sidebar can expand and collapse.
- Collapsed sidebar indicators are compact, and icons are centered correctly.
- Overview includes four operational summary cards.
- Schedule Controls are aligned with the summary cards on desktop and remain independently scrollable.
- Tablet layouts show Today's Schedule and Screening Details as two equal columns.
- Phone layouts stack schedule content and provide horizontally scrollable bottom navigation.
- Screening tabs and All, Kitchen, and Cleaning filters work locally even without backend data.
- Notifications include a left-aligned Mark All as Read action.
- The admin header search is hidden on Overview and Admin Hub but remains available on other admin pages.
- The Admin Hub includes Employee Management, Roles & Permissions, Locations & Venues, and Appearance.
- Integration & API was removed from the Admin Hub.

### Employee management prototype

- Add Employee opens a modal overlay.
- The form requires full name, email address, and phone number.
- Employees can have multiple work roles.
- Available work roles are Kitchen and Cleaning; Operations was removed.
- Access level is stored separately as Employee, Team Lead, or Manager.
- Added employees appear in the Admin Hub list and persist in `localStorage`.
- Existing locally stored prototype records are normalized to the current role structure.

### Appearance and themes

- Admin Appearance supports Light and Dark display modes.
- Neutral, Ocean, Forest, Sunset, and Custom palettes are available.
- Custom colors are stored separately for Light and Dark mode.
- Admin themes cover backgrounds, sidebar, cards, muted surfaces, text, and borders.
- Employee pages support Neutral, Ocean, Forest, Sunset, and Custom color themes.

### Employee workspace

- Employee Overview, Schedule, and Settings views are available.
- Employee pages scroll when their content exceeds the viewport.
- Tablet layouts move the employee action panel below the primary content to preserve usable width.
- Phone layouts use bottom navigation and compact spacing.
- Employees can edit their displayed email address and phone number in Settings.
- Edited contact information updates the local header and account presentation.
- Contact changes persist locally until a backend profile-update endpoint is connected.
- Employee notifications include a left-aligned Mark All as Read action.

### Responsive behavior

- Admin and employee layouts include desktop, tablet, phone, and narrow-phone breakpoints.
- Admin navigation becomes a bottom navigation strip on phones.
- Admin Hub tabs, cards, employee rows, appearance controls, and modal forms adapt to smaller widths.
- The Add Employee modal becomes a bottom sheet on narrow phones.
- Employee action content stacks below the overview on tablets.
- Login and account-assistance forms remain scrollable and resize for phone screens.

### Interaction and accessibility details

- Enabled buttons and explicit interactive elements use pointer cursors.
- Disabled controls retain a not-allowed cursor.
- Interactive filters expose pressed states.
- Dialogs use modal dialog semantics and labeled headings.
- Forms use associated labels, appropriate input types, and browser validation.
- Visible focus indicators are provided for keyboard users.
- Reduced-motion preferences are respected in the admin workspace.

## Current local prototype storage

The following browser storage keys currently support features that do not yet have backend endpoints:

| Key | Purpose |
| --- | --- |
| `adminEmployees` | Locally added employee records |
| `employeeContactInfo` | Locally edited employee email and phone |
| `passwordResetRequests` | Prototype forgot-password requests |
| `accessRequests` | Prototype access requests |
| `adminTheme` | Selected admin color theme |
| `adminDisplayMode` | Admin light or dark mode |
| `adminCustomColors` | Per-mode admin custom colors |
| `employeeTheme` | Selected employee theme |
| `employeeCustomColors` | Employee custom colors |
| `jwtToken` | Active backend session token |
| `user` | Backend-authenticated user identity and roles |

Local prototype keys should be replaced with backend reads and writes as their corresponding endpoints become available.

## Suggested backend endpoints

Exact paths and payloads should be agreed with the backend team. The frontend currently needs equivalents of:

- Create and list employees.
- Update the authenticated employee's contact information.
- Submit and process password-reset requests.
- Submit and review access requests.
- List and manage assignments and schedules.
- List staffing status and staff-duty information.
- List and manage locations.
- List and process availability and time-off requests.
- Load reports and operational summary counts.
- List notifications and mark notifications as read.

## Verification completed

- The Vite production build completes successfully.
- Authentication/API tests pass.
- Tests cover backend login identity and role storage, removal of the former mock-admin bypass, refresh-token storage, logout behavior, and malformed stored-user handling.
- The removed Session Replay folder is no longer part of the project.

## Recommended next steps

1. Agree on API contracts and authorization requirements with the backend team.
2. Replace each local prototype workflow with an API service function, starting with employee creation and contact updates.
3. Connect password reset and access request forms to real endpoints.
4. Replace placeholder schedule, assignment, staffing, time-off, location, report, and notification content with backend queries.
5. Add loading, empty, success, validation, and failure states for every connected workflow.
6. Add component tests and end-to-end tests for admin login, employee login, role-based routing, employee creation, profile editing, responsive navigation, and session expiry.
7. Run accessibility checks and device testing across supported desktop, tablet, and phone sizes.
8. Confirm environment configuration and remove generated or dependency folders from any drag-and-drop handoff if the destination project manages those separately.
