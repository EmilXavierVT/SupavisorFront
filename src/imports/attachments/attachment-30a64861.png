Update the existing Supavisor Figma Make project with the following changes.

IMPORTANT SCOPE RULES

Do NOT redesign the dashboard.

Do NOT change:

* Overview
* Schedule
* Employees
* Assignments
* Locations
* Availability
* Time Off
* Reports
* Existing colors
* Existing typography
* Existing spacing system
* Existing scheduling functionality
* Existing dashboard cards
* Existing employee/administrator login behavior
* Existing admin/employee account model

Keep the current visual style exactly as it is.

The only areas you should modify are:

1. The left sidebar behavior
2. The current sidebar Settings action
3. The new Admin Hub page
4. The placement of personal website Settings near the profile area

ACCOUNT TYPES

There are exactly two account types in this application:

* Admin
* Employee

Do not create:

* Supervisor
* Manager
* Owner
* Custom roles
* Any other account type

The existing login logic must remain unchanged.

When logged in as Admin:

* Keep access to all existing admin sidebar actions
* Also show the new Admin Hub action

When logged in as Employee:

* Keep the existing employee sidebar exactly as it is
* Do NOT show Admin Hub

SIDEBAR

Keep all existing sidebar tab names exactly as they are.

For Admin, retain:

* Overview
* Schedule
* Employees
* Assignments
* Locations
* Availability
* Time Off
* Reports

Do not rename, reorder, remove, or redesign these items.

Add one new sidebar action:

Admin Hub

Place Admin Hub where the current Settings navigation item is located near the bottom of the sidebar.

Use an admin-oriented icon such as:

* Shield
* ShieldCheck
* UserCog

Prefer a simple Lucide icon that matches the rest of the existing interface.

Admin Hub must only be visible to Admin users.

REMOVE SETTINGS FROM SIDEBAR

Remove the current Settings navigation item from the sidebar.

Do not delete the concept of Settings entirely.

Settings is now intended only for the individual user's personal website preferences.

Move the Settings action beside the existing profile/user icon area.

The profile/settings area should visually feel like:

[Profile / Avatar] [Settings icon]

The Settings icon should open personal website preferences only.

Examples of future personal settings could include:

* Account preferences
* Appearance
* Personal UI preferences
* Profile settings

Do not place administrative tools inside personal Settings.

Keep personal Settings separate from Admin Hub.

COLLAPSIBLE SIDEBAR

Make the main left sidebar collapsible.

Expanded state:

* Keep the current sidebar width and appearance as close as possible to the existing design
* Keep icons and labels visible
* Keep the current branding/logo area
* Keep existing spacing and styling

Collapsed state:

* Reduce the sidebar width significantly
* Show navigation icons only
* Hide the text labels
* Keep all existing navigation functionality
* Show a tooltip with the navigation label on hover
* Keep Admin Hub visible as an icon for Admin users
* Keep profile/settings/logout controls usable
* Reduce the branding area appropriately so it does not look cramped

Add a clear collapse/expand control.

Use:

* ChevronLeft when expanded
* ChevronRight when collapsed

The collapse control should be subtle and visually consistent with the existing design.

Do not allow the sidebar collapse feature to change the rest of the dashboard layout beyond making more horizontal workspace available.

ADMIN HUB

Create a new page called:

Admin Hub

The Admin Hub should replace the functionality that is currently connected to the sidebar Settings action.

Reuse the existing Control Panel page structure rather than inventing a completely new layout.

The current Control Panel already contains:

* A page header
* Internal left-side navigation
* Employee Management
* Employee search
* Active Employees
* Add Employee
* Edit employee actions
* Locations Data
* Scheduling Rules

Reuse this visual structure.

Change the page title from:

Control Panel

to:

Admin Hub

Use this subtitle:

Manage employees and administrative workspace settings.

Do not redesign the existing page styling.

Keep:

* The same card style
* The same border style
* The same spacing
* The same typography
* The same neutral color palette
* The same rounded corners
* The same general width/layout

ADMIN HUB INTERNAL NAVIGATION

Keep the current internal Control Panel navigation structure visually similar.

For now, use:

* Employee Management
* Roles & Permissions
* Locations & Venues
* Integration & API

Employee Management should be the active/default section.

The other sections can remain generic placeholders for now.

Do not create complicated new functionality for:

* Roles & Permissions
* Locations & Venues
* Integration & API

Do not introduce new role types.

ROLES & PERMISSIONS

Because this application only has two account types, any role UI must only refer to:

