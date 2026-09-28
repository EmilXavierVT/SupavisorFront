Design a modern, simple, and highly intuitive desktop web application for **Morgendagens Måltid** used internally for **employee management, scheduling, and assignment planning**.

The visual style should feel Scandinavian, professional, clean, warm, and minimal. Avoid a generic corporate SaaS look. Use generous whitespace, soft neutral backgrounds, subtle borders, rounded corners, modern typography, and restrained use of color.

The PRIMARY screen should be a **drag-and-drop employee scheduling dashboard**.

## Main layout

Create a desktop application layout with:

* Left sidebar navigation
* Top header
* Main scheduling workspace
* Optional right-side details drawer when an employee or shift is selected

Sidebar navigation:

* Overview
* Schedule
* Employees
* Assignments
* Locations
* Availability
* Time Off
* Reports
* Settings

Make **Schedule** the active page.

## Scheduling dashboard

At the top of the page show:

**Schedule**

Underneath, add a compact toolbar with:

* Previous week
* Today
* Next week
* Date range, for example: “7–13 September 2026”
* Day / Week view toggle
* Search employee
* Filters button
* “Add shift” primary button

The schedule itself should be the dominant part of the interface.

Create a **weekly drag-and-drop calendar / workforce planner**.

Columns:

* Monday
* Tuesday
* Wednesday
* Thursday
* Friday
* Saturday
* Sunday

Rows can represent employees, teams, or working areas.

Each shift should appear as a draggable card.

Example shift card:

**08:00 – 15:30**
Anna Jensen
Kitchen
Office Lunch – Østerbro

Show relevant information without making the card crowded.

## Employee categories and color coding

Clearly distinguish employees by role.

Use a consistent color system:

* **Kitchen employees:** warm orange / amber
* **Cleaning employees:** fresh blue / teal

Use softer tinted backgrounds with stronger accent borders or role indicators rather than extremely saturated blocks.

Include small role badges such as:

“Kitchen”
“Cleaning”

Make the schedule easy to understand at a glance.

## Drag and drop interaction

The design should clearly communicate that shifts can be:

* dragged between days
* reassigned between employees
* extended or shortened
* duplicated
* moved to another location or assignment

Show one example of a shift currently being dragged with a subtle elevated shadow and a highlighted drop target.

When a shift is selected, open a clean right-side drawer containing:

* Employee
* Role
* Date
* Start time
* End time
* Assignment
* Location
* Break
* Notes
* Status

Actions:

* Save changes
* Duplicate shift
* Delete shift

## Powerful filtering

Filtering is extremely important.

Create a filter button that opens a simple dropdown / panel with filters for:

**Employee**

* Search employees
* Select individual employees

**Employee type**

* Kitchen
* Cleaning

**Location**

* Select one or multiple locations

**Assignment / Job**

* Office lunch
* Catering
* Event
* Cleaning assignment
* Other

**Shift status**

* Scheduled
* Confirmed
* Pending
* Sick
* Time off

**Availability**

* Available
* Unavailable
* Partial availability

**Working hours**

* Morning
* Afternoon
* Evening

Show active filters as removable chips above the schedule, for example:

[ Kitchen × ] [ Østerbro × ] [ Available × ]

Include “Clear all”.

The user should be able to understand immediately what they are currently filtering.

## Employee information

Each employee row should include:

* Profile picture or initials
* Full name
* Role
* Weekly scheduled hours
* Availability indicator

Example:

**Anna Jensen**
Kitchen
32 / 37 hours

Include a subtle progress indicator for scheduled weekly hours.

Highlight possible overtime when an employee exceeds their expected hours.

## Availability

Visually display unavailable periods directly in the calendar using muted grey areas or subtle diagonal patterns.

For example:

Anna Jensen
Tuesday 08:00–12:00 unavailable

It should be obvious where a manager can and cannot place a shift.

## Warnings and conflicts

The scheduling interface should detect and visually show:

* overlapping shifts
* unavailable employees
* overtime
* missing employees
* shifts without an assigned employee
* insufficient staffing

Use subtle warning icons rather than large error messages.

Example:

⚠ Employee unavailable

or

⚠ 42 / 37 weekly hours

## Staffing overview

Above the calendar, include a small summary section:

**This week**

Kitchen
12 employees scheduled
2 shifts missing staff

Cleaning
8 employees scheduled
1 shift missing staff

Keep this compact and visually secondary to the schedule itself.

## Unassigned shifts

Add a collapsible section called:

**Unassigned shifts**

These cards can be dragged directly onto an employee's schedule.

Example:

08:00–14:00
Cleaning
Amager Office
Needs 2 employees

This is an important part of the scheduling workflow.

## Modern UX requirements

The system must feel extremely easy to use.

Prioritize:

* clear hierarchy
* minimal visual clutter
* fast scanning
* obvious drag-and-drop interactions
* simple filtering
* readable typography
* consistent spacing
* accessible contrast
* intuitive icons
* minimal number of clicks

Avoid:

* overly complicated tables
* excessive borders
* tiny text
* too many bright colors
* enterprise-software clutter
* unnecessary charts
* excessive gradients

The product should feel like a modern workforce scheduling tool designed specifically for a Danish catering, kitchen, and cleaning company.

## Overall visual direction

Think:

modern Scandinavian operations software + employee planner + calendar.

Use a light interface with warm neutrals and subtle references to food / hospitality.

The scheduling calendar should be the hero of the page.

Make the design polished enough to be presented as a realistic production-ready web application mockup.
