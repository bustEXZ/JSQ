import {
    generatePage
} from './js/generate-page.js'
import {
    findLastQuestion
} from './js/find-last-question.js'
import {
    createObserver
} from './js/create-observer.js'
import {
    initHandlers
} from './js/init-handlers.js'

;(async () => {
    window.header = document.querySelector('header')
    window.main = document.querySelector('main')
    const name = localStorage.getItem('pageName') || 'theory'
    header.querySelector(`button[data-name="${name}"]`).classList.add('active')

    await generatePage(name)
    findLastQuestion()
    createObserver()
    initHandlers()
})()

navigator.serviceWorker
    .register('./sw.js')
    .catch(e => console.error(e))