export function scroll() {
  const container = document.getElementById('book-list-container')
  if (!container) return

  container.scrollIntoView({ behavior: 'smooth' })
}
