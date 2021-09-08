import { startOfMonth, add, isSameWeek } from 'date-fns'

export const getRev = (date: Date): number => {
  const firstDayOfDateMonth = startOfMonth(date)
  const firstDayOfNextMonth = startOfMonth(add(date, { months: 1 }))

  if (isSameWeek(date, firstDayOfDateMonth, { weekStartsOn: 6 }) || isSameWeek(date, firstDayOfNextMonth, { weekStartsOn: 6 })) return 0

  return 1
}

export default getRev
