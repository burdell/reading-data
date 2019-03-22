export default function scrollToTop() {
  const container = document.getElementById('body-container')
  if (!container) return

  const parent = container.parentElement as any
  parent.scroll({ top: 0, behavior: 'smooth' })
}
