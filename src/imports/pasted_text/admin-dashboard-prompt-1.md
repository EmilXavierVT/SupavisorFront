# Figma AI Prompt – Updated Admin Overview Dashboard

Improve and extend the existing desktop admin dashboard design.

Do **not** redesign the branding, left sidebar, top header, or general style.

Keep the current:

- Clean, modern admin interface
- Minimal visual style
- Rounded cards
- Subtle borders
- Neutral palette
- Clear spacing and hierarchy

Focus on updating the **Overview page structure and interaction model**.

---

# Updated Dashboard Concept

The dashboard should now be structured around **three clickable top overview cards**:

1. **Schedule & Assignments**
2. **Team on Duty**
3. **Alerts & Issues**

These cards are not simple KPI cards.

They act as **context selectors** for the workspace below.

When one card is selected:

- The selected card gets a clear active state
- The large Overview section below changes to match the selected context
- The right-side Control Panel changes accordingly
- The lower page feels like one connected workspace

---

# Key Structural Change

The previous cards **"Today's Assignments"** and **"Scheduled Today"** should be merged into **one unified operational view**.

This new combined section should focus on:

- Today's assignments
- Scheduled work
- Time slots
- Locations
- Assigned employees
- Staffing coverage
- Project/activity overview

This should be displayed in a **highly interactive schedule view** rather than a simple static list.

The schedule should help the admin quickly understand:

- What is happening today
- Where each assignment takes place
- Which employees are working
- Which project / assignment each item belongs to
- Whether coverage is complete
- Where attention is needed

---

# Top Card 1 – Schedule & Assignments

This card represents the daily operational schedule.

Show only summary-level metadata such as:

- Total assignments today
- Number of scheduled activities
- Number of locations
- Number of assignments needing staff

Example:

**12 assignments**

`Across 6 locations`

`2 need staffing`

This card should open the main **schedule workspace** below.

---

# Top Card 2 – Team on Duty

Use this card as the employee overview card.

Preferred title:

## Team on Duty

Alternative acceptable labels if needed:

- Workforce Today
- Staff on Duty
- Today's Team

This section should focus on the employees working today.

Summary metadata can include:

- Number of employees working today
- Number currently active
- Number starting later
- Number absent / unavailable
- Number unassigned / available

Example:

**31 employees**

`18 active · 9 later · 4 available`

This card should open an employee-focused overview below.

---

# Top Card 3 – Alerts & Issues

This card remains focused on urgent attention points.

Show metadata such as:

- Unstaffed assignments
- Cancellations
- Scheduling conflicts
- Absence issues
- Urgent operational problems

Example:

**4 issues**

`2 unstaffed · 1 cancellation · 1 conflict`

Use red only for actual warnings or issues.

---

# Selected Card State

Each top card should have:

- Default state
- Hover state
- Selected state

The selected card must clearly indicate that the workspace below belongs to it.

Possible visual treatments:

- Stronger border
- Slightly highlighted background
- Accent edge
- Bottom indicator
- Subtle visual connection to the expanded workspace below

Keep it elegant and professional.

---

# Main Layout Below the Cards

The lower page layout should be split into **two clearly separated sections**:

## Left: Main Overview Workspace
Approximately **70–75% width**

## Right: Separate Control Panel
Approximately **25–30% width**

The Control Panel must be a **dedicated, separate section** of the page.

It should not feel like a small card inside the main content area.

Use a clear divider or separate surface/background to distinguish it from the Overview Workspace.

The Control Panel remains in place across all selected contexts.

Only its content changes depending on the selected top card.

---

# Schedule & Assignments – Main Workspace

When **Schedule & Assignments** is selected, the main Overview Workspace should become a **schedule-based operational view**.

This should be the primary daily planning view.

Use a **calendar / schedule layout** inspired by a week or day planning board.

Possible structure:

- Timeline or grid-based schedule
- Day or week view
- Assignments displayed as time blocks/cards
- Each assignment card should show:
  - Time
  - Assignment / project name
  - Category
  - Location
  - Assigned employees
  - Staffing state

This view should be highly interactive and easy to scan.

The admin should be able to immediately see:

- Where the assignment takes place
- When it takes place
- Which employees are assigned
- Which assignments are understaffed
- Which project / task the assignment belongs to

Use visual cues such as:

- Color-coded categories
- Subtle issue indicators
- Employee initials / avatars
- Status markers for staffed / partially staffed / unstaffed

---

# Schedule & Assignments – Controls Above the Schedule

Include useful controls above the schedule view, such as:

- Today / next / previous navigation
- Date range selector
- Toggle between day / week view
- Filters
- Search
- Category filters
- Staff filters
- Location filters
- Clear all filters

