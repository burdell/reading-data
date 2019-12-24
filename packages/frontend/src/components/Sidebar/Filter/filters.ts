import { FilterOptions } from '../../../types'

export const emptyFilter: FilterOptions = {
  year: [],
  read: true,
  rating: [],
  month: []
}

const startYear = 2015
const currentYear = new Date().getFullYear()
const yearCount = currentYear - startYear + 1
export const possibleYears = Array.from({ length: yearCount }).map(
  (_, index) => index + startYear
)

export function defaultFilter(): FilterOptions {
  const currentMonth = new Date().getMonth()
  // don't show current year until February
  const yearOffset = currentMonth > 0 ? 1 : 2

  return {
    read: true,
    year: [possibleYears[possibleYears.length - yearOffset]],
    month: [],
    rating: []
  }
}

export const possibleRatings = [1, 2, 3, 4, 5]
export const possibleMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export const monthMap = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

export const translateMonth = (month: string) => {
  return (monthMap as any)[Number(month)]
}
