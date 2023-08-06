export function FormatDate(date: string) {
  const OneDay = new Date(date)
  const [month, day, year] = [
    OneDay.getMonth(),
    OneDay.getDate(),
    OneDay.getFullYear(),
  ]

  const DateNow = `${day}/${month + 1}/${year}`

  return DateNow
}
