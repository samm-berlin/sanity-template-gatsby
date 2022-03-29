export const toDateString = (d: string): string => {
  const s = new Date(d)

  const month = [
    'Jänner',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ]

  return `${s.getDate()}. ${month[s.getMonth()]} ${s.getFullYear()}`
}
