import { AlignLeft, Bell, Calendar, CalendarCheck, ChevronLeft, ChevronRight, CircleCheck, Clock, LogOut, MapPin, Settings, TriangleAlert } from "lucide-react"

const icons = { "align-left": AlignLeft, bell: Bell, calendar: Calendar, "calendar-check": CalendarCheck, "chevron-left": ChevronLeft, "chevron-right": ChevronRight, "circle-check": CircleCheck, clock: Clock, "log-out": LogOut, "map-pin": MapPin, settings: Settings, "triangle-alert": TriangleAlert }

export default function Icon({ name, size = 18 }) {
  const Component = icons[name] ?? CircleCheck
  return <Component aria-hidden="true" size={size} strokeWidth={1.8} />
}