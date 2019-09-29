export function scroll() {
  const container = document.getElementById('body-container')
  console.log(container)
  if (!container) return

  const parent = container.parentElement as any
  parent.scroll({ top: 0, behavior: 'smooth' })
}
