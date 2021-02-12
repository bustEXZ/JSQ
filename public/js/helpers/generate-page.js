import { createQuestions } from '../questions/create-questions.js'
import { createGame } from '../questions/create-game.js'

import { hljs } from './hl.js'
import { initHandlers } from './init-handlers.js'
import { animateDetails } from './animate-details.js'
import loader from './loader.js'

export const generatePage = async (pageName) => {
  loader.show()

  if (pageName === 'questions') {
    if (localStorage.getItem('questions') !== null) {
      main.innerHTML = JSON.parse(localStorage.getItem('questions'))
    } else {
      const questions = createQuestions()
      main.innerHTML = questions
      localStorage.setItem('questions', JSON.stringify(questions))
    }
    game_btn.onclick = () => createGame()
  } else {
    const pageModule = await import(`../${pageName}.js`)
    main.innerHTML = pageModule.default
  }

  // hljs(globalThis)

  initHandlers()

  animateDetails()

  localStorage.setItem('pageName', pageName)

  const timer = setTimeout(() => {
    loader.hide()
    clearTimeout(timer)
  }, 1500)
}