Use compact UI controls and filter chips.

The schedule area should feel like a professional operations planning board.

---

# Schedule & Assignments – Control Panel

When **Schedule & Assignments** is selected, the right-side Control Panel should contain:

## Schedule Controls

- Create assignment
- Edit assignment
- Assign employee
- Replace employee
- Change time
- Change location
- Duplicate assignment
- Remove assignment

## Staffing Actions

- View understaffed assignments
- Find available employees
- Resolve staffing conflicts

## Selected Assignment Details

If an assignment is selected in the schedule, show its contextual details and controls here, such as:

- Assignment name
- Time
- Location
- Category
- Assigned employees
- Staffing status
- Quick edit actions

Important:

The Control Panel should support both:

1. Global actions for the selected overview context
2. Detailed actions for the selected schedule item

---

# Team on Duty – Main Workspace

When **Team on Duty** is selected, the main Overview Workspace should switch to an employee-focused view.

This should provide a clear overview of the workforce for today.

Possible display formats:

- Structured employee list
- Shift board
- Staff timeline
- Employee cards grouped by status or location

Show information such as:

- Employee name
- Role / function
- Shift time
- Current assignment
- Current location
- Availability
- Status

Possible statuses:

- Working now
- Starts later
- Available
- On break
- Absent
- Unassigned

This section should help the admin quickly understand:

- Who is working today
- Who is currently active
- Who is available
- Where each employee is assigned
- Which employees need reassignment

---

# Team on Duty – Control Panel

When **Team on Duty** is selected, the Control Panel should contain employee-related actions such as:

## Employee Controls

- Reassign employee
- Mark absent
- Add to assignment
- Remove from assignment
- Adjust shift
- Extend shift
- Contact employee
- View employee availability

## Selected Employee Details

If an employee is selected in the overview, show:

- Name
- Role
- Shift time
- Assigned task
- Current location
- Availability
- Quick actions

The panel should clearly support workforce management.

---

# Alerts & Issues – Main Workspace

When **Alerts & Issues** is selected, the main Overview Workspace should become an issue-management view.

Display issues in a structured list or table.

Include:

- Issue type
- Related assignment
- Related employee
- Location
- Time
- Severity
- Status

Possible examples:

- Unstaffed assignment
- Employee absence
- Shift overlap
- Last-minute cancellation
- Location conflict

Prioritize by urgency.

---

# Alerts & Issues – Control Panel

When **Alerts & Issues** is selected, the Control Panel should contain actions such as:

- Resolve issue
- Assign replacement
- Contact employee
- Open related assignment
- Acknowledge issue
- Dismiss issue

Show selected issue details when an issue row is chosen.

---

# Interaction Logic

The interaction model should be clear:

## Top card selection
Changes the overall context of the workspace

## Item selection inside the workspace
Changes the detailed content inside the Control Panel

Example:

- Selecting **Schedule & Assignments** loads the operational schedule
- Clicking a specific assignment updates the Control Panel with actions for that assignment

- Selecting **Team on Duty** loads the employee overview
- Clicking a specific employee updates the Control Panel with actions for that employee

This relationship must feel intuitive and connected.

---

# UX Goals

Prioritize:

- Fast operational overview
- High scanability
- Clear staffing visibility
- Easy schedule management
- Clear employee overview
- Strong relationship between overview and actions
- Minimal clutter
- Clear hierarchy
- Useful interaction states

The admin should be able to answer quickly:

- What is happening today?
- Where are assignments taking place?
- Who is working where?
- Which assignments need staff?
- Which employees are available?
- What needs immediate action?

---

# Component System

Create reusable components and variants for:

## Top Overview Cards
- Default
- Hover
- Selected
- Warning state

## Schedule Items
- Default
- Selected
- Understaffed
- Fully staffed

## Employee Rows / Cards
- Default
- Selected
- Available
- Active
- Absent

## Status Badges
- Staffed
- Needs staff
- Active
- Available
- Absent
- Conflict
- Resolved

## Filter Chips
- Default
- Selected
- Removable

## Control Panel Actions
- Primary
- Secondary
- Warning / destructive

---

# Prototype Interactions

If possible, create prototype interactions so that clicking each of the three top cards updates:

1. Selected card state
2. Main workspace content
3. Workspace header
4. Control Panel content
5. Relevant controls and filters

Transitions should feel like switching between different operational perspectives inside the same dashboard.

---

# Important Design Principle

Do not treat the dashboard as a set of unrelated cards.

It should feel like a connected admin operations system with three main perspectives:

**Schedule & Assignments → Team on Duty → Alerts & Issues**

The first perspective focuses on the operational schedule.

The second focuses on workforce overview.

The third focuses on problems requiring action.