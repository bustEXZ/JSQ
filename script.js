import {
    generatePage
} from './js/fun/generate-page.js'
import {
    findLastQuestion
} from './js/fun/find-last-question.js'
import {
    initHandlers
} from './js/fun/init-handlers.js'

;(async () => {
    window.header = document.querySelector('header')
    window.main = document.querySelector('main')

    const name = localStorage.getItem('pageName') || 'theory'
    header.querySelector(`button[data-name="${name}"]`).classList.add('active')

    await generatePage(name)
    findLastQuestion()
    initHandlers()
})()

navigator.serviceWorker
    .register('./sw.js')
    .catch(e => console.error(e))