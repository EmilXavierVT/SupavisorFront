# Figma AI Prompt – Interactive Admin Overview Dashboard

Improve and extend the existing desktop admin dashboard design.

Do **not** redesign the navigation, branding, sidebar, or top header.

Keep the existing:

- Clean and minimal visual style
- Typography
- Rounded cards
- Subtle borders
- Neutral color palette
- Existing spacing system
- Left sidebar
- Top navigation

Focus specifically on improving the **Admin Overview page**.

---

# Core Interaction Concept

The dashboard should be built around **three clickable overview cards** at the top.

These cards should not only display statistics.

They should function as **context selectors** for the larger workspace underneath.

The three main sections are:

1. Today's Assignments
2. Scheduled Today
3. Alerts & Issues

When the user selects one of these cards:

- The selected card gets a clear active state
- The large Overview Panel underneath changes
- The right-side Control Panel changes
- The entire lower workspace reflects the selected context

The interaction should communicate:

> **I selected this category → this is the detailed overview → these are the actions I can perform.**

---

# 1. Today's Assignments

Show essential metadata only.

Possible information:

- Total assignments today
- Breakdown by assignment type
- Number of assignments requiring staff
- Number of locations involved

Example:

**12 assignments**

`7 Kitchen · 5 Cleaning`

`2 need staffing`

Avoid displaying too much detailed information inside the card.

The purpose of the card is to provide a quick overview and allow the user to enter the detailed workspace.

---

# 2. Scheduled Today

Focus on staffing and scheduling.

Possible metadata:

- Employees scheduled today
- Number of active/upcoming employees
- Locations covered
- Shifts starting soon
- Uncovered shifts

Example:

**31 employees scheduled**

`Across 6 locations`

`3 shifts starting soon`

---

# 3. Alerts & Issues

This card should focus specifically on things requiring attention.

Possible metadata:

- Unstaffed assignments
- Late cancellations
- Scheduling conflicts
- Urgent requests
- Missing employees

Example:

**4 issues**

`2 unstaffed assignments`

`1 cancellation · 1 conflict`

Use red only when something genuinely requires attention.

---

# Selected Card State

The cards should have:

- Default state
- Hover state
- Selected state

The selected card must clearly communicate that the content underneath belongs to it.

Possible visual treatments:

- Stronger border
- Slightly different background
- Accent line
- Small bottom indicator
- Subtle shadow
- Connected visual element between the card and overview panel

Keep the selected state subtle and professional.

Do not use excessive colors.

---

# Dynamic Overview Workspace

Under the three cards, create one large dynamic workspace.

Divide the workspace into two sections:

## Left Side – Main Overview Panel

Approximately:

**70–75% width**

This is where the detailed information for the selected card appears.

## Right Side – Contextual Control Panel

Approximately:

**25–30% width**

This panel contains actions related specifically to the selected context.

The Control Panel should change whenever another overview card is selected.

---

# Today's Assignments – Expanded View

When **Today's Assignments** is selected, the main Overview Panel should display today's assignments.

Create a compact table or structured list.

Include information such as:

- Assignment name
- Category
- Location
- Time slot
- Assigned employees
- Staffing status

Example structure:

| Assignment | Category | Location | Time | Staff | Status |
|---|---|---|---|---|---|
| Morning Floor Prep | Cleaning | Nørrebro | 07:00–09:00 | LT, SR | Staffed |
| Catering Setup | Kitchen | Vesterbro | 09:30–12:00 | EM | Needs 1 |
| Deep Clean – Main Hall | Cleaning | HQ | 12:30–15:00 | DA | Staffed |

---

# Assignment Filters

Above the assignment list, include useful tools such as:

- Search
- Category filter
- Location filter
- Staffing status filter
- Sort
- Show only issues

Avoid making the filter area visually heavy.

Use compact controls such as dropdowns or filter chips.

---

# Today's Assignments – Control Panel

When Today's Assignments is selected, the right-side Control Panel could contain:

## Quick Actions

- Create assignment
- Assign employee
- Replace employee
- Change time
- Change location
- View unstaffed assignments

The actions should be visually grouped and easy to scan.

