Redesign the existing **Schedule page** while keeping the same overall product and functionality.

The current design is too dashboard-like and the actual schedule is too small.

I want the scheduling experience to feel inspired by the simplicity, clarity, spaciousness, and interaction patterns of **Apple Calendar on macOS and iOS**, while still being an original design for Morgendagens Måltid.

### Most important change

Make the **calendar / schedule occupy approximately 80–90% of the available main workspace**.

The schedule is the core product.

Remove or dramatically reduce anything that takes vertical space away from it.

Do NOT place large dashboard cards above the schedule.

---

### Calendar layout

Switch from the current employee × day table to a more visual scheduling canvas.

Use:

* Large weekly calendar
* Monday–Sunday across the top
* Clear dates
* Vertical time axis on the left
* Hour markers such as 06:00, 07:00, 08:00, etc.
* Very subtle horizontal hour lines
* Slightly stronger lines between days
* Current day softly highlighted
* Current time indicator when appropriate

The calendar should visually resemble a modern calendar application rather than a spreadsheet.

Allow vertical scrolling through time while keeping:

* day headers sticky
* employee/team controls accessible
* main toolbar visible

Show approximately 06:00–20:00 initially.

---

### Shift cards

Represent employee shifts like modern calendar events.

Each shift becomes a vertical event block positioned according to its actual start and end time.

Example:

**08:00–15:30**
Anna Jensen
Office Lunch · Østerbro

Use subtle rounded corners.

Role colors:

* Kitchen = warm orange / amber
* Cleaning = soft teal / cyan

Avoid strong saturated fills.

Use a very light tinted background with a stronger accent edge or text.

Shift blocks should immediately communicate:

* employee
* time
* assignment
* location
* role

Do not repeat unnecessary labels such as “KITCHEN” in large uppercase text on every card.

Use a small icon or subtle badge instead.

---

### Drag and drop

Make drag-and-drop extremely obvious and natural.

A manager should be able to:

* drag a shift vertically to change time
* drag horizontally to another day
* resize the top or bottom edge to change duration
* drag an unassigned shift onto the calendar
* duplicate using a contextual menu
* move a shift between employees

When dragging:

* raise the card slightly
* add a soft shadow
* show a translucent preview
* snap to 15-minute intervals
* highlight valid drop areas

Interaction should feel fluid like dragging an event in Apple Calendar.

---

### Employee filtering instead of giant employee rows

Do NOT permanently dedicate large rows to each employee.

The current employee-column layout wastes too much schedule space.

Instead add a compact control near the top:

**Employees ▾**

Clicking it opens a lightweight popover containing:

Search employee

Teams:
☑ Kitchen
☑ Cleaning

Employees:
☑ Anna Jensen
☑ Mikkel Hansen
☑ Sofia Larsen

Allow multiple employees to be displayed simultaneously.

Use employee avatars or initials subtly on shift cards.

Optionally provide a toggle:

**Calendar | Employees**

Calendar = time-based Apple Calendar style
Employees = resource scheduling view grouped by employee

Calendar should be the default.

---

### Top toolbar

Make the header significantly more compact.

One clean toolbar:

**‹   Today   ›     September 7–13**

Then on the right:

Search
Filter
Day / Week toggle
**+ Add shift**

Use icon buttons where obvious.

Avoid excessive boxed controls.

Use Apple-like spacing and minimal visual weight.

---

### Filters

Keep powerful filtering but hide complexity until needed.

Use one **Filter** button.

Opening it displays a floating popover with:

* Employee
* Kitchen / Cleaning
* Location
* Assignment
* Availability
* Shift status
* Working hours

After selecting filters, show small removable chips below the toolbar.

Example:

**Kitchen ×   Østerbro ×**

Do not permanently display “Active filters:” unless filters are active.

---

### Unassigned shifts

Remove the large “Unassigned shifts” panel currently occupying a major part of the page.

Replace it with a compact floating/collapsible tray.

Example:

**Unassigned · 3**

Clicking it opens a side drawer from the right containing draggable shift cards.

This preserves calendar space while keeping unassigned work immediately accessible.

The user can drag a card from the drawer directly onto the calendar.

---

### Staffing information

Remove the large “This week / Kitchen / Cleaning” cards above the calendar.

Instead display this information compactly.

For example:

**Kitchen 12 · Cleaning 8 · ⚠ 3 unfilled**

Place this near the toolbar or in a small status area.

Detailed staffing information can appear when clicked.

The schedule should never be pushed downward by summary cards.

---

### Side navigation

Make the sidebar slightly narrower and quieter.

It should support the schedule, not visually compete with it.

Use:

* smaller icons
* less vertical spacing
* subtle selected-state background
* minimal borders

Consider allowing the sidebar to collapse to icons only.

---

### Clicking a shift

When a shift is clicked, open a clean right-hand inspector panel similar to modern macOS productivity applications.

Panel:

**Anna Jensen**

Kitchen

Monday, Sep 7
08:00 → 15:30

Assignment
Office Lunch

Location
Østerbro

Break
30 min

Status
Confirmed

Notes

Then:

**Save**

••• More

The calendar should remain visible underneath instead of navigating to another page.

---

### Visual direction

The interface should feel:

* spacious
* calm
* premium
* extremely intuitive
* modern Scandinavian
* Apple-inspired
* lightweight
* almost invisible until interaction is needed

Use:

* generous whitespace
* SF Pro-like typography
* very light gray background
* white calendar surface
* subtle #E5E5E5-style separators
* 8–12px corner radius
* restrained shadows
* strong typography hierarchy
* minimal borders

Avoid:

* dashboard card overload
* heavy table borders
* excessive uppercase labels
* overly rounded SaaS pills everywhere
* large summary widgets
* permanent filter panels
* excessive colors
* visual clutter

### Core UX principle

A manager opening this screen should immediately think:

**“I can see the whole week, I can see who is working, and I can move things around instantly.”**

The schedule must dominate the screen.

Prioritize visual scheduling and direct manipulation over dashboards and reporting.
