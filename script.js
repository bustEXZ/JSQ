import { generatePage } from './public/js/helpers/generate-page.js'
import { findLastSection } from './public/js/helpers/find-last-section.js'
import { toggleClass } from './public/js/helpers/toggle-class.js'
;(() => {
  const pageName = localStorage.getItem('pageName') || 'questions'

  generatePage(pageName)

  findLastSection()

  toggleClass(nav.querySelector(`[data-link=${pageName}]`))
})()

navigator.serviceWorker.register('./sw.js').catch((er) => console.error(er))
