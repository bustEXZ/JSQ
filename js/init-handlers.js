import {
    generatePage
} from './generate-page.js'
import {
    toggleClass
} from './toggle-class.js'
import {
    createGame
} from './create-game.js'

export const initHandlers = () => {
    header.addEventListener('click', ev => {
        if (ev.target.tagName === 'BUTTON') {
            if (ev.target.classList.contains('active')) {
                return
            }

            const name = ev.target.dataset.name

            if (name === 'game') {
                createGame()
                return
            }

            generatePage(name)

            localStorage.setItem('pageName', name)

            toggleClass(name)
        }
    })
}