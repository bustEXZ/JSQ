import { createQuestions } from '../questions/create-questions.js'
import { createGame } from '../questions/create-game.js'

import { hljs } from './hl.js'
import { animateDetails } from './animate-details.js'
import loader from './loader.js'

export const generatePage = () => {
  loader.show()

  const questions = createQuestions()
  main.innerHTML = questions

  game_btn.onclick = () => createGame()

  hljs(globalThis)

  animateDetails()

  const timer = setTimeout(() => {
    loader.hide()
    clearTimeout(timer)
  }, 1500)
}
