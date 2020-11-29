import { createQuestions } from '../questions/create-questions.js'
import { createTasks } from '../tasks/create-tasks.js'
import { createLinks } from '../links/create-links.js'
import { hljs } from '../hl.js'
import { createObserver } from './create-observer.js'
import { initHandlers } from './init-handlers.js'
import { animateDetails } from './animate-details.js'
import loader from '../loader.js'

export const generatePage = (pageName) => {
  loader.show()

  switch (pageName) {
    case 'questions':
      createQuestions()
      break
    case 'tasks':
      createTasks()
      break
    case 'links':
      createLinks()
      break
  }

  hljs(globalThis)

  createObserver()

  initHandlers()

  animateDetails()

  localStorage.setItem('pageName', pageName)

  const timer = setTimeout(() => {
    loader.hide()
    clearTimeout(timer)
  }, 1500)
}