* Admin
* Employee

Do not create additional roles.

For now, Roles & Permissions can remain a simple placeholder section that reflects only these two account types.

EMPLOYEE MANAGEMENT

Employee Management is the main functional area of Admin Hub.

Keep the existing Active Employees overview.

Keep the existing employee search.

Keep the current employee visual style.

Each employee row should show:

* Avatar / initials
* Employee name
* Employee type or team information already used in the project
* Active status
* Edit action
* Additional actions menu

Add an overflow action menu using a three-dot icon.

The menu can contain:

* Edit employee
* Remove employee

Do not permanently show a large destructive Remove button on every employee row.

ADD EMPLOYEE

Keep the existing:

* Add Employee

button in the top-right of Admin Hub.

The Add Employee interaction should support creating a new employee profile.

For account type, the only available options must be:

* Admin
* Employee

Do not include any other account type.

For now, keep the form generic and simple.

Suggested fields:

* Full name
* Email
* Account type
* Employee/team type if already relevant in the current project
* Weekly maximum hours if already used by the current employee model

Do not invent unrelated employee data.

REMOVE EMPLOYEE

When an admin selects Remove employee, show a confirmation dialog before removing the employee.

Example:

Title:
Remove employee?

Message:
Are you sure you want to remove Anna Jensen from the workspace?

Actions:
Cancel
Remove employee

The Remove employee action should visually use a destructive/red treatment only inside this confirmation flow.

Do not use aggressive red styling elsewhere.

EDIT EMPLOYEE

Keep Edit employee visually consistent with the current Edit action.

The Edit interaction may allow changing:

* Name
* Email
* Admin / Employee account type
* Existing employee/team type information
* Existing maximum weekly hours

Do not add unnecessary fields.

ADMIN HUB OVERVIEW

Do not turn Admin Hub into a large analytics dashboard.

Keep it primarily as a practical administration workspace.

The default Employee Management view should be the main focus.

It should allow the Admin to quickly:

* Search employees
* View employees
* Add employees
* Edit employees
* Remove employees

GENERIC SECONDARY ADMIN AREAS

Keep the existing generic secondary areas from the old Control Panel.

Locations Data:

* Keep the existing card
* Keep Manage Locations
* Do not deeply expand it yet

Scheduling Rules:

* Keep the existing card
* Keep Configure Rules
* Do not deeply expand it yet

These are placeholders for future Admin Hub functionality.

PROFILE SETTINGS

Create a small Settings icon beside the existing profile/user control.

This Settings area is personal.

It must not contain:

* Employee Management
* Roles
* Locations
* Scheduling Rules
* Integrations
* Administrative system settings

It should only represent personal website/account preferences.

For now, a simple placeholder panel or popover is enough.

ROUTING / PAGE LOGIC

Update the page logic so:

Admin Hub sidebar action:

* sets the active page to "Admin Hub"
* renders the existing Control Panel structure, now renamed Admin Hub

Do not keep the page route named Settings for the administrative page.

Personal Settings near the profile should be separate from activePage navigation if possible.

The desired logic is:

Admin:
Overview
Schedule
Employees
Assignments
Locations
Availability
Time Off
Reports
Admin Hub

Employee:
My Overview
My Schedule
Availability
Time Off

Do not change the existing Employee sidebar labels.

STRICT DO-NOT-CHANGE LIST

Do not change:

* Login screen design
* Login screen behavior
* Admin login flow
* Employee login flow
* Overview page
* Schedule page
* Existing schedule design
* Existing shift cards
* Existing drag-and-drop concept
* Existing dashboard Control Panel on Overview
* Employees page
* Assignments page
* Locations page
* Availability page
* Time Off page
* Reports page
* Logos
* Branding
* Color palette
* Fonts
* Existing navigation labels
* Existing employee type logic
* Existing Kitchen/Cleaning styling
* Existing responsive behavior except where required for the collapsible sidebar

IMPLEMENTATION GOAL

Make the smallest possible set of changes required to achieve:

1. Collapsible main sidebar
2. Replace sidebar Settings with Admin Hub
3. Reuse existing Control Panel as Admin Hub
4. Keep Admin Hub admin-only
5. Keep exactly two account types: Admin and Employee
6. Move personal Settings beside the profile icon
7. Allow Admin Hub to add, edit, search, and remove employees
8. Leave the rest of the project unchanged

Before modifying any unrelated component, verify whether it is necessary for this exact scope.

If it is not necessary, do not change it.
