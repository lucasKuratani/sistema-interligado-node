import { startOfMonth, startOfWeek, add, eachWeekOfInterval, isSameWeek } from 'date-fns'

export const getRev = (date: Date): number => {
  const startOfMonthFirstRev = startOfWeek(startOfMonth(date), { weekStartsOn: 6 })
  const startOfMonthLastRev = add(startOfWeek(startOfMonth(add(date, { months: 1 })), { weekStartsOn: 6 }), { weeks: -1 })
  const startsOfAllMonthRevs = eachWeekOfInterval({ start: startOfMonthFirstRev, end: startOfMonthLastRev }, { weekStartsOn: 6 })

  console.log(startsOfAllMonthRevs)

  if (isSameWeek(startOfWeek(startOfMonth(add(date, { months: 1 })), { weekStartsOn: 6 }), date, { weekStartsOn: 6 })) return 0

  return startsOfAllMonthRevs.findIndex(startOfRev => isSameWeek(startOfRev, date, { weekStartsOn: 6 }))
}

export default getRev
