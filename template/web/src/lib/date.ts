export const toDateString = (d: string): string => {
  const s = new Date(d)

  const month = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ]

  return `${s.getDate()}. ${month[s.getMonth()]} ${s.getFullYear()}`
}
