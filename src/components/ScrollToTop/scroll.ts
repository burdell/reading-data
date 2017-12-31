export default function scrollToTop() {
    const parent = document.getElementById('body-container').parentNode as any;
    parent.scrollTop = 0;
}