export default function scrollToTop() {
    const parent = document.getElementById('body-container')
        .parentElement as any
    parent.scroll({ top: 0, behavior: 'smooth' })
}
