import { generatePage } from './generate-page.js'
import { toggleClass } from './toggle-class.js'

export const initHandlers = () => {
  nav.addEventListener('click', (ev) => {
    ev.preventDefault()

    if (ev.target.tagName !== 'A') return

    const { link } = ev.target.dataset

    generatePage(link)

    toggleClass(ev.target)
  })
}