The most common action can be emphasized slightly.

---

# Scheduled Today – Expanded View

When **Scheduled Today** is selected, replace the Overview Panel content with a staffing-focused view.

Show information such as:

- Employee
- Shift time
- Location
- Assigned task
- Availability
- Current status

Possible statuses:

- Working
- Upcoming
- Finished
- Absent
- Unassigned

The layout could use a table, timeline, or structured employee list.

---

# Scheduled Today – Control Panel

Relevant actions could include:

- Add employee to shift
- Reassign employee
- Adjust shift
- Handle absence
- View available employees
- Find replacement

The actions should directly relate to staffing management.

---

# Alerts & Issues – Expanded View

When **Alerts & Issues** is selected, the Overview Panel should become an issue-management workspace.

Prioritize issues based on urgency.

Show:

- Issue type
- Related assignment
- Related employee
- Location
- Time
- Severity
- Current status

Possible examples:

| Issue | Related To | Location | Severity | Status |
|---|---|---|---|---|
| Employee cancelled | Catering Setup | Vesterbro | High | Unresolved |
| Assignment understaffed | Evening Kitchen | Amager | High | Needs staff |
| Shift overlap | Employee #24 | Nørrebro | Medium | Review |

---

# Alerts & Issues – Control Panel

Relevant actions could include:

- Resolve issue
- Assign employee
- Find replacement
- Contact employee
- Acknowledge alert
- Dismiss alert
- Open related assignment

High-priority actions should be easy to identify without making the entire panel red.

---

# Context Header

The large Overview Panel should contain a contextual header.

Example when Today's Assignments is selected:

## Today's Assignments

`12 assignments · 2 require attention`

The right-side panel should also communicate the same context.

Example:

## Assignment Controls

`Actions for Today's Assignments`

When the selected card changes, both headers should change accordingly.

---

# Visual Hierarchy

The page hierarchy should approximately be:

1. Page/date context
2. Three overview cards
3. Selected context
4. Detailed overview
5. Contextual actions

The top cards should be easy to scan in only a few seconds.

Detailed information should remain inside the lower Overview Panel.

---

# Color Usage

Keep the interface mostly neutral.

Use colors primarily for status.

### Red

Only for:

- Errors
- Missing staff
- Serious conflicts
- Urgent issues

### Green

Use for:

- Staffed
- Confirmed
- Resolved
- Available

### Orange / Yellow

Optional for:

- Warning states
- Upcoming problems
- Partial staffing

Avoid using status colors as large decorative elements.

---

# UX Goals

Prioritize:

- Fast scanning
- Clear information hierarchy
- Low cognitive load
- Operational awareness
- Quick access to important actions
- Clear relationship between summary and detail
- Clear selected state
- Consistent spacing
- Strong alignment
- Minimal visual clutter

The admin should be able to quickly answer:

- What is happening today?
- Is anything wrong?
- Where is staff needed?
- Who is working?
- What requires my attention?
- What can I change directly from this page?

---

# Component System

Create reusable components and variants for:

## Overview Cards

Variants:

- Default
- Hover
- Selected
- Warning / issue state

## Status Badges

Examples:

- Staffed
- Needs staff
- Upcoming
- Working
- Finished
- Issue
- Resolved

## Filter Chips

Variants:

- Default
- Hover
- Selected

## Assignment Rows

Include reusable:

- Assignment metadata
- Employee avatars / initials
- Status
- Location
- Time

## Control Panel Actions

Create reusable action components for:

- Primary actions
- Secondary actions
- Destructive / warning actions

---

# Prototype Interaction

If possible, create prototype interactions.

Clicking each of the three overview cards should update:

1. The selected card state
2. The Main Overview Panel
3. The contextual header
4. The right-side Control Panel
5. Relevant filters and actions

The transition between states should feel like switching between sections of the same dashboard rather than opening completely different pages.

---

# Important Design Principle

Do not treat the three top cards as simple KPI cards.

They represent the three primary operational perspectives of the dashboard:

**Assignments → Staffing → Problems**

The detailed area underneath should act as the workspace for whichever perspective is currently selected.

The result should feel like a modern workforce scheduling / operations management dashboard.