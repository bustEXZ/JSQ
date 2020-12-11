export default (() => ({
  show() {
    loader.style.display = 'block'
    document.body.style.overflow = 'hidden'
  },
  hide() {
    loader.style.display = 'none'
    document.body.style.overflow = 'auto'
  },
}))()
