import { createPatterns } from '../patterns/create-patterns.js'
import { createQuestions } from '../questions/create-questions.js'
import { createTasks } from '../tasks/create-tasks.js'
import { createSnippets } from '../snippets/create-snippets.js'
import { hljs } from '../hl.js'
import { createObserver } from './create-observer.js'
import { initHandlers } from './init-handlers.js'
import { animateDetails } from './animate-details.js'
import loader from '../loader.js'

export const generatePage = (pageName) => {
  loader.show()

  switch (pageName) {
    case 'patterns':
      createPatterns()
      break
    case 'questions':
      createQuestions()
      break
    case 'tasks':
      createTasks()
      break
    case 'snippets':
      createSnippets()
      break
  }

  hljs(globalThis)

  initHandlers()

  createObserver()

  animateDetails()

  localStorage.setItem('pageName', pageName)

  const timer = setTimeout(() => {
    loader.hide()
    clearTimeout(timer)
  }, 2000)
}
