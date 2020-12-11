import { createQuestions } from '../questions/create-questions.js'

import { hljs } from './hl.js'
import { initHandlers } from './init-handlers.js'
import { animateDetails } from './animate-details.js'
import loader from './loader.js'

export const generatePage = async (pageName) => {
  loader.show()

  if (pageName === 'questions') {
    createQuestions()
  } else {
    const pageModule = await import(`../${pageName}.js`)
    main.innerHTML = pageModule.default
  }

  hljs(globalThis)

  initHandlers()

  animateDetails()

  localStorage.setItem('pageName', pageName)

  const timer = setTimeout(() => {
    loader.hide()
    clearTimeout(timer)
  }, 1500)
}
