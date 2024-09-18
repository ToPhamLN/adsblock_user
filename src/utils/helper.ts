export function formatDate(isoString: string) {
  const date = new Date(isoString)

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }

  const dateString = date.toLocaleDateString('en-US', options)

  return `${dateString.replace(',', '')}`
}
