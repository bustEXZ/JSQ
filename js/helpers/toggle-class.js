export const toggleClass = (target) => {
  if (nav.querySelector('.active') !== null) {
    nav.querySelector('.active').classList.remove('active')
  }
  target.classList.add('active')
}
